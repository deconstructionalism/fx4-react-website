/**
 * Sleep for a given time in milliseconds.
 * @param ms - time in milliseconds to sleep
 */
const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export default sleep;
