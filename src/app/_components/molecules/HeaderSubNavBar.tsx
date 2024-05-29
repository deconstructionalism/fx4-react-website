"use client";

import styled, { css } from "styled-components";

import SubNavLink from "atoms/SubNavLink";

import { SubNavItemConfig } from "config/nav.d";

// STYLES

const StyledSubNav = styled.nav(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: ${theme._spacings.HeaderSubNavBar.gap};
    justify-content: center;

    padding-top: ${theme._spacings.HeaderSubNavBar.paddingTop};

    text-transform: uppercase;
  `,
);

interface HeaderSubNavBarProps {
  config: SubNavItemConfig[];
}

const HeaderSubNavBar = ({ config }: HeaderSubNavBarProps) => {
  const SubNavItems = config.map(({ title, href, externalLink }, index) => (
    <SubNavLink
      key={index}
      title={title}
      href={href}
      externalLink={externalLink}
    />
  ));

  // JSX

  return <StyledSubNav>{SubNavItems}</StyledSubNav>;
};

export default HeaderSubNavBar;
