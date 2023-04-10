import { Star } from "phosphor-react-native";
import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import { PokemonDTO } from "@models/PokemonDTO";
import { api } from "@services/api";

import { getBackgroundColor } from "@utils/getBackgroundColor";
import { getTypeIcon } from "@utils/getTypeIcon";

import {
  Avatar,
  AvatarContainer,
  Info,
  InfoContainer,
  Title,
  TypeImage,
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
    <LinearGradient
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      colors={[
        getBackgroundColor(pokemon?.types[0].type.name)[0],
        getBackgroundColor(pokemon?.types[0].type.name)[1],
      ]}
      style={{
        width: "100%",
        height: 130,
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 15,
        borderRadius: 10,
        padding: 24,
        flexDirection: "row",
      }}
    >
      <InfoContainer>
        <Info>
          <Title>#{pokemon?.id}</Title>
          <Title style={{ marginTop: 8 }}>{pokemon?.name}</Title>
        </Info>

        <TypesContainer>
          {pokemon &&
            pokemon?.types.map((type) => (
              <TypeImage
                source={{
                  uri: getTypeIcon(type.type.name),
                }}
                key={type.type.name}
              />
            ))}
        </TypesContainer>
      </InfoContainer>

      <AvatarContainer>
        <Star
          size={18}
          color="white"
          weight="bold"
          style={{ marginLeft: 60, marginBottom: 5 }}
        />
        <Avatar
          source={{
            uri: pokemon?.sprites.other["official-artwork"].front_default,
          }}
        />
      </AvatarContainer>
    </LinearGradient>
  );
}
