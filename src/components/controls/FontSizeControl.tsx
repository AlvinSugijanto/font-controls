import React from "react";
import { ControlChangeHandler } from "../../types";

interface FontSizeControlProps {
  value: number;
  onChange: ControlChangeHandler<number>;
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
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
        <input
          type="number"
          className="font-control-input font-control-number"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </div>
    </div>
  );
};
