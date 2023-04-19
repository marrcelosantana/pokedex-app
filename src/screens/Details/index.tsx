import { useCallback, useContext, useState } from "react";
import { Pressable, TouchableOpacity } from "react-native";
import { useToast } from "native-base";
import { ArrowLeft, Star } from "phosphor-react-native";

import { AppNavigatorRoutesProps } from "@routes/app.routes";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import { PokemonDTO } from "@models/PokemonDTO";
import { api } from "@services/api";
import { getBackgroundColor } from "@utils/getBackgroundColor";
import { PokeContext } from "@contexts/PokeContext";

import { Loading } from "@components/Loading";
import { About } from "@components/About";
import { Stats } from "@components/Stats";
import { Forms } from "@components/Forms";
import { Shiny } from "@components/Shiny";

import {
  Actions,
  Avatar,
  AvatarContainer,
  Container,
  Content,
  Header,
  InfoContainer,
  Infos,
  Name,
  TabTitle,
} from "./styles";

type RouteParams = {
  url: string;
};

export function Details() {
  const [pokemon, setPokemon] = useState<PokemonDTO>();

  const { favorites, addToFavorites } = useContext(PokeContext);

  const tabs = ["About", "Stats", "Forms", "Shiny"];
  const [tabSelected, setTabSelected] = useState<String>("About");

  const route = useRoute();
  const { url } = route.params as RouteParams;
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const toast = useToast();

  async function loadPokemonData() {
    try {
      const response = await api.get(`${url}`);
      setPokemon(response.data);
    } catch (error) {
      toast.show({
        title: "Pokemon not found!",
        bgColor: "red.400",
        placement: "top",
      });
      navigation.goBack();
    }
  }

  function handleFavorite(url: string) {
    try {
      addToFavorites(url);
    } catch (error) {
      console.log(error);
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

  useFocusEffect(
    useCallback(() => {
      loadPokemonData();
    }, [])
  );

  return (
    <>
      {pokemon ? (
        <Container
          style={{
            backgroundColor: getBackgroundColor(pokemon?.types[0].type.name)[0],
          }}
        >
          <Actions>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <ArrowLeft color="white" weight="bold" size={26} />
            </TouchableOpacity>

            <Name>{pokemon?.name}</Name>

            <Pressable
              onPress={() => {
                handleFavorite(url);
              }}
            >
              <Star
                size={26}
                color={checkIsFavorite(url) ? "yellow" : "white"}
                weight={checkIsFavorite(url) ? "fill" : "bold"}
              />
            </Pressable>
          </Actions>

          <Content>
            <AvatarContainer>
              <Avatar
                source={{
                  uri: pokemon?.sprites.other["official-artwork"].front_default,
                }}
              />
            </AvatarContainer>

            <InfoContainer>
              <Header>
                {tabs.map((tab) => (
                  <TouchableOpacity
                    key={tab}
                    onPress={() => setTabSelected(tab)}
                  >
                    <TabTitle
                      style={
                        tab === tabSelected && {
                          fontWeight: "bold",
                          color: getBackgroundColor(
                            pokemon.types[0].type.name
                          )[0],
                        }
                      }
                    >
                      {tab}
                    </TabTitle>
                  </TouchableOpacity>
                ))}
              </Header>

              <Infos>
                {tabSelected === "About" && <About pokemon={pokemon} />}
                {tabSelected === "Stats" && <Stats pokemon={pokemon} />}
                {tabSelected === "Forms" && <Forms pokemon={pokemon} />}
                {tabSelected === "Shiny" && <Shiny pokemon={pokemon} />}
              </Infos>
            </InfoContainer>
          </Content>
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
}
