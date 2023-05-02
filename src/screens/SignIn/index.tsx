import AppleLogo from "@assets/apple.svg";
import GoogleLogo from "@assets/google.svg";

import PikachuLogo from "@assets/pikachu.png";

import { SocialButton } from "@components/SocialButton";

import {
  Actions,
  Container,
  Logo,
  LogoContainer,
  Subtitle,
  Title,
} from "./styles";

export function SignIn() {
  return (
    <Container>
      <LogoContainer>
        <Logo source={PikachuLogo} resizeMode="contain" />
        <Title>Pokédex Online</Title>
      </LogoContainer>

      <Actions>
        <SocialButton title="Sign in with Google" svg={GoogleLogo} />
        <SocialButton title="Sign in with Apple" svg={AppleLogo} />
        <Subtitle>Choose a option</Subtitle>
      </Actions>
    </Container>
  );
}
