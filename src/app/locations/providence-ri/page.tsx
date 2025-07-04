"use client";

import styled, { css } from "styled-components";

import Divider from "atoms/Divider";
import EventLineupBand from "atoms/EventLineupBand";
import EventLinkBar from "atoms/EventLinkBar";
import EventMainInfo from "atoms/EventMainInfo";
import Image from "atoms/Image";

import { generateMediaQuery } from "lib/themeHelpers";

import EventAnnouncement from "@/app/_components/atoms/EventAnnouncement";
import EventPoster from "@/app/_components/atoms/EventPoster";
import EventLineupTable from "@/app/_components/molecules/EventLineupTable";
import { EventRow } from "@/app/_db/db";

// CONSTANTS

const DESKTOP_IMAGE_PERCENTAGE: number = 75;

// STYLES

const StyledPosterImage = styled(Image)`
  width: ${DESKTOP_IMAGE_PERCENTAGE}%;
  height: auto;
  margin: 0 auto;

  ${generateMediaQuery("tablet")(css`
    width: 100%;
  `)}
`;

const StyledTitle = styled.h1(
  ({ theme }) => css`
    font-family: ${theme.fonts.heading};
    font-size: ${theme.spacings.l};
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
  `,
);

const StyledLineup = styled.div`
  display: flex;
  flex-flow: row wrap;

  & > * {
    width: 50%;
  }
`;

const ProvidenceRI = () => {
  // DATA

  const aftersEventRow: EventRow = {
    title: "OFFICIAL AFTERS",
    index: 0,
    location: {
      name: "Pyxis",
      city: "Providence",
      state: "RI",
      street: "25 Manton Ave",
      website: { href: "https://pyxispvd.neocities.org/" },
    },
    date: new Date(2025, 6, 5),
    socialMediaLinks: {
      instagram: { href: "https://www.instagram.com/p/DKscpZdPJQC" },
    },
    eventLinks: {
      ticketLink: {
        href: "https://posh.vip/e/fuck-the-fourth-fest-2025-official-afters",
      },
    },
    ticketCost: "$15-25, $10 for fest attendees",
    lineup: [
      {
        name: "Swan Meat",
        socialMediaLinks: {
          instagram: { href: "https://www.instagram.com/swan.meat/" },
        },
      },
      {
        name: "Isabella Koen",
        socialMediaLinks: {
          instagram: {
            href: "https://www.instagram.com/isabellas_deluded_fantasy/",
          },
        },
      },
      {
        name: "B2",
        socialMediaLinks: {
          instagram: { href: "https://www.instagram.com/b_squareddd/" },
        },
      },
    ],
    eventPoster: {
      src: "/images/posters/providence-afters.jpg",
      title: "by @_._simulacrean_._ on Instagram.",
    },
    narrowBannerImage: {
      src: "",
      title: "",
    },
  };

  // LOGIC

  const Bands = aftersEventRow.lineup
    .sort((a, b) => a.name.length - b.name.length)
    .map((bandData, index) => {
      return <EventLineupBand key={index} bandData={bandData} />;
    });

  // JSX

  return (
    <section>
      <EventMainInfo data={aftersEventRow} />
      <EventLinkBar data={aftersEventRow} />
      <EventPoster data={aftersEventRow} />
      <EventAnnouncement data={aftersEventRow} />
      <EventLineupTable data={aftersEventRow} />
    </section>
  );
};

export default ProvidenceRI;
