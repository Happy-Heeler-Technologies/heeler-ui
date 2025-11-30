import { ChangeEvent, CSSProperties, FC, FocusEvent, useId } from "react";
import type { RainbowColor } from "../../types";

const SIZE_CLASSES = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
} as const;

const LABEL_SIZE_CLASSES = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
} as const;

// Rainbow color classes for checked state (background and border)
const COLOR_CLASSES: Record<RainbowColor, string> = {
  red: "bg-red-600 border-red-600",
  orange: "bg-orange-600 border-orange-600",
  yellow: "bg-yellow-500 border-yellow-500",
  green: "bg-green-600 border-green-600",
  blue: "bg-blue-600 border-blue-600",
  indigo: "bg-indigo-600 border-indigo-600",
  violet: "bg-violet-600 border-violet-600",
};

const FOCUS_RING_CLASSES: Record<RainbowColor, string> = {
  red: "focus-visible:ring-red-500",
  orange: "focus-visible:ring-orange-500",
  yellow: "focus-visible:ring-yellow-500",
  green: "focus-visible:ring-green-500",
  blue: "focus-visible:ring-blue-500",
  indigo: "focus-visible:ring-indigo-500",
  violet: "focus-visible:ring-violet-500",
};

const CHECKMARK_COLOR_CLASSES: Record<RainbowColor, string> = {
  red: "stroke-red-600",
  orange: "stroke-orange-600",
  yellow: "stroke-yellow-600",
  green: "stroke-green-600",
  blue: "stroke-blue-600",
  indigo: "stroke-indigo-600",
  violet: "stroke-violet-600",
};

const LABEL_COLOR_CLASSES: Record<RainbowColor, string> = {
  red: "text-red-600",
  orange: "text-orange-600",
  yellow: "text-yellow-600",
  green: "text-green-600",
  blue: "text-blue-600",
  indigo: "text-indigo-600",
  violet: "text-violet-600",
};

export interface CheckboxProps {
  /**
   * Whether the checkbox is checked
   */
  checked?: boolean;

  /**
   * Additional CSS classes for the container div
   */
  className?: string;

  /**
   * Rainbow color for the checked state
   * @default 'blue'
   */
  color?: RainbowColor;

  /**
   * Whether the checkbox is disabled
   */
  disabled?: boolean;

  /**
   * Error message to display below the checkbox
   */
  errorMessage?: string;

  /**
   * Helper text to display below the checkbox
   */
  helperText?: string;

  /**
   * Unique identifier for the checkbox element
   */
  id?: string;

  /**
   * Label text for the checkbox
   */
  label?: string;

  /**
   * Label text color (defaults to color prop if not specified)
   */
  labelColor?: RainbowColor;

  /**
   * Name attribute for the checkbox (useful for forms)
   */
  name?: string;

  /**
   * Blur event handler
   */
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;

  /**
   * Change handler for controlled component
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;

  /**
   * Focus event handler
   */
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;

  /**
   * Whether the checkbox is required
   */
  required?: boolean;

  /**
   * Size of the checkbox
   * @default 'md'
   */
  size?: "sm" | "md" | "lg";

  /**
   * Inline styles for the checkbox element
   */
  style?: CSSProperties;
}

export const Checkbox: FC<CheckboxProps> = ({
  checked = false,
  className = "",
  color = "blue",
  disabled = false,
  errorMessage,
  helperText,
  id,
  label,
  labelColor,
  name,
  required = false,
  size = "md",
  style,
  onBlur,
  onChange,
  onFocus,
}) => {
  // Generate a unique ID if not provided
  const generatedId = useId();
  const checkboxId = id || `checkbox-${generatedId}`;
  const helperId = `${checkboxId}-helper`;
  const errorId = `${checkboxId}-error`;

  const hasError = Boolean(errorMessage);

  // Determine label color (use labelColor if specified, otherwise use color, otherwise default gray)
  const selectedLabelColor = labelColor
    ? LABEL_COLOR_CLASSES[labelColor]
    : color
      ? LABEL_COLOR_CLASSES[color]
      : "text-gray-700";

  // Determine checkmark color (use labelColor if specified, otherwise white)
  const selectedCheckmarkColor = labelColor
    ? CHECKMARK_COLOR_CLASSES[labelColor]
    : "stroke-white";

  // Build aria-describedby with both helper and error IDs
  const ariaDescribedBy =
    [helperText && !hasError ? helperId : null, hasError ? errorId : null]
      .filter(Boolean)
      .join(" ") || undefined;

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <div className="flex items-start gap-2">
        <div className="relative inline-flex items-center">
          <input
            type="checkbox"
            id={checkboxId}
            name={name}
            checked={checked}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            disabled={disabled}
            required={required}
            aria-checked={checked}
            aria-required={required}
            aria-disabled={disabled}
            aria-invalid={hasError}
            aria-errormessage={hasError ? errorId : undefined}
            aria-describedby={ariaDescribedBy}
            className="peer sr-only"
            style={style}
          />
          <div
            className={`${SIZE_CLASSES[size]} rounded border-2 transition-all duration-200 flex items-center justify-center ${
              disabled
                ? "opacity-50 cursor-not-allowed pointer-events-none"
                : "cursor-pointer"
            } ${
              hasError
                ? "border-red-500 bg-red-50"
                : checked
                  ? COLOR_CLASSES[color]
                  : "border-gray-300 bg-white hover:border-gray-400"
            } peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 ${
              hasError
                ? "focus-visible:ring-red-500"
                : FOCUS_RING_CLASSES[color]
            }`}
            aria-hidden="true"
          >
            {checked && (
              <svg
                className={`${
                  size === "sm"
                    ? "w-3 h-3"
                    : size === "lg"
                      ? "w-4 h-4"
                      : "w-3.5 h-3.5"
                } ${selectedCheckmarkColor}`}
                fill="none"
                strokeWidth="3"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
          </div>
        </div>

        {label && (
          <label
            htmlFor={checkboxId}
            className={`${LABEL_SIZE_CLASSES[size]} font-medium ${selectedLabelColor} ${
              disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            {label}
            {required && (
              <span className="text-red-500 ml-1" aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}
      </div>

      {hasError && (
        <p
          id={errorId}
          className="text-sm text-red-600 ml-6"
          role="alert"
          aria-live="polite"
        >
          {errorMessage}
        </p>
      )}

      {!hasError && helperText && (
        <p id={helperId} className="text-sm text-gray-500 ml-6">
          {helperText}
        </p>
      )}
    </div>
  );
};

Checkbox.displayName = "Checkbox";
