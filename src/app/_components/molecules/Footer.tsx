"use client";

import { timingToMs } from "@/app/_lib/themeHelpers";
import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Emblem from "../atoms/Emblem";
import sleep from "@/app/_lib/sleep";
import styled, { useTheme } from "styled-components";

// STYLES

const StyledFooter = styled.footer(
  ({ theme }) => `
  height: ${theme._spacings.Footer.height};
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: ${theme._spacings.Footer.paddingTop};
  align-items: start;
`,
);

const StyledEmblem = styled(Emblem)<{
  $isScrolling: boolean;
  $isSpinning: boolean;
}>(
  ({ theme, $isScrolling, $isSpinning }) => `
  height: ${theme._spacings.Footer.emblemHeight};
  cursor: pointer;
  pointer-events: ${$isScrolling ? "auto" : "none"};
  transform-origin: center;

  > path {
    transition: all ${theme.timings.fast} ease;
    fill: ${theme.colors.lightGray};
  }

  &:hover > path {
    fill: ${theme.colors.black};
  }

  ${$isSpinning && `animation: spin360 ${theme.timings.medium} ease-in-out 1;`}
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
