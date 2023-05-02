import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

import { useAuth } from "@hooks/useAuth";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

export function Routes() {
  const { user } = useAuth();
  const theme = useTheme();

  console.log(user);

  return (
    <View style={{ flex: 1, backgroundColor: theme.COLORS.BACKGROUND }}>
      <NavigationContainer>
        {user.id ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </View>
  );
}
