import { useCallback } from "react";
import { FlatList } from "react-native";
import { Center } from "native-base";
import { useTheme } from "styled-components";

import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { useFavorites } from "@hooks/useFavorites";
import { useAuth } from "@hooks/useAuth";

import { PokeCard } from "@components/PokeCard";
import { Loading } from "@components/Loading";
import { Header } from "@components/Header";

import { Star } from "phosphor-react-native";

import {
  CardsContainer,
  Container,
  EmptyList,
  EmptyText,
  Highlight,
  Text,
} from "./styles";

export function Favorites() {
  const { user } = useAuth();
  const { favorites, loadFavorites } = useFavorites();

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const theme = useTheme();

  function handleOpenDetails(url: string) {
    navigation.navigate("details", { url });
  }

  useFocusEffect(
    useCallback(() => {
      loadFavorites(user.id);
    }, [])
  );

  return (
    <>
      {favorites ? (
        <Container>
          <Header
            title="Favorites"
            url="https://img.pokemondb.net/sprites/black-white/anim/normal/togepi.gif"
          />

          <Highlight>
            <Text>Favorites:</Text>
            <Text>{favorites.length}</Text>
          </Highlight>

          <CardsContainer>
            <FlatList
              data={favorites}
              keyExtractor={(item) => item}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 24 }}
              renderItem={({ item }) => (
                <PokeCard
                  url={item}
                  onPress={() => {
                    handleOpenDetails(item);
                  }}
                />
              )}
              ListEmptyComponent={() => (
                <EmptyList>
                  <Star size={42} color={theme.COLORS.TEXT_BODY} />
                  <EmptyText>No favorites yet</EmptyText>
                </EmptyList>
              )}
            />
          </CardsContainer>
        </Container>
      ) : (
        <Center marginTop={400}>
          <Loading />
        </Center>
      )}
    </>
  );
}
