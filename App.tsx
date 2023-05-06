import { useState } from "react";
import { StatusBar } from "react-native";

import { ThemeProvider } from "styled-components";
import { NativeBaseProvider } from "native-base";

import { Loading } from "@components/Loading";
import { Routes } from "@routes/index";

import { FavoritesProvider } from "@contexts/FavoritesContext";
import { AuthProvider } from "@contexts/AuthContext";

import { lightTheme } from "@themes/light-theme";
import { darkTheme } from "@themes/dark-theme";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [isDark, setIsDark] = useState(false);

  function changeTheme() {
    setIsDark(!isDark);
  }

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  return (
    <NativeBaseProvider>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <StatusBar
          barStyle={isDark ? "light-content" : "dark-content"}
          backgroundColor="transparent"
          translucent
        />
        <AuthProvider>
          <FavoritesProvider>
            {fontsLoaded ? <Routes /> : <Loading />}
          </FavoritesProvider>
        </AuthProvider>
      </ThemeProvider>
    </NativeBaseProvider>
  );
}
