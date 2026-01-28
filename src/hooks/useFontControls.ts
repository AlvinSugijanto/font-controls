import { useState, useEffect } from "react";
import { FontConfig } from "../types";
import {
  loadFontConfig,
  saveFontConfig,
  clearFontConfig,
} from "../utils/localStorage";

const DEFAULT_CONFIG: FontConfig = {
  fontFamily: "Arial",
  fontSize: 16,
  fontWeight: 400,
  lineHeight: 1.5,
  letterSpacing: 0,
  textTransform: "none",
  color: "#000000",
  textAlign: "left",
};

export interface UseFontControlsOptions {
  /**
   * Initial font configuration
   */
  initialConfig?: Partial<FontConfig>;
  /**
   * Enable local storage persistence
   * @default false
   */
  enableLocalStorage?: boolean;
  /**
   * Custom storage key for local storage
   * @default "font-controls-config"
   */
  storageKey?: string;
}

/**
 * Custom hook for managing font configuration state with optional local storage persistence
 * @param options - Configuration options
 * @returns Object with config state and control functions
 */
export const useFontControls = (options?: UseFontControlsOptions) => {
  const {
    initialConfig,
    enableLocalStorage = false,
    storageKey = "font-controls-config",
  } = options || {};

  // Initialize state with saved config from localStorage if enabled
  const [config, setConfig] = useState<FontConfig>(() => {
    if (enableLocalStorage) {
      const savedConfig = loadFontConfig(storageKey);
      if (savedConfig) {
        return { ...DEFAULT_CONFIG, ...initialConfig, ...savedConfig };
      }
    }
    return { ...DEFAULT_CONFIG, ...initialConfig };
  });

  // Save to localStorage whenever config changes
  useEffect(() => {
    if (enableLocalStorage) {
      saveFontConfig(config, storageKey);
    }
  }, [config, enableLocalStorage, storageKey]);

  const resetConfig = () => {
    const newConfig = { ...DEFAULT_CONFIG, ...initialConfig };
    setConfig(newConfig);
    if (enableLocalStorage) {
      clearFontConfig(storageKey);
    }
  };

  const updateConfig = <K extends keyof FontConfig>(
    key: K,
    value: FontConfig[K],
  ) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  return {
    config,
    setConfig,
    updateConfig,
    resetConfig,
  };
};
