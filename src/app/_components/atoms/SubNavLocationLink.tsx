"use client";

import { useState } from "react";
import styled, { css } from "styled-components";

// STYLES

const StyledLocation = styled.div<{ $dateText: string; $isHovering: boolean }>(
  ({ theme, $dateText, $isHovering }) => css`
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 20rem;
    padding: ${theme.spacings.xxs} 0;

    font-family: ${theme.fonts.body};
    font-size: ${theme.spacings.l};
    font-weight: bold;
    color: ${theme.colors.black};

    &::after {
      content: "${$dateText}";

      position: absolute;
      top: 0;
      left: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: 100%;

      color: ${theme.colors.black};

      opacity: ${$isHovering ? 1 : 0};
      background: ${theme.colors.white};

      transition: opacity ${theme.timings.extraFast} ease;
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
