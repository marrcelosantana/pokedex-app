import { Container, LogoImg, Title } from "./styles";

type Props = {
  title: string;
  url: string;
};

export function Header({ title, url }: Props) {
  return (
    <Container>
      <LogoImg
        source={{
          uri: url,
        }}
      />
      <Title>{title}</Title>
    </Container>
  );
}
