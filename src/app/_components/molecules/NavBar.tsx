"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import navConfig from "@/app/_config/nav";
import NavLink from "@/app/_components/atoms/NavLink";
import styled from "styled-components";
import useIsMobile from "@/app/_lib/useIsMobile";

// STYLES

const StyledNav = styled.nav<{ $expanded: boolean; $isMobile: boolean }>(
  ({ theme, $expanded, $isMobile }) => `
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${theme.spacings.xxl} ${theme.spacings.m};
  padding-right: ${$expanded ? "20rem" : "0rem"};
  bottom: 0;
  top: 0;
  left: 0;
  max-width: ${$expanded ? "25rem" : `calc(${theme.spacings.xxxl} + 2 * ${theme.spacings.xs} + 2 * ${theme.spacings.m})`};
  overflow-x: hidden;
  background-color: ${theme.colors.black};
  transition: max-width ${theme.timings.fast} ease, padding ${theme.timings.fast} ease;
  z-index: 1000;
  overflow-y: hidden;

  ${
    $isMobile &&
    `
    top: unset;
    right: 0;
    max-width: unset;
    flex-direction: row;
    padding: ${theme.spacings.m};
    justify-content: space-around;
  `
  }
 `,
);

const NavBar = () => {
  // STATE

  const [navExpanded, setNavExpanded] = useState<boolean>(false);
  const isMobile = useIsMobile();
  const basePath = usePathname().split("/")[1];

  // LOGIC

  const activePath = `${basePath}`;

  const NavItems = navConfig.map(
    ({ externalLink, href, title, icon }, index) => (
      <NavLink
        externalLink={externalLink}
        href={href}
        icon={icon}
        isActive={activePath === href.replace('/', '')}
        key={index}
        setNavExpanded={setNavExpanded}
        title={title}
      />
    ),
  );

  // JSX

  return (
    <StyledNav $expanded={navExpanded} $isMobile={isMobile}>
      {NavItems}
    </StyledNav>
  );
};

export default NavBar;
