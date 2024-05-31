"use client";

import styled, { css } from "styled-components";

import { generateMediaQuery } from "lib/themeHelpers";

// STYLES

const StyledHTML = styled.html(
  ({ theme }) => css`
    /* Firefox and Chrome Scrollbar Settings */
    scrollbar-color: ${theme.colors.black} ${theme.colors.white};
    scrollbar-width: thin;

    /** REM basis */
    font-size: ${theme.spacingBasis};

    /* Safari Scrollbar Settings */
    ::-webkit-scrollbar {
      display: auto;
      background-color: ${theme.colors.white};
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.black};
      border: ${theme.spacings.xxs} solid ${theme.colors.white};
      border-radius: ${theme.spacings.m};
    }

    ${generateMediaQuery("mobile")(css`
      /* Firefox and Chrome Scrollbar Settings */
      scrollbar-width: none;
      font-size: 2vw;

      /* Safari Scrollbar Settings */
      ::-webkit-scrollbar {
        display: none;
      }
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
