"use client";

import styled from "styled-components";

// TYPES

interface NotFoundTemplateProps {
  children: React.ReactNode;
}

// STYLES

const StyledBody = styled.body(
  ({ theme }) => `
  background-color: ${theme.colors.white};
`,
);

const NotFoundTemplate = ({ children }: NotFoundTemplateProps) => {
  // JSX

  return <StyledBody>{children}</StyledBody>;
};

export default NotFoundTemplate;
