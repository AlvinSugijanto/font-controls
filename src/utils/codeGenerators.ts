import { FontConfig } from "../types";

/**
 * Generate Google Fonts import HTML for the selected font
 */
export function generateGoogleFontsImport(fontFamily: string): string {
  // Skip system fonts
  const systemFonts = [
    "Arial",
    "Helvetica",
    "Times New Roman",
    "Georgia",
    "Verdana",
  ];
  if (systemFonts.includes(fontFamily)) {
    return `<!-- ${fontFamily} is a system font, no import needed -->`;
  }

  const fontUrl = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(/ /g, "+")}:wght@100;200;300;400;500;600;700;800;900&display=swap`;

  return `<!-- Add this to your HTML <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="${fontUrl}" rel="stylesheet">`;
}

/**
 * Generate React/JSX inline styles
 */
export function generateReactStyles(config: FontConfig): string {
  const lines: string[] = [];
  if (config.fontFamily !== "inherit") lines.push(`  fontFamily: '${config.fontFamily}'`);
  if (config.fontSize !== "inherit") lines.push(`  fontSize: '${config.fontSize}px'`);
  if (config.fontWeight !== "inherit") lines.push(`  fontWeight: ${config.fontWeight}`);
  if (config.lineHeight !== "inherit") lines.push(`  lineHeight: ${config.lineHeight}`);
  if (config.letterSpacing !== "inherit") lines.push(`  letterSpacing: '${config.letterSpacing}px'`);
  if (config.textTransform !== "inherit") lines.push(`  textTransform: '${config.textTransform}'`);
  if (config.color !== "inherit") lines.push(`  color: '${config.color}'`);
  if (config.textAlign !== "inherit") lines.push(`  textAlign: '${config.textAlign}'`);

  return `<h1 style={{
${lines.join(",\n")}
}}>
  Your Text Here
</h1>`;
}

/**
 * Generate CSS class
 */
export function generateCSSClass(config: FontConfig): string {
  const lines: string[] = [];
  if (config.fontFamily !== "inherit") lines.push(`  font-family: '${config.fontFamily}', sans-serif;`);
  if (config.fontSize !== "inherit") lines.push(`  font-size: ${config.fontSize}px;`);
  if (config.fontWeight !== "inherit") lines.push(`  font-weight: ${config.fontWeight};`);
  if (config.lineHeight !== "inherit") lines.push(`  line-height: ${config.lineHeight};`);
  if (config.letterSpacing !== "inherit") lines.push(`  letter-spacing: ${config.letterSpacing}px;`);
  if (config.textTransform !== "inherit") lines.push(`  text-transform: ${config.textTransform};`);
  if (config.color !== "inherit") lines.push(`  color: ${config.color};`);
  if (config.textAlign !== "inherit") lines.push(`  text-align: ${config.textAlign};`);

  return `.my-text {
${lines.join("\n")}
}`;
}

