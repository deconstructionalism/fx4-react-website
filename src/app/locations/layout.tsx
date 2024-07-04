"use client";

import { usePathname } from "next/navigation";

import EventLineupTable from "molecules/EventLineupTable";

import EventAnnouncement from "atoms/EventAnnouncement";
import EventLinkBar from "atoms/EventLinkBar";
import EventMainInfo from "atoms/EventMainInfo";
import EventPoster from "atoms/EventPoster";

import { eventToURL } from "lib/databaseTransformers";

import cursor from "@/app/_db/cursor";

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
    <section>
      <EventMainInfo data={eventData} />
      <EventLinkBar data={eventData} />
      <EventPoster data={eventData} />
      <EventAnnouncement data={eventData} />
      <EventLineupTable data={eventData} />
      {children}
    </section>
  );
};

export default LocationPageLayout;
