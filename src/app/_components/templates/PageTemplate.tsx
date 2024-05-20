"use client";

import styled from "styled-components";
import NavBar from "../molecules/NavBar";
import Header from "../molecules/Header";
import { useEffect, useState } from "react";
import { addThemeValues, generateMediaQuery } from "@/app/_lib/themeHelpers";
import Footer from "../molecules/Footer";
import useHasSubMenu from "@/app/_lib/useHasSubMenu";

// TYPES

interface PageTemplateProps {
  children: React.ReactNode;
}

// STYLES

const StyledBody = styled.body(
  ({ theme }) => `
  margin-left: calc(${theme.spacings.xxxl} + 2 * ${theme.spacings.xs} + 2 * ${theme.spacings.m});
  padding: ${theme.spacings.l} ${theme.spacings.xl};
  background-color: ${theme.colors.white};
  color: ${theme.colors.black};

  ${generateMediaQuery(
    "mobile",
    "max-width",
  )(`
    margin-left: 0;
  `)}
`,
);

const StyledMain = styled.main<{ $isShrunk: boolean; $hasSubMenu: boolean }>(
  ({ theme, $isShrunk, $hasSubMenu }) => `
  margin-top: ${
    $isShrunk
      ? addThemeValues(
          theme._spacings.Header.titleFontSize,
          theme._spacings.Header.titlePadding,
          theme._spacings.Header.titlePadding,
        )
      : addThemeValues(
          theme._spacings.Header.titleFontSize,
          theme._spacings.Header.titlePadding,
          theme._spacings.Header.titlePadding,
          theme._spacings.Header.logoHeight,
        )
  };
  padding-top: ${
    $hasSubMenu
      ? addThemeValues(
          theme._spacings.SubNavLink.height,
          theme._spacings.HeaderSubNavBar.paddingTop,
        )
      : 0
  };
  max-width: ${theme._spacings.PageTemplate.maxWidth};
  margin-left: auto;
  margin-right: auto;
  transition: margin-top 1s ease;
`,
);

const PageTemplate = ({ children }: PageTemplateProps) => {
  // STATE

  const [isShrunk, setIsShrunk] = useState<boolean>(false);
  const hasSubMenu = useHasSubMenu() !== undefined;

  // EFFECT HOOKS

  useEffect(() => handleScroll());

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  // EVENT HANDLERS

  const handleScroll = () => {
    const nextIsScrolledDown = document.documentElement.scrollTop > 0;
    if (nextIsScrolledDown === isShrunk) return;

    setIsShrunk(nextIsScrolledDown);
  };

  // JSX

  return (
    <StyledBody>
      <NavBar />
      <Header isShrunk={isShrunk} />
      <StyledMain $isShrunk={isShrunk} $hasSubMenu={hasSubMenu}>
        {children}
      </StyledMain>
      <Footer />
    </StyledBody>
  );
};

export default PageTemplate;
