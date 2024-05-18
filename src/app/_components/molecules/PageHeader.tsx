"use client";

import { addThemeValues } from "@/app/_lib/themeHelpers";
import { useSelectedLayoutSegments } from "next/navigation";
import Logo from "@/app/_components/atoms/Logo";
import styled from "styled-components";
import HeaderSubNavBar from "./HeaderSubNavBar";
import useHasSubMenu from "@/app/_lib/useHasSubMenu";

// STYLES

const StyledHeader = styled.header<{ $hasSubMenu: boolean }>(
  ({ theme, $hasSubMenu }) => `
  position: sticky;
  top: 0;
  display:flex;
  flex-direction: column;
  transition: all ${theme._timings.PageHeader.shrinkTransition} ease;
  max-width: ${theme._spacings.PageHeader.maxWidth};
  margin-left: auto;
  margin-right: auto;
  height: ${addThemeValues(
    theme._spacings.PageHeader.titlePadding,
    theme._spacings.PageHeader.titlePadding,
    theme._spacings.PageHeader.titleFontSize,
    $hasSubMenu ? theme._spacings.HeaderSubNavBar.gap : 0,
    $hasSubMenu ? theme._spacings.HeaderSubNavBar.paddingTop : 0
  )};
  `,
);

const StyledLogoContainer = styled.div(
  ({ theme }) => `
  background-color: ${theme.colors.white};
  display: flex;
  justify-content: center;
  width: 100%;
`,
);

const StyledLogo = styled(Logo)<{ $isShrunk: boolean }>(
  ({ theme, $isShrunk }) => `
  height: ${$isShrunk ? `0` : theme._spacings.PageHeader.logoHeight};
  transition: height ${theme._timings.PageHeader.shrinkTransition} ease;

  > g {
    fill: ${theme.colors.black};
  }
`,
);

const StyledTitle = styled.div<{ $isShrunk: boolean }>(
  ({ theme, $isShrunk }) => `
  background-color: ${theme.colors.white};
  padding: ${theme._spacings.PageHeader.titlePadding};
  box-shadow: ${$isShrunk ? `0px 24px 45px 12px ${theme.colors.white}dd` : "none"};

  & > h1 {
    font-size: ${theme._spacings.PageHeader.titleFontSize};
    font-family: ${theme.fonts.heading};
    font-weight: 400;
    text-align: center;
    transition: all ${theme._timings.PageHeader.shrinkTransition} ease;
    margin: 0;
    line-height: ${theme._spacings.PageHeader.titleFontSize};
    letter-spacing: ${$isShrunk ? theme.spacings.l : theme.spacings.xxxs};
  }

  &:after {
    content: "";
    display: block;
    border-radius: 10rem;
    height: ${theme.spacings.xs};
    width: ${$isShrunk ? `calc(2 * ${theme._spacings.PageHeader.titlePadding} + 100%)` : "0"};
    transition: all ${theme._timings.PageHeader.shrinkTransition} ease;
    transform: translate(-${theme._spacings.PageHeader.titlePadding}, ${theme._spacings.PageHeader.titlePadding});

    ${
      $isShrunk &&
      `
      animation: burn 0.4s ease infinite 0s alternate;

      @keyframes burn {
        0% {
          background: red;
        }
        50% {
          background: yellow;
        }
        100% {
          background: orange;
        }
      }
    `
    };
  }

`,
);

// TYPES

interface PageHeaderProps {
  isShrunk: boolean;
}

const PageHeader = ({ isShrunk }: PageHeaderProps) => {
  // STATE

  const segments = useSelectedLayoutSegments();
  const subMenuConfig = useHasSubMenu();

  // LOGIC

  const pageName = segments[0].toUpperCase();
  const hasSubMenu = subMenuConfig !== undefined;

  // JSX

  return (
    <StyledHeader $hasSubMenu={hasSubMenu}>
      <StyledLogoContainer>
        <StyledLogo $isShrunk={isShrunk} />
      </StyledLogoContainer>
      <StyledTitle $isShrunk={isShrunk}>
        <h1>{pageName}</h1>
        {hasSubMenu && <HeaderSubNavBar config={subMenuConfig} />}
      </StyledTitle>
    </StyledHeader>
  );
};

export default PageHeader;
