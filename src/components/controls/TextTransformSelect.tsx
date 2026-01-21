import React from "react";
import { ControlChangeHandler } from "../../types";

interface TextTransformSelectProps {
  value: "none" | "uppercase" | "lowercase" | "capitalize";
  onChange: ControlChangeHandler<
    "none" | "uppercase" | "lowercase" | "capitalize"
  >;
}

const TEXT_TRANSFORMS = [
  { value: "none" as const, label: "None" },
  { value: "uppercase" as const, label: "UPPERCASE" },
  { value: "lowercase" as const, label: "lowercase" },
  { value: "capitalize" as const, label: "Capitalize" },
];

export const TextTransformSelect: React.FC<TextTransformSelectProps> = ({
  value,
  onChange,
}) => {
  return (
    <div className="font-control-group">
      <label className="font-control-label">Text Transform</label>
      <select
        className="font-control-input font-control-select"
        value={value}
        onChange={(e) => onChange(e.target.value as typeof value)}
      >
        {TEXT_TRANSFORMS.map((transform) => (
          <option key={transform.value} value={transform.value}>
            {transform.label}
          </option>
        ))}
      </select>
    </div>
  );
};
