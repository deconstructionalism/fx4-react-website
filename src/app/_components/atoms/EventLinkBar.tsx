import {
  IconDefinition,
  faBandcamp,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faGlobe,
  faHandHoldingHeart,
  faShirt,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";

import Divider from "atoms/Divider";

import { EventRow } from "@/app/_db/db";

// CONSTANTS

const SOCIAL_MEDIA_ICONS = {
  instagram: faInstagram,
  facebook: faFacebook,
  twitter: faTwitter,
  bandcamp: faBandcamp,
} satisfies Record<keyof EventRow["socialMediaLinks"], IconDefinition>;

const EVENT_LINK_ICONS = {
  websiteLink: faGlobe,
  ticketLink: faTicket,
  merchandiseLink: faShirt,
  donationLink: faHandHoldingHeart,
} satisfies Record<keyof EventRow["eventLinks"], IconDefinition>;

const SOCIAL_MEDIA_ORDER = [
  "instagram",
  "facebook",
  "twitter",
  "bandcamp",
] satisfies (keyof EventRow["socialMediaLinks"])[];

const EVENT_LINK_ORDER = [
  "websiteLink",
  "ticketLink",
  "merchandiseLink",
  "donationLink",
] satisfies (keyof EventRow["eventLinks"])[];

const LINK_ORDER = [...EVENT_LINK_ORDER, ...SOCIAL_MEDIA_ORDER];

// HELPER FUNCTIONS

/**
 * Type guard for social media links.
 * @param link - The link to check.
 */
const isSocialMediaLink = (
  link: string,
): link is keyof typeof SOCIAL_MEDIA_ICONS => {
  return Object.keys(SOCIAL_MEDIA_ICONS).includes(link);
};

// STYLES

const StyledSocialLinkBar = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: ${theme.spacings.xxl};
    align-items: center;
    justify-content: center;

    margin-top: ${theme.spacings.xl};
  `,
);

const StyledLinkIcon = styled(FontAwesomeIcon)(
  ({ theme }) => css`
    cursor: pointer;
    font-size: ${theme.spacings.xxxl};
    color: ${theme.colors.black};
    transition: color ${theme._timings.Link.transitionSpeed} ease;

    &:hover {
      color: ${theme._colors.Link.hoverColor};
    }

    &.ticket-link {
      animation: pulse ${theme.timings.fast} infinite;
    }

    @keyframes pulse {
      0% {
        transform: scale(1);
        color: ${theme.colors.black};
      }

      50% {
        transform: scale(1.1);
        color: ${theme.colors.primary};
      }

      100% {
        transform: scale(1);
        color: ${theme.colors.black};
      }
    }
  `,
);

interface EventLinkBarProps {
  data: EventRow;
}

const EventLinkBar = ({ data }: EventLinkBarProps) => {
  // DATA

  const { socialMediaLinks, eventLinks } = data;

  // EVENT HANDLERS

  const handleClick = (href: string) => window.open(href, "_blank");

  // LOGIC

  const Links = LINK_ORDER.reduce<JSX.Element[]>((acc, link, index) => {
    const linkData = isSocialMediaLink(link)
      ? socialMediaLinks[link]
      : eventLinks[link];
    if (!linkData) return acc;

    const icon = isSocialMediaLink(link)
      ? SOCIAL_MEDIA_ICONS[link]
      : EVENT_LINK_ICONS[link];
    const Link = (
      <div
        key={index}
        title={linkData.title}
        onClick={() => handleClick(linkData.href)}
      >
        <StyledLinkIcon
          className={icon === EVENT_LINK_ICONS.ticketLink ? "ticket-link" : ""}
          icon={icon}
        />
      </div>
    );
    return [...acc, Link];
  }, []);

  // JSX

  if (Links.length === 0) return null;

  return (
    <>
      <StyledSocialLinkBar>{Links}</StyledSocialLinkBar>
      <Divider />
    </>
  );
};

export default EventLinkBar;
