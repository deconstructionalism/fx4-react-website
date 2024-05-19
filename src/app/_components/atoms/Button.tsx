import styled from "styled-components";

// STYLES

const Button = styled.button(
  ({ theme }) => `
  background-color: ${theme.colors.black};
  color: ${theme.colors.white};
  border: ${theme.spacings.xxs} solid ${theme.colors.black};
  border-radius: ${theme.spacings.m};
  padding: ${theme.spacings.l} ${theme.spacings.l};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${theme.spacings.m};

  transition: all ${theme._timings.Button.transitionSpeed} ease;

  &:focus {
    border-color: ${theme.colors.black};
    color: ${theme.colors.white};
  }
  &:hover {
    border-color: ${theme.colors.black};
    background-color: ${theme._colors.Button.hoverColor};
  }
`,
);

export default Button;
