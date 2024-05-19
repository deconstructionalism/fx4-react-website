"use client";

import { EventRow } from "@/app/_db/db.d";
import {
  eventToURL,
  formatDateForDisplay,
} from "@/app/_lib/databaseTransformers";
import { generateMediaQuery } from "@/app/_lib/themeHelpers";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styled from "styled-components";

// CONSTANTS

const IMAGE_SCALE_FACTOR = 1.05;

// STYLES

const StyledLocationBanner = styled.div`
  flex: 1;
  cursor: pointer;
  position: relative;
  overflow: hidden;
`;

const StyledImageContainer = styled.div<{
  $imgSrc: string;
  $isHovering: boolean;
}>(
  ({ theme, $imgSrc, $isHovering }) => `
  background-size: cover;
  background-position: center;
  background-image: url(${$imgSrc});
  background-repeat: no-repeat;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: ${$isHovering ? `scale(${IMAGE_SCALE_FACTOR})` : "scale(1)"};
  transition: transform ${theme.timings.fast} ease, filter ${theme.timings.fast} ease;

  filter: grayscale(100%);

  &:hover {
    filter: grayscale(0%);
    &::after {
      background: ${theme.colors.black}11;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${theme.colors.black}55;
    transition: background ${theme.timings.fast} ease;
    z-index: -1;
  }
`,
);

const StyledLocationTitle = styled.p(
  ({ theme }) => `
  font-family: ${theme.fonts.body};
  color: ${theme.colors.white};
  font-size: ${theme.spacings.xxl};
  letter-spacing: ${theme.spacings.xxs};
  font-weight: bold;
  position: absolute;
  white-space: pre-line;
  line-height: ${theme._spacings.LocationBanner.titleLineHeight};
  text-align: center;
  text-shadow: ${theme.colors.black} 0 0 ${theme.spacings.s};

  ${generateMediaQuery("tablet")(`
    white-space: unset;
    margin-top: calc(${theme.spacings.xxxl} * -1);
    letter-spacing: ${theme.spacings.xs};
    font-size: ${theme.spacings.xxxl};
  `)}
`,
);

const StyledDateTitle = styled.p(
  ({ theme }) => `
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.white};
  font-size: calc(${theme.spacings.xxxl} * 2);
  letter-spacing: ${theme.spacings.xs};
  font-weight: bold;
  white-space: pre-line;
  text-align: center;
  color: ${theme.colors.primary};
  text-shadow: ${theme.colors.black} 0 0 ${theme.spacings.s};

  ${generateMediaQuery("tablet")(`
    white-space: unset;
    font-size: ${theme.spacings.xxl};
    margin-top: ${theme.spacings.xxxl};
    letter-spacing: ${theme.spacings.xxs};
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
