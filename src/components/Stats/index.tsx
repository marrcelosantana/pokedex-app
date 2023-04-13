import { HStack, Progress } from "native-base";

import { PokemonDTO } from "@models/PokemonDTO";
import { getBackgroundColor } from "@utils/getBackgroundColor";

import { Container, ProgressContainer, Title } from "./styles";

type Props = {
  pokemon: PokemonDTO;
};

export function Stats({ pokemon }: Props) {
  return (
    <Container>
      {pokemon.stats.map((item) => (
        <ProgressContainer key={item.stat.name}>
          <HStack alignItems={"center"} justifyContent={"space-between"}>
            <Title>{item.stat.name}</Title>
            <Title>{item.base_stat}</Title>
          </HStack>

          <Progress
            value={item.base_stat}
            w="100%"
            _filledTrack={{
              bg: getBackgroundColor(pokemon.types[0].type.name)[0],
            }}
          />
        </ProgressContainer>
      ))}
    </Container>
  );
}
