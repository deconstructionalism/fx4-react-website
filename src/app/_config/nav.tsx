import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faCrosshairs,
  faEnvelope,
  faCircleQuestion,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { NavItemConfig, SubNavItemConfig } from "../_config/nav.d";
import cursor, { EventLocationRow } from "../_db";
import { locationToURL } from "../_lib/databaseTransformers";

// HELPER FUNCTIONS

/**
 * Convert a location table row to a sub-navigation item.
 * @param location - the location table row to convert to a sub-navigation item.
 */
const cityToSubNavItemConfig = (
  location: EventLocationRow,
): SubNavItemConfig => ({
  title: location.city,
  href: locationToURL(location),
});

// DATA

const locations = cursor.get("locations");

// CONFIG

const NAV_CONFIG: NavItemConfig[] = [
  {
    title: "Locations",
    href: "/locations",
    icon: faCrosshairs,
    subNavConfig: locations.map(cityToSubNavItemConfig),
  },
  {
    title: "About",
    href: "/about",
    icon: faCircleQuestion,
  },
  // {
  //   title: "DIY",
  //   href: "/diy",
  //   icon: faScrewdriverWrench,
  // },
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
