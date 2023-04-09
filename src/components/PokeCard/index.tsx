import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

import { PokemonDTO } from "@models/PokemonDTO";
import { api } from "@services/api";

import {
  Avatar,
  Container,
  Info,
  InfoContainer,
  PokeId,
  PokeName,
  Type,
  TypeName,
  TypesContainer,
} from "./styles";

interface Props {
  url: string;
}

export function PokeCard({ url }: Props) {
  const [pokemon, setPokemon] = useState<PokemonDTO>();

  async function loadPokemonData() {
    try {
      const response = await api.get(url);
      setPokemon(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      loadPokemonData();
    }, [])
  );

  return (
    <Container>
      <InfoContainer>
        <Info>
          <PokeId>#{pokemon?.id}</PokeId>
          <PokeName>{pokemon?.name}</PokeName>
        </Info>

        <TypesContainer>
          {pokemon?.types.map((type) => (
            <Type key={type.type.url}>
              <TypeName>{type.type.name}</TypeName>
            </Type>
          ))}
        </TypesContainer>
      </InfoContainer>

      <Avatar
        source={{
          uri: pokemon?.sprites.other["official-artwork"].front_default,
        }}
      />
    </Container>
  );
}
