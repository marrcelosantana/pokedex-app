import AppleLogo from "@assets/apple.svg";
import GoogleLogo from "@assets/google.svg";

import { SocialButton } from "@components/SocialButton";

import { Container, Title } from "./styles";

export function SignIn() {
  return (
    <Container>
      <SocialButton title="Sign in with Google" svg={GoogleLogo} />
      <SocialButton title="Sign in with Apple" svg={AppleLogo} />
    </Container>
  );
}
