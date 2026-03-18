import React from "react";
import { ControlChangeHandler } from "../../types";

interface FontSizeControlProps {
  value: number | "inherit";
  onChange: ControlChangeHandler<number | "inherit">;
  min: number;
  max: number;
  step: number;
}

export const FontSizeControl: React.FC<FontSizeControlProps> = ({
  value,
  onChange,
  min,
  max,
  step,
}) => {
  const numericValue = value === "inherit" ? 16 : value;

  return (
    <div className="font-control-group">
      <label className="font-control-label">Font Size</label>
      <div className="font-control-slider-container">
        <input
          type="range"
          className="font-control-slider"
          min={min}
          max={max}
          step={step}
          value={numericValue}
          onChange={(e) => onChange(Number(e.target.value))}
        />
        <input
          type="text"
          className="font-control-input font-control-number"
          value={value}
          onChange={(e) => {
            const val = e.target.value;
            if (val === "inherit") onChange("inherit");
            else onChange(Number(val));
          }}
        />
      </div>
    </div>
  );
};
