"use client";

import styled, { css } from "styled-components";

// STYLES

const P = styled.p(
  ({ theme }) => css`
    font-family: ${theme.fonts.body};
    font-size: ${theme.spacings.l};
    text-align: justify;
  `,
);

export default P;
