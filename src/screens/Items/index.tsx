import { useCallback, useState } from "react";
import { FlatList } from "react-native";
import { Center, useToast } from "native-base";

import { useFocusEffect } from "@react-navigation/native";

import { ResultsDTO } from "@models/ResultsDTO";
import { api } from "@services/api";

import { ItemCard } from "@components/ItemCard";
import { Header } from "@components/Header";
import { Loading } from "@components/Loading";

import { Container, LoadingContainer } from "./styles";

export function Items() {
  const [items, setItems] = useState<ResultsDTO[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState(27);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  async function loadItems() {
    try {
      setIsLoading(true);
      const response = await api.get(
        `/item/?offset=${currentPage}&limit=${itemsPerPage}`
      );
      setItems(response.data.results);
    } catch (error) {
      toast.show({
        title: "Error load data!",
        bgColor: "red.400",
        placement: "top",
      });
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
          <Header title="Poke Items" />

          <FlatList
            data={items}
            keyExtractor={(item) => item.url}
            renderItem={({ item }) => <ItemCard url={item.url} />}
            showsVerticalScrollIndicator={false}
            numColumns={3}
            onEndReached={() => {
              setItemsPerPage(itemsPerPage + 21);
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
