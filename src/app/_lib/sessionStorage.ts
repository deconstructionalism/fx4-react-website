// Set key names and types for session storage here
interface SessionStorageState {
  hasSkippedIntro: boolean;
  hasReadSummary: boolean;
}

/**
 * Type-safe accessor for browser session storage.
 */
class SessionStorage {
  private readonly storage: Storage;

  constructor() {
    this.storage = window.sessionStorage;
  }

  /**
   * Get a value from session storage.
   * @param key - The key of the value to get.
   * @returns - The type-cast value, or null if it does not exist.
   */
  get<K extends keyof SessionStorageState>(
    key: K,
  ): SessionStorageState[K] | null {
    const value = this.storage.getItem(key);

    if (
      value === null ||
      value === undefined ||
      value === "undefined" ||
      value === "null"
    ) {
      return null;
    }

    return JSON.parse(value);
  }

  /**
   * Set a value in session storage.
   * @param key - The key of the value to set.
   * @param value - The value to set.
   */
  set<K extends keyof SessionStorageState>(
    key: K,
    value: SessionStorageState[K],
  ): void {
    this.storage.setItem(key, JSON.stringify(value));
  }
}

export default SessionStorage;
