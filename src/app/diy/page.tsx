"use client";

import styled, { css } from "styled-components";

import Link from "atoms/Link";
import P from "atoms/P";

// STYLES

const StyledMessage = styled.h1(
  ({ theme }) => css`
    font-family: ${theme.fonts.heading};
    font-size: ${theme.spacings.xl};
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
  `,
);

const DIY = () => {
  // JSX

  return (
    <section>
      <StyledMessage>DIY KIT coming soon</StyledMessage>
      <P>
        In the meanwhile, if you want to start your own chapter of the fest,
        email us at{" "}
        <Link href="mailto:info@fuckthefourth.com">info@fuckthefourth.com</Link>{" "}
        for more info!
      </P>
    </section>
  );
};

export default DIY;
