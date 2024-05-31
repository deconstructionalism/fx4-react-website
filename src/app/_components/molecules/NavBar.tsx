"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import styled, { css } from "styled-components";

import NavLink from "atoms/NavLink";

import navConfig from "config/nav";
import { generateMediaQuery } from "lib/themeHelpers";

// STYLES

const StyledNav = styled.nav<{ $expanded: boolean }>(
  ({ theme, $expanded }) => css`
    position: fixed;
    z-index: ${theme.zIndex.navigation};
    top: 0;
    bottom: 0;
    left: 0;

    overflow: hidden hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    max-width: ${$expanded
      ? theme._spacings.Nav.expandedWidth
      : `calc(${theme.spacings.xxxl} + 2 * ${theme.spacings.xs} + 2 * ${theme.spacings.m})`};
    padding: ${theme.spacings.xxl} ${theme.spacings.m};
    padding-right: ${$expanded ? "20rem" : "0rem"};

    background-color: ${theme.colors.black};

    transition:
      max-width ${theme.timings.fast} ease,
      padding ${theme.timings.fast} ease;

    ${generateMediaQuery("mobile")(css`
      top: unset;
      right: 0;

      flex-direction: row;
      justify-content: space-around;

      max-width: unset;
      padding: ${theme.spacings.m};

      transition: none;
    `)}
  `,
);

const NavBar = () => {
  // STATE

  const [navExpanded, setNavExpanded] = useState<boolean>(false);
  const basePath = usePathname().split("/")[1];

  // LOGIC

  const activePath = `${basePath}`;

  const NavItems = navConfig.map(
    ({ externalLink, href, title, icon }, index) => (
      <NavLink
        externalLink={externalLink}
        href={href}
        icon={icon}
        isActive={activePath === href.replace("/", "")}
        key={index}
        setNavExpanded={setNavExpanded}
        title={title}
      />
    ),
  );

  // JSX

  return <StyledNav $expanded={navExpanded}>{NavItems}</StyledNav>;
};

export default NavBar;
