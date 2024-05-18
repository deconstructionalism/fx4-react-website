"use client";

import { useState } from "react";
import styled from "styled-components";

// STYLES

const StyledLocation = styled.div<{ $dateText: string, $isHovering: boolean }>(
  ({ theme, $dateText, $isHovering }) => `
  width: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${theme.fonts.body};
  font-weight: bold;
  font-size: ${theme.spacings.l};
  color: ${theme.colors.black};
  position: relative;
  padding: ${theme.spacings.xxs} 0;

  &::after {
    background: ${theme.colors.white};
    color: ${theme.colors.black};
    transition: opacity ${theme.timings.extraFast} ease;
    opacity: ${$isHovering ? 1 : 0};
    content: "${$dateText}";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`,
);

// TYPES

interface SubNavLocationLinkProps {
  city: string;
  state: string;
  date: Date;
}

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

  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();
  const dayOfWeek = date
    .toLocaleString("default", { weekday: "long" })
    .substring(0, 3);
  const daySuffix = getSuffix(date);
  const dateString = `${dayOfWeek} ${month} ${day}${daySuffix}`;

  return dateString;
};

const SubNavLocationLink = ({ city, state, date }: SubNavLocationLinkProps) => {
  // STATE

  const [isHovering, setIsHovering] = useState<boolean>(false);

  // EVENT HANDLERS

  const handleMouseEnter = () => setIsHovering(true);

  const handleMouseLeave = () => setIsHovering(false);

  // LOGIC

  const text = `${city} ${state}`;
  const dateText = formatDateForNav(date);

  // JSX

  return (
    <StyledLocation
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      $dateText={dateText}
      $isHovering={isHovering}
    >
      {text}
    </StyledLocation>
  );
};

export default SubNavLocationLink;
