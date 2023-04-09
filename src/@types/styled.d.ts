import defaultTheme from "src/themes/default-theme";
import "styled-components";

declare module "styled-components" {
  type ThemeType = typeof defaultTheme;

  export interface DefaultTheme extends ThemeType {}
}
