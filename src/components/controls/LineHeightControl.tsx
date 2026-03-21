import React, { useEffect, useState } from "react";
import { ControlChangeHandler } from "../../types";

interface LineHeightControlProps {
  value: number | "inherit";
  onChange: ControlChangeHandler<number | "inherit">;
}

const variants = [
  { label: "XS", value: 1 },
  { label: "SM", value: 1.25 },
  { label: "BASE", value: 1.375 },
  { label: "LG", value: 1.5 },
  { label: "XL", value: 1.625 },
];

const MIN_LINE_HEIGHT = 0.5;
const MAX_LINE_HEIGHT = 4;

export const LineHeightControl: React.FC<LineHeightControlProps> = ({
  value,
  onChange,
}) => {
  const numericValue = value === "inherit" ? 1.5 : value;
  const STEP = 0.1;

  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setInputValue(value === "inherit" ? "" : String(value));
    setError(null);
  }, [value]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (inputValue === "") {
        setError(null);
        onChange("inherit");
        return;
      }

      const num = Number(inputValue);

      if (isNaN(num)) return;

      if (num < MIN_LINE_HEIGHT) {
        setError(`Minimum Line Height is ${MIN_LINE_HEIGHT}`);
        return;
      }

      if (num > MAX_LINE_HEIGHT) {
        setError(`Maximum Line Height is ${MAX_LINE_HEIGHT}`);
        return;
      }

      // valid → clear error + propagate
      setError(null);

      if (num !== value) {
        onChange(num);
      }
    }, 400);

    return () => clearTimeout(timeout);
  }, [inputValue, MIN_LINE_HEIGHT, MAX_LINE_HEIGHT, onChange, value]);

  const handleDecrement = () => {
    const newVal = Math.max(
      MIN_LINE_HEIGHT,
      parseFloat((numericValue - STEP).toFixed(1)),
    );
    onChange(newVal);
  };

  const handleIncrement = () => {
    const newVal = Math.min(
      MAX_LINE_HEIGHT,
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
        <label className="font-control-label">Line Height</label>
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
          aria-label="Decrease line height"
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
          aria-label="Increase line height"
        >
          +
        </button>
      </div>
      {error && <p className="font-control-message-error">{error}</p>}
    </div>
  );
};
