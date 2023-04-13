import { useEffect, useState } from "react";
import { FlatList } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { api } from "@services/api";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { PokeCard } from "@components/PokeCard";
import { Loading } from "@components/Loading";
import { Input } from "@components/Input";

import { ResultsDTO } from "@models/ResultsDTO";

import {
  Container,
  LoadingContainer,
  LogoContainer,
  LogoImg,
  Title,
} from "./styles";

export function Home() {
  const [pokemons, setPokemons] = useState<ResultsDTO[]>([]);
  const [pokemonPerPage, setPokemonPerPage] = useState(4);
  const [currentPage] = useState(151);
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

      <Input placeholder="Search pokemon by name" mb={2} />

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
