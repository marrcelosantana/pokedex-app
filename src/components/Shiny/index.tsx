import { PokemonDTO } from "@models/PokemonDTO";
import { Avatar, Container, Title } from "./styles";
import { getBackgroundColor } from "@utils/getBackgroundColor";

type Props = {
  pokemon: PokemonDTO;
};

export function Shiny({ pokemon }: Props) {
  return (
    <Container>
      <Avatar
        source={{ uri: pokemon.sprites.other["official-artwork"].front_shiny }}
      />
      <Title>Shiny {pokemon.name}</Title>
    </Container>
  );
}
