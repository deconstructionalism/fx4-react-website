"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

import Emblem from "atoms/Emblem";
import P from "atoms/P";

import sleep from "lib/sleep";

// STYLES

const StyledSection = styled.section`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
`;

const StyledVideo = styled.video`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  object-fit: contain;
`;

const StyledEmblemContainer = styled.div<{ $isPlaying: boolean }>(
  ({ theme, $isPlaying }) => css`
    cursor: pointer;

    position: relative;

    width: 25rem;
    height: 25rem;

    animation: pulse ${theme.timings.medium} infinite;

    & > svg {
      ${$isPlaying && { animation: "shrink 0.4s forwards" }}
      & > g {
        fill: ${theme.colors.white};
      }
    }

    &:hover > svg > g {
      transform-origin: center;
      fill: ${theme.colors.alert};
      transition: fill ${theme.timings.fast} ease;
      animation: spin ${theme.timings.slow} infinite ease-in-out;
    }

    @keyframes shrink {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      100% {
        transform: scale(20);
        opacity: 0;
      }
    }

    @keyframes pulse {
      0% {
        transform: scale(1);
      }

      50% {
        transform: scale(1.015);
      }

      100% {
        transform: scale(1);
      }
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  `,
);

const StyledAttribution = styled(P)(
  ({ theme }) => css`
    position: absolute;
    right: 0;
    bottom: 0;

    margin: ${theme.spacings.l};
    padding: 0;

    font-family: ${theme.fonts.body};
    font-size: ${theme.spacings.m};
    color: ${theme.colors.gray};
    text-transform: uppercase;

    background-color: ${theme.colors.black};
  `,
);

const StyledSkip = styled(P)(
  ({ theme }) => css`
    cursor: pointer;

    position: absolute;
    bottom: 0;
    left: 0;

    margin: ${theme.spacings.l};
    padding: 0;

    font-size: ${theme.spacings.m};
    color: ${theme.colors.gray};
    text-transform: uppercase;

    background-color: ${theme.colors.black};
  `,
);

const RootPage = () => {
  // STATE

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const emblemRef = useRef<SVGSVGElement>(null);
  const router = useRouter();

  // EFFECT HOOKS

  useEffect(() => {
    const videoElement = videoRef.current;
    const emblemElement = emblemRef.current;
    videoElement?.addEventListener("ended", handleVideoEnded);
    emblemElement?.addEventListener("animationend", handleAnimationEnd);
    return () => {
      videoElement?.removeEventListener("ended", handleVideoEnded);
      emblemElement?.removeEventListener("animationend", handleAnimationEnd);
    };
  });

  // EVENT HANDLERS

  const handlePressPlay = () => {
    setIsPlaying(true);
    videoRef.current?.play();
  };

  const handleAnimationEnd = (event: AnimationEvent) => {
    if (event.animationName === "shrink") {
      emblemRef.current?.remove();
    }
  };

  const handleVideoEnded = async () => {
    await sleep(2000);
    handleSkipClick();
  };

  const handleSkipClick = () => {
    router.push("/locations");
  };

  // JSX

  return (
    <StyledSection>
      <StyledVideo ref={videoRef} disablePictureInPicture>
        <source src="/video/landing_video.mp4" type="video/mp4" />
      </StyledVideo>

      <StyledEmblemContainer $isPlaying={isPlaying}>
        <Emblem onClick={handlePressPlay} emblemRef={emblemRef} />
      </StyledEmblemContainer>
      {isPlaying && (
        <>
          <StyledAttribution>video by Johnny Ray</StyledAttribution>
          <StyledSkip onClick={handleSkipClick}>Skip</StyledSkip>
        </>
      )}
    </StyledSection>
  );
};

export default RootPage;
