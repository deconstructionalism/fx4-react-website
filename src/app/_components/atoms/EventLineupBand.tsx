import { BandData } from "@/app/_db/db";
import styled from "styled-components";

// STYLES

const StyledBand = styled.div<{ $hasLink: boolean }>(
  ({ theme, $hasLink }) => `
  font-family: ${theme.fonts.heading};
  text-align: center;
  font-size: ${theme.spacings.l};

  & > span  {
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
