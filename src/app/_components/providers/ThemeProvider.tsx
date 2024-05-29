"use client";

import { ThemeProvider } from "styled-components";

import theme from "config/theme";

// TYPES

interface ThemeProviderProps {
  children: React.ReactNode;
}

const _ThemeProvider = ({ children }: ThemeProviderProps) => {
  // JSX

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default _ThemeProvider;
