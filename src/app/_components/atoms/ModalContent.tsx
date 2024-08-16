import styled, { css } from "styled-components";

// STYLES

const ModalContent = styled.div(
  ({ theme }) => css`
    overflow-y: scroll;
    padding: 0 ${theme.spacings.xxl};
  `,
);

export default ModalContent;
