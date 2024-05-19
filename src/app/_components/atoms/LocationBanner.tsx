"use client";

import { EventLocationRow } from "@/app/_db";
import { locationToURL } from "@/app/_lib/databaseTransformers";
import { generateMediaQuery } from "@/app/_lib/themeHelpers";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styled from "styled-components";

// HELPER FUNCTIONS

/**
 * Format a date for display in the navigation banner.
 * @param date - the date to format.
 */
const formatDateForNav = (date: Date): string => {
  const getSuffix = (date: Date): string => {
    const d = date.getDate();
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDate();
  const dayOfWeek = date
    .toLocaleString("default", { weekday: "long" })
    .substring(0, 3);
  const daySuffix = getSuffix(date);
  const dateString = `${dayOfWeek} ${month} ${day}${daySuffix}`;

  return dateString;
};

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
  transform: ${$isHovering ? "scale(1.05)" : "scale(1)"};
  transition: transform ${theme.timings.fast} ease, filter ${theme.timings.fast} ease;

  filter: grayscale(100%);

  &:hover {
    filter: grayscale(0%);
    &::after {
      background: rgba(0, 0, 0, 0.1);
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
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
  line-height: 12rem;
  text-align: center;
  text-shadow: black 0 0 20px;

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
  font-size: 7rem;
  letter-spacing: ${theme.spacings.xs};
  font-weight: bold;
  white-space: pre-line;
  text-align: center;
  color: orange;
  text-shadow: black 0 0 20px;

  ${generateMediaQuery("tablet")(`
    white-space: unset;
    font-size: ${theme.spacings.xxl};
    margin-top: ${theme.spacings.xxxl};
    letter-spacing: ${theme.spacings.xxs};
  `)}
`,
);

interface LocationBannerProps {
  locationData: EventLocationRow;
}

const LocationBanner = ({ locationData }: LocationBannerProps) => {
  // STATE

  const router = useRouter();
  const [isHovering, setIsHovering] = useState<boolean>(false);

  // EVENT HANDLERS

  const handleClick = () => router.push(locationToURL(locationData));

  const handleMouseEnter = () => setIsHovering(true);

  const handleMouseLeave = () => setIsHovering(false);

  // LOGIC

  const { narrowBannerImage, narrowBannerImageTitle, city, state, date } =
    locationData;
  const locationText = `${city}\n${state}`.toUpperCase();
  const dateText = formatDateForNav(date).toUpperCase().replace(/\s/g, "\n");

  // JSX

  return (
    <StyledLocationBanner
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      title={narrowBannerImageTitle}
    >
      <StyledImageContainer
        $imgSrc={narrowBannerImage}
        $isHovering={isHovering}
      >
        <StyledLocationTitle>{locationText}</StyledLocationTitle>
        <StyledDateTitle>{`${dateText}`}</StyledDateTitle>
      </StyledImageContainer>
    </StyledLocationBanner>
  );
};

export default LocationBanner;
