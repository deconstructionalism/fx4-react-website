import "styled-components";
import { Theme } from "./theme";

// extend the styled-components DefaultTheme with our custom theme
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
