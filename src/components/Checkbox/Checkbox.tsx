"use client";

import {
  forwardRef,
  useEffect,
  useId,
  useRef,
  type ChangeEvent,
  type CSSProperties,
  type FocusEvent,
} from "react";

export type CheckboxSize = "small" | "standard" | "large";

export interface CheckboxProps {
  /**
   * Whether the checkbox is checked
   * @default false
   */
  checked?: boolean;
  /**
   * Tailwind background/border color class for checked state (e.g., "bg-blue-600")
   * The border color is automatically derived from the background color.
   * @default "bg-blue-600"
   */
  checkedColor?: string;
  /**
   * Additional CSS classes for the container
   */
  className?: string;
  /**
   * Whether the checkbox is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Error message displayed below the checkbox
   */
  errorMessage?: string;
  /**
   * Helper text displayed below the checkbox
   */
  helperText?: string;
  /**
   * Unique identifier for the checkbox input
   */
  id?: string;
  /**
   * Whether the checkbox is in an indeterminate state (partially checked)
   * @default false
   */
  indeterminate?: boolean;
  /**
   * Label text for the checkbox
   */
  label?: string;
  /**
   * Tailwind text color class for the label (e.g., "text-gray-700")
   * @default "text-gray-700"
   */
  labelColor?: string;
  /**
   * Name attribute for form submission
   */
  name?: string;
  /**
   * Blur event handler
   */
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  /**
   * Change handler called when checkbox state changes
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  /**
   * Focus event handler
   */
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  /**
   * Whether the checkbox is required
   * @default false
   */
  required?: boolean;
  /**
   * Size of the checkbox
   * @default "standard"
   */
  size?: CheckboxSize;
  /**
   * Inline styles for the checkbox input
   */
  style?: CSSProperties;
  /**
   * Value attribute for form submission
   */
  value?: string;
}

const SIZE_STYLES: Record<
  CheckboxSize,
  { box: string; icon: number; label: string; offset: string }
> = {
  small: {
    box: "h-4 w-4",
    icon: 10,
    label: "text-sm",
    offset: "ml-5",
  },
  standard: {
    box: "h-5 w-5",
    icon: 12,
    label: "text-base",
    offset: "ml-6",
  },
  large: {
    box: "h-6 w-6",
    icon: 14,
    label: "text-lg",
    offset: "ml-7",
  },
};

function deriveBorderColor(bgColor: string): string {
  return bgColor.replace("bg-", "border-");
}

function deriveRingColor(bgColor: string): string {
  const color = bgColor.replace("bg-", "").replace(/-\d+$/, "");
  return `focus-visible:ring-${color}-500`;
}

function CheckIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IndeterminateIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(
    {
      checked = false,
      checkedColor = "bg-blue-600",
      className,
      disabled = false,
      errorMessage,
      helperText,
      id,
      indeterminate = false,
      label,
      labelColor = "text-gray-700",
      name,
      onBlur,
      onChange,
      onFocus,
      required = false,
      size = "standard",
      style,
      value,
    },
    ref,
  ) {
    const internalRef = useRef<HTMLInputElement>(null);
    const inputRef = (ref as React.RefObject<HTMLInputElement>) || internalRef;

    const generatedId = useId();
    const checkboxId = id ?? `checkbox-${generatedId}`;
    const helperId = `${checkboxId}-helper`;
    const errorId = `${checkboxId}-error`;

    const {
      box: boxSize,
      icon: iconSize,
      label: labelSize,
      offset,
    } = SIZE_STYLES[size];
    const hasError = Boolean(errorMessage);
    const isCheckedOrIndeterminate = checked || indeterminate;

    const borderColor = deriveBorderColor(checkedColor);
    const ringColor = deriveRingColor(checkedColor);

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate, inputRef]);

    const ariaDescribedBy =
      [helperText && !hasError ? helperId : null, hasError ? errorId : null]
        .filter(Boolean)
        .join(" ") || undefined;

    return (
      <div
        className={["flex flex-col gap-1", className].filter(Boolean).join(" ")}
      >
        <label
          className={[
            "inline-flex items-start gap-2",
            disabled ? "cursor-not-allowed" : "cursor-pointer",
          ].join(" ")}
        >
          <span className="relative inline-flex items-center justify-center flex-shrink-0">
            <input
              ref={inputRef}
              type="checkbox"
              id={checkboxId}
              name={name}
              value={value}
              checked={checked}
              onChange={onChange}
              onBlur={onBlur}
              onFocus={onFocus}
              disabled={disabled}
              required={required}
              aria-checked={indeterminate ? "mixed" : checked}
              aria-invalid={hasError}
              aria-describedby={ariaDescribedBy}
              className="peer sr-only"
              style={style}
            />
            <span
              className={[
                boxSize,
                "rounded border-2 transition-colors flex items-center justify-center text-white",
                "peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2",
                ringColor,
                disabled ? "opacity-50 cursor-not-allowed" : "",
                hasError
                  ? "border-red-500 bg-red-50"
                  : isCheckedOrIndeterminate
                    ? `${checkedColor} ${borderColor}`
                    : "border-gray-300 bg-white hover:border-gray-400",
              ]
                .filter(Boolean)
                .join(" ")}
              aria-hidden="true"
            >
              {isCheckedOrIndeterminate &&
                (indeterminate ? (
                  <IndeterminateIcon size={iconSize} />
                ) : (
                  <CheckIcon size={iconSize} />
                ))}
            </span>
          </span>

          {label && (
            <span
              className={[
                labelSize,
                "font-medium select-none pt-px",
                labelColor,
                disabled ? "opacity-50" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {label}
              {required && (
                <span className="text-red-500 ml-0.5" aria-hidden="true">
                  *
                </span>
              )}
            </span>
          )}
        </label>

        {hasError && (
          <p
            id={errorId}
            className={`text-sm text-red-600 ${offset}`}
            role="alert"
          >
            {errorMessage}
          </p>
        )}

        {!hasError && helperText && (
          <p id={helperId} className={`text-sm text-gray-500 ${offset}`}>
            {helperText}
          </p>
        )}
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";
