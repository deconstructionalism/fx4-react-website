"use client";

import Button from "@/app/_components/atoms/Button";
import P from "@/app/_components/atoms/P";
import Image from "next/image";
import styled from "styled-components";

// STYLES

const StyledButton = styled(Button)`
  margin: 0 auto;
`;

const StyledFlyerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  gap: 4rem;
  margin-bottom: 2rem;
  width: 90%;
`;

const ProvidenceRI = () => {
  // EVENT HANDLERS

  const handleClick = () => window.open("https://gofund.me/2725d7e0", "_blank");

  // JSX

  return (
    <section>
      <P>
        We are trying to run this years fest as a <b>benefit for Gaza</b>, and we are
        trying to <b>keep our ticket prices low</b>.
      </P>
      <P>
        In order to do this, we are running a few benefit shows to cover the
        costs of the fest, or if you want to donate directly, you can use the
        button below.
      </P>
      <StyledFlyerContainer>
        <Image
          src="/images/posters/providence-5-31-benefit.png"
          alt="flyer by @buttcliff on Instagram"
          title="flyer by @buttcliff on Instagram"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "50%", height: "100%" }}
        />

        <Image
          src="/images/posters/providence-6-1-benefit.png"
          alt="flyer by @romero_a_crow on Instagram"
          title="flyer by @romero_a_crow on Instagram"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "50%", height: "100%" }}
        />
      </StyledFlyerContainer>
      <StyledButton onClick={handleClick}>Donate</StyledButton>
    </section>
  );
};

export default ProvidenceRI;
