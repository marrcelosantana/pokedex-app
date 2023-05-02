import { useCallback } from "react";
import { FlatList } from "react-native";
import { Center, useToast } from "native-base";

import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { Trash } from "phosphor-react-native";

import { clearStorage } from "@storage/storageFavorite";
import { useFavorites } from "@hooks/useFavorites";

import { PokeCard } from "@components/PokeCard";
import { Loading } from "@components/Loading";
import { Header } from "@components/Header";

import {
  CardsContainer,
  Container,
  Highlight,
  RemoveBtn,
  Text,
} from "./styles";

export function Favorites() {
  const { favorites, loadFavorites } = useFavorites();

  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const toast = useToast();

  function handleOpenDetails(url: string) {
    navigation.navigate("details", { url });
  }

  async function handleClear() {
    try {
      await clearStorage();
      await loadFavorites();
    } catch (error) {
      toast.show({
        title: "Error! Try again.",
        bgColor: "red.400",
        placement: "top",
      });
    }
  }

  useFocusEffect(
    useCallback(() => {
      loadFavorites();
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
            <Text>Favorites: {favorites.length}</Text>
            <RemoveBtn onPress={handleClear}>
              <Trash size={20} color="white" weight="bold" />
            </RemoveBtn>
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
