import { FlatList } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { api } from "@services/api";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { PokeCard } from "@components/PokeCard";
import { ResultsDTO } from "@models/ResultsDTO";

import {
  Container,
  Form,
  Input,
  LogoContainer,
  LogoImg,
  Title,
} from "./styles";

export function Home() {
  const [pokemons, setPokemons] = useState<ResultsDTO[]>([]);
  const [pokemonPerPage, setPokemonPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  async function loadPokemons() {
    setIsLoadingMore(true);
    try {
      const response = await api.get(
        `/pokemon?limit=${pokemonPerPage}&offset=${currentPage}`
      );
      setPokemons(response.data.results);
    } catch (error) {
      console.log(error);
    }
    setIsLoadingMore(false);
  }

  useEffect(() => {
    loadPokemons();
  }, []);

  return (
    <Container>
      <LogoContainer>
        <LogoImg
          source={{
            uri: "https://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif",
          }}
        />
        <Title>PokéDex</Title>
      </LogoContainer>

      <Form>
        <Input placeholder="Search pokemon by name" />
      </Form>

      <FlatList
        data={pokemons}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => <PokeCard url={item.url} />}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
