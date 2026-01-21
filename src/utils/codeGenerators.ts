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
  return `<h1 style={{
  fontFamily: '${config.fontFamily}',
  fontSize: '${config.fontSize}px',
  fontWeight: ${config.fontWeight},
  lineHeight: ${config.lineHeight},
  letterSpacing: '${config.letterSpacing}px',
  textTransform: '${config.textTransform}',
  color: '${config.color}',
  textAlign: '${config.textAlign}'
}}>
  Your Text Here
</h1>`;
}

/**
 * Generate CSS class
 */
export function generateCSSClass(config: FontConfig): string {
  return `.my-text {
  font-family: '${config.fontFamily}', sans-serif;
  font-size: ${config.fontSize}px;
  font-weight: ${config.fontWeight};
  line-height: ${config.lineHeight};
  letter-spacing: ${config.letterSpacing}px;
  text-transform: ${config.textTransform};
  color: ${config.color};
  text-align: ${config.textAlign};
}`;
}

/**
 * Generate plain CSS properties (for copy-paste)
 */
export function generateCSSProperties(config: FontConfig): string {
  return `font-family: '${config.fontFamily}', sans-serif;
font-size: ${config.fontSize}px;
font-weight: ${config.fontWeight};
line-height: ${config.lineHeight};
letter-spacing: ${config.letterSpacing}px;
text-transform: ${config.textTransform};
color: ${config.color};
text-align: ${config.textAlign};`;
}
