import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { api } from "@services/api";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { PokeCard } from "@components/PokeCard";
import { ResultsDTO } from "@models/ResultsDTO";

import { Container } from "./styles";
import { FlatList } from "react-native";

export function Home() {
  const [pokemons, setPokemons] = useState<ResultsDTO[]>([]);
  const [pokemonPerPage, setPokemonPerPage] = useState(9);
  const [currentPage] = useState(0);

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  async function loadPokemons() {
    try {
      const response = await api.get(
        `/pokemon?limit=${pokemonPerPage}&offset=${currentPage}`
      );
      setPokemons(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadPokemons();
  }, []);

  return (
    <Container>
      <FlatList
        data={pokemons}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => <PokeCard url={item.url} />}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
