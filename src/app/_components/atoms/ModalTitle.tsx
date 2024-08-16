import styled, { css } from "styled-components";

// STYLES

const ModalTitle = styled.h1(
  ({ theme }) => css`
    margin-top: ${theme.spacings.m};
    margin-bottom: ${theme.spacings.xxs};
    padding: 0 ${theme.spacings.xxl};

    font-family: ${theme.fonts.heading};
    font-size: ${theme.spacings.xl};
    font-weight: bold;
    text-transform: uppercase;
  `,
);

export default ModalTitle;
