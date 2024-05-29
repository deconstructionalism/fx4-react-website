// STYLES
import styled, { css } from "styled-components";

const Divider = styled.hr(
  ({ theme }) => css`
    width: 100%;
    margin: ${theme.spacings.m} auto;
    border: 0;
    border-top: ${theme.spacings.xxxs} solid ${theme.colors.black};
  `,
);

export default Divider;
