import React from "react";
import { ControlChangeHandler } from "../../types";

interface FontFamilySelectProps {
  value: string;
  onChange: ControlChangeHandler<string>;
  fontFamilies: string[];
}

export const FontFamilySelect: React.FC<FontFamilySelectProps> = ({
  value,
  onChange,
  fontFamilies,
}) => {
  return (
    <div className="font-control-group">
      <label className="font-control-label">Font Family</label>
      <select
        className="font-control-input font-control-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ fontFamily: value }}
      >
        {fontFamilies.map((font) => (
          <option key={font} value={font} style={{ fontFamily: font }}>
            {font}
          </option>
        ))}
      </select>
    </div>
  );
};
