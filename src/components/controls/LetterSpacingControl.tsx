import React from "react";
import { ControlChangeHandler } from "../../types";

interface LetterSpacingControlProps {
  value: number | "inherit";
  onChange: ControlChangeHandler<number | "inherit">;
}

export const LetterSpacingControl: React.FC<LetterSpacingControlProps> = ({
  value,
  onChange,
}) => {
  const numericValue = value === "inherit" ? 0 : value;

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
