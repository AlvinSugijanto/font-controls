const loadedFonts = new Set<string>();

/**
 * Load a single Google Font dynamically
 * @param fontFamily - The font family name (e.g., "Inter", "Roboto")
 */
export function loadGoogleFont(fontFamily: string): void {
  // Skip if already loaded
  if (loadedFonts.has(fontFamily)) {
    return;
  }

  // Create link element
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(/ /g, "+")}:wght@100;200;300;400;500;600;700;800;900&display=swap`;

  // Add to document head
  document.head.appendChild(link);

  // Mark as loaded
  loadedFonts.add(fontFamily);
}

/**
 * Load all default Google Fonts used by the font controls
 * @param fontFamilies - Array of font family names to load
 */
export function loadAllDefaultFonts(fontFamilies: string[]): void {
  // Add preconnect links for better performance
  if (!document.querySelector('link[href*="fonts.googleapis.com"]')) {
    const preconnect1 = document.createElement("link");
    preconnect1.rel = "preconnect";
    preconnect1.href = "https://fonts.googleapis.com";

    const preconnect2 = document.createElement("link");
    preconnect2.rel = "preconnect";
    preconnect2.href = "https://fonts.gstatic.com";
    preconnect2.crossOrigin = "anonymous";

    document.head.appendChild(preconnect1);
    document.head.appendChild(preconnect2);
  }

  // Load all fonts
  fontFamilies.forEach(loadGoogleFont);
}
