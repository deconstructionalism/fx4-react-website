import styled, { css } from "styled-components";

import { BandData } from "@/app/_db/db";

// STYLES

const StyledBand = styled.div<{ $hasLink: boolean }>(
  ({ theme, $hasLink }) => css`
    font-family: ${theme.fonts.body};
    font-size: ${theme.spacings.l};
    text-align: center;
    text-transform: uppercase;

    & > span {
      cursor: ${$hasLink ? "pointer" : "inherit"};
      transition: color ${theme._timings.Link.transitionSpeed} ease;

      &:hover {
        color: ${$hasLink ? theme.colors.primary : "inherit"};
      }
    }
  `,
);

interface EventLineupBandProps {
  bandData: BandData;
}

const EventLineupBand = ({ bandData }: EventLineupBandProps) => {
  // DATA

  const { name, website, socialMediaLinks } = bandData;

  // EVENT HANDLERS

  const handleClick = () => {
    linkHref && window.open(linkHref, "_blank");
  };

  // LOGIC

  const linkHref =
    website?.href ||
    socialMediaLinks?.bandcamp?.href ||
    socialMediaLinks?.instagram?.href ||
    socialMediaLinks?.facebook?.href ||
    socialMediaLinks?.twitter?.href;

  const hasLink = linkHref !== undefined;

  // JSX

  return (
    <StyledBand $hasLink={hasLink}>
      <span onClick={handleClick}>{name}</span>
    </StyledBand>
  );
};

export default EventLineupBand;
