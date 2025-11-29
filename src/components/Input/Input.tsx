import {
  ChangeEvent,
  CSSProperties,
  FC,
  FocusEvent,
  KeyboardEvent,
  useId,
} from "react";

export interface InputProps {
  /**
   * Autocomplete attribute for better form filling UX
   */
  autoComplete?: string;

  /**
   * Additional CSS classes for the container div
   */
  className?: string;

  /**
   * Rainbow color for focus ring and border
   */
  color?: "red" | "orange" | "yellow" | "green" | "blue" | "indigo" | "violet";

  /**
   * Whether the input is disabled
   */
  disabled?: boolean;

  /**
   * Error message to display below the input
   */
  errorMessage?: string;

  /**
   * Helper text to display below the input (when no error)
   */
  helperText?: string;

  /**
   * Unique identifier for the input element
   */
  id?: string;

  /**
   * Label text for the input
   */
  label?: string;

  /**
   * Maximum value (for number, date, time inputs)
   */
  max?: number | string;

  /**
   * Maximum length of input value
   */
  maxLength?: number;

  /**
   * Minimum value (for number, date, time inputs)
   */
  min?: number | string;

  /**
   * Minimum length of input value
   */
  minLength?: number;

  /**
   * Name attribute for the input (useful for forms)
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
   * Key down event handler
   */
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;

  /**
   * Placeholder text
   */
  placeholder?: string;

  /**
   * Whether the input is read-only
   */
  readOnly?: boolean;

  /**
   * Whether the input is required
   */
  required?: boolean;

  /**
   * Size of the input
   * @default 'md'
   */
  size?: "sm" | "md" | "lg";

  /**
   * Inline styles for the input element
   */
  style?: CSSProperties;

  /**
   * Text color for the input value (defaults to color prop if not specified)
   */
  textColor?:
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "blue"
    | "indigo"
    | "violet";

  /**
   * The HTML input type
   * @default 'text'
   */
  type?:
    | "text"
    | "email"
    | "password"
    | "number"
    | "tel"
    | "url"
    | "search"
    | "date"
    | "time"
    | "datetime-local";

  /**
   * Input value (controlled component)
   */
  value?: string | number;
}

export const Input: FC<InputProps> = ({
  autoComplete,
  className = "",
  color,
  disabled = false,
  errorMessage,
  helperText,
  id,
  label,
  max,
  maxLength,
  min,
  minLength,
  name,
  onBlur,
  onChange,
  onFocus,
  onKeyDown,
  placeholder,
  readOnly,
  required = false,
  size = "md",
  style,
  textColor,
  type = "text",
  value,
}) => {
  // Generate a unique ID if not provided
  const inputId = id || `input-${useId()}`;
  const errorId = `${inputId}-error`;
  const helperId = `${inputId}-helper`;

  const hasError = Boolean(errorMessage);

  const sizeClasses = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-5 py-3",
  };

  // Rainbow color classes for focus rings and borders
  const colorClasses = {
    red: "border-red-500 focus-visible:border-red-600 focus-visible:ring-red-500",
    orange:
      "border-orange-500 focus-visible:border-orange-600 focus-visible:ring-orange-500",
    yellow:
      "border-yellow-500 focus-visible:border-yellow-600 focus-visible:ring-yellow-500",
    green:
      "border-green-500 focus-visible:border-green-600 focus-visible:ring-green-500",
    blue: "border-blue-500 focus-visible:border-blue-600 focus-visible:ring-blue-500",
    indigo:
      "border-indigo-500 focus-visible:border-indigo-600 focus-visible:ring-indigo-500",
    violet:
      "border-violet-500 focus-visible:border-violet-600 focus-visible:ring-violet-500",
  };

  const textColorClasses = {
    red: "text-red-600",
    orange: "text-orange-600",
    yellow: "text-yellow-600",
    green: "text-green-600",
    blue: "text-blue-600",
    indigo: "text-indigo-600",
    violet: "text-violet-600",
  };

  const baseClasses =
    "w-full rounded-md border bg-white transition-colors duration-200";
  const focusClasses =
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed bg-gray-50"
    : "";
  const errorClasses = hasError
    ? "border-red-500 focus-visible:border-red-600 focus-visible:ring-red-500"
    : "";

  // Standard gray border when no color is specified
  const standardClasses =
    "border-gray-300 focus-visible:border-gray-400 focus-visible:ring-gray-400";

  // Determine which color classes to use
  const selectedColorClasses = hasError
    ? ""
    : color
      ? colorClasses[color]
      : standardClasses;

  // Determine text color (use textColor if specified, otherwise use color, otherwise default gray)
  const selectedTextColor = hasError
    ? "text-gray-900"
    : textColor
      ? textColorClasses[textColor]
      : color
        ? textColorClasses[color]
        : "text-gray-900";

  // Build the final input class string
  const inputClasses =
    `${baseClasses} ${sizeClasses[size]} ${focusClasses} ${disabledClasses} ${errorClasses} ${selectedColorClasses} ${selectedTextColor}`.trim();

  // Build aria-describedby with both helper and error IDs
  const ariaDescribedBy =
    [helperText && !hasError ? helperId : null, hasError ? errorId : null]
      .filter(Boolean)
      .join(" ") || undefined;

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
          {label}
          {required && (
            <span className="text-red-500 ml-1" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}

      <input
        id={inputId}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder}
        required={required}
        name={name}
        min={min}
        max={max}
        minLength={minLength}
        maxLength={maxLength}
        autoComplete={autoComplete}
        aria-required={required}
        aria-disabled={disabled}
        aria-readonly={readOnly}
        aria-invalid={hasError}
        aria-errormessage={hasError ? errorId : undefined}
        aria-describedby={ariaDescribedBy}
        className={inputClasses}
        style={style}
      />

      {hasError && (
        <p
          id={errorId}
          className="text-sm text-red-600"
          role="alert"
          aria-live="polite"
        >
          {errorMessage}
        </p>
      )}

      {!hasError && helperText && (
        <p id={helperId} className="text-sm text-gray-500">
          {helperText}
        </p>
      )}
    </div>
  );
};

Input.displayName = "Input";
