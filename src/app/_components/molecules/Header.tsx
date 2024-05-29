"use client";

import { useSelectedLayoutSegments } from "next/navigation";
import { useRouter } from "next/navigation";
import styled, { css } from "styled-components";

import HeaderSubNavBar from "molecules/HeaderSubNavBar";

import Logo from "atoms/Logo";

import { addThemeValues } from "lib/themeHelpers";
import useHasSubMenu from "lib/useHasSubMenu";

// STYLES

const StyledHeader = styled.header<{ $hasSubMenu: boolean }>(
  ({ theme, $hasSubMenu }) => css`
    position: sticky;
    z-index: 10;
    top: 0;

    display: flex;
    flex-direction: column;

    max-width: ${theme._spacings.Header.maxWidth};
    height: ${addThemeValues(
      theme._spacings.Header.titlePadding,
      theme._spacings.Header.titlePadding,
      theme._spacings.Header.titleFontSize,
    )};
    margin-right: auto;
    margin-left: auto;
    padding-bottom: ${$hasSubMenu
      ? addThemeValues(
          theme._spacings.SubNavLink.height,
          theme._spacings.HeaderSubNavBar.paddingTop,
        )
      : 0};

    transition: all ${theme._timings.Header.shrinkTransition} ease;
  `,
);

const StyledLogoContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: ${theme.colors.white};
  `,
);

const StyledLogo = styled(Logo)<{ $isShrunk: boolean }>(
  ({ theme, $isShrunk }) => css`
    height: ${$isShrunk ? `0` : theme._spacings.Header.logoHeight};
    transition: height ${theme._timings.Header.shrinkTransition} ease;

    > g {
      fill: ${theme.colors.black};
    }
  `,
);

const StyledTitle = styled.div<{ $isShrunk: boolean }>(
  ({ theme, $isShrunk }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme._spacings.Header.titlePadding};
    background-color: ${theme.colors.white};

    &::after {
      content: "";

      transform: translate(
        -${theme._spacings.Header.titlePadding},
        ${theme._spacings.Header.titlePadding}
      );

      display: block;

      width: ${$isShrunk
        ? `calc(2 * ${theme._spacings.Header.titlePadding} + 100%)`
        : "0"};
      height: ${theme.spacings.xxs};

      background: ${theme.colors.black};
      border-radius: 10rem;

      transition: all ${theme._timings.Header.shrinkTransition} ease;
    }

    & > h1 {
      cursor: pointer;

      align-self: center;

      width: min-content;
      margin: 0;

      font-family: ${theme.fonts.heading};
      font-size: ${theme._spacings.Header.titleFontSize};
      font-weight: 400;
      line-height: ${theme._spacings.Header.titleFontSize};
      text-align: center;
      letter-spacing: ${$isShrunk ? theme.spacings.l : theme.spacings.xxxs};

      transition: all ${theme._timings.Header.shrinkTransition} ease;

      &:hover {
        color: ${theme._colors.Link.hoverColor};
        transition: color ${theme._timings.Link.transitionSpeed} ease;
      }
    }
  `,
);

// TYPES

interface HeaderProps {
  isShrunk: boolean;
}

const Header = ({ isShrunk }: HeaderProps) => {
  // STATE

  const segments = useSelectedLayoutSegments();
  const subMenuConfig = useHasSubMenu();
  const router = useRouter();

  // EVENT HANDLERS

  const handleClick = () => router.push(`/${segments[0]}`);

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
        <h1 onClick={handleClick}>{pageName}</h1>
        {hasSubMenu && <HeaderSubNavBar config={subMenuConfig} />}
      </StyledTitle>
    </StyledHeader>
  );
};

export default Header;
