import { ThemeContextProvider } from "@contexts/ThemeContext";
import { Application } from "@app/index";

export default function App() {
  return (
    <ThemeContextProvider>
      <Application />
    </ThemeContextProvider>
  );
}
