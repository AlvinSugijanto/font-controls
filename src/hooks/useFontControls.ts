import { useState } from "react";
import { FontConfig } from "../types";

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

/**
 * Custom hook for managing font configuration state
 * @param initialConfig - Initial font configuration
 * @returns Tuple of [config, setConfig, resetConfig]
 */
export const useFontControls = (initialConfig?: Partial<FontConfig>) => {
  const [config, setConfig] = useState<FontConfig>({
    ...DEFAULT_CONFIG,
    ...initialConfig,
  });

  const resetConfig = () => {
    setConfig({ ...DEFAULT_CONFIG, ...initialConfig });
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
