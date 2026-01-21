import React from "react";
import { ControlChangeHandler } from "../../types";

interface LineHeightControlProps {
  value: number;
  onChange: ControlChangeHandler<number>;
}

export const LineHeightControl: React.FC<LineHeightControlProps> = ({
  value,
  onChange,
}) => {
  return (
    <div className="font-control-group">
      <label className="font-control-label">Line Height</label>
      <div className="font-control-slider-container">
        <input
          type="range"
          className="font-control-slider"
          min={0.5}
          max={3}
          step={0.1}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
        <input
          type="number"
          className="font-control-input font-control-number"
          min={0.5}
          max={3}
          step={0.1}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </div>
    </div>
  );
};
