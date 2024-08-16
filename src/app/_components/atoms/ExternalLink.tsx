import styled, { css } from "styled-components";

// STYLES

const StyledExternalLink = styled.a(
  ({ theme }) => css`
    color: ${theme.colors.black};
    transition: color ${theme._timings.Link.transitionSpeed} ease;

    &:hover {
      color: ${theme._colors.Link.hoverColor};
    }
  `,
);

interface ExternalLinkProps {
  children: React.ReactNode;
  href: string;
}

const ExternalLink = ({ children, href }: ExternalLinkProps) => {
  // JSX
  return (
    <StyledExternalLink href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </StyledExternalLink>
  );
};

export default ExternalLink;
