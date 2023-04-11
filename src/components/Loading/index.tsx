import { Spinner } from "native-base";
import { Container } from "./styles";

export function Loading() {
  return (
    <Container>
      <Spinner color="blue.500" />
    </Container>
  );
}
