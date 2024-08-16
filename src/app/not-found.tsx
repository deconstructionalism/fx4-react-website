"use client";

import {
  faFaceDizzy,
  faFaceGrinTongue,
  faFaceGrinTongueWink,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styled, { css, useTheme } from "styled-components";

import sleep from "lib/sleep";
import { timingToMs } from "lib/themeHelpers";

// STYLED

const StyledIconContainer = styled.div<{
  $isHovering: boolean;
  $isClicked: boolean;
}>(
  ({ theme, $isHovering, $isClicked }) => css`
    position: absolute;
    top: 0;
    left: 0;

    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    background-color: ${$isHovering || $isClicked
      ? theme.colors.black
      : theme.colors.white};

    transition: all ${theme.timings.extraFast} ease;
  `,
);

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)<{
  $isHovering: boolean;
  $isClicked: boolean;
}>(
  ({ theme, $isHovering, $isClicked }) => css`
    cursor: pointer;
    font-size: 40vw;
    color: ${$isHovering ? theme.colors.white : theme.colors.black};
    transition:
      color ${theme.timings.medium} ease,
      font-size ${theme.timings.slow} ease;

    ${$isClicked &&
    css`
      font-size: ${theme._spacings.NotFound.clickedIconSize};
      color: ${theme.colors.alert};
    `}
  `,
);

const StyledTitle = styled.h1<{ $isHovering: boolean; $isClicked: boolean }>(
  ({ theme, $isHovering, $isClicked }) => css`
    position: absolute;

    font-family: ${theme.fonts.heading};
    font-size: 6vw;
    font-weight: 800;
    color: ${$isHovering || $isClicked
      ? theme.colors.white
      : theme.colors.black};
    text-transform: uppercase;
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
