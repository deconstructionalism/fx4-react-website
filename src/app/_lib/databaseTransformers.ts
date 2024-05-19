import { EventLocationRow } from "../_db";

/**
 * Convert a location table row to a URL.
 * @param location - the location table row to convert to a URL.
 */
const locationToURL = (location: EventLocationRow): string =>
  `/locations/${location.city.toLowerCase().replace(" ", "-")}-${location.state.toLowerCase()}`;

export { locationToURL };
