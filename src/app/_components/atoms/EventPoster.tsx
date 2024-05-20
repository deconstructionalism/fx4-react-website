import { EventRow } from "@/app/_db/db";
import { generateMediaQuery } from "@/app/_lib/themeHelpers";
import Image from "next/image";
import styled from "styled-components";
import Divider from "./Divider";

// CONSTANTS

const DESKTOP_IMAGE_PERCENTAGE: number = 75;

// STYLES

const StyledImageContainer = styled.div`
  width: ${DESKTOP_IMAGE_PERCENTAGE}%;
  margin: 0 auto;

  ${generateMediaQuery("tablet")(`
    width: 100%;
  `)}
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
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
      <StyledImageContainer>
        <StyledImage
          src={eventPoster.src}
          alt={eventPoster.title}
          title={eventPoster.title}
          width={0}
          height={0}
          sizes="100vw"
        />
      </StyledImageContainer>
      <Divider />
    </>
  );
};

export default EventPoster;
