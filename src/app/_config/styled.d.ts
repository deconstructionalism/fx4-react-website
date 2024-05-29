import "styled-components";

import { Theme } from "@/app/_config/theme";

// extend the styled-components DefaultTheme with our custom theme
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
