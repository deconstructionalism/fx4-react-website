// STYLES

import styled from "styled-components";

const Divider = styled.hr(
  ({ theme }) => `
  border: 0;
  border-top: 1px solid ${theme.colors.black};
  margin: ${theme.spacings.m} auto;
  width: 100%;
`,
);

export default Divider;
