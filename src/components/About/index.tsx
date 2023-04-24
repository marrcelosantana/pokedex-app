import { useCallback, useState } from "react";
import { View } from "react-native";

import { useFocusEffect } from "@react-navigation/native";
import { Center, useToast } from "native-base";

import { SpeciesDTO } from "@models/SpeciesDTO";
import { PokemonDTO } from "@models/PokemonDTO";

import { api } from "@services/api";
import { Loading } from "@components/Loading";
import { getBackgroundColor } from "@utils/getBackgroundColor";

import { Container, Info, Infos, Label, Title, Type, TypeName } from "./styles";

type Props = {
  pokemon: PokemonDTO;
};

export function About({ pokemon }: Props) {
  const [specieData, setSpecieData] = useState<SpeciesDTO>();

  const toast = useToast();

  async function loadSpeciesData() {
    try {
      const response = await api.get(`${pokemon.species.url}`);
      setSpecieData(response.data);
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
      loadSpeciesData();
    }, [])
  );

  return (
    <>
      {specieData ? (
        <Container showsVerticalScrollIndicator={false}>
          {specieData.flavor_text_entries[8].flavor_text ? (
            <Title>{specieData.flavor_text_entries[8].flavor_text}</Title>
          ) : (
            <Title>Not information yet.</Title>
          )}

          <Infos>
            <Label>Weight:</Label>
            <Info> {pokemon.weight} Lbs</Info>
          </Infos>

          <Infos>
            <Label>Height:</Label>
            <Info> {pokemon.height}'00</Info>
          </Infos>

          <Infos>
            <Label>Abilities:</Label>
            <Info> {pokemon.abilities[0].ability.name}</Info>

            {pokemon.abilities.length > 1 && (
              <Info>, {pokemon.abilities[1].ability.name}</Info>
            )}
          </Infos>

          <Infos>
            <Label>Habitat:</Label>
            {specieData?.habitat?.name ? (
              <Info> {specieData.habitat.name}</Info>
            ) : (
              <Info> Unknow</Info>
            )}
          </Infos>

          <View style={{ flexDirection: "row" }}>
            <Type
              style={{
                backgroundColor: getBackgroundColor(
                  pokemon.types[0].type.name
                )[0],
              }}
            >
              <TypeName>{pokemon.types[0].type.name}</TypeName>
            </Type>

            {pokemon.types.length > 1 && (
              <Type
                style={{
                  backgroundColor: getBackgroundColor(
                    pokemon.types[1].type.name
                  )[0],
                  marginLeft: 10,
                }}
              >
                <TypeName>{pokemon.types[1].type.name}</TypeName>
              </Type>
            )}
          </View>
        </Container>
      ) : (
        <Center marginTop={32}>
          <Loading />
        </Center>
      )}
    </>
  );
}
