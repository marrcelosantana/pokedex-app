import { Container, LogoImg, Title } from "./styles";

interface Props {
  title: string;
  url?: string;
}

export function Header({ title, url }: Props) {
  return (
    <Container>
      {url && (
        <LogoImg
          source={{
            uri: url,
          }}
        />
      )}

      <Title>{title}</Title>
    </Container>
  );
}
