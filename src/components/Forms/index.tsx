import { useCallback, useState } from "react";
import { FlatList } from "react-native";
import { Center } from "native-base";
import { useFocusEffect } from "@react-navigation/native";

import { PokemonDTO } from "@models/PokemonDTO";
import { SpeciesDTO } from "@models/SpeciesDTO";

import { api } from "@services/api";
import { Loading } from "@components/Loading";
import { PokeFormAvatar } from "@components/PokeFormAvatar";

import { Container } from "./styles";

type Props = {
  pokemon: PokemonDTO;
};

export function Forms({ pokemon }: Props) {
  const [specieData, setSpecieData] = useState<SpeciesDTO>();

  async function loadSpeciesData() {
    try {
      const response = await api.get(`${pokemon.species.url}`);
      setSpecieData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      loadSpeciesData();
    }, [])
  );

  return (
    <>
      {specieData ? (
        <Container>
          <FlatList
            data={specieData.varieties}
            keyExtractor={(item) => item.pokemon.name}
            renderItem={({ item }) => <PokeFormAvatar variety={item.pokemon} />}
            horizontal
            contentContainerStyle={
              specieData.varieties.length < 2
                ? { marginLeft: 130 }
                : specieData.varieties.length === 2
                ? { marginLeft: 62 }
                : {}
            }
          />
        </Container>
      ) : (
        <Center marginTop={32}>
          <Loading />
        </Center>
      )}
    </>
  );
}
