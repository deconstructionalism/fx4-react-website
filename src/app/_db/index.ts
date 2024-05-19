// TYPES

interface TableRow {
  index: number;
}

export interface EventLocationRow extends TableRow {
  index: number;
  city: string;
  state: string;
  date: Date;
  narrowBannerImage: string;
  narrowBannerImageTitle: string;
}

// DATA TABLES

const locationTable: EventLocationRow[] = [
  {
    index: 0,
    city: "Lowell",
    state: "MA",
    date: new Date(2024, 6, 4),
    narrowBannerImage: "/images/locations/lowell.jpg",
    narrowBannerImageTitle:
      "2023 Fight The Flock Fest in Lowell by @jefrey_with_1f on Instagram.",
  },
  {
    index: 1,
    city: "Providence",
    state: "RI",
    date: new Date(2024, 6, 5),
    narrowBannerImage: "/images/locations/pvd.jpg",
    narrowBannerImageTitle:
      "Dreamcruser at 2024 Fuck The Fourth Fest in Providence by @innovacancy on Instagram.",
  },
  {
    index: 2,
    city: "NYC",
    state: "NY",
    date: new Date(2024, 6, 6),
    narrowBannerImage: "/images/locations/nyc.jpg",
    narrowBannerImageTitle: "Photo of c?c? by ??.",
  },
];

// DATABASE
// obviously a mock

const DB = {
  locations: locationTable,
} as const;

const cursor = (() => {
  /**
   * Get a table from the database.
   * @param tableName - the name of the table to get
   */
  const get = (tableName: keyof typeof DB) => {
    return DB[tableName];
  };

  return { get };
})();

export default cursor;
