"use client";

import { usePathname } from "next/navigation";
import cursor from "../_db/cursor";
import { eventToURL, formatDateForDisplay } from "../_lib/databaseTransformers";
import { EventRow } from "../_db/db";
import {
  IconDefinition,
  faBandcamp,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Button from "../_components/atoms/Button";
import Link from "../_components/atoms/Link";
import Image from "next/image";

// CONSTANTS

const SOCIAL_MEDIA_ICONS = {
  instagram: faInstagram,
  facebook: faFacebook,
  twitter: faTwitter,
  bandcamp: faBandcamp,
} satisfies Record<keyof EventRow["socialMediaLinks"], IconDefinition>;

// STYLES

const StyledSection = styled.section(
  ({ theme }) => `
  padding-top: ${theme.spacings.l};
`,
);

// STYLES

const StyledTicketButton = styled(Button)(
  ({ theme }) => `
  width: 90%;
  margin: ${theme.spacings.xs} auto;
`,
);

interface TicketButtonProps {
  data: EventRow;
}

const TicketButton = ({ data }: TicketButtonProps) => {
  // EVENT HANDLERS

  const handleTicketButtonClick = (href: string) => {
    window.open(href, "_blank");
  };

  // JSX
  if (!data?.ticketLink) return null;

  return (
    <StyledTicketButton
      onClick={handleTicketButtonClick.bind(null, data.ticketLink.href)}
      title={data.ticketLink.title}
    >
      {data.ticketLink.title}
    </StyledTicketButton>
  );
};

const StyledSocialMediaBar = styled.div(
  ({ theme }) => `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: ${theme.spacings.xl};
  gap: ${theme.spacings.xxl};
`,
);

const StyledSocialMediaIcon = styled(FontAwesomeIcon)(
  ({ theme }) => `
  font-size: ${theme.spacings.xxxl};
  color: ${theme.colors.black};
  transition: color ${theme._timings.Link.transitionSpeed} ease;

  &:hover {
    color: ${theme._colors.Link.hoverColor};
  }
`,
);

interface EventSocialMediaBarProps {
  data: EventRow;
}

const EventSocialMediaBar = ({ data }: EventSocialMediaBarProps) => {
  // LOGIC

  const { socialMediaLinks } = data;

  const Links = Object.entries(socialMediaLinks).map(([name, link], index) => {
    if (!link) return null;
    const icon = name as keyof typeof SOCIAL_MEDIA_ICONS;

    return (
      <Link
        key={index}
        href={link.href}
        title={link.title}
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledSocialMediaIcon icon={SOCIAL_MEDIA_ICONS[icon]} />
      </Link>
    );
  });

  // JSX

  return <StyledSocialMediaBar>{Links}</StyledSocialMediaBar>;
};

// STYLES

const StyledTitleText = styled.h1(
  ({ theme }) => `
  font-size: ${theme.spacings.xl};
  font-family: ${theme.fonts.body};
  text-transform: uppercase;
  margin-top: ${theme.spacings.xxl};
  margin-bottom: ${theme.spacings.s};
  text-align: center;
  font-weight: bold;
`,
);

const StyledSubTitleText = styled.h2(
  ({ theme }) => `
  font-size: ${theme.spacings.xl};
  font-family: ${theme.fonts.body};
  margin-bottom: ${theme.spacings.s};
  text-align: center;
`,
);

const StyledDivider = styled.hr(
  ({ theme }) => `
  border: 0;
  border-top: 1px solid ${theme.colors.black};
  margin: ${theme.spacings.xxl} auto;
  width: 100%;
`,
);

const StyledLineup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledLineupItem = styled.span(
  ({ theme }) => `
  width: 33%;
  font-family: ${theme.fonts.heading};
  text-align: center;
  font-size: ${theme.spacings.l};
`,
);

interface NoPosterInfoProps {
  data: EventRow;
}

const NoPosterInfo = ({ data }: NoPosterInfoProps) => {
  // DATA

  const { lineup, location, date, ticketCost } = data;

  // LOGIC

  const titleText = `${location.city} ${location.state} | ${formatDateForDisplay(date)}`;
  const locationText = `${location.name} ${location.street ? `(${location.street})` : ""}`;

  const Bands = lineup.map((band, index) => {
    return <StyledLineupItem key={index}>{band.name}</StyledLineupItem>;
  });

  // JSX

  return (
    <div>
      <StyledTitleText>{titleText}</StyledTitleText>
      <StyledSubTitleText>{`${locationText}`}</StyledSubTitleText>
      {ticketCost ? (
        <StyledSubTitleText>{`${ticketCost}`}</StyledSubTitleText>
      ) : null}
      <StyledDivider />
      <StyledLineup>{Bands} </StyledLineup>
    </div>
  );
};

// TYPES

interface LocationPageLayoutProps {
  children: React.ReactNode;
}

const LocationPageLayout = ({ children }: LocationPageLayoutProps) => {
  // DATA

  const eventsData = cursor.get("events");

  // STATE

  const pathname = usePathname();

  // LOGIC

  const urls = eventsData.map(eventToURL);
  const eventIndex = urls.findIndex((url) => url === pathname);
  const eventData = eventsData[eventIndex];

  // JSX

  if (!eventData) return <>{children}</>;

  return (
    <StyledSection>
      <TicketButton data={eventData} />
      {eventData.eventPoster ? (
        <Image
          src={eventData.eventPoster.src}
          alt={eventData.eventPoster.title}
          title={eventData.eventPoster.title}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      ) : (
        <NoPosterInfo data={eventData} />
      )}
      <StyledDivider />
      {children}
      <EventSocialMediaBar data={eventData} />
    </StyledSection>
  );
};

export default LocationPageLayout;
