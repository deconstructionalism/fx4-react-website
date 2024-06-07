"use client";

import styled from "styled-components";
import { css } from "styled-components";

import EventLineupBand from "@/app/_components/atoms/EventLineupBand";
import { BandData } from "@/app/_db/db";
import { generateMediaQuery } from "@/app/_lib/themeHelpers";

// STYLES

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
    width: 33.3333%;

    ${generateMediaQuery("tablet")(css`
      width: 50%;
    `)}
  }
`;

const BrooklynNY = () => {
  // DATA

  const aftersLineup: BandData[] = [
    {
      name: "Cyberplasm",
      socialMediaLinks: {
        bandcamp: { href: "https://cyberplasm.bandcamp.com" },
      },
    },
    {
      name: "AFK",
      socialMediaLinks: {
        bandcamp: { href: "https://afktba.bandcamp.com" },
      },
    },
    {
      name: "VS",
      socialMediaLinks: {
        instagram: { href: "https://www.instagram.com/chaoswarp/s" },
      },
    },
  ];

  // LOGIC

  const Bands = aftersLineup
    .sort((a, b) => a.name.length - b.name.length)
    .map((bandData, index) => {
      return <EventLineupBand key={index} bandData={bandData} />;
    });

  // JSX

  return (
    <section>
      <StyledTitle>Official afters at Bootleg Bar featuring</StyledTitle>

      <StyledLineup>{Bands}</StyledLineup>
    </section>
  );
};

export default BrooklynNY;
