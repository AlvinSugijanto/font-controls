import React, { useState, useEffect } from "react";
import { FontConfig, FontControlsProps } from "../types";
import { Panel } from "./Panel";
import { SearchableFontSelect } from "./controls/SearchableFontSelect";
import { FontSizeControl } from "./controls/FontSizeControl";
import { FontWeightSelect } from "./controls/FontWeightSelect";
import { LineHeightControl } from "./controls/LineHeightControl";
import { LetterSpacingControl } from "./controls/LetterSpacingControl";
import { TextTransformSelect } from "./controls/TextTransformSelect";
import { ColorPicker } from "./controls/ColorPicker";
import { TextAlignControl } from "./controls/TextAlignControl";
import { CodeBlock } from "./CodeBlock";
import { loadAllDefaultFonts } from "../utils/fontLoader";
import {
  generateGoogleFontsImport,
  generateReactStyles,
  generateCSSClass,
} from "../utils/codeGenerators";
import {
  loadFontConfig,
  saveFontConfig,
  clearFontConfig,
} from "../utils/localStorage";
import "./styles/styles.css";

const DEFAULT_FONT_FAMILIES = [
  // Sans-serif - Modern & Clean (40 fonts)
  "Inter",
  "Roboto",
  "Open Sans",
  "Lato",
  "Montserrat",
  "Poppins",
  "Raleway",
  "Work Sans",
  "Nunito",
  "Source Sans Pro",
  "DM Sans",
  "Manrope",
  "Plus Jakarta Sans",
  "Outfit",
  "Space Grotesk",
  "Rubik",
  "Karla",
  "Mulish",
  "Quicksand",
  "Barlow",
  "Josefin Sans",
  "Lexend",
  "Hind",
  "Oxygen",
  "Ubuntu",
  "Noto Sans",
  "PT Sans",
  "Cabin",
  "Varela Round",
  "Asap",
  "Exo 2",
  "Archivo",
  "Titillium Web",
  "Yantramanav",
  "Heebo",
  "Comfortaa",
  "Alata",
  "Jost",
  "Red Hat Display",
  "Sora",

  // Serif - Classic & Elegant (20 fonts)
  "Playfair Display",
  "Merriweather",
  "Lora",
  "Crimson Text",
  "EB Garamond",
  "Libre Baskerville",
  "Cormorant Garamond",
  "Spectral",
  "Cardo",
  "Bitter",
  "Arvo",
  "Vollkorn",
  "Neuton",
  "Alegreya",
  "Domine",
  "Rokkitt",
  "PT Serif",
  "Gelasio",
  "Noticia Text",
  "Unna",

  // Monospace - Code & Tech (15 fonts)
  "Fira Code",
  "JetBrains Mono",
  "Inconsolata",
  "Source Code Pro",
  "Roboto Mono",
  "IBM Plex Mono",
  "Space Mono",
  "Courier Prime",
  "Anonymous Pro",
  "Overpass Mono",
  "Ubuntu Mono",
  "PT Mono",
  "Noto Sans Mono",
  "Cousine",
  "Share Tech Mono",

  // Display - Bold & Creative (15 fonts)
  "Bebas Neue",
  "Oswald",
  "Righteous",
  "Permanent Marker",
  "Pacifico",
  "Anton",
  "Alfa Slab One",
  "Fredoka One",
  "Passion One",
  "Bungee",
  "Monoton",
  "Abril Fatface",
  "Lobster",
  "Bangers",
  "Russo One",

  // Handwriting & Script (10 fonts)
  "Dancing Script",
  "Satisfy",
  "Great Vibes",
  "Kaushan Script",
  "Caveat",
  "Shadows Into Light",
  "Indie Flower",
  "Amatic SC",
  "Patrick Hand",
  "Courgette",
];

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

export const FontControls: React.FC<FontControlsProps> = ({
  value,
  onChange,
  fontFamilies = DEFAULT_FONT_FAMILIES,
  minFontSize = 8,
  maxFontSize = 120,
  fontSizeStep = 1,
  title = "Font Controls",
  collapsed = false,
  draggable = true,
  position,
  enableLocalStorage = false,
  storageKey = "font-controls-config",
}) => {
  const [config, setConfig] = useState<FontConfig>(() => {
    // Load from localStorage if enabled
    if (enableLocalStorage) {
      const savedConfig = loadFontConfig(storageKey);
      if (savedConfig) {
        return { ...DEFAULT_CONFIG, ...value, ...savedConfig };
      }
    }
    return { ...DEFAULT_CONFIG, ...value };
  });
  const [showExport, setShowExport] = useState(false);

  // Update internal state when value prop changes
  useEffect(() => {
    if (value) {
      setConfig((prev) => ({ ...prev, ...value }));
    }
  }, [value]);

  // Auto-load Google Fonts on mount
  useEffect(() => {
    loadAllDefaultFonts(fontFamilies);
  }, [fontFamilies]);

  const updateConfig = <K extends keyof FontConfig>(
    key: K,
    newValue: FontConfig[K],
  ) => {
    const newConfig = { ...config, [key]: newValue };
    setConfig(newConfig);
    onChange?.(newConfig);

    // Save to localStorage if enabled
    if (enableLocalStorage) {
      saveFontConfig(newConfig, storageKey);
    }
  };

  const handleReset = () => {
    setConfig(DEFAULT_CONFIG);
    onChange?.(DEFAULT_CONFIG);

    // Clear from localStorage if enabled
    if (enableLocalStorage) {
      clearFontConfig(storageKey);
    }
  };

  return (
    <Panel
      title={title}
      collapsed={collapsed}
      draggable={draggable}
      position={position}
    >
      <SearchableFontSelect
        value={config.fontFamily}
        onChange={(value) => updateConfig("fontFamily", value)}
        fontFamilies={fontFamilies}
      />

      <FontSizeControl
        value={config.fontSize}
        onChange={(value) => updateConfig("fontSize", value)}
        min={minFontSize}
        max={maxFontSize}
        step={fontSizeStep}
      />

      <FontWeightSelect
        value={config.fontWeight}
        onChange={(value) => updateConfig("fontWeight", value)}
      />

      <LineHeightControl
        value={config.lineHeight}
        onChange={(value) => updateConfig("lineHeight", value)}
      />

      <LetterSpacingControl
        value={config.letterSpacing}
        onChange={(value) => updateConfig("letterSpacing", value)}
      />

      <TextTransformSelect
        value={config.textTransform}
        onChange={(value) => updateConfig("textTransform", value)}
      />

      <ColorPicker
        value={config.color}
        onChange={(value) => updateConfig("color", value)}
      />

      <TextAlignControl
        value={config.textAlign}
        onChange={(value) => updateConfig("textAlign", value)}
      />

      <button
        className="font-control-reset-button"
        onClick={handleReset}
        type="button"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="1 4 1 10 7 10" />
          <polyline points="23 20 23 14 17 14" />
          <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
        </svg>
        Reset to Default
      </button>

      {/* Export Configuration Section */}
      <div className="font-control-export-section">
        <button
          className="font-control-export-toggle"
          onClick={() => setShowExport(!showExport)}
          type="button"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={showExport ? "rotated" : ""}
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
          Export Configuration
        </button>

        {showExport && (
          <div className="font-control-export-content">
            <CodeBlock
              title="1. Google Fonts Import (HTML)"
              code={generateGoogleFontsImport(config.fontFamily)}
              language="html"
            />

            <CodeBlock
              title="2. React/JSX Inline Styles"
              code={generateReactStyles(config)}
              language="tsx"
            />

            <CodeBlock
              title="3. CSS Class"
              code={generateCSSClass(config)}
              language="css"
            />
          </div>
        )}
      </div>
    </Panel>
  );
};
