import { useToast } from "native-base";

import AppleLogo from "@assets/apple.svg";
import GoogleLogo from "@assets/google.svg";
import PikachuLogo from "@assets/pikachu.png";

import { SocialButton } from "@components/SocialButton";
import { useAuth } from "@hooks/useAuth";

import {
  Actions,
  Container,
  Logo,
  LogoContainer,
  Subtitle,
  Title,
} from "./styles";

export function SignIn() {
  const { signInWithGoogle, signInWithApple } = useAuth();

  const toast = useToast();

  async function handleSignInWithGoogle() {
    try {
      await signInWithGoogle();
    } catch (error) {
      toast.show({
        title: "Pokemon not found!",
        placement: "top",
        bgColor: "red.300",
        color: "gray.100",
      });
    }
  }

  return (
    <Container>
      <LogoContainer>
        <Logo source={PikachuLogo} resizeMode="contain" />
        <Title>PokéDex</Title>
      </LogoContainer>

      <Actions>
        <SocialButton
          title="Sign in with Google"
          svg={GoogleLogo}
          onPress={handleSignInWithGoogle}
        />
        <SocialButton
          title="Sign in with Apple"
          svg={AppleLogo}
          onPress={signInWithApple}
        />
        <Subtitle>Choose a option</Subtitle>
      </Actions>
    </Container>
  );
}
