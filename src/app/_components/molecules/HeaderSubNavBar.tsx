"use client";

import SubNavLink from "../atoms/SubNavLink";
import styled from "styled-components";
import { SubNavItemConfig } from "@/app/_config/nav.d";

// STYLES

const StyledSubNav = styled.nav(
  ({ theme }) => `
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: ${theme._spacings.HeaderSubNavBar.gap};
  text-transform: uppercase;
  padding-top: ${theme._spacings.HeaderSubNavBar.paddingTop};
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
