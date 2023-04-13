import { Center } from "native-base";

import { PokemonDTO } from "@models/PokemonDTO";
import { Loading } from "@components/Loading";

import { Avatar, Container, Title } from "./styles";

type Props = {
  pokemon: PokemonDTO;
};

export function Shiny({ pokemon }: Props) {
  return (
    <>
      {pokemon ? (
        <Container>
          <Avatar
            source={{
              uri: pokemon.sprites.other["official-artwork"].front_shiny,
            }}
          />
          <Title>Shiny {pokemon.name}</Title>
        </Container>
      ) : (
        <Center marginTop={32}>
          <Loading />
        </Center>
      )}
    </>
  );
}
