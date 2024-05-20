"use client";

import { usePathname } from "next/navigation";
import cursor from "../_db/cursor";
import { eventToURL } from "../_lib/databaseTransformers";
import styled from "styled-components";
import EventSocialMediaBar from "../_components/atoms/EventSocialMediaBar";
import EventTicketButton from "../_components/atoms/EventTicketButton";
import EventPoster from "../_components/atoms/EventPoster";
import EventMainInfo from "../_components/atoms/EventMainInfo";
import EventLineupTable from "../_components/molecules/EventLineupTable";

// STYLES

const StyledSection = styled.section(
  ({ theme }) => `
  padding-top: ${theme.spacings.l};
`,
);

// TYPES

interface LocationPageLayoutProps {
  children: React.ReactNode;
}

const LocationPageLayout = ({ children }: LocationPageLayoutProps) => {
  // DATA

  const eventsData = cursor.get("events");

  // STATE

  const pathname = usePathname();

  // LOGIC

  const urls = eventsData.map(eventToURL);
  const eventIndex = urls.findIndex((url) => url === pathname);
  const eventData = eventsData[eventIndex];

  // JSX

  if (!eventData) return <>{children}</>;

  return (
    <StyledSection>
      <EventMainInfo data={eventData} />
      <EventTicketButton data={eventData} />
      <EventPoster data={eventData} />
      <EventLineupTable data={eventData} />
      {children}
      <EventSocialMediaBar data={eventData} />
    </StyledSection>
  );
};

export default LocationPageLayout;
