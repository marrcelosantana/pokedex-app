import { useCallback, useContext, useState } from "react";
import {
  TouchableOpacity,
  View,
  TouchableOpacityProps,
  Pressable,
} from "react-native";

import { useFocusEffect } from "@react-navigation/native";

import { Star } from "phosphor-react-native";

import { PokemonDTO } from "@models/PokemonDTO";
import { api } from "@services/api";

import { getBackgroundColor } from "@utils/getBackgroundColor";
import { getTypeIcon } from "@utils/getTypeIcon";

import { PokeContext } from "@contexts/PokeContext";

import { Avatar, Container, Title, TypeImage, TypesContainer } from "./styles";

type Props = TouchableOpacityProps & {
  url: string;
};

export function PokeCard({ url, ...rest }: Props) {
  const [pokemon, setPokemon] = useState<PokemonDTO>();
  const [isFavorite, setIsFavorite] = useState<boolean>();

  const { addToFavorites } = useContext(PokeContext);

  async function loadPokemonData() {
    try {
      const response = await api.get(url);
      setPokemon(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleFavorite(url: string) {
    try {
      addToFavorites(url);
      setIsFavorite(!isFavorite);
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
    <TouchableOpacity {...rest}>
      <Container
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        colors={[
          getBackgroundColor(pokemon?.types[0].type.name)[0],
          getBackgroundColor(pokemon?.types[0].type.name)[1],
        ]}
      >
        <View>
          <View>
            <Title>#{pokemon?.id}</Title>
            <Title style={{ marginTop: 8 }}>{pokemon?.name}</Title>
          </View>

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
        </View>

        <View>
          {pokemon && (
            <Pressable
              onPress={() => {
                handleFavorite(url);
              }}
            >
              <Star
                size={20}
                color={isFavorite ? "yellow" : "white"}
                weight={isFavorite ? "fill" : "bold"}
                style={{ marginLeft: 100, position: "absolute" }}
              />
            </Pressable>
          )}

          <Avatar
            source={{
              uri: pokemon?.sprites.other["official-artwork"].front_default,
            }}
          />
        </View>
      </Container>
    </TouchableOpacity>
  );
}
