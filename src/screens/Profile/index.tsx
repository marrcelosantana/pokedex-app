import { useTheme } from "styled-components";
import { useToast } from "native-base";

import { Header } from "@components/Header";
import { useAuth } from "@hooks/useAuth";

import { SignOut } from "phosphor-react-native";

import {
  Container,
  Content,
  ImageContainer,
  UserImage,
  InfoContainer,
  SignOutButton,
  TextButton,
  Label,
  Text,
} from "./styles";

export function Profile() {
  const { user, signOut } = useAuth();

  const theme = useTheme();
  const toast = useToast();

  async function handleSignOut() {
    try {
      await signOut();
    } catch (error) {
      toast.show({
        title: "Sign Out error!",
        bgColor: "red.400",
        color: "gray.100",
        placement: "top",
      });
    }
  }

  return (
    <Container>
      <Header title="Profile" />

      <Content>
        <ImageContainer>
          <UserImage source={{ uri: user.picture }} resizeMode="cover" />
        </ImageContainer>

        <InfoContainer style={{ marginTop: 40 }}>
          <Label>Name:</Label>
          <Text numberOfLines={1}>{user.name}</Text>
        </InfoContainer>

        <InfoContainer>
          <Label>Email:</Label>
          <Text numberOfLines={1}>{user.email}</Text>
        </InfoContainer>

        <SignOutButton onPress={handleSignOut}>
          <TextButton>Sign Out</TextButton>
          <SignOut size={20} color={theme.COLORS.TEXT} />
        </SignOutButton>
      </Content>
    </Container>
  );
}
