// Set key names and types for session storage here
interface SessionStorageState {
  hasSkippedIntro: boolean;
  hasReadSummary: boolean;
}

/**
 * Wrap the browser session storage in a type-safe accessor.
 * @param storage - The browser session storage object.
 * @returns - A type-safe accessor for browser session storage.
 */
const withTypedSessionStorage = (storage: Storage) => {
  return {
    /**
     * Get a value from session storage.
     * @param key - The key of the value to get.
     * @returns - The type-cast value, or null if it does not exist.
     */
    get<K extends keyof SessionStorageState>(
      key: K,
    ): SessionStorageState[K] | null {
      const value = storage.getItem(key);

      if (
        value === null ||
        value === undefined ||
        value === "undefined" ||
        value === "null"
      ) {
        return null;
      }

      return JSON.parse(value);
    },

    /**
     * Set a value in session storage.
     * @param key - The key of the value to set.
     * @param value - The value to set.
     */
    set<K extends keyof SessionStorageState>(
      key: K,
      value: SessionStorageState[K],
    ): void {
      storage.setItem(key, JSON.stringify(value));
    },
  };
};

export default withTypedSessionStorage;
