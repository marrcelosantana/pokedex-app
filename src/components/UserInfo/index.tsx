import { useAuth } from "@hooks/useAuth";
import { useThemeContext } from "@hooks/useThemeContext";

import {
  Container,
  InfoContainer,
  Info,
  Subtitle,
  UserImage,
  UserName,
  Sprite,
  ChangeThemeButton,
} from "./styles";

export function UserInfo() {
  const { user } = useAuth();
  const { isDarkTheme, changeTheme } = useThemeContext();

  console.log(isDarkTheme);

  return (
    <Container>
      <InfoContainer>
        <UserImage source={{ uri: user.picture }} />

        <Info>
          <Subtitle>Hello,</Subtitle>
          <UserName numberOfLines={1}>{user.name}</UserName>
        </Info>
      </InfoContainer>

      <ChangeThemeButton onPress={changeTheme}>
        <Sprite
          source={{
            uri: "https://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif",
          }}
        />
      </ChangeThemeButton>
    </Container>
  );
}
