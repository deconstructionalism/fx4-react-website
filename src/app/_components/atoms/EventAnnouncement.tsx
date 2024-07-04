import styled, { css } from "styled-components";

import Divider from "atoms/Divider";

import { EventRow } from "@/app/_db/db";

// STYLES

const StyledAnnouncement = styled.div(
  ({ theme }) => css`
    padding: ${theme.spacings.s};

    font-family: ${theme.fonts.body};
    font-size: ${theme.spacings.m};
    font-weight: bold;
    color: ${theme.colors.black};
    text-align: center;

    background: ${theme.colors.primary};
  `,
);

interface EventAnnouncementProps {
  data: EventRow;
}

const EventAnnouncement = ({ data }: EventAnnouncementProps) => {
  // JSX

  if (!data.announcement) return null;

  return (
    <>
      <StyledAnnouncement>{data.announcement}</StyledAnnouncement>

      <Divider />
    </>
  );
};

export default EventAnnouncement;
