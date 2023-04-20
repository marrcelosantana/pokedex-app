import { useCallback, useContext, useState } from "react";
import {
  TouchableOpacity,
  View,
  TouchableOpacityProps,
  Pressable,
} from "react-native";

import { useToast } from "native-base";
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

  const toast = useToast();

  const { favorites, addToFavorites } = useContext(PokeContext);

  async function loadPokemonData() {
    try {
      const response = await api.get(url);
      setPokemon(response.data);
    } catch (error) {
      toast.show({
        title: "Error loading data!",
        placement: "top",
        bgColor: "red.300",
        color: "gray.100",
      });
    }
  }

  function handleFavorite(url: string) {
    try {
      addToFavorites(url);
    } catch (error) {
      toast.show({
        title: "Error! Try again!",
        placement: "top",
        bgColor: "red.300",
        color: "gray.100",
      });
    }
  }

  function checkIsFavorite(url: string) {
    let isFavorite = false;
    favorites.map((item) => {
      if (item === url) {
        isFavorite = true;
      }
    });

    return isFavorite;
  }

  const isFavorite = checkIsFavorite(url);

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
            {pokemon?.id && pokemon?.id < 10 && <Title>#00{pokemon?.id}</Title>}
            {pokemon?.id && pokemon?.id >= 10 && pokemon.id < 100 && (
              <Title>#0{pokemon?.id}</Title>
            )}
            {pokemon?.id && pokemon?.id >= 100 && <Title>#{pokemon?.id}</Title>}
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
