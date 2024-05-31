"use client";

import styled, { css } from "styled-components";

import LocationBanner from "atoms/LocationBanner";

import { generateMediaQuery } from "lib/themeHelpers";

import cursor from "@/app/_db/cursor";

// STYLES

const StyledLocationBannerContainer = styled.section(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;

    width: 100%;
    height: 80vh;

    background: ${theme.colors.black};

    ${generateMediaQuery("tablet")(css`
      flex-direction: column;

      & > *:not(:first-of-type),
      > *:not(:last-of-type) {
        border: ${theme.spacings.xxxs};
        border-top: ${theme.spacings.xxxs} solid ${theme.colors.white};
        border-bottom: ${theme.spacings.xxxs} solid ${theme.colors.white};
      }
    `)}

    & > *:not(:first-of-type), > *:not(:last-of-type) {
      border-right: ${theme.spacings.xxxs} solid ${theme.colors.white};
      border-left: ${theme.spacings.xxxs} solid ${theme.colors.white};
    }
  `,
);

const Locations = () => {
  // DATA

  const eventsData = cursor.get("events");

  // LOGIC

  const LocationBanners = eventsData.map((eventData, index) => (
    <LocationBanner key={index} eventData={eventData}></LocationBanner>
  ));

  // JSX

  return (
    <StyledLocationBannerContainer>
      {LocationBanners}
    </StyledLocationBannerContainer>
  );
};

export default Locations;
