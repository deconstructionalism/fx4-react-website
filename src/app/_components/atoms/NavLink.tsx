"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";
import styled, { useTheme } from "styled-components";
import sleep from "@/app/_lib/sleep";
import { generateMediaQuery, timingToMs } from "@/app/_lib/themeHelpers";

// CONSTANTS

const HOVER_SCALING = 1.2;

// TYPES

export interface NavLinkProps {
  externalLink?: boolean;
  href: string;
  icon: IconDefinition;
  isActive: boolean;
  setNavExpanded: (next: boolean) => void;
  title: string;
}

// STYLES

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  position: relative;
`;

const StyledLinkText = styled.span<{ $isHovering: boolean }>(
  ({ $isHovering, theme }) => `
  color: ${$isHovering ? theme.colors.white : theme.colors.gray};
  text-transform: uppercase;
  font-size: ${theme.spacings.l};
  padding-left: 2rem;
  transform: scale(${$isHovering ? HOVER_SCALING : 1});
  transform-origin: left;
  transition: transform ${theme.timings.extraFast} ease;

  ${generateMediaQuery("mobile")(`
    display: none;
  `)}
`,
);

const StyledIconContainer = styled.div<{ $isHovering: boolean }>(
  ({ theme, $isHovering }) => `
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 ${theme.spacings.xs};
  padding: ${theme.spacings.xxxl} 0;
  width: ${theme.spacings.xxxl};
  transform: scale(${$isHovering ? HOVER_SCALING : 1});
  transition: transform ${theme.timings.extraFast} ease;

  ${generateMediaQuery("mobile")(`
    padding: 0;
  `)}
`,
);

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)(
  ({ theme }) => `
  height: ${theme.spacings.xxxl};
`,
);

const NavLink = ({
  externalLink = false,
  href,
  icon,
  isActive,
  setNavExpanded,
  title,
}: NavLinkProps) => {
  // STATE

  const [isHovering, setIsHovering] = useState<boolean>(false);
  const theme = useTheme();

  // EVENT HANDLERS

  // When the mouse hovers over the link, expand the nav and set the hover state
  const handleMouseEnter = (): void => {
    setIsHovering(true);
    setNavExpanded(true);
  };

  // When the mouse leaves the link, collapse the nav and unset the hover state
  const handleMouseLeave = (): void => {
    setIsHovering(false);
    setNavExpanded(false);
  };

  // When the link is clicked, collapse the nav after a brief delay
  const handleClick = async (): Promise<void> => {
    await sleep(timingToMs(theme.timings.extraFast));
    setNavExpanded(false);
    setIsHovering(false);
  };

  // LOGIC

  const color = isActive || isHovering ? theme.colors.white : theme.colors.gray;
  const target = externalLink ? "_blank" : "_self";
  const rel = externalLink ? "noopener noreferrer" : undefined;

  // JSX

  return (
    <StyledLink
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      rel={rel}
      target={target}
      tabIndex={0}
    >
      <StyledIconContainer $isHovering={isHovering}>
        <StyledFontAwesomeIcon
          color={color}
          icon={icon}
          title={title}
          titleId={title}
        />
      </StyledIconContainer>
      <StyledLinkText $isHovering={isHovering}>{title}</StyledLinkText>
    </StyledLink>
  );
};

export default NavLink;
