"use client";

import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import Footer from "molecules/Footer";
import Header from "molecules/Header";
import NavBar from "molecules/NavBar";
import SummaryStatementModal from "molecules/SummaryStatementModal";

import wSS from "lib/sessionStorage";

import cursor from "@/app/_db/cursor";
import { addThemeValues, generateMediaQuery } from "@/app/_lib/themeHelpers";
import useHasSubMenu from "@/app/_lib/useHasSubMenu";
import useModal from "@/app/_lib/useModal";

// TYPES

interface PageTemplateProps {
  children: React.ReactNode;
}

// STYLES

const StyledBody = styled.body(
  ({ theme }) => css`
    margin-left: calc(
      ${theme.spacings.xxxl} + 2 * ${theme.spacings.xs} + 2 *
        ${theme.spacings.m}
    );
    padding: ${theme.spacings.l} ${theme.spacings.xl};
    color: ${theme.colors.black};
    background-color: ${theme.colors.white};

    ${generateMediaQuery(
      "mobile",
      "max-width",
    )(css`
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
  transition: margin-top ${theme._timings.Header.shrinkTransition} ease;
`,
);

const PageTemplate = ({ children }: PageTemplateProps) => {
  // DATA

  const { comingSoon2025 } = cursor.get("featureFlags");

  // STATE

  const [isShrunk, setIsShrunk] = useState<boolean>(false);
  const hasSubMenu = useHasSubMenu() !== undefined;
  const openModal = useModal((state) => state.openModal);

  // EFFECT HOOKS

  useEffect(() => handleScroll());

  useEffect(() => {
    if (comingSoon2025.active) return;
    !wSS(sessionStorage).get("hasReadSummary") &&
      openModal(<SummaryStatementModal />);
  }, [openModal, comingSoon2025.active]);

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
