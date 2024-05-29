"use client";

import styled, { css } from "styled-components";

import Button from "atoms/Button";
import Image from "atoms/Image";
import P from "atoms/P";

import { generateMediaQuery } from "lib/themeHelpers";

import { ImageData } from "@/app/_db/db";
import useImagePreview from "@/app/_lib/useImagePreview";

// STYLES

const StyledButton = styled(Button)`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 4rem;
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
      title: "flyer by @__lex__talionis__ on Instagram",
    },
  ];

  // EVENT HANDLERS

  const handleDonationClick = () =>
    window.open("https://gofund.me/2725d7e0", "_blank");

  const handleImageClick = (index: number) => {
    openGallery(benefitImages, index);
  };

  // LOGIC

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
      <P>
        We are trying to run this years fest as a <b>benefit for Gaza</b>, and
        we are trying to <b>keep our ticket prices low</b>.
      </P>
      <P>
        In order to do this, we are running a few benefit shows to cover the
        costs of the fest, or{" "}
        <b>if you want to donate directly, you can use the button below</b>.
      </P>
      <StyledButton onClick={handleDonationClick}>Donate</StyledButton>
      <StyledFlyerContainer>{BenefitFlyers}</StyledFlyerContainer>
    </section>
  );
};

export default ProvidenceRI;
