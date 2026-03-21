import { useMemo, useState } from "react";
import { FontConfig } from "../types";
import { getStyles } from "../utils/styleUtils";

const DEFAULT_CONFIG: FontConfig = {
  fontFamily: "inherit",
  fontSize: "inherit",
  fontWeight: "inherit",
  lineHeight: "inherit",
  letterSpacing: "inherit",
  textTransform: "inherit",
  color: "inherit",
  textAlign: "inherit",
};

export interface UseFontControlsOptions {
  /**
   * Initial font configuration
   */
  initialConfig?: Partial<FontConfig>;
}

/**
 * Custom hook for managing font configuration state
 * @param options - Configuration options
 * @returns Object with clean config styles and control functions
 */
export const useFontControls = (options?: UseFontControlsOptions) => {
  const { initialConfig } = options || {};

  const [rawConfig, setRawConfig] = useState<FontConfig>(() => ({
    ...DEFAULT_CONFIG,
    ...initialConfig,
  }));

  // Clean config with "inherit" values stripped out.
  // Use directly with style={config} — won't override CSS classes.
  const config = useMemo(() => getStyles(rawConfig), [rawConfig]);

  const resetConfig = () => {
    setRawConfig({ ...DEFAULT_CONFIG, ...initialConfig });
  };

  const updateConfig = <K extends keyof FontConfig>(
    key: K,
    value: FontConfig[K],
  ) => {
    setRawConfig((prev) => ({ ...prev, [key]: value }));
  };

  return {
    config,
    setConfig: setRawConfig,
    updateConfig,
    resetConfig,
  };
};
