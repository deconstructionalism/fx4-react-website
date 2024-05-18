"use client";

import styled from "styled-components";

// TYPES

interface LandingTemplateProps {
  children: React.ReactNode;
}

// STYLES

const StyledBody = styled.body(
  ({ theme }) => `
  background-color: ${theme.colors.black};
`,
);

const LandingTemplate = ({ children }: LandingTemplateProps) => {
  // JSX

  return <StyledBody>{children}</StyledBody>;
};

export default LandingTemplate;
