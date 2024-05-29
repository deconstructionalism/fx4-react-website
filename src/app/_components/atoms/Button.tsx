import styled, { css } from "styled-components";

// STYLES

const Button = styled.button(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: ${theme.spacings.l} ${theme.spacings.l};

    font-size: ${theme.spacings.m};
    color: ${theme.colors.white};

    background-color: ${theme.colors.black};
    border: ${theme.spacings.xxs} solid ${theme.colors.black};
    border-radius: ${theme.spacings.m};

    transition: all ${theme._timings.Button.transitionSpeed} ease;

    &:focus {
      color: ${theme.colors.white};
      border-color: ${theme.colors.black};
    }

    &:hover {
      background-color: ${theme._colors.Button.hoverColor};
      border-color: ${theme.colors.black};
    }
  `,
);

export default Button;
