import { Container, LogoImg, Title } from "./styles";

export function Header() {
  return (
    <Container>
      <LogoImg
        source={{
          uri: "https://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif",
        }}
      />
      <Title>PokéDex</Title>
    </Container>
  );
}
