"use client";

import styled, { css } from "styled-components";

import Button from "atoms/Button";
import Image from "atoms/Image";
import P from "atoms/P";

import { generateMediaQuery } from "lib/themeHelpers";

import Divider from "@/app/_components/atoms/Divider";
import EventLineupBand from "@/app/_components/atoms/EventLineupBand";
import { BandData, ImageData } from "@/app/_db/db";
import useImagePreview from "@/app/_lib/useImagePreview";

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
    width: 33.3333%;

    ${generateMediaQuery("tablet")(css`
      width: 50%;
    `)}
  }
`;

const StyledButton = styled(Button)`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 1rem;
`;

const StyledFlyerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  width: 100%;
  margin: 0 auto;
  margin-bottom: 2rem;

  & > div {
    width: 32%;
    height: 32%;
  }

  ${generateMediaQuery("desktop")(css`
    & > div {
      width: 49%;
      height: 49%;
    }
  `)}

  ${generateMediaQuery("tablet")(css`
    gap: 4rem;

    & > div {
      width: 100%;
      height: 100%;
    }
  `)}
`;

const StyledImage = styled(Image)`
  cursor: pointer;
  width: 100%;
  height: auto;
`;

const ProvidenceRI = () => {
  // STATE

  const openGallery = useImagePreview((state) => state.openGallery);

  // DATA

  const aftersLineup: BandData[] = [
    {
      name: "Sodomahigomorra",
      socialMediaLinks: {
        instagram: { href: "https://www.instagram.com/sodomahigomorra" },
      },
    },
    {
      name: "Skullfucker",
      socialMediaLinks: {
        instagram: { href: "https://www.instagram.com/sssspikeeee" },
      },
    },
    {
      name: "Slepting",
      socialMediaLinks: {
        bandcamp: { href: "https://slepting.bandcamp.com/track/cenote" },
      },
    },
  ];

  const benefitImages: ImageData[] = [
    {
      src: "/images/posters/providence-5-31-benefit.png",
      title: "flyer by @buttcliff on Instagram",
    },
    {
      src: "/images/posters/providence-6-1-benefit.png",
      title: "flyer by @romero_a_crow on Instagram",
    },
    {
      src: "/images/posters/providence-6-14-benefit.jpg",
      title: "flyer by @timetravelfuckmissile on Instagram",
    },
  ];

  // EVENT HANDLERS

  const handleDonationClick = () =>
    window.open("https://gofund.me/2725d7e0", "_blank");

  const handleTicketClick = () => {
    window.open(
      "https://www.zeffy.com/en-US/ticketing/2a39a78f-08a8-4cc6-b559-4ac93a61e5c6",
      "_blank",
    );
  };

  const handleImageClick = (index: number) => {
    openGallery(benefitImages, index);
  };

  // LOGIC

  const Bands = aftersLineup
    .sort((a, b) => a.name.length - b.name.length)
    .map((bandData, index) => {
      return <EventLineupBand key={index} bandData={bandData} />;
    });

  const BenefitFlyers = benefitImages.map((image, index) => (
    <StyledImage
      key={index}
      src={image.src}
      alt={image.title}
      title={image.title}
      onClick={() => handleImageClick(index)}
      includeTitle
    />
  ));

  // JSX

  return (
    <section>
      <StyledImage
        src={"/images/posters/providence-afters.png"}
        alt={"by Simulacrean"}
        title={"by Simulacrean"}
        includeTitle
      />

      <Divider />

      <StyledTitle>Official afters at Black Lace featuring</StyledTitle>
      <StyledLineup>{Bands}</StyledLineup>

      <Divider />

      <StyledButton onClick={handleTicketClick}>Buy Tickets</StyledButton>
      <StyledButton onClick={handleDonationClick}>Donate</StyledButton>

      <Divider />

      <P>
        We are trying to run this years fest as a <b>benefit for Gaza</b>, and
        we are trying to <b>keep our ticket prices low</b>.
      </P>
      <P>
        In order to do this, we are running a few benefit shows to cover the
        costs of the fest, or{" "}
        <b>if you want to donate directly, you can use the button below</b>.
      </P>
      <StyledFlyerContainer>{BenefitFlyers}</StyledFlyerContainer>
    </section>
  );
};

export default ProvidenceRI;
