import { useContext } from "react";
import { PokeContext } from "@contexts/PokeContext";

import { CardsContainer, Container, Title } from "./styles";
import { FlatList } from "react-native";
import { PokeCard } from "@components/PokeCard";

export function Favorites() {
  const { favorites } = useContext(PokeContext);

  return (
    <Container>
      <Title>Favorites</Title>
      <CardsContainer>
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.pokemonUrl}
          renderItem={({ item }) => <PokeCard url={item.pokemonUrl} />}
        />
      </CardsContainer>
    </Container>
  );
}
