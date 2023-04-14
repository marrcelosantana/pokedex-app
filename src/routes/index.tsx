import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { useTheme } from "styled-components/native";
import { PokeProvider } from "@contexts/PokeContext";

export function Routes() {
  const theme = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.COLORS.BACKGROUND }}>
      <NavigationContainer>
        <PokeProvider>
          <AppRoutes />
        </PokeProvider>
      </NavigationContainer>
    </View>
  );
}
