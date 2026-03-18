import React from "react";
import { ControlChangeHandler } from "../../types";

interface ColorPickerProps {
  value: string;
  onChange: ControlChangeHandler<string>;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({
  value,
  onChange,
}) => {
  // input[type="color"] requires a valid 6-character hex code
  const isValidHex = /^#[0-9A-F]{6}$/i.test(value);
  const colorValue = isValidHex ? value : "#000000";

  return (
    <div className="font-control-group">
      <label className="font-control-label">Text Color</label>
      <div className="font-control-color-input">
        <div className="font-control-color-preview">
          <input
            type="color"
            value={colorValue}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
        <input
          type="text"
          className="font-control-input font-control-text-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="#000000"
        />
      </div>
    </div>
  );
};
