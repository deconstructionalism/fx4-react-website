// DATA TABLES

import { EventRow } from "./db.d";

const eventsTable: EventRow[] = [
  {
    index: 0,
    location: {
      city: "Lowell",
      state: "MA",
      name: "dm @jefrey_with_1f on Instagram for address",
    },
    date: new Date(2024, 6, 4),
    narrowBannerImage: {
      src: "/images/location-banners/lowell.jpg",
      title:
        "Unknown performer at 2023 Fight The Flock Fest in Lowell by @jefrey_with_1f on Instagram.",
    },
    socialMediaLinks: {
      instagram: {
        href: "https://www.instagram.com/p/C7EYaPFuehZ/",
        title: "Instagram",
      },
    },
    lineup: [
      { name: "Dying In Space" },
      { name: "Abdul Sherazi" },
      { name: "Professor A" },
      { name: "Cryptwarbler" },
      { name: "Closer Bones" },
      { name: "Birdorgan" },
      { name: "Killashandra Doe" },
      { name: "Dino Crisis" },
      { name: "R.C. Christian" },
      { name: "The Cost Ov Living" },
      { name: "A.Drift" },
      { name: "She/They Hazard" },
      { name: "Butt Mommy" },
      { name: "Zilmrah" },
      { name: "Compactor" },
      { name: "Farrah Faucet" },
      { name: "Yotzeret Sheydim" },
    ],
    eventPoster: {
      src: "/images/posters/lowell.jpg",
      title: "by @jefrey_with_1f on Instagram.",
    },
  },
  {
    index: 1,
    location: {
      street: "115 Empire St",
      city: "Providence",
      state: "RI",
      name: "AS220",
    },
    date: new Date(2024, 6, 5),
    narrowBannerImage: {
      src: "/images/location-banners/pvd.jpg",
      title:
        "Dreamcrusher at 2024 Fuck The Fourth Fest in Providence by @innovacancy on Instagram.",
    },
    socialMediaLinks: {
      instagram: {
        href: "https://www.instagram.com/fuckthefourthfest.pvd/",
        title: "Instagram",
      },
    },
    ticketLink: {
      href: "https://www.zeffy.com/en-US/ticketing/2a39a78f-08a8-4cc6-b559-4ac93a61e5c6",
      title: "Buy tickets now!",
      externalLink: true,
    },
    ticketCost: "$25, all ages",
    lineup: [
      { name: "Trophy Hunt" },
      { name: "Gyna Bootleg" },
      { name: "Foco" },
      { name: "Dogwalker" },
      { name: "Potter’s Field" },
      { name: "Persona" },
      { name: "Annihil" },
      { name: "Rectrix" },
      { name: "Move" },
      { name: "Sync Sapro" },
      { name: "Pharmakon" },
      { name: "MKOUR VILIJI" },
      { name: "Phagocyte" },
      { name: "Fatboi Sharif" },
      { name: "Rejekts" },
      { name: "Lal" },
    ],
  },
  {
    index: 2,
    location: {
      street: "176 St Nicholas Ave",
      city: "Brooklyn",
      state: "NY",
      name: "Mayday Space",
    },
    date: new Date(2024, 6, 6),
    narrowBannerImage: {
      src: "/images/location-banners/nyc.jpg",
      title: "Photo of c?c? by ??.",
    },
    socialMediaLinks: {},
    lineup: [
      { name: "Pharmakon" },
      { name: "Blu Anxxiety" },
      { name: "Murder Pact" },
      { name: "Foco " },
      { name: "Jacob Winans" },
      { name: "Saturn Lavender" },
    ],
  },
];

export { eventsTable };
