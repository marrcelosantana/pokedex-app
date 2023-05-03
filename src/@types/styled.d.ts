import "styled-components";

import { darkTheme } from ".@themes/dark-theme";
import { defaultTheme } from "@themes/default-theme";

declare module "styled-components" {
  type ThemeType = typeof defaultTheme;

  export interface DefaultTheme extends ThemeType {}
}
