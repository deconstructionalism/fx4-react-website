"use client";

import styled from "styled-components";
import { generateMediaQuery } from "@/app/_lib/themeHelpers";

// STYLES

const StyledHTML = styled.html(
  ({ theme }) => `
  font-size: ${theme.spacingBasis};

  /* Safari Scrollbar Settings */
  ::-webkit-scrollbar {
    background-color: ${theme.colors.white};
    display: auto;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.black};
    border-radius: ${theme.spacings.m};
    border: ${theme.spacings.xxs} solid ${theme.colors.white};
  }

  /* Firefox and Chrome Scrollbar Settings */
  scrollbar-color: ${theme.colors.black} ${theme.colors.white};
  scrollbar-width: thin;

  ${generateMediaQuery("mobile")(`
    font-size: 2vw;

    /* Safari Scrollbar Settings */
    ::-webkit-scrollbar {
      display: none;
    }

    /* Firefox and Chrome Scrollbar Settings */
    scrollbar-width: none;
  `)}
  `,
);

interface HTMLProps {
  children: React.ReactNode;
}

const HTML = ({ children }: HTMLProps) => {
  // JSX

  return (
    <StyledHTML lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/vgo8lwy.css" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      {children}
    </StyledHTML>
  );
};

export default HTML;
