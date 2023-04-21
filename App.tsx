import { StatusBar, LogBox } from "react-native";
import { ThemeProvider } from "styled-components";
import defaultTheme from "@themes/default-theme";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { Loading } from "@components/Loading";
import { Routes } from "@routes/index";
import { NativeBaseProvider } from "native-base";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  LogBox.ignoreLogs([
    "React has detected a change in the order of Hooks called by PokeCard.This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks",
  ]);

  return (
    <NativeBaseProvider>
      <ThemeProvider theme={defaultTheme}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <Routes /> : <Loading />}
      </ThemeProvider>
    </NativeBaseProvider>
  );
}
