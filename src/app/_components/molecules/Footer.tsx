"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import styled, { css, useTheme } from "styled-components";

import Emblem from "atoms/Emblem";

import sleep from "lib/sleep";
import { timingToMs } from "lib/themeHelpers";

// STYLES

const StyledFooter = styled.footer(
  ({ theme }) => css`
    display: flex;
    align-items: start;
    justify-content: center;

    width: 100%;
    height: ${theme._spacings.Footer.height};
    padding-top: ${theme._spacings.Footer.paddingTop};
  `,
);

const StyledEmblem = styled(Emblem)<{
  $isScrolling: boolean;
  $isSpinning: boolean;
}>(
  ({ theme, $isScrolling, $isSpinning }) => css`
    pointer-events: ${$isScrolling ? "auto" : "none"};
    cursor: pointer;
    transform-origin: center;
    height: ${theme._spacings.Footer.emblemHeight};

    > path {
      fill: ${theme.colors.lightGray};
      transition: all ${theme.timings.fast} ease;
    }

    &:hover > path {
      fill: ${theme.colors.black};
    }

    ${$isSpinning &&
    `animation: spin-360 ${theme.timings.medium} ease-in-out 1;`}

    @keyframes spin-360 {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  `,
);

const Footer = () => {
  // STATE

  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const pathName = usePathname();
  const theme = useTheme();

  // EVENT HANDLERS

  // Handle the window resize event by updating the isScrolling state
  const handleResize = useCallback(() => {
    const nextIsScrolling =
      document.documentElement.clientHeight <
      document.documentElement.scrollHeight;
    if (nextIsScrolling !== isScrolling) {
      setIsScrolling(nextIsScrolling);
    }
  }, [isScrolling]);

  // Handle the emblem click event by scrolling to the top of the page
  // after a delay
  const handleClick = async () => {
    setIsSpinning(true);
    await sleep(timingToMs(theme.timings.fast));
    setIsSpinning(false);
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  };

  // EFFECT HOOKS

  // Update the isScrolling state when the window is resized
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  // Update the isScrolling state when the component mounts
  useEffect(() => handleResize());

  // Update the isScrolling state when the path changes
  useEffect(() => handleResize(), [pathName, handleResize]);

  // JSX

  return (
    <StyledFooter>
      <StyledEmblem
        onClick={handleClick}
        $isScrolling={isScrolling}
        $isSpinning={isSpinning}
      />
    </StyledFooter>
  );
};

export default Footer;
