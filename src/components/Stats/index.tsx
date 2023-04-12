import { Progress } from "native-base";

import { PokemonDTO } from "@models/PokemonDTO";

import { Container, ProgressContainer, Title } from "./styles";

type Props = {
  pokemon: PokemonDTO;
};

export function Stats({ pokemon }: Props) {
  return (
    <Container>
      {pokemon.stats.map((item) => (
        <ProgressContainer key={item.stat.name}>
          <Title>{item.stat.name}</Title>
          <Progress value={item.base_stat} w="64%" />
        </ProgressContainer>
      ))}
    </Container>
  );
}
