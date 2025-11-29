import {
  ChangeEvent,
  CSSProperties,
  FC,
  FocusEvent,
  ReactNode,
  useId,
} from "react";
import type { RainbowColor } from "../../types";

export interface SelectOption {
  /**
   * Display label for the option
   */
  label: string;
  /**
   * Value of the option
   */
  value: string;
  /**
   * Whether the option is disabled
   */
  disabled?: boolean;
}

export interface SelectProps {
  /**
   * Additional CSS classes for the container div
   */
  className?: string;

  /**
   * Rainbow color for focus ring, border, and text
   * @default 'blue'
   */
  color?: RainbowColor;

  /**
   * Whether the select is disabled
   */
  disabled?: boolean;

  /**
   * Error message to display below the select
   */
  errorMessage?: string;

  /**
   * Helper text to display below the select (when no error)
   */
  helperText?: string;

  /**
   * Unique identifier for the select element
   */
  id?: string;

  /**
   * Label text for the select
   */
  label?: string;

  /**
   * Name attribute for the select (useful for forms)
   */
  name?: string;

  /**
   * Blur event handler
   */
  onBlur?: (event: FocusEvent<HTMLSelectElement>) => void;

  /**
   * Change handler for controlled component
   */
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;

  /**
   * Focus event handler
   */
  onFocus?: (event: FocusEvent<HTMLSelectElement>) => void;

  /**
   * Array of options to display in the select
   */
  options: SelectOption[];

  /**
   * Placeholder text shown when no value is selected
   */
  placeholder?: string;

  /**
   * Whether the select is required
   */
  required?: boolean;

  /**
   * Size of the select
   * @default 'md'
   */
  size?: "sm" | "md" | "lg";

  /**
   * Inline styles for the select element
   */
  style?: CSSProperties;

  /**
   * Select value (controlled component)
   */
  value?: string;
}

export const Select: FC<SelectProps> = ({
  className = "",
  color = "blue",
  disabled = false,
  errorMessage,
  helperText,
  id,
  label,
  name,
  onBlur,
  onChange,
  onFocus,
  options,
  placeholder,
  required = false,
  size = "md",
  style,
  value,
}) => {
  // Generate a unique ID if not provided
  const selectId = id || `select-${useId()}`;
  const helperId = `${selectId}-helper`;
  const errorId = `${selectId}-error`;

  const hasError = Boolean(errorMessage);

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2.5 text-base",
    lg: "px-5 py-3 text-lg",
  };

  const colorClasses: Record<RainbowColor, string> = {
    red: "border-red-600 text-red-600 focus:border-red-600 focus:ring-red-600",
    orange:
      "border-orange-500 text-orange-500 focus:border-orange-500 focus:ring-orange-500",
    yellow:
      "border-yellow-500 text-yellow-500 focus:border-yellow-500 focus:ring-yellow-500",
    green:
      "border-green-600 text-green-600 focus:border-green-600 focus:ring-green-600",
    blue: "border-blue-600 text-blue-600 focus:border-blue-600 focus:ring-blue-600",
    indigo:
      "border-indigo-600 text-indigo-600 focus:border-indigo-600 focus:ring-indigo-600",
    violet:
      "border-violet-600 text-violet-600 focus:border-violet-600 focus:ring-violet-600",
  };

  const labelColorClasses: Record<RainbowColor, string> = {
    red: "text-red-700",
    orange: "text-orange-600",
    yellow: "text-yellow-600",
    green: "text-green-700",
    blue: "text-blue-700",
    indigo: "text-indigo-700",
    violet: "text-violet-700",
  };

  const selectClasses = `
    w-full rounded-md border-2 bg-white
    ${sizeClasses[size]}
    ${hasError ? "border-red-600 text-red-600 focus:border-red-600 focus:ring-red-600" : colorClasses[color]}
    ${disabled ? "bg-gray-100 cursor-not-allowed opacity-60" : "cursor-pointer"}
    focus:outline-none focus:ring-2 focus:ring-offset-2
    transition-colors
    appearance-none
    bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%3cpath%20d%3D%22M7%207l3-3%203%203m0%206l-3%203-3-3%22%20stroke%3D%22%239ca3af%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3c%2Fsvg%3E')]
    bg-[length:1.5em_1.5em]
    bg-[position:right_0.5rem_center]
    bg-no-repeat
    pr-10
  `;

  // Build aria-describedby with both helper and error IDs
  const ariaDescribedBy =
    [helperText && !hasError ? helperId : null, hasError ? errorId : null]
      .filter(Boolean)
      .join(" ") || undefined;

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label
          htmlFor={selectId}
          className={`text-sm font-medium ${labelColorClasses[color]}`}
        >
          {label}
          {required && (
            <span className="text-red-600 ml-1" aria-label="required">
              *
            </span>
          )}
        </label>
      )}

      <select
        id={selectId}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        disabled={disabled}
        required={required}
        aria-required={required}
        aria-disabled={disabled}
        aria-invalid={hasError}
        aria-errormessage={hasError ? errorId : undefined}
        aria-describedby={ariaDescribedBy}
        className={selectClasses}
        style={style}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>

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

      {helperText && !hasError && (
        <p id={helperId} className="text-sm text-gray-500">
          {helperText}
        </p>
      )}
    </div>
  );
};

Select.displayName = "Select";
