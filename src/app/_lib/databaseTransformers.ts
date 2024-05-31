import { EventRow } from "@/app/_db/db.d";

/**
 * Convert an event table row to a URL.
 * @param event - the event table row to convert to a URL.
 */
const eventToURL = (event: EventRow): string =>
  `/locations/${event.location.city.toLowerCase().replace(" ", "-")}-${event.location.state.toLowerCase()}`;

/**
 * Format a date for display.
 * @param date - the date to format.
 */
const formatDateForDisplay = (date: Date): string => {
  const getSuffix = (date: Date): string => {
    const d = date.getDate();
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDate();
  const dayOfWeek = date
    .toLocaleString("default", { weekday: "long" })
    .substring(0, 3);
  const daySuffix = getSuffix(date);
  const dateString = `${dayOfWeek} ${month} ${day}${daySuffix}`;

  return dateString;
};

export { eventToURL, formatDateForDisplay };
