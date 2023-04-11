import { FlatList } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { MagnifyingGlass } from "phosphor-react-native";

import { api } from "@services/api";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { PokeCard } from "@components/PokeCard";
import { Loading } from "@components/Loading";
import { ResultsDTO } from "@models/ResultsDTO";

import {
  Container,
  Form,
  Input,
  LoadingContainer,
  LogoContainer,
  LogoImg,
  Title,
} from "./styles";

export function Home() {
  const [pokemons, setPokemons] = useState<ResultsDTO[]>([]);
  const [pokemonPerPage, setPokemonPerPage] = useState(9);
  const [currentPage] = useState(0);
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

  useEffect(() => {
    loadPokemons();
  }, [pokemonPerPage]);

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
        <MagnifyingGlass style={{ marginLeft: -32 }} color="grey" />
      </Form>

      <FlatList
        data={pokemons}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => <PokeCard url={item.url} />}
        showsVerticalScrollIndicator={false}
        onEndReached={() => {
          setPokemonPerPage(pokemonPerPage + 12);
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
