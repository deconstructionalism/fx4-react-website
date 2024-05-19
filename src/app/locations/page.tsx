"use client";

import styled from "styled-components";
import cursor from "../_db";
import { generateMediaQuery } from "../_lib/themeHelpers";
import LocationBanner from "../_components/atoms/LocationBanner";

// STYLES

const StyledLocationBannerContainer = styled.div(
  ({ theme }) => `
    width: 100%;
    height: 80vh;
    background: ${theme.colors.black};
    display: flex;
    flex-direction: row;

    ${generateMediaQuery("tablet")(`
      flex-direction: column;

      & > *:not(:first-of-type), > *:not(:last-of-type) {
        border-top: ${theme.spacings.xxxs} solid ${theme.colors.white};
        border-bottom: ${theme.spacings.xxxs} solid ${theme.colors.white};
      }
    `)}

    & > *:not(:first-of-type), > *:not(:last-of-type) {
      border-left: ${theme.spacings.xxxs} solid ${theme.colors.white};
      border-right: ${theme.spacings.xxxs} solid ${theme.colors.white};
    }
`,
);

const Locations = () => {
  // DATA

  const locationData = cursor.get("locations");

  // LOGIC

  const LocationBanners = locationData.map((locationData, index) => (
    <LocationBanner key={index} locationData={locationData}></LocationBanner>
  ));

  // JSX

  return (
    <StyledLocationBannerContainer>
      {LocationBanners}
    </StyledLocationBannerContainer>
  );
};

export default Locations;
