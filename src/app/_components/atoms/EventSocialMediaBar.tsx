import { EventRow } from "@/app/_db/db";
import {
  IconDefinition,
  faBandcamp,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

// CONSTANTS

const SOCIAL_MEDIA_ICONS = {
  instagram: faInstagram,
  facebook: faFacebook,
  twitter: faTwitter,
  bandcamp: faBandcamp,
} satisfies Record<keyof EventRow["socialMediaLinks"], IconDefinition>;

// STYLES

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

  const handleClick = (href: string) => window.open(href, "_blank");

  const Links = Object.entries(socialMediaLinks).map(([name, link], index) => {
    if (!link) return null;
    const icon = name as keyof typeof SOCIAL_MEDIA_ICONS;

    return (
      <div
        key={index}
        title={link.title}
        onClick={() => handleClick(link.href)}
      >
        <StyledSocialMediaIcon icon={SOCIAL_MEDIA_ICONS[icon]} />
      </div>
    );
  });

  // JSX

  return <StyledSocialMediaBar>{Links}</StyledSocialMediaBar>;
};

export default EventSocialMediaBar;
