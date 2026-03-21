import React, { useEffect, useState } from "react";
import { ControlChangeHandler } from "../../types";

interface LetterSpacingControlProps {
  value: number | "inherit";
  onChange: ControlChangeHandler<number | "inherit">;
}

const variants = [
  { label: "SM", value: -1 },
  { label: "BASE", value: 0 },
  { label: "LG", value: 1 },
  { label: "XL", value: 2 },
];

const MIN_LETTER_SPACING = -1;
const MAX_LETTER_SPACING = 20;

export const LetterSpacingControl: React.FC<LetterSpacingControlProps> = ({
  value,
  onChange,
}) => {
  const numericValue = value === "inherit" ? 0 : value;
  const STEP = 0.5;

  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState<string | null>(null);

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

      if (num < MIN_LETTER_SPACING) {
        setError(`Minimum Letter Spacing is ${MIN_LETTER_SPACING}`);
        return;
      }

      if (num > MAX_LETTER_SPACING) {
        setError(`Maximum Letter Spacing is ${MAX_LETTER_SPACING}`);
        return;
      }

      // valid → clear error + propagate
      setError(null);

      if (num !== value) {
        onChange(num);
      }
    }, 400);

    return () => clearTimeout(timeout);
  }, [inputValue, MIN_LETTER_SPACING, MAX_LETTER_SPACING, onChange, value]);

  const handleDecrement = () => {
    const newVal = Math.max(
      MIN_LETTER_SPACING,
      parseFloat((numericValue - STEP).toFixed(1)),
    );
    onChange(newVal);
  };

  const handleIncrement = () => {
    const newVal = Math.min(
      MAX_LETTER_SPACING,
      parseFloat((numericValue + STEP).toFixed(1)),
    );
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
        <label className="font-control-label">LT Spacing</label>
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
          aria-label="Decrease letter spacing"
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
          aria-label="Increase letter spacing"
        >
          +
        </button>
      </div>
      {error && <p className="font-control-message-error">{error}</p>}
    </div>
  );
};
