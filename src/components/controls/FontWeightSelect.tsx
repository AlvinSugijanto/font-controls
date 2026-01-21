import React from "react";
import { ControlChangeHandler } from "../../types";

interface FontWeightSelectProps {
  value: number;
  onChange: ControlChangeHandler<number>;
}

const FONT_WEIGHTS = [
  { value: 100, label: "Thin" },
  { value: 200, label: "Extra Light" },
  { value: 300, label: "Light" },
  { value: 400, label: "Regular" },
  { value: 500, label: "Medium" },
  { value: 600, label: "Semi Bold" },
  { value: 700, label: "Bold" },
  { value: 800, label: "Extra Bold" },
  { value: 900, label: "Black" },
];

export const FontWeightSelect: React.FC<FontWeightSelectProps> = ({
  value,
  onChange,
}) => {
  return (
    <div className="font-control-group">
      <label className="font-control-label">Font Weight</label>
      <select
        className="font-control-input font-control-select"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        {FONT_WEIGHTS.map((weight) => (
          <option key={weight.value} value={weight.value}>
            {weight.label} ({weight.value})
          </option>
        ))}
      </select>
    </div>
  );
};
