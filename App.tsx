import { ThemeContextProvider } from "@contexts/ThemeContext";
import { Application } from "@screens/Application";

export default function App() {
  return (
    <ThemeContextProvider>
      <Application />
    </ThemeContextProvider>
  );
}
