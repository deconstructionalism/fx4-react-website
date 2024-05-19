import { eventsTable } from "./data";

// DATABASE
// obviously a mock

const DB = {
  events: eventsTable,
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
