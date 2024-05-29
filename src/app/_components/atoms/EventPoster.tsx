import styled from "styled-components";
import { css } from "styled-components";

import Divider from "atoms/Divider";
import Image from "atoms/Image";

import { generateMediaQuery } from "lib/themeHelpers";

import { EventRow } from "@/app/_db/db";

// CONSTANTS

const DESKTOP_IMAGE_PERCENTAGE: number = 75;

// STYLES

const StyledImage = styled(Image)`
  width: ${DESKTOP_IMAGE_PERCENTAGE}%;
  height: auto;
  margin: 0 auto;

  ${generateMediaQuery("tablet")(css`
    width: 100%;
  `)}
`;

interface EventPosterProps {
  data: EventRow;
}

const EventPoster = ({ data }: EventPosterProps) => {
  // DATA

  const eventPoster = data.eventPoster;

  // JSX
  if (!eventPoster) return null;

  return (
    <>
      <StyledImage
        src={eventPoster.src}
        alt={eventPoster.title}
        title={eventPoster.title}
        includeTitle
      />
      <Divider />
    </>
  );
};

export default EventPoster;
