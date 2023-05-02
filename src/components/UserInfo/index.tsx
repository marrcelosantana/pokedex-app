import { Power } from "phosphor-react-native";
import { useToast } from "native-base";
import { useTheme } from "styled-components";

import { useAuth } from "@hooks/useAuth";

import {
  Container,
  InfoContainer,
  Info,
  Subtitle,
  UserImage,
  UserName,
  LogoutButton,
} from "./styles";

export function UserInfo() {
  const { user, signOut } = useAuth();

  const toast = useToast();
  const theme = useTheme();

  async function handleSignOut() {
    try {
      await signOut();
    } catch (error) {
      toast.show({
        title: "Logout error!",
        placement: "top",
        bgColor: "red.300",
        color: "gray.100",
      });
    }
  }

  return (
    <Container>
      <InfoContainer>
        <UserImage source={{ uri: user.picture }} />

        <Info>
          <Subtitle>Olá,</Subtitle>
          <UserName numberOfLines={1}>{user.name}</UserName>
        </Info>
      </InfoContainer>

      <LogoutButton onPress={handleSignOut}>
        <Power size={32} color={theme.COLORS.TITLE} />
      </LogoutButton>
    </Container>
  );
}
