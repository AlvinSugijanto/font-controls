import React from "react";
import { ControlChangeHandler } from "../../types";

interface LetterSpacingControlProps {
  value: number;
  onChange: ControlChangeHandler<number>;
}

export const LetterSpacingControl: React.FC<LetterSpacingControlProps> = ({
  value,
  onChange,
}) => {
  return (
    <div className="font-control-group">
      <label className="font-control-label">Letter Spacing</label>
      <div className="font-control-slider-container">
        <input
          type="range"
          className="font-control-slider"
          min={-5}
          max={10}
          step={0.1}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
        <input
          type="number"
          className="font-control-input font-control-number"
          min={-5}
          max={10}
          step={0.1}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </div>
    </div>
  );
};
