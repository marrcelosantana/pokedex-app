import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Center, useToast } from "native-base";

import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { api } from "@services/api";

import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { PokeCard } from "@components/PokeCard";
import { Loading } from "@components/Loading";
import { Input } from "@components/Input";
import { UserInfo } from "@components/UserInfo";

import { ResultsDTO } from "@models/ResultsDTO";
import { MagnifyingGlass } from "phosphor-react-native";

import {
  CardList,
  Container,
  Form,
  LoadingContainer,
  SearchBtn,
} from "./styles";

type FormDataProps = {
  query: string;
};

const formSchema = yup.object({
  query: yup.string().trim().required("Enter the pokemon's name"),
});

export function Home() {
  const [pokemons, setPokemons] = useState<ResultsDTO[]>([]);
  const [pokemonPerPage, setPokemonPerPage] = useState(9);
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
      toast.show({
        title: "Error loading data!",
        placement: "top",
        bgColor: "red.300",
        color: "gray.100",
      });
    } finally {
      setIsLoading(false);
    }
  }

  function handleSearch({ query }: FormDataProps) {
    try {
      const pokemonName = query.toLowerCase();
      handleOpenDetails(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      reset();
    } catch (error) {
      toast.show({
        title: "Pokemon not found!",
        placement: "top",
        bgColor: "red.300",
        color: "gray.100",
      });
      reset();
    }
  }

  function handleOpenDetails(url: string) {
    navigation.navigate("details", { url });
  }

  useEffect(() => {
    loadPokemons();
  }, [pokemonPerPage, currentPage]);

  return (
    <>
      {pokemons ? (
        <Container>
          <UserInfo />
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
                  autoCapitalize="sentences"
                  autoCorrect={false}
                  autoComplete="off"
                />
              )}
            />

            <SearchBtn onPress={handleSubmit(handleSearch)}>
              <MagnifyingGlass size={20} color="white" weight="bold" />
            </SearchBtn>
          </Form>

          <CardList>
            <FlatList
              data={pokemons}
              keyExtractor={(item) => item.name}
              renderItem={({ item }) => (
                <PokeCard
                  url={item.url}
                  onPress={() => handleOpenDetails(item.url)}
                />
              )}
              showsVerticalScrollIndicator={false}
              onEndReached={() => {
                setPokemonPerPage(pokemonPerPage + 25);
              }}
              onEndReachedThreshold={0.5}
            />
          </CardList>

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
