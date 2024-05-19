"use client";

import theme from "@/app/_config/theme";
import { ThemeProvider } from "styled-components";

// TYPES

interface ThemeProviderProps {
  children: React.ReactNode;
}

const _ThemeProvider = ({ children }: ThemeProviderProps) => {
  // JSX

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default _ThemeProvider;
