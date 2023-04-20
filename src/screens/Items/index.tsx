import { useCallback, useState } from "react";
import { FlatList } from "react-native";
import { Center } from "native-base";

import { useFocusEffect } from "@react-navigation/native";

import { ResultsDTO } from "@models/ResultsDTO";
import { api } from "@services/api";

import { ItemCard } from "@components/ItemCard";
import { Header } from "@components/Header";
import { Loading } from "@components/Loading";

import { Container, LoadingContainer } from "./styles";

export function Items() {
  const [items, setItems] = useState<ResultsDTO[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  async function loadItems() {
    try {
      setIsLoading(true);
      const response = await api.get(
        `/item/?offset=${currentPage}&limit=${itemsPerPage}`
      );
      setItems(response.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      loadItems();
    }, [itemsPerPage, currentPage])
  );

  return (
    <>
      {items ? (
        <Container>
          <Header
            title="Items"
            url="https://img.pokemondb.net/sprites/black-white/anim/normal/pichu.gif"
          />

          <FlatList
            data={items}
            keyExtractor={(item) => item.url}
            renderItem={({ item }) => <ItemCard url={item.url} />}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            onEndReached={() => {
              setItemsPerPage(itemsPerPage + 8);
            }}
            onEndReachedThreshold={0.5}
          />

          {isLoading && (
            <LoadingContainer>
              <Loading />
            </LoadingContainer>
          )}
        </Container>
      ) : (
        <Center flex={1}>
          <Loading />
        </Center>
      )}
    </>
  );
}
