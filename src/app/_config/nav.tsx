import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faCrosshairs,
  faEnvelope,
  faInfo,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import SubNavLocationLink from "../_components/atoms/SubNavLocationLink";
import { NavItemConfig } from "../_config/nav.d";

// CONFIG

const NAV_CONFIG: NavItemConfig[] = [
  {
    title: "Locations",
    href: "/locations",
    icon: faCrosshairs,
    subNavConfig: [
      {
        title: (
          <SubNavLocationLink
            city="Lowell"
            state="MA"
            date={new Date("2024-07-04")}
          />
        ),
        href: "/locations/lowell-ma",
      },
      {
        title: (
          <SubNavLocationLink
            city="Providence"
            state="RI"
            date={new Date("2024-07-05")}
          />
        ),
        href: "/locations/providence-ri",
      },
      {
        title: (
          <SubNavLocationLink
            city="New York City"
            state="NY"
            date={new Date("2024-07-06")}
          />
        ),
        href: "/locations/new-york-city-ny",
      },
    ],
  },
  {
    title: "About",
    href: "/about",
    icon: faInfo,
  },
  {
    title: "DIY",
    href: "/diy",
    icon: faScrewdriverWrench,
  },
  {
    title: "Contact",
    href: "mailto:info@fuckthefourth.com",
    icon: faEnvelope,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/fuckthefourthfest",
    icon: faInstagram,
    externalLink: true,
  },
];

export default NAV_CONFIG;
