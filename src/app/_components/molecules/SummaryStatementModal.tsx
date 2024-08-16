import styled, { css } from "styled-components";

import Divider from "atoms/Divider";
import ExternalLink from "atoms/ExternalLink";
import Hanbala from "atoms/Hanbala";
import ModalContent from "atoms/ModalContent";
import ModalTitle from "atoms/ModalTitle";
import P from "atoms/P";

import wSS from "lib/sessionStorage";

import useModal from "@/app/_lib/useModal";

// STYLES

const StyledContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-bottom: calc(${theme.spacings.xxxl} * 2);
  `,
);

const StyledHanbalaContainer = styled.a`
  display: flex;
  justify-content: center;
`;

const StyledHanbala = styled(Hanbala)(
  ({ theme }) => css`
    cursor: pointer;
    height: calc(${theme.spacings.xl} * 8);
    padding-top: ${theme.spacings.l};
    transition: transform ${theme.timings.extraFast} ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  `,
);

const StyledTotalDonation = styled.h2(
  ({ theme }) => css`
    font-size: ${theme.spacings.xxl};
    text-align: center;
  `,
);

const StyledCenteredP = styled(P)(
  ({ theme }) => css`
    margin: 0;
    font-size: ${theme.spacings.xl};
    font-weight: bold;
    text-align: center;
  `,
);

const SummaryStatementModal = () => {
  // STATE

  const closeModal = useModal((state) => state.closeModal);

  // EVENT HANDLERS

  const handleHanbalaClick = () => {
    wSS(sessionStorage).set("hasReadSummary", true);
    closeModal();
  };

  // JSX

  return (
    <>
      <ModalTitle>Fundraising Summary</ModalTitle>
      <Divider />
      <ModalContent>
        <StyledContainer>
          <StyledTotalDonation>
            <b>$5440</b> in proceeds from <b>three fests</b> and{" "}
            <b>one affiliate event</b> have been donated to the{" "}
            <b>
              <ExternalLink href="https://www.pcrf.net/">
                Palestinian Children’s Relief Fund.
              </ExternalLink>
            </b>
          </StyledTotalDonation>
          <P>
            We need to do more than hope the situation in Gaza will improve,
            when our tax dollars, media machinery, political class, and military
            industrial complex aids, abets, and white washes the genocide of
            tens of thousands of Palestinian lives at the hands of the occupying
            entity.
          </P>
          <P>
            We cannot sit quietly, rendered impotent by a sense of unavoidable
            doom, and watch the world happen to us and around us. We cannot pat
            ourselves on the back and consider the work done, as long as
            Palestinians suffer at the hands of the occupation, as long as women
            lose their rights, as long as trans people get hunted, attacked, and
            killed by an invented media circus, as long as black and brown
            people keep getting murdered in cold blood by the thugs in blue that
            prowl our streets, as long as fascism threatens to overtake a
            corrupt liberalism that does nothing to stop it, as long as less and
            less is done to provide working people with resources to survive, as
            long as a nation built on stolen labor, stolen lands, and stolen
            lives continues to bring prosperity to the fewer and fewer at the
            expense of entire bloodlines, countries, and peoples.
          </P>
          <P>
            We must be willing to fight for seemingly impossible things, like
            real freedom, emancipation, justice, and peace. We must prepared to
            struggle. Through breaches in the rusting armor of colonial realism,
            and through the killing joke that must eventually come down on the
            world-eating capitalist machine, we will find a more fertile hidden
            reality, where we can flourish like wild flowers and spread love,
            rage, and radical difference to all places where people suffer
            needlessly under a normality they never agreed upon that aims to use
            them up and spit them out.
          </P>
          <P>
            Instead, we will grow closer and more capable together, in order to
            save ourselves and those like us from annihilation and give
            ourselves and those like us a chance to imagine a future worth
            living in.
          </P>
          <StyledCenteredP>FREE PALESTINE.</StyledCenteredP>
          <StyledCenteredP>FUCK THE FOURTH.</StyledCenteredP>
          <StyledCenteredP>FUCK THE USA. </StyledCenteredP>
          <StyledCenteredP>LOVE EACH OTHER, NOT THE STATE.</StyledCenteredP>
          <StyledHanbalaContainer onClick={handleHanbalaClick}>
            <StyledHanbala />
          </StyledHanbalaContainer>
        </StyledContainer>
      </ModalContent>
    </>
  );
};

export default SummaryStatementModal;
