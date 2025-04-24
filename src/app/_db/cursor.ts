import { eventsTable, featureFlags } from "@/app/_db/data";

// DATABASE
// obviously a mock

const DB = {
  events: eventsTable,
  featureFlags: featureFlags,
} as const;

const cursor = (() => {
  /**
   * Get a table from the database.
   * @param tableName - the name of the table to get
   */
  const get = <T extends keyof typeof DB>(tableName: T): (typeof DB)[T] => {
    return DB[tableName];
  };

  return { get };
})();

export default cursor;
