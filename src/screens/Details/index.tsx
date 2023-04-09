import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { Container, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";

export function Details() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  return (
    <Container>
      <Title>Details Page</Title>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("tabs");
        }}
      >
        <Text>Go to back</Text>
      </TouchableOpacity>
    </Container>
  );
}
