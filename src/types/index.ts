export interface FontConfig {
  fontFamily: string;
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
  letterSpacing: number;
  textTransform: "none" | "uppercase" | "lowercase" | "capitalize";
  color: string;
  textAlign: "left" | "center" | "right" | "justify";
}

export interface FontControlsProps {
  /**
   * Initial font configuration
   */
  value?: Partial<FontConfig>;

  /**
   * Callback fired when any font property changes
   */
  onChange?: (config: FontConfig) => void;

  /**
   * Custom list of font families to display
   * @default ['Arial', 'Helvetica', 'Times New Roman', 'Georgia', 'Courier New', 'Verdana']
   */
  fontFamilies?: string[];

  /**
   * Minimum font size
   * @default 8
   */
  minFontSize?: number;

  /**
   * Maximum font size
   * @default 120
   */
  maxFontSize?: number;

  /**
   * Font size step
   * @default 1
   */
  fontSizeStep?: number;

  /**
   * Panel title
   * @default 'Font Controls'
   */
  title?: string;

  /**
   * Initial collapsed state
   * @default false
   */
  collapsed?: boolean;

  /**
   * Enable drag to reposition
   * @default true
   */
  draggable?: boolean;

  /**
   * Initial position (for draggable mode)
   */
  position?: { x: number; y: number };

  /**
   * Enable local storage persistence
   * @default false
   */
  enableLocalStorage?: boolean;

  /**
   * Custom storage key for local storage
   * @default 'font-controls-config'
   */
  storageKey?: string;
}

export type ControlChangeHandler<T> = (value: T) => void;
