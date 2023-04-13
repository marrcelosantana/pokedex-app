import { useEffect, useState } from "react";
import { FlatList } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { api } from "@services/api";

import { PokeCard } from "@components/PokeCard";
import { Loading } from "@components/Loading";
import { Input } from "@components/Input";
import { Menu } from "@components/Select";
import { Header } from "@components/Header";

import { ResultsDTO } from "@models/ResultsDTO";

import { Container, Form, LoadingContainer } from "./styles";

export function Home() {
  const [pokemons, setPokemons] = useState<ResultsDTO[]>([]);
  const [pokemonPerPage, setPokemonPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  async function loadPokemons() {
    try {
      setIsLoading(true);
      const response = await api.get(
        `/pokemon?limit=${pokemonPerPage}&offset=${currentPage}`
      );
      setPokemons(response.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleOpenDetails(name: string) {
    navigation.navigate("details", { name });
  }

  useEffect(() => {
    loadPokemons();
  }, [pokemonPerPage, currentPage]);

  return (
    <Container>
      <Header />

      <Form>
        <Input placeholder="Search pokemon by name" mb={2} />
        <Menu />
      </Form>

      <FlatList
        data={pokemons}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PokeCard
            url={item.url}
            onPress={() => handleOpenDetails(item.name)}
          />
        )}
        showsVerticalScrollIndicator={false}
        onEndReached={() => {
          setPokemonPerPage(pokemonPerPage + 4);
        }}
        onEndReachedThreshold={0.5}
      />

      {isLoading && (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      )}
    </Container>
  );
}
