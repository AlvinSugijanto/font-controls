import { FontConfig } from "../types";

const DEFAULT_STORAGE_KEY = "font-controls-config";

/**
 * Save font configuration to local storage
 * @param config - Font configuration to save
 * @param storageKey - Custom storage key (optional)
 */
export const saveFontConfig = (
  config: FontConfig,
  storageKey: string = DEFAULT_STORAGE_KEY,
): void => {
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem(storageKey, JSON.stringify(config));
    }
  } catch (error) {
    console.warn("Failed to save font config to localStorage:", error);
  }
};

/**
 * Load font configuration from local storage
 * @param storageKey - Custom storage key (optional)
 * @returns Saved font configuration or null if not found
 */
export const loadFontConfig = (
  storageKey: string = DEFAULT_STORAGE_KEY,
): Partial<FontConfig> | null => {
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        return JSON.parse(saved) as Partial<FontConfig>;
      }
    }
  } catch (error) {
    console.warn("Failed to load font config from localStorage:", error);
  }
  return null;
};

/**
 * Clear font configuration from local storage
 * @param storageKey - Custom storage key (optional)
 */
export const clearFontConfig = (
  storageKey: string = DEFAULT_STORAGE_KEY,
): void => {
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.removeItem(storageKey);
    }
  } catch (error) {
    console.warn("Failed to clear font config from localStorage:", error);
  }
};
