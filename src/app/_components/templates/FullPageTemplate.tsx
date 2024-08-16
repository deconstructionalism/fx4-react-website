"use client";

import styled from "styled-components";

// TYPES

interface FullPageTemplateProps {
  children: React.ReactNode;
}

// STYLES

const StyledBody = styled.body(
  ({ theme }) => `
  background-color: ${theme.colors.black};
  overflow: hidden;
`,
);

const FullPageTemplate = ({ children }: FullPageTemplateProps) => {
  // JSX

  return <StyledBody>{children}</StyledBody>;
};

export default FullPageTemplate;
