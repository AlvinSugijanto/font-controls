import React from "react";
import { ControlChangeHandler } from "../../types";

interface TextAlignControlProps {
  value: "left" | "center" | "right" | "justify" | "inherit";
  onChange: ControlChangeHandler<"left" | "center" | "right" | "justify" | "inherit">;
}

const ALIGN_OPTIONS = [
  { value: "inherit" as const, icon: "Inh" },
  { value: "left" as const, icon: "⬅" },
  { value: "center" as const, icon: "↔" },
  { value: "right" as const, icon: "➡" },
  { value: "justify" as const, icon: "⬌" },
];

export const TextAlignControl: React.FC<TextAlignControlProps> = ({
  value,
  onChange,
}) => {
  return (
    <div className="font-control-group">
      <label className="font-control-label">Text Align</label>
      <div className="font-control-button-group">
        {ALIGN_OPTIONS.map((option) => (
          <button
            key={option.value}
            className={`font-control-button ${value === option.value ? "active" : ""}`}
            onClick={() => onChange(option.value)}
            type="button"
          >
            {option.icon}
          </button>
        ))}
      </div>
    </div>
  );
};
