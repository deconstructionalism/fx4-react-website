// DATA TABLES
import { EventRow, FeatureFlag } from "@/app/_db/db.d";

// HELPER FUNCTIONS
/**
 * Defines feature flags in an object allowing intellisense to access feature
 * flag keys by name.
 *
 * @param flags - records of feature flags.
 * @returns feature flags keyed by name.
 */
const defineFeatureFlags = <T extends Record<string, FeatureFlag>>(
  flags: T,
): T => {
  return flags;
};

const featureFlags = defineFeatureFlags({
  comingSoon2025: {
    description: "2025 band and locations have yet to be announced",
    active: true,
  },
});

const eventsTable: EventRow[] = [
  {
    index: 0,
    location: {
      city: "Lowell",
      state: "MA",
      name: "DM for address",
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
    eventLinks: {},
    ticketCost: "$5",
    lineup: [
      {
        name: "Dying In Space",
        socialMediaLinks: {
          bandcamp: { href: "https://dyinginspace.bandcamp.com/" },
        },
      },
      { name: "Abdul Sherazi" },
      { name: "Professor A" },
      {
        name: "Cryptwarbler",
        socialMediaLinks: {
          bandcamp: { href: "https://cryptwarbler.bandcamp.com/" },
        },
      },
      {
        name: "Closer Bones",
        socialMediaLinks: {
          bandcamp: { href: "https://closerbones.bandcamp.com/" },
        },
      },
      {
        name: "Birdorgan",
        socialMediaLinks: {
          bandcamp: { href: "https://birdorgan.bandcamp.com/" },
        },
      },
      { name: "Killashandra Doe" },
      {
        name: "Dino Crisis",
        socialMediaLinks: {
          bandcamp: { href: "https://dinocrisis.bandcamp.com/" },
        },
      },
      {
        name: "R.C. Christian",
        socialMediaLinks: {
          instagram: { href: "https://www.instagram.com/r_c_christian/" },
        },
      },
      {
        name: "The Cost Ov Living",
        socialMediaLinks: {
          bandcamp: { href: "https://thecol.bandcamp.com/" },
        },
      },
      { name: "A.Drift" },
      {
        name: "She/They Hazard",
        socialMediaLinks: {
          instagram: { href: "https://www.instagram.com/she_theyhazard/" },
        },
      },
      {
        name: "Butt Mommy",
        socialMediaLinks: {
          bandcamp: { href: "https://buttmommy.bandcamp.com" },
        },
      },
      {
        name: "Zilmrah",
        socialMediaLinks: {
          bandcamp: { href: "https://zilmrah.bandcamp.com/" },
        },
      },
      {
        name: "Whitey Alabastard",
        socialMediaLinks: {
          bandcamp: {
            href: "https://figurerecords.bandcamp.com/album/perdition",
          },
        },
      },
      {
        name: "Farrah Faucet",
        socialMediaLinks: {
          bandcamp: { href: "https://farrahfaucet.bandcamp.com/" },
        },
      },
      {
        name: "Yotzeret Sheydim",
        socialMediaLinks: {
          bandcamp: { href: "https://yotzeretsheydim.bandcamp.com/" },
        },
      },
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
    announcement:
      "We've had a few lineup changes: lal, Foco, and Airbag dropped and we have added Tokarev (PVD) and Trace Amount (NYC).",
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
      youtube: {
        href: "https://www.youtube.com/channel/UCQhMvFpra8NIA6fh5O6R7lA",
        title: "Youtube",
      },
    },
    eventLinks: {
      // ticketLink: {
      //   href: "https://www.zeffy.com/en-US/ticketing/2a39a78f-08a8-4cc6-b559-4ac93a61e5c6",
      //   title: "Buy tickets now!",
      //   externalLink: true,
      // },
      merchandiseLink: {
        href: "https://fx4fest.square.site",
        title: "Get official drip!",
        externalLink: true,
      },
      // donationLink: {
      //   href: "https://gofund.me/bd65c9a6",
      //   title: "Donate to the fest and fundraiser",
      //   externalLink: true,
      // },
    },
    ticketCost: "$25, all ages",
    lineup: [
      {
        name: "Trophy Hunt",
        socialMediaLinks: {
          bandcamp: {
            href: "https://trophyhunt.bandcamp.com/album/the-branches-on-either-side",
          },
        },
      },
      {
        name: "Gyna Bootleg",
        socialMediaLinks: {
          bandcamp: { href: "https://gynabootleg.bandcamp.com/" },
        },
      },
      {
        name: "Tokarev",
        socialMediaLinks: {
          instagram: {
            href: "https://www.instagram.com/our.providence/reel/C8UlXvosbjk",
          },
        },
      },
      {
        name: "Dogwalker",
        socialMediaLinks: {
          bandcamp: { href: "https://dogwalker.bandcamp.com/" },
        },
      },
      {
        name: "Potters Field",
        socialMediaLinks: {
          bandcamp: { href: "https://pottersfieldnj.bandcamp.com/" },
        },
      },
      {
        name: "Persona",
        socialMediaLinks: {
          bandcamp: { href: "https://personanyc.bandcamp.com/" },
        },
      },
      {
        name: "Annihil",
        socialMediaLinks: {
          bandcamp: { href: "https://annihil.bandcamp.com/" },
        },
      },
      {
        name: "Rectrix",
        socialMediaLinks: {
          bandcamp: {
            href: "https://bonedustprov.bandcamp.com/album/desperate-measure",
          },
        },
      },
      {
        name: "Move",
        socialMediaLinks: {
          bandcamp: { href: "https://move-bhc.bandcamp.com/" },
        },
      },
      { name: "Sync Sapro", website: { href: "https://www.syncsapro.com/" } },
      {
        name: "Pharmakon",
        socialMediaLinks: {
          bandcamp: { href: "https://pharmakon.bandcamp.com/" },
        },
      },
      {
        name: "MKOUR VILIJI",
        socialMediaLinks: {
          bandcamp: { href: "https://mackenzierecordsyou.bandcamp.com/" },
        },
      },
      {
        name: "Phagocyte",
        socialMediaLinks: {
          bandcamp: { href: "https://phagocyte-doesnt-like-u.bandcamp.com/" },
        },
      },
      {
        name: "Fatboi Sharif",
        socialMediaLinks: {
          bandcamp: { href: "https://fatboisharif.bandcamp.com" },
        },
      },
      {
        name: "Rejekts",
        socialMediaLinks: {
          bandcamp: { href: "https://rejektsboston.bandcamp.com/" },
        },
      },
      {
        name: "Trace Amount",
        socialMediaLinks: {
          bandcamp: { href: "https://traceamountnyc.bandcamp.com" },
        },
      },
    ],
    eventPoster: {
      src: "/images/posters/providence.jpg",
      title: "by Pippi Zornova.",
    },
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
    socialMediaLinks: {
      instagram: {
        href: "https://www.instagram.com/fuckthefourthfest.nyc",
      },
    },
    eventLinks: {},
    eventPoster: {
      src: "/images/posters/brooklyn.jpg",
      title: "by @unsanctuary on Instagram.",
    },
    lineup: [
      {
        name: "Pharmakon",
        socialMediaLinks: {
          bandcamp: { href: "https://pharmakon.bandcamp.com/" },
        },
      },
      {
        name: "Blu Anxxiety",
        socialMediaLinks: {
          bandcamp: { href: "https://bluanxxiety.bandcamp.com/" },
        },
      },
      {
        name: "Murder Pact",
        socialMediaLinks: {
          bandcamp: { href: "https://murderpact.bandcamp.com/" },
        },
      },
      {
        name: "Foco",
        socialMediaLinks: {
          bandcamp: {
            href: "https://focoizm.bandcamp.com/",
          },
        },
      },
      {
        name: "Mercury Symbol",
        socialMediaLinks: {
          bandcamp: {
            href: "https://mercurysymbol.bandcamp.com/",
          },
        },
      },
      {
        name: "Jacob Winans",
        socialMediaLinks: {
          bandcamp: {
            href: "https://1-1-7.bandcamp.com/album/117-13-bound-for-the-floor",
          },
        },
      },
      {
        name: "Saturn Lavender",
        socialMediaLinks: {
          bandcamp: {
            href: "https://saturnlavender.bandcamp.com/album/green-in-grey",
          },
        },
      },
    ],
  },
];

export { eventsTable, featureFlags };
