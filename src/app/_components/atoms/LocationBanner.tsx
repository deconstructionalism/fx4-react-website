"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import styled, { css } from "styled-components";

import { eventToURL, formatDateForDisplay } from "lib/databaseTransformers";
import { generateMediaQuery } from "lib/themeHelpers";

import { EventRow } from "@/app/_db/db.d";

// CONSTANTS

const IMAGE_SCALE_FACTOR = 1.05;

// STYLES

const StyledLocationBanner = styled.div`
  cursor: pointer;
  position: relative;
  overflow: hidden;
  flex: 1;
`;

const StyledImageContainer = styled.div<{
  $imgSrc: string;
  $isHovering: boolean;
}>(
  ({ theme, $imgSrc, $isHovering }) => css`
    position: absolute;
    top: 0;
    left: 0;
    transform: ${$isHovering ? `scale(${IMAGE_SCALE_FACTOR})` : "scale(1)"};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    background-image: url(${$imgSrc});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    filter: grayscale(100%);

    transition:
      transform ${theme.timings.fast} ease,
      filter ${theme.timings.fast} ease;

    &::after {
      content: "";

      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      background: ${theme.colors.black}55;

      transition: background-color ${theme.timings.fast} ease;
    }

    &:hover {
      filter: grayscale(0%);

      &::after {
        background: ${theme.colors.black}11;
      }
    }
  `,
);

const StyledLocationTitle = styled.p(
  ({ theme }) => css`
    position: absolute;

    font-family: ${theme.fonts.body};
    font-size: ${theme.spacings.xxl};
    font-weight: bold;
    line-height: ${theme._spacings.LocationBanner.titleLineHeight};
    color: ${theme.colors.white};
    text-align: center;
    text-shadow: ${theme.colors.black} 0 0 ${theme.spacings.s};
    letter-spacing: ${theme.spacings.xxs};
    white-space: pre-line;

    ${generateMediaQuery("tablet")(css`
      margin-top: calc(${theme.spacings.xxxl} * -1);
      font-size: ${theme.spacings.xxxl};
      letter-spacing: ${theme.spacings.xs};
      white-space: unset;
    `)}
  `,
);

const StyledDateTitle = styled.p(
  ({ theme }) => css`
    font-family: ${theme.fonts.heading};
    font-size: calc(${theme.spacings.xxxl} * 2);
    font-weight: bold;
    color: ${theme.colors.primary};
    text-align: center;
    text-shadow: ${theme.colors.black} 0 0 ${theme.spacings.s};
    letter-spacing: ${theme.spacings.xs};
    white-space: pre-line;

    ${generateMediaQuery("tablet")(css`
      margin-top: ${theme.spacings.xxxl};
      font-size: ${theme.spacings.xxl};
      letter-spacing: ${theme.spacings.xxs};
      white-space: unset;
    `)}
  `,
);

interface LocationBannerProps {
  eventData: EventRow;
}

const LocationBanner = ({ eventData }: LocationBannerProps) => {
  // STATE

  const router = useRouter();
  const [isHovering, setIsHovering] = useState<boolean>(false);

  // EVENT HANDLERS

  const handleClick = () => router.push(eventToURL(eventData));

  const handleMouseEnter = () => setIsHovering(true);

  const handleMouseLeave = () => setIsHovering(false);

  // LOGIC

  const {
    narrowBannerImage: { src, title },
    location: { city, state },
    date,
  } = eventData;
  const locationText = `${city}\n${state}`.toUpperCase();
  const dateText = formatDateForDisplay(date)
    .toUpperCase()
    .replace(/\s/g, "\n");

  // JSX

  return (
    <StyledLocationBanner
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      title={title}
    >
      <StyledImageContainer $imgSrc={src} $isHovering={isHovering}>
        <StyledLocationTitle>{locationText}</StyledLocationTitle>
        <StyledDateTitle>{`${dateText}`}</StyledDateTitle>
      </StyledImageContainer>
    </StyledLocationBanner>
  );
};

export default LocationBanner;
