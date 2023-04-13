import { useCallback, useState } from "react";
import { Pressable, TouchableOpacity } from "react-native";
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

import { Loading } from "@components/Loading";
import { About } from "@components/About";
import { Stats } from "@components/Stats";
import { Forms } from "@components/Forms";
import { Location } from "@components/Location";

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
  name: string;
};

export function Details() {
  const [pokemon, setPokemon] = useState<PokemonDTO>();

  const tabs = ["About", "Stats", "Forms", "Location"];
  const [tabSelected, setTabSelected] = useState<String>("About");

  const route = useRoute();
  const { name } = route.params as RouteParams;
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  async function loadPokemonData() {
    try {
      const response = await api.get(`/pokemon/${name}`);
      setPokemon(response.data);
    } catch (error) {
      console.log(error);
    } finally {
    }
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

            <Pressable>
              <Star size={26} color="white" weight="bold" />
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
                {tabSelected === "Location" && <Location />}
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
