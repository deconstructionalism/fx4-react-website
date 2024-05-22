"use client";

import { SubNavItemConfig } from "@/app/_config/nav.d";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import Link from "./Link";
import { useRef } from "react";

// CONSTANTS

const HOVER_SCALING = 1.2;

// STYLES

const StyledLink = styled(Link)<{ $isActive: boolean }>(
  ({ theme, $isActive }) => `
  height: ${theme._spacings.SubNavLink.height};
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.black};
  font-size: ${theme.spacings.l};
  position: relative;
  transition: transform ${theme.timings.extraFast} ease, color ${theme._timings.Link.transitionSpeed} ease;
  transform: ${$isActive ? `scale(${HOVER_SCALING})` : "none"};
  pointer-events: ${$isActive ? "none" : "auto"};
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
