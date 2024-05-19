"use client";

import { SubNavItemConfig } from "@/app/_config/nav.d";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

// CONSTANTS

const HOVER_SCALING = 1.3;

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
  transition: transform ${theme.timings.extraFast} ease;
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

  // LOGIC

  const target = externalLink ? "_blank" : "_self";
  const rel = externalLink ? "noopener noreferrer" : undefined;

  // JSX

  return (
    <StyledLink href={href} rel={rel} target={target} $isActive={isActive}>
      {typeof title === "string" ? <span>{title}</span> : title}
    </StyledLink>
  );
};

export default SubNavLink;
