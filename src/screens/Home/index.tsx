import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { useToast } from "native-base";

import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { api } from "@services/api";

import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { PokeCard } from "@components/PokeCard";
import { Loading } from "@components/Loading";
import { Input } from "@components/Input";
import { Header } from "@components/Header";

import { ResultsDTO } from "@models/ResultsDTO";
import { MagnifyingGlass } from "phosphor-react-native";

import { Container, Form, LoadingContainer, SearchBtn } from "./styles";

type FormDataProps = {
  query: string;
};

const formSchema = yup.object({
  query: yup.string().trim().required("Enter the pokemon's name"),
});

export function Home() {
  const [pokemons, setPokemons] = useState<ResultsDTO[]>([]);
  const [pokemonPerPage, setPokemonPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const { control, handleSubmit, reset } = useForm<FormDataProps>({
    resolver: yupResolver(formSchema),
  });

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

  function handleSearch({ query }: FormDataProps) {
    try {
      const pokemonName = query.toLowerCase();
      handleOpenDetails(pokemonName);
      reset();
    } catch (error) {
      toast.show({
        title: "Pokemon not found!",
      });
      reset();
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
        <Controller
          control={control}
          name="query"
          render={({ field: { value, onChange } }) => (
            <Input
              placeholder="Search pokemon by name"
              mb={2}
              value={value}
              onChangeText={onChange}
            />
          )}
        />

        <SearchBtn onPress={handleSubmit(handleSearch)}>
          <MagnifyingGlass size={20} color="white" weight="bold" />
        </SearchBtn>
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
