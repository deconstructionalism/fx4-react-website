"use client";

import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled, { css, useTheme } from "styled-components";

import Link from "atoms/Link";

import sleep from "lib/sleep";
import { generateMediaQuery, timingToMs } from "lib/themeHelpers";

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
  position: relative;
  display: flex;
  align-items: center;
`;

const StyledLinkText = styled.span<{ $isHovering: boolean }>(
  ({ $isHovering, theme }) => css`
    transform-origin: left;
    transform: scale(${$isHovering ? HOVER_SCALING : 1});

    padding-left: ${theme.spacings.l};

    font-size: ${theme.spacings.l};
    color: ${$isHovering ? theme.colors.white : theme.colors.gray};
    text-transform: uppercase;

    transition: transform ${theme.timings.extraFast} ease;

    ${generateMediaQuery("mobile")(css`
      display: none;
    `)}
  `,
);

const StyledIconContainer = styled.div<{ $isHovering: boolean }>(
  ({ theme, $isHovering }) => css`
    transform: scale(${$isHovering ? HOVER_SCALING : 1});

    display: flex;
    flex-direction: row;
    justify-content: center;

    width: ${theme.spacings.xxxl};
    margin: 0 ${theme.spacings.xs};
    padding: ${theme.spacings.xxxl} 0;

    transition: transform ${theme.timings.extraFast} ease;

    ${generateMediaQuery("mobile")(css`
      padding: 0;
    `)}
  `,
);

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)(
  ({ theme }) => css`
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
