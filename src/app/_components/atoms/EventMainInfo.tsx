import styled, { css } from "styled-components";

import Divider from "atoms/Divider";

import { formatDateForDisplay } from "lib/databaseTransformers";

import { EventRow } from "@/app/_db/db";

// STYLES

const StyledFestName = styled.div(
  ({ theme }) => css`
    display: flex;
    justify-content: center;

    & > h1 {
      margin-bottom: ${theme.spacings.s};
      padding: ${theme.spacings.s} ${theme.spacings.m};

      font-family: ${theme.fonts.heading};
      font-size: ${theme.spacings.xl};
      font-weight: bold;
      color: ${theme.colors.primary};
      letter-spacing: ${theme.spacings.xxs};

      background-color: ${theme.colors.black};
    }
  `,
);

const StyledTitleText = styled.h2(
  ({ theme }) => css`
    margin-bottom: ${theme.spacings.xxs};

    font-family: ${theme.fonts.body};
    font-size: ${theme.spacings.xl};
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
  `,
);

const StyledSubTitleText = styled.h3(
  ({ theme }) => css`
    margin-bottom: ${theme.spacings.xxs};
    font-family: ${theme.fonts.body};
    font-size: ${theme.spacings.l};
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
