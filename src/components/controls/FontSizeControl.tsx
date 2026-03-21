import React, { useEffect, useState } from "react";
import { ControlChangeHandler } from "../../types";

interface FontSizeControlProps {
  value: number | "inherit";
  onChange: ControlChangeHandler<number | "inherit">;
}

const variants = [
  { label: "XS", value: 12 },
  { label: "SM", value: 14 },
  { label: "BASE", value: 16 },
  { label: "LG", value: 18 },
  { label: "XL", value: 20 },
];

const MIN_FONT_SIZE = 8;
const MAX_FONT_SIZE = 120;

export const FontSizeControl: React.FC<FontSizeControlProps> = ({
  value,
  onChange,
}) => {
  const numericValue = value === "inherit" ? MIN_FONT_SIZE : value;
  const STEP = 4;

  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  // Sync external value → input
  useEffect(() => {
    setInputValue(value === "inherit" ? "" : String(value));
    setError(null);
  }, [value]);

  // Debounced validation (NO auto-fix)
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (inputValue === "") {
        setError(null);
        if (value !== "inherit") {
          onChange("inherit");
        }
        return;
      }

      const num = Number(inputValue);

      if (isNaN(num)) return;

      if (num < MIN_FONT_SIZE) {
        setError(`Minimum Font Size is ${MIN_FONT_SIZE}`);
        return;
      }

      if (num > MAX_FONT_SIZE) {
        setError(`Maximum Font Size is ${MAX_FONT_SIZE}`);
        return;
      }

      // valid → clear error + propagate
      setError(null);

      if (num !== value) {
        onChange(num);
      }
    }, 400);

    return () => clearTimeout(timeout);
  }, [inputValue, MIN_FONT_SIZE, MAX_FONT_SIZE, onChange, value]);

  const handleDecrement = () => {
    const newVal = Math.max(MIN_FONT_SIZE, numericValue - STEP);
    onChange(newVal);
  };

  const handleIncrement = () => {
    const newVal = Math.min(MAX_FONT_SIZE, numericValue + STEP);
    onChange(newVal);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    // allow only digits or empty
    if (!/^\d*$/.test(val)) return;

    setInputValue(val);
  };

  return (
    <div className="font-control-group">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <label className="font-control-label">Font Size</label>
        {variants?.map((variant) => (
          <button
            key={variant.label}
            type="button"
            className="font-control-variants-button"
            onClick={() => onChange(variant.value)}
          >
            {variant.label}
          </button>
        ))}
      </div>

      <div className="font-control-stepper">
        <button
          type="button"
          className="font-control-stepper-btn"
          onClick={handleDecrement}
        >
          −
        </button>

        <input
          type="text"
          className={`font-control-input font-control-stepper-input ${
            error ? "font-control-error" : ""
          }`}
          value={inputValue}
          onChange={handleChange}
          placeholder="—"
        />

        <button
          type="button"
          className="font-control-stepper-btn"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
      {error && <p className="font-control-message-error">{error}</p>}
    </div>
  );
};
