# Changelog

All notable changes to this project will be documented in this file.

## [2.0.0] - 2026-01-28

### BREAKING CHANGES

- **Simplified API**: Removed the following props to make the component simpler and easier to use:
  - `title` - Now hardcoded to "Font Controls"
  - `collapsed` - Panel is always expanded by default
  - `draggable` - Panel is always draggable
  - `position` - Fixed to `{ x: 20, y: 20 }`
  - `enableLocalStorage` - localStorage persistence removed
  - `storageKey` - No longer needed

### Migration Guide

If you were using any of the removed props, simply remove them from your `<FontControls />` component:

**Before:**

```tsx
<FontControls
  value={config}
  onChange={setConfig}
  title="My Controls"
  draggable={true}
  position={{ x: 100, y: 100 }}
  enableLocalStorage={true}
  storageKey="my-key"
/>
```

**After:**

```tsx
<FontControls value={config} onChange={setConfig} />
```

The component will work exactly the same, just with fewer configuration options.

## [1.6.0] - 2026-01-28

### Fixed

- **CSS Isolation**: Removed global CSS reset (`* { }`) that was causing style conflicts in other projects
- CSS is now fully scoped under `.font-controls-panel` to prevent interference with host application styles
- No more unexpected margin/padding resets affecting other components

### Changed

- Updated theme to shadcn-style black and white design
- Light theme: White backgrounds with black text
- Dark theme: Dark backgrounds with white text (auto-detected via `prefers-color-scheme`)
- Improved contrast and readability
- More subtle borders and shadows

### Technical Details

- Global selector `* { box-sizing: border-box; margin: 0; padding: 0; }` replaced with scoped `.font-controls-panel, .font-controls-panel * { box-sizing: border-box; }`
- All CSS variables updated to use HSL color values for consistency
- Border radius reduced from 12px to 8px for a more minimal look

## [1.5.0] - Previous Release

### Added

- Searchable font select dropdown
- 100 Google Fonts support
- Local storage persistence
- Draggable panel with react-draggable
- Export functionality for CSS and React styles
