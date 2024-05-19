"use client";

import styled from "styled-components";

// STYLES

const P = styled.p(
  ({ theme }) => `
  font-family: ${theme.fonts.body};
  font-size: ${theme.spacings.l};
  text-align: justify;
`,
);

export default P;
