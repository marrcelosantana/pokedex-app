import { useNavigation } from "@react-navigation/native";
import { Container, Title } from "./styles";
import { Text, TouchableOpacity } from "react-native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

export function Home() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  return (
    <Container>
      <Title>Hello World</Title>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("details");
        }}
      >
        <Text>Go to details</Text>
      </TouchableOpacity>
    </Container>
  );
}
