"use client";

import {
  cloneElement,
  forwardRef,
  isValidElement,
  useId,
  type ChangeEvent,
  type CSSProperties,
  type FocusEvent,
  type KeyboardEvent,
  type ReactElement,
} from "react";

export type InputSize = "small" | "standard" | "large";

export type InputType =
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

export interface InputIconProps {
  "aria-hidden"?: boolean;
  width?: number;
  height?: number;
}

export interface InputProps {
  /**
   * Autocomplete attribute for browser autofill
   */
  autoComplete?: string;
  /**
   * Tailwind border color class for the input
   * @default "border-gray-300"
   */
  borderColor?: string;
  /**
   * Additional CSS classes for the container
   */
  className?: string;
  /**
   * Whether the input is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Optional icon at the end of the input
   */
  endIcon?: ReactElement;
  /**
   * Error message displayed below the input
   */
  errorMessage?: string;
  /**
   * Tailwind color for focus ring (e.g., "blue" derives focus:ring-blue-500)
   * @default "blue"
   */
  focusColor?: string;
  /**
   * Helper text displayed below the input
   */
  helperText?: string;
  /**
   * Unique identifier for the input
   */
  id?: string;
  /**
   * Label text for the input
   */
  label?: string;
  /**
   * Tailwind text color class for the label
   * @default "text-gray-700"
   */
  labelColor?: string;
  /**
   * Maximum value (for number, date, time inputs)
   */
  max?: number | string;
  /**
   * Maximum character length
   */
  maxLength?: number;
  /**
   * Minimum value (for number, date, time inputs)
   */
  min?: number | string;
  /**
   * Minimum character length
   */
  minLength?: number;
  /**
   * Name attribute for form submission
   */
  name?: string;
  /**
   * Blur event handler
   */
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  /**
   * Change event handler
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  /**
   * Focus event handler
   */
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  /**
   * Keydown event handler
   */
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  /**
   * Placeholder text
   */
  placeholder?: string;
  /**
   * Whether the input is read-only
   * @default false
   */
  readOnly?: boolean;
  /**
   * Whether the input is required
   * @default false
   */
  required?: boolean;
  /**
   * Size of the input
   * @default "standard"
   */
  size?: InputSize;
  /**
   * Optional icon at the start of the input
   */
  startIcon?: ReactElement;
  /**
   * Inline styles for the input element
   */
  style?: CSSProperties;
  /**
   * Tailwind text color class for input value
   * @default "text-gray-900"
   */
  textColor?: string;
  /**
   * HTML input type
   * @default "text"
   */
  type?: InputType;
  /**
   * Input value for controlled component
   */
  value?: string | number;
}

const SIZE_STYLES: Record<
  InputSize,
  { input: string; iconSize: number; iconPadding: string }
> = {
  small: {
    input: "text-sm py-1.5",
    iconSize: 16,
    iconPadding: "px-2.5",
  },
  standard: {
    input: "text-base py-2",
    iconSize: 18,
    iconPadding: "px-3",
  },
  large: {
    input: "text-lg py-3",
    iconSize: 20,
    iconPadding: "px-4",
  },
};

function deriveFocusClasses(color: string): string {
  return `focus-visible:ring-${color}-500 focus-visible:border-${color}-500`;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    autoComplete,
    borderColor = "border-gray-300",
    className,
    disabled = false,
    endIcon,
    errorMessage,
    focusColor = "blue",
    helperText,
    id,
    label,
    labelColor = "text-gray-700",
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
    readOnly = false,
    required = false,
    size = "standard",
    startIcon,
    style,
    textColor = "text-gray-900",
    type = "text",
    value,
  },
  ref,
) {
  const generatedId = useId();
  const inputId = id ?? `input-${generatedId}`;
  const errorId = `${inputId}-error`;
  const helperId = `${inputId}-helper`;

  const { input: sizeClasses, iconSize, iconPadding } = SIZE_STYLES[size];
  const hasError = Boolean(errorMessage);
  const hasStartIcon = Boolean(startIcon);
  const hasEndIcon = Boolean(endIcon);

  const focusClasses = hasError
    ? "focus-visible:ring-red-500 focus-visible:border-red-500"
    : deriveFocusClasses(focusColor);

  const scaleIcon = (icon: ReactElement | undefined) =>
    icon && isValidElement<InputIconProps>(icon)
      ? cloneElement(icon, {
          "aria-hidden": true,
          width: iconSize,
          height: iconSize,
        })
      : null;

  const scaledStartIcon = scaleIcon(startIcon);
  const scaledEndIcon = scaleIcon(endIcon);

  const ariaDescribedBy =
    [helperText && !hasError ? helperId : null, hasError ? errorId : null]
      .filter(Boolean)
      .join(" ") || undefined;

  const inputPaddingLeft = hasStartIcon ? "pl-10" : iconPadding;
  const inputPaddingRight = hasEndIcon ? "pr-10" : iconPadding;

  return (
    <div
      className={["flex flex-col gap-1.5", className].filter(Boolean).join(" ")}
    >
      {label && (
        <label
          htmlFor={inputId}
          className={["text-sm font-medium", labelColor].join(" ")}
        >
          {label}
          {required && (
            <span className="text-red-500 ml-0.5" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}

      <div className="relative">
        {scaledStartIcon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            {scaledStartIcon}
          </span>
        )}

        <input
          ref={ref}
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
          aria-invalid={hasError}
          aria-describedby={ariaDescribedBy}
          className={[
            "w-full rounded-md border bg-white transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0",
            sizeClasses,
            inputPaddingLeft,
            inputPaddingRight,
            hasError ? "border-red-500" : borderColor,
            focusClasses,
            textColor,
            disabled ? "opacity-50 cursor-not-allowed bg-gray-50" : "",
          ]
            .filter(Boolean)
            .join(" ")}
          style={style}
        />

        {scaledEndIcon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            {scaledEndIcon}
          </span>
        )}
      </div>

      {hasError && (
        <p id={errorId} className="text-sm text-red-600" role="alert">
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
});

Input.displayName = "Input";
