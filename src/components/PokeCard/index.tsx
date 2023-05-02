import { useState, useEffect } from "react";
import {
  TouchableOpacity,
  View,
  TouchableOpacityProps,
  Pressable,
} from "react-native";

import { Center, useToast } from "native-base";
import { Star } from "phosphor-react-native";

import { PokemonDTO } from "@models/PokemonDTO";
import { api } from "@services/api";

import { getBackgroundColor } from "@utils/getBackgroundColor";
import { getTypeIcon } from "@utils/getTypeIcon";

import { Loading } from "@components/Loading";
import { useFavorites } from "@hooks/useFavorites";

import { Avatar, Container, Title, TypeImage, TypesContainer } from "./styles";

type Props = TouchableOpacityProps & {
  url: string;
};

export function PokeCard({ url, ...rest }: Props) {
  const { favorites, addToFavorites, loadFavorites } = useFavorites();

  const [pokemon, setPokemon] = useState<PokemonDTO>();

  const isFavorite = checkIsFavorite();
  const toast = useToast();

  async function loadPokemonData() {
    try {
      const response = await api.get(url);
      setPokemon(response.data);

      await loadFavorites();
      checkIsFavorite();
    } catch (error) {
      toast.show({
        title: "Error loading data!",
        placement: "top",
        bgColor: "red.300",
        color: "gray.100",
      });
    }
  }

  async function handleFavorite(url: string) {
    try {
      await addToFavorites(url);
    } catch (error) {
      toast.show({
        title: "Error! Try again!",
        placement: "top",
        bgColor: "red.300",
        color: "gray.100",
      });
    }
  }

  function checkIsFavorite() {
    let isFavorite = false;
    favorites.map((item) => {
      if (item === url) {
        isFavorite = true;
      }
    });
    return isFavorite;
  }

  useEffect(() => {
    loadPokemonData();
  }, []);

  return (
    <TouchableOpacity {...rest}>
      {pokemon && (
        <Container
          style={{
            backgroundColor: getBackgroundColor(pokemon.types[0].type.name)[0],
          }}
        >
          <View>
            <View>
              {pokemon.id && pokemon.id < 10 && <Title>#00{pokemon.id}</Title>}
              {pokemon.id && pokemon.id >= 10 && pokemon.id < 100 && (
                <Title>#0{pokemon.id}</Title>
              )}
              {pokemon.id && pokemon.id >= 100 && <Title>#{pokemon.id}</Title>}
              <Title style={{ marginTop: 8 }}>{pokemon.name}</Title>
            </View>

            <TypesContainer>
              {pokemon.types.map((type) => (
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

            <Avatar
              source={{
                uri: pokemon.sprites.other["official-artwork"].front_default,
              }}
            />
          </View>
        </Container>
      )}
    </TouchableOpacity>
  );
}
