// STYLES

import { EventRow } from "@/app/_db/db";
import styled from "styled-components";
import Divider from "../atoms/Divider";
import EventLineupBand from "../atoms/EventLineupBand";
import { generateMediaQuery } from "@/app/_lib/themeHelpers";

const StyledLineup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  & > * {
    width: 33.3333%;

    ${generateMediaQuery("tablet")(`
      width: 50%;
    `)}
  }
`;

interface EventLineupTableProps {
  data: EventRow;
}

const EventLineupTable = ({ data }: EventLineupTableProps) => {
  // DATA

  const { lineup } = data;

  // LOGIC

  const Bands = lineup
    .sort((a, b) => a.name.length - b.name.length)
    .map((bandData, index) => {
      return <EventLineupBand key={index} bandData={bandData} />;
    });

  // JSX

  if (lineup.length === 0) return null;

  return (
    <div>
      <StyledLineup>{Bands} </StyledLineup>
      <Divider />
    </div>
  );
};

export default EventLineupTable;
