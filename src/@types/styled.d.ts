import "styled-components";

import { darkTheme } from ".@themes/dark-theme";
import { lightTheme } from "@themes/light-theme";

declare module "styled-components" {
  type ThemeType = typeof lightTheme;

  export interface DefaultTheme extends ThemeType {}
}
