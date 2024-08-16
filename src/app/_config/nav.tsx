import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faCircleQuestion,
  faCrosshairs,
  faEnvelope,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";

import { NavItemConfig, SubNavItemConfig } from "config/nav.d";
import { eventToURL } from "lib/databaseTransformers";

import cursor from "@/app/_db/cursor";
import { EventRow } from "@/app/_db/db.d";

// HELPER FUNCTIONS

/**
 * Convert an event table row to a sub-navigation item.
 * @param location - the event table row to convert to a sub-navigation item.
 */
const cityToSubNavItemConfig = (event: EventRow): SubNavItemConfig => ({
  title: event.location.city,
  href: eventToURL(event),
});

// DATA

const events = cursor.get("events");

// CONFIG

const NAV_CONFIG: NavItemConfig[] = [
  {
    title: "Locations",
    href: "/locations",
    icon: faCrosshairs,
    subNavConfig: events.map(cityToSubNavItemConfig),
  },
  {
    title: "About",
    href: "/about",
    icon: faCircleQuestion,
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

export const MAIN_ROUTE = "/locations";

export default NAV_CONFIG;
