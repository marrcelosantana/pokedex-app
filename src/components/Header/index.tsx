import { Pressable } from "react-native";
import { clearStorage } from "@storage/storageFavorite";
import { Container, LogoImg, Title } from "./styles";

export function Header() {
  return (
    <Pressable onPress={clearStorage}>
      <Container>
        <LogoImg
          source={{
            uri: "https://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif",
          }}
        />
        <Title>PokéDex</Title>
      </Container>
    </Pressable>
  );
}
