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

const featureFlags = defineFeatureFlags({});

const eventsTable: EventRow[] = [
  {
    index: 0,
    location: {
      city: "Chicago",
      state: "IL",
      name: "Collider Underground",
      street: "DM for address",
    },
    date: new Date(2025, 6, 4),
    narrowBannerImage: {
      src: "/images/location-banners/lowell.jpg",
      title:
        "Unknown performer at 2023 Fight The Flock Fest in Lowell by @jefrey_with_1f on Instagram.",
    },
    socialMediaLinks: {
      instagram: {
        href: "https://www.instagram.com/p/DLKoR6isTF_/",
        title: "Instagram",
      },
    },
    eventLinks: {},
    ticketCost: "$10 or PWYC NOTAFLOF",
    lineup: [
      {
        name: "Butt Mommy",
        socialMediaLinks: {
          bandcamp: { href: "https://buttmommy.bandcamp.com/" },
        },
      },
      { name: "Animatronic" },
      {
        name: "Melon Sprout",
        socialMediaLinks: {
          bandcamp: { href: "https://melonsprout4.bandcamp.com/" },
        },
      },
      {
        name: "Consumer",
        socialMediaLinks: {
          bandcamp: { href: "https://consumermp.bandcamp.com/" },
        },
      },
      {
        name: "Clark Woods",
      },
      {
        name: "New Goo",
        socialMediaLinks: {
          bandcamp: { href: "https://newgoo.bandcamp.com/" },
        },
      },
    ],
    eventPoster: {
      src: "/images/posters/chicago.jpg",
      title: "by @jefrey_with_1f on Instagram.",
    },
  },
  {
    index: 1,
    location: {
      name: "Mayday Space",
      street: "176 St Nicholas Ave",
      city: "Brooklyn",
      state: "NY",
      website: { href: "https://maydayspace.org/" },
    },
    date: new Date(2025, 6, 4),
    narrowBannerImage: {
      src: "/images/location-banners/brooklyn.jpg",
      title: "Photo from New Versus City 4 by @zippeee on Instagram.",
    },
    socialMediaLinks: {
      instagram: {
        href: "https://www.instagram.com/fuckthefourthfest.nyc/",
        title: "Instagram",
      },
    },
    eventLinks: {},
    ticketCost: "$20-60 donation; $10-30 NOTAFLOF 4 QTBIPOC; Bring cash",
    lineup: [
      {
        name: "Dreamcrusher",
        socialMediaLinks: {
          bandcamp: { href: "https://dreamcrusher.bandcamp.com/" },
        },
      },
      {
        name: "Samantha Riot",
        socialMediaLinks: {
          bandcamp: { href: "https://samanthariott.bandcamp.com/" },
        },
      },
      {
        name: "Bonnie Baxter",
        socialMediaLinks: {
          bandcamp: { href: "https://killalters.bandcamp.com/" },
        },
      },
      {
        name: "Indigequeer",
        socialMediaLinks: {
          bandcamp: { href: "https://www.instagram.com/indigequeer/" },
        },
      },
      {
        name: "Dad",
      },
      {
        name: "0ophoro",
        socialMediaLinks: {
          bandcamp: { href: "https://0ophoro.bandcamp.com/" },
        },
      },
      {
        name: '"Sweet"',
        socialMediaLinks: {
          instagram: { href: "https://www.instagram.com/gatebreaking/" },
        },
      },
      {
        name: "Kwami",
        socialMediaLinks: {
          bandcamp: { href: "https://kwamiwinfield.bandcamp.com/" },
        },
      },
      {
        name: "Mankid",
        website: { href: "https://machin3gir1.com/" },
      },
      {
        name: "Reagan Holiday",
        socialMediaLinks: {
          bandcamp: { href: "https://reaganholiday.bandcamp.com/" },
        },
      },
      {
        name: "Milkmans Molotov",
        socialMediaLinks: {
          bandcamp: { href: "https://milkmansmolotov.bandcamp.com/" },
        },
      },
      {
        name: "Safra",
        socialMediaLinks: {
          instagram: { href: "https://www.instagram.com/safratadesse/" },
        },
      },
      {
        name: "Dagger Wound",
        socialMediaLinks: {
          instagram: { href: "https://www.instagram.com/dagger.wound/" },
        },
      },
      {
        name: "Mira Mira",
        socialMediaLinks: {
          instagram: { href: "https://www.instagram.com/miraaasamiraaa/" },
        },
      },
      {
        name: "Gladstone Deluxe",
        socialMediaLinks: {
          bandcamp: { href: "https://gladstonebutler.bandcamp.com/" },
        },
      },
      {
        name: "Key Hutch",
        socialMediaLinks: {
          bandcamp: { href: "https://keyhutch.bandcamp.com/" },
        },
      },
      {
        name: "Nana XOXO",
        socialMediaLinks: {
          instagram: { href: "https://www.instagram.com/luvnanaxoxo" },
        },
      },
      {
        name: "Rohana",
        socialMediaLinks: {
          instagram: { href: "https://www.instagram.com/r.o.h.a.n.a/" },
        },
      },
      {
        name: "Harpy",
        socialMediaLinks: {
          bandcamp: { href: "https://harpyprovidence.bandcamp.com/" },
        },
      },
      {
        name: "Tamio Shiraishi",
        socialMediaLinks: {
          bandcamp: { href: "https://shiraishitamio.bandcamp.com/" },
        },
      },
      {
        name: "Rocco",
        socialMediaLinks: {
          instagram: { href: "https://www.instagram.com/roccorr/" },
        },
      },
      {
        name: "Neve",
      },
    ],
    eventPoster: {
      src: "/images/posters/brooklyn.jpg",
      title: "by @gatebreaking on Instagram.",
    },
  },
  {
    index: 2,
    location: {
      name: "Trans Pecos",
      street: "916 Wyckoff Ave",
      city: "Ridgewood",
      state: "NY",
      website: { href: "https://www.thetranspecos.com/" },
    },
    date: new Date(2025, 6, 4),
    narrowBannerImage: {
      src: "/images/location-banners/ridgewood.jpg",
      title: "Photo from @imm0l888 on Instagram.",
    },
    socialMediaLinks: {
      instagram: {
        href: "https://www.instagram.com/p/DLWB3a8Nr2n/",
        title: "Instagram",
      },
    },
    eventLinks: {
      ticketLink: {
        href: "https://tickets.venuepilot.com/e/immolate-fuck-the-4th-burn-down-the-usa-2025-07-04-trans-pecos-ridgewood-queens-f012ba",
      },
    },
    ticketCost: "$17 pre-sale, $20 at the door, 21+",
    lineup: [
      {
        name: "Bacterial Lawn",
        socialMediaLinks: {
          instagram: { href: "https://www.instagram.com/bacteriallawn/" },
        },
      },
      {
        name: "537h",
        socialMediaLinks: {
          instagram: { href: "https://www.instagram.com/537h.00/" },
        },
      },
      {
        name: "Bubblegum Octopus",
        socialMediaLinks: {
          bandcamp: { href: "https://bubblegumoctopus.bandcamp.com/" },
        },
      },
      {
        name: "Deejay Chainwallet",
        socialMediaLinks: {
          soundcloud: { href: "https://soundcloud.com/deejaychainwallet" },
        },
      },
      {
        name: "Grooming",
        socialMediaLinks: {
          bandcamp: { href: "https://aleclambert.bandcamp.com/" },
        },
      },
      {
        name: "Zac-a-rama!",
        socialMediaLinks: {
          bandcamp: { href: "https://zacarama.bandcamp.com/" },
        },
      },
      {
        name: "AKAFAË",
        socialMediaLinks: {
          instagram: { href: "https://akafae.bandcamp.com/" },
        },
      },
      {
        name: "DJ Necroface",
        socialMediaLinks: {
          soundcloud: { href: "https://soundcloud.com/flyv33/" },
        },
      },
      {
        name: "Sodomahigomorra",
        socialMediaLinks: {
          instagram: { href: "https://www.instagram.com/sodomahigomorra" },
        },
      },
      {
        name: "Fortified Structures",
        socialMediaLinks: {
          bandcamp: { href: "https://fortifiedstructures.bandcamp.com/" },
        },
      },
      {
        name: "Cuntry Girls Make Do",
      },
    ],
    eventPoster: {
      src: "/images/posters/ridgewood.jpeg",
      title: "by @gatebreaking on Instagram.",
    },
  },
  {
    index: 3,
    location: {
      street: "115 Empire St",
      city: "Providence",
      state: "RI",
      name: "AS220",
    },
    announcement:
      "DOLLHOUSE had to drop (but we'll see em again soon 🤞); CATALYST has entered the ring.",
    date: new Date(2025, 6, 5),
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
      ticketLink: {
        href: "https://www.zeffy.com/en-US/ticketing/fx4f--2025",
        title: "Buy tickets now!",
        externalLink: true,
      },
      merchandiseLink: {
        href: "https://fx4fest.square.site",
        title: "Get official drip!",
        externalLink: true,
      },
      donationLink: {
        href: "https://www.gofundme.com/f/support-fx4-providence-2025",
        title: "Donate to the fest and fundraiser",
        externalLink: true,
      },
    },
    ticketCost: "$25, all ages",
    lineup: [
      {
        name: "afk",
        socialMediaLinks: {
          bandcamp: { href: "https://afktba.bandcamp.com/" },
        },
      },
      {
        name: "Biproduct",
        socialMediaLinks: {
          bandcamp: { href: "https://biproduct.bandcamp.com/" },
        },
      },
      {
        name: "Dagger Wound",
        socialMediaLinks: {
          instagram: { href: "https://www.instagram.com/dagger.wound" },
        },
      },
      {
        name: "Bloody Blue",
        socialMediaLinks: {
          instagram: { href: "https://www.instagram.com/portal.body" },
        },
      },
      {
        name: "Film & Gender",
        socialMediaLinks: {
          bandcamp: { href: "https://filmandgender.bandcamp.com/" },
        },
      },
      {
        name: "Future Blondes",
        socialMediaLinks: {
          bandcamp: { href: "https://futureblondes.bandcamp.com/" },
        },
      },
      {
        name: "Housefire",
        socialMediaLinks: {
          youtube: {
            href: "https://www.youtube.com/watch?v=LyD--sLgx7Q&list=RDLyD--sLgx7Q&start_radio=1",
          },
        },
      },
      {
        name: "Move",
        socialMediaLinks: {
          bandcamp: {
            href: "https://move-bhc.bandcamp.com/",
          },
        },
      },
      {
        name: "Noise Nomads",
        socialMediaLinks: {
          instagram: { href: "https://www.instagram.com/hairyparchment/" },
        },
      },
      {
        name: "Palmslow",
        socialMediaLinks: {
          instagram: { href: "https://www.instagram.com/palmslowpvd" },
        },
      },
      {
        name: "Pleasure Coffin",
        socialMediaLinks: {
          instagram: { href: "https://www.instagram.com/pleasurecoffin/" },
        },
      },
      {
        name: "Sediment Club",
        socialMediaLinks: {
          bandcamp: { href: "https://sedimentclub.bandcamp.com/" },
        },
      },
      {
        name: "The Tarrys",
        socialMediaLinks: {
          bandcamp: { href: "https://thetarrys.bandcamp.com/" },
        },
      },
      {
        name: "whatwewas",
        socialMediaLinks: {
          bandcamp: { href: "https://whatwewas.bandcamp.com/" },
        },
      },
      {
        name: "Body Farm",
        socialMediaLinks: {
          instagram: { href: "https://www.instagram.com/bodyfarmohpa/" },
        },
      },
      {
        name: "Catalyst",
        socialMediaLinks: {
          bandcamp: { href: "https://catalystsucks420.bandcamp.com/" },
        },
      },
      {
        name: "Posterboy 2000",
        socialMediaLinks: {
          bandcamp: { href: "https://posterboy2000.bandcamp.com/" },
        },
      },
      {
        name: "XBongX",
        socialMediaLinks: {
          bandcamp: { href: "https://xbongx.bandcamp.com/" },
        },
      },
    ],
    eventPoster: {
      src: "/images/posters/providence.jpg",
      title: "by Aaron Demuth.",
    },
  },
  {
    index: 4,
    location: {
      street: "3 Harvard Ave",
      city: "Boston",
      state: "MA",
      name: "O'Briens Pub",
      website: { href: "https://obrienspubboston.com/" },
    },
    date: new Date(2025, 6, 6),
    narrowBannerImage: {
      src: "/images/location-banners/boston.jpg",
      title: "Fest poster by @riotlrrrkhi on Instagram.",
    },
    socialMediaLinks: {
      instagram: {
        href: "https://www.instagram.com/fuckthefourthfest.boston",
      },
    },
    eventLinks: {
      ticketLink: {
        href: "https://obrienspubboston.com/show/fx4-fest-boston/",
      },
    },
    eventPoster: {
      src: "/images/posters/boston.jpg",
      title: "by @riotlrrrkhi on Instagram.",
    },
    lineup: [
      {
        name: "Kwami",
        socialMediaLinks: {
          bandcamp: { href: "https://kwamiwinfield.bandcamp.com/" },
        },
      },
      {
        name: "TOTM",
        socialMediaLinks: {
          instagram: { href: "https://www.instagram.com/totm.bpm/" },
        },
      },
      {
        name: "Trophy Hunt",
        socialMediaLinks: {
          bandcamp: { href: "https://trophyhunt.bandcamp.com/" },
        },
      },
      {
        name: "Sadnoise",
        socialMediaLinks: {
          bandcamp: {
            href: "https://sadnoise.bandcamp.com/",
          },
        },
      },
      {
        name: "Pushback",
        socialMediaLinks: {
          bandcamp: {
            href: "https://pushbackma.bandcamp.com/",
          },
        },
      },
      {
        name: "Lani Asunción",
        website: {
          href: "https://laniasuncion.com/",
        },
      },
      {
        name: "Andro Queen",
        socialMediaLinks: {
          bandcamp: {
            href: "https://androqueen.bandcamp.com/",
          },
        },
      },
      {
        name: "Unhinged",
        socialMediaLinks: {
          bandcamp: {
            href: "https://unhinged-bhc.bandcamp.com/",
          },
        },
      },
      {
        name: "Unhinged",
        socialMediaLinks: {
          bandcamp: {
            href: "https://unhinged-bhc.bandcamp.com/",
          },
        },
      },
      {
        name: "Exit Seraphim",
      },
    ],
  },
];

export { eventsTable, featureFlags };
