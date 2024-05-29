"use client";

import {
  faFaceDizzy,
  faFaceGrinTongue,
  faFaceGrinTongueWink,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styled, { useTheme } from "styled-components";

import sleep from "lib/sleep";
import { timingToMs } from "lib/themeHelpers";

// STYLED

const StyledIconContainer = styled.div<{
  $isHovering: boolean;
  $isClicked: boolean;
}>(
  ({ theme, $isHovering, $isClicked }) => `
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${$isHovering || $isClicked ? theme.colors.black : theme.colors.white};
  transition: all ${theme.timings.extraFast} ease;
  overflow: hidden;
`,
);

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)<{
  $isHovering: boolean;
  $isClicked: boolean;
}>(
  ({ theme, $isHovering, $isClicked }) => `
  font-size: 40vw;
  cursor: pointer;
  color: ${$isHovering ? theme.colors.white : theme.colors.black};
  transition: color ${theme.timings.medium} ease, font-size ${theme.timings.slow} ease;

  ${
    $isClicked &&
    `
    color: ${theme.colors.alert};
    font-size: 80rem;

    `
  }

`,
);

const StyledTitle = styled.h1<{ $isHovering: boolean; $isClicked: boolean }>(
  ({ theme, $isHovering, $isClicked }) => `
  font-size: 6vw;
  text-transform: uppercase;
  font-weight: 800;
  position: absolute;
  font-family: ${theme.fonts.heading};
  color: ${$isHovering || $isClicked ? theme.colors.white : theme.colors.black};
`,
);

const NotFound = () => {
  // STATE

  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const router = useRouter();
  const theme = useTheme();

  // EVENT HANDLERS

  const handleMouseEnter = () => setIsHovering(true);

  const handleMouseLeave = () => setIsHovering(false);

  const handleClick = async () => {
    setIsClicked(true);
    await sleep(timingToMs(theme.timings.medium));
    router.push("/locations");
  };

  // LOGIC

  const icon = isClicked
    ? faFaceGrinTongueWink
    : isHovering
      ? faFaceGrinTongue
      : faFaceDizzy;
  const text = isHovering || isClicked ? "GO GO GO" : "NOT FOUND";

  // JSX

  return (
    <StyledIconContainer $isHovering={isHovering} $isClicked={isClicked}>
      <StyledTitle $isHovering={isHovering} $isClicked={isClicked}>
        {text}
      </StyledTitle>
      <StyledFontAwesomeIcon
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        icon={icon}
        $isHovering={isHovering}
        $isClicked={isClicked}
        spin
      />
    </StyledIconContainer>
  );
};

export default NotFound;
