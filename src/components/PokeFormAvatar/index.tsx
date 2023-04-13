import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

import { api } from "@services/api";
import { PokemonDTO } from "@models/PokemonDTO";
import { Loading } from "@components/Loading";
import { getBackgroundColor } from "@utils/getBackgroundColor";

import { Avatar, Container } from "./styles";

type Props = {
  variety: {
    name: string;
    url: string;
  };
};

export function PokeFormAvatar({ variety }: Props) {
  const [data, setData] = useState<PokemonDTO>();

  async function loadData() {
    try {
      const response = await api.get(`${variety.url}`);
      setData(response.data);
    } catch (error) {
      console.log(error);
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
        <Container
          style={{
            borderColor: getBackgroundColor(data.types[0].type.name)[0],
          }}
        >
          <Avatar
            source={{
              uri: data?.sprites.other["official-artwork"].front_default,
            }}
          />
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
}
