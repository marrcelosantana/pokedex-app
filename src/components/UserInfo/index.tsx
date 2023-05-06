import { useAuth } from "@hooks/useAuth";
import { useThemeContext } from "@hooks/useThemeContext";

import { MoonStars, Sun } from "phosphor-react-native";

import {
  Container,
  InfoContainer,
  Info,
  Subtitle,
  UserImage,
  UserName,
  ChangeThemeButton,
} from "./styles";

export function UserInfo() {
  const { user } = useAuth();
  const { isDarkTheme, changeTheme } = useThemeContext();

  function handleChangeTheme() {
    changeTheme();
  }

  return (
    <Container>
      <InfoContainer>
        <UserImage source={{ uri: user.picture }} />

        <Info>
          <Subtitle>Hello,</Subtitle>
          <UserName numberOfLines={1}>{user.name}</UserName>
        </Info>
      </InfoContainer>

      <ChangeThemeButton onPress={handleChangeTheme}>
        {isDarkTheme ? (
          <MoonStars size={32} color="white" />
        ) : (
          <Sun size={32} color="black" />
        )}
      </ChangeThemeButton>
    </Container>
  );
}
