"use client";

import { usePathname } from "next/navigation";
import { useRef } from "react";
import styled, { css } from "styled-components";

import Link from "atoms/Link";

import { SubNavItemConfig } from "config/nav.d";

// CONSTANTS

const HOVER_SCALING = 1.2;

// STYLES

const StyledLink = styled(Link)<{ $isActive: boolean }>(
  ({ theme, $isActive }) => css`
    pointer-events: ${$isActive ? "none" : "auto"};

    position: relative;
    transform: ${$isActive ? `scale(${HOVER_SCALING})` : "none"};

    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;

    height: ${theme._spacings.SubNavLink.height};

    font-family: ${theme.fonts.heading};
    font-size: ${theme.spacings.l};
    color: ${theme.colors.black};

    transition:
      transform ${theme.timings.extraFast} ease,
      color ${theme._timings.Link.transitionSpeed} ease;
  `,
);

const SubNavLink = ({
  title,
  href,
  externalLink = false,
}: SubNavItemConfig) => {
  // STATE

  const pathName = usePathname();
  const isActive = pathName === href;
  const ref = useRef<HTMLAnchorElement>(null);

  // EVENT HANDLERS

  const handleClick = () => {
    const current = ref.current;
    if (current && !externalLink) {
      scrollTo({ top: 1, behavior: "smooth" });
    }
  };

  // LOGIC

  const target = externalLink ? "_blank" : "_self";
  const rel = externalLink ? "noopener noreferrer" : undefined;

  // JSX

  return (
    <StyledLink
      href={href}
      ref={ref}
      rel={rel}
      target={target}
      $isActive={isActive}
      onClick={handleClick}
      scroll={false}
    >
      {typeof title === "string" ? <span>{title}</span> : title}
    </StyledLink>
  );
};

export default SubNavLink;
