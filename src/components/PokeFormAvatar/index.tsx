import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useToast } from "native-base";

import { api } from "@services/api";
import { PokemonDTO } from "@models/PokemonDTO";
import { Loading } from "@components/Loading";
import { getBackgroundColor } from "@utils/getBackgroundColor";

import { Avatar, AvatarContainer, Container, Title } from "./styles";

type Props = {
  variety: {
    name: string;
    url: string;
  };
};

export function PokeFormAvatar({ variety }: Props) {
  const [data, setData] = useState<PokemonDTO>();
  const toast = useToast();

  async function loadData() {
    try {
      const response = await api.get(`${variety.url}`);
      setData(response.data);
    } catch (error) {
      toast.show({
        title: "Error loading data!",
        placement: "top",
        bgColor: "red.300",
        color: "gray.100",
      });
    }
  }

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );

  return (
    <>
      {data ? (
        <Container>
          <AvatarContainer
            style={{
              borderColor: getBackgroundColor(data.types[0].type.name)[0],
            }}
          >
            <Avatar
              source={{
                uri: data.sprites.other["official-artwork"].front_default,
              }}
            />
          </AvatarContainer>
          <Title>{data.name}</Title>
          <Title>N˚{data.id}</Title>
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
}
