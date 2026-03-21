import { FontConfig } from "../types";

export function getStyles(config: FontConfig): Record<string, string | number> {
  const styles: Record<string, string | number> = {};

  if (config.fontFamily && config.fontFamily !== "inherit") {
    styles.fontFamily = config.fontFamily;
  }
  if (config.fontSize && config.fontSize !== "inherit") {
    styles.fontSize = config.fontSize;
  }
  if (config.fontWeight && config.fontWeight !== "inherit") {
    styles.fontWeight = config.fontWeight;
  }
  if (config.lineHeight && config.lineHeight !== "inherit") {
    styles.lineHeight = config.lineHeight;
  }
  if (config.letterSpacing && config.letterSpacing !== "inherit") {
    styles.letterSpacing = config.letterSpacing;
  }
  if (config.textTransform && config.textTransform !== "inherit") {
    styles.textTransform = config.textTransform;
  }
  if (config.color && config.color !== "inherit") {
    styles.color = config.color;
  }
  if (config.textAlign && config.textAlign !== "inherit") {
    styles.textAlign = config.textAlign;
  }

  return styles;
}
