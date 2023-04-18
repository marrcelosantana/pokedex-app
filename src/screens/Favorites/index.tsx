import { useCallback, useContext } from "react";
import { FlatList } from "react-native";
import { Center } from "native-base";

import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Trash } from "phosphor-react-native";

import { PokeContext } from "@contexts/PokeContext";
import { clearStorage } from "@storage/storageFavorite";

import { PokeCard } from "@components/PokeCard";
import { Loading } from "@components/Loading";

import {
  CardsContainer,
  Container,
  Header,
  RemoveBtn,
  Text,
  Title,
} from "./styles";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

export function Favorites() {
  const { favorites, loadFavorites } = useContext(PokeContext);

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleOpenDetails(url: string) {
    navigation.navigate("details", { url });
  }

  async function handleClear() {
    try {
      await clearStorage();
      loadFavorites();
    } catch (error) {
      console.log(error);
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
          <Title>Favorites</Title>
          <Header>
            <Text>Favorites: {favorites.length}</Text>
            <RemoveBtn onPress={handleClear}>
              <Trash size={20} color="white" weight="bold" />
            </RemoveBtn>
          </Header>
          <CardsContainer>
            <FlatList
              data={favorites}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <PokeCard
                  url={item}
                  onPress={() => {
                    handleOpenDetails(item);
                  }}
                />
              )}
              showsVerticalScrollIndicator={false}
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
