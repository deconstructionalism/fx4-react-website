import { EventRow } from "@/app/_db/db";
import { formatDateForDisplay } from "@/app/_lib/databaseTransformers";
import styled from "styled-components";
import Divider from "./Divider";

// STYLES

const StyledFestName = styled.div(
  ({ theme }) => `
  display: flex;
  justify-content: center;

  & > h1 {
    font-family: ${theme.fonts.heading};
    font-size: ${theme.spacings.xl};
    font-weight: bold;
    margin-bottom: ${theme.spacings.s};
    letter-spacing: ${theme.spacings.xxs};
    color: ${theme.colors.primary};
    background-color: ${theme.colors.black};
    padding: ${theme.spacings.s} ${theme.spacings.m};
  }
`,
);

const StyledTitleText = styled.h2(
  ({ theme }) => `
  font-size: ${theme.spacings.xl};
  font-family: ${theme.fonts.body};
  text-transform: uppercase;
  margin-bottom: ${theme.spacings.xxs};
  text-align: center;
  font-weight: bold;
`,
);

const StyledSubTitleText = styled.h3(
  ({ theme }) => `
  font-size: ${theme.spacings.l};
  font-family: ${theme.fonts.body};
  margin-bottom: ${theme.spacings.xxs};
  text-align: center;
`,
);

interface EventMainInfoProps {
  data: EventRow;
}

const EventMainInfo = ({ data }: EventMainInfoProps) => {
  // DATA

  const { lineup, location, date, ticketCost } = data;

  // LOGIC

  const titleText = `${location.city} ${location.state} | ${formatDateForDisplay(date)}`;
  const locationText = `${location.name} ${location.street ? `(${location.street})` : ""}`;

  // JSX

  return (
    <div>
      <StyledFestName>
        <h1>FUCK THE FOURTH FEST</h1>
      </StyledFestName>
      <StyledTitleText>{titleText}</StyledTitleText>
      <StyledSubTitleText>{`${locationText}`}</StyledSubTitleText>
      {ticketCost ? (
        <StyledSubTitleText>{`${ticketCost}`}</StyledSubTitleText>
      ) : null}
      <Divider />
    </div>
  );
};

export default EventMainInfo;
