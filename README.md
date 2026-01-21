# Font Controls

A beautiful, Leva-inspired font controls library for React. Provides an intuitive GUI panel for adjusting typography settings in real-time.

![Font Controls Demo](https://img.shields.io/badge/React-18+-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue) ![License](https://img.shields.io/badge/license-MIT-green)

## Features

✨ **Beautiful UI** - Glassmorphism design with smooth animations  
🎨 **Dark Mode** - Automatic dark mode support  
🖱️ **Draggable** - Drag to reposition the control panel  
🔄 **Reset Button** - Quickly reset all values to defaults  
📦 **Lightweight** - Minimal dependencies  
🔧 **TypeScript** - Full TypeScript support with type definitions  
⚡ **Real-time Preview** - See changes instantly  
🎯 **Customizable** - Configure fonts, ranges, and more

## Installation

```bash
npm install font-controls
```

or

```bash
yarn add font-controls
```

or

```bash
pnpm add font-controls
```

## Quick Start

```tsx
import { FontControls } from "font-controls";
import "font-controls/dist/style.css";
import { useState } from "react";

function App() {
  const [fontConfig, setFontConfig] = useState({
    fontFamily: "Arial",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: 0,
    textTransform: "none",
    color: "#000000",
    textAlign: "left",
  });

  return (
    <div>
      <h1
        style={{
          fontFamily: fontConfig.fontFamily,
          fontSize: `${fontConfig.fontSize}px`,
          fontWeight: fontConfig.fontWeight,
          lineHeight: fontConfig.lineHeight,
          letterSpacing: `${fontConfig.letterSpacing}px`,
          textTransform: fontConfig.textTransform,
          color: fontConfig.color,
          textAlign: fontConfig.textAlign,
        }}
      >
        Hello, World!
      </h1>

      <FontControls value={fontConfig} onChange={setFontConfig} />
    </div>
  );
}
```

**That's it!** Google Fonts are loaded automatically - no need to add `<link>` tags to your HTML.

## API Reference

### FontControls Props

| Prop           | Type                           | Default                       | Description                                   |
| -------------- | ------------------------------ | ----------------------------- | --------------------------------------------- |
| `value`        | `Partial<FontConfig>`          | -                             | Initial font configuration                    |
| `onChange`     | `(config: FontConfig) => void` | -                             | Callback fired when any font property changes |
| `fontFamilies` | `string[]`                     | `['Arial', 'Helvetica', ...]` | Custom list of font families                  |
| `minFontSize`  | `number`                       | `8`                           | Minimum font size                             |
| `maxFontSize`  | `number`                       | `120`                         | Maximum font size                             |
| `fontSizeStep` | `number`                       | `1`                           | Font size step increment                      |
| `title`        | `string`                       | `'Font Controls'`             | Panel title                                   |
| `collapsed`    | `boolean`                      | `false`                       | Initial collapsed state                       |
| `draggable`    | `boolean`                      | `true`                        | Enable drag to reposition                     |
| `position`     | `{ x: number; y: number }`     | `{ x: 20, y: 20 }`            | Initial position                              |

### FontConfig Type

```typescript
interface FontConfig {
  fontFamily: string;
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
  letterSpacing: number;
  textTransform: "none" | "uppercase" | "lowercase" | "capitalize";
  color: string;
  textAlign: "left" | "center" | "right" | "justify";
}
```

## Advanced Usage

### Using the Hook

For more control, you can use the `useFontControls` hook:

```tsx
import { useFontControls } from "font-controls";

function App() {
  const { config, setConfig, updateConfig, resetConfig } = useFontControls({
    fontFamily: "Georgia",
    fontSize: 24,
  });

  return (
    <div>
      <p style={{ ...config }}>Styled text</p>
      <button onClick={resetConfig}>Reset</button>
    </div>
  );
}
```

### Custom Font List

```tsx
<FontControls
  fontFamilies={["Inter", "Roboto", "Open Sans", "Lato", "Montserrat"]}
  onChange={setFontConfig}
/>
```

### Custom Position

```tsx
<FontControls
  position={{ x: 100, y: 100 }}
  draggable={true}
  onChange={setFontConfig}
/>
```

### Controlled Component

```tsx
const [config, setConfig] = useState<FontConfig>({
  fontFamily: "Arial",
  fontSize: 16,
  // ... other properties
});

<FontControls
  value={config}
  onChange={(newConfig) => {
    console.log("Font changed:", newConfig);
    setConfig(newConfig);
  }}
/>;
```

## Styling

The library uses CSS variables for theming. You can customize the appearance:

```css
:root {
  --fc-bg: rgba(255, 255, 255, 0.95);
  --fc-accent: #3b82f6;
  --fc-text: #1a1a1a;
  /* ... other variables */
}
```

## Examples

### Basic Example

```tsx
import { FontControls } from "font-controls";
import "font-controls/dist/style.css";

function BasicExample() {
  const [config, setConfig] = useState({});

  return <FontControls onChange={setConfig} />;
}
```

### With Live Preview

```tsx
function LivePreview() {
  const [config, setConfig] = useState({
    fontFamily: "Georgia",
    fontSize: 32,
    color: "#333",
  });

  return (
    <div>
      <div
        style={{
          fontFamily: config.fontFamily,
          fontSize: `${config.fontSize}px`,
          color: config.color,
        }}
      >
        Live preview text
      </div>

      <FontControls value={config} onChange={setConfig} />
    </div>
  );
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

```bash
# Install dependencies
npm install

# Run demo
npm run dev

# Build library
npm run build

# Preview build
npm run preview
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © [Your Name]

## Credits

Inspired by [Leva](https://github.com/pmndrs/leva) - A GUI controls library for React.
