import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import { NativeBaseProvider } from "native-base";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import defaultTheme from "@themes/default-theme";

import { Loading } from "@components/Loading";
import { Routes } from "@routes/index";

import { FavoritesProvider } from "@contexts/FavoritesContext";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider>
      <ThemeProvider theme={defaultTheme}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        <FavoritesProvider>
          {fontsLoaded ? <Routes /> : <Loading />}
        </FavoritesProvider>
      </ThemeProvider>
    </NativeBaseProvider>
  );
}
