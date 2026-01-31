"use client";

import { useId, type ChangeEvent, type CSSProperties } from "react";

export type RadioGroupSize = "small" | "standard" | "large";
export type RadioGroupOrientation = "vertical" | "horizontal";

export interface RadioOption {
  disabled?: boolean;
  helperText?: string;
  label: string;
  value: string;
}

export interface RadioGroupProps {
  /**
   * Additional CSS classes for the container
   */
  className?: string;
  /**
   * Tailwind color name for checked state, labels, and focus ring
   * Derives: bg-{color}-600, border-{color}-600, text-{color}-600, ring-{color}-500
   * @default "blue"
   */
  color?: string;
  /**
   * Whether the entire group is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Error message displayed below the group
   */
  errorMessage?: string;
  /**
   * Helper text displayed below the group
   */
  helperText?: string;
  /**
   * Unique identifier for the group
   */
  id?: string;
  /**
   * Label for the radio group
   */
  label?: string;
  /**
   * Name attribute for the radio inputs
   */
  name?: string;
  /**
   * Change handler
   */
  onChange?: (value: string) => void;
  /**
   * Radio options to display
   */
  options: RadioOption[];
  /**
   * Layout orientation
   * @default "vertical"
   */
  orientation?: RadioGroupOrientation;
  /**
   * Whether selection is required
   * @default false
   */
  required?: boolean;
  /**
   * Size of the radio buttons
   * @default "standard"
   */
  size?: RadioGroupSize;
  /**
   * Inline styles for the container
   */
  style?: CSSProperties;
  /**
   * Currently selected value
   */
  value?: string;
}

const SIZE_STYLES: Record<
  RadioGroupSize,
  { radio: string; dot: string; label: string; helperIndent: string }
> = {
  small: {
    radio: "h-4 w-4",
    dot: "w-1.5 h-1.5",
    label: "text-sm",
    helperIndent: "ml-6",
  },
  standard: {
    radio: "h-5 w-5",
    dot: "w-2 h-2",
    label: "text-base",
    helperIndent: "ml-7",
  },
  large: {
    radio: "h-6 w-6",
    dot: "w-2.5 h-2.5",
    label: "text-lg",
    helperIndent: "ml-8",
  },
};

function deriveCheckedClasses(color: string): string {
  return `bg-${color}-600 border-${color}-600`;
}

function deriveFocusRingClass(color: string): string {
  return `peer-focus-visible:ring-${color}-500`;
}

function deriveLabelColor(color: string): string {
  return `text-${color}-700`;
}

export function RadioGroup({
  className,
  color = "blue",
  disabled = false,
  errorMessage,
  helperText,
  id,
  label,
  name,
  onChange,
  options,
  orientation = "vertical",
  required = false,
  size = "standard",
  style,
  value,
}: RadioGroupProps) {
  const generatedId = useId();
  const groupId = id ?? `radio-group-${generatedId}`;
  const groupName = name ?? groupId;
  const helperId = `${groupId}-helper`;
  const errorId = `${groupId}-error`;

  const hasError = Boolean(errorMessage);
  const {
    radio: radioSize,
    dot: dotSize,
    label: labelSize,
    helperIndent,
  } = SIZE_STYLES[size];

  const checkedClasses = deriveCheckedClasses(color);
  const focusRingClass = deriveFocusRingClass(color);
  const labelColor = deriveLabelColor(color);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  const ariaDescribedBy =
    [helperText && !hasError ? helperId : null, hasError ? errorId : null]
      .filter(Boolean)
      .join(" ") || undefined;

  return (
    <fieldset
      className={["flex flex-col gap-3 border-0 p-0 m-0", className]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      {label && (
        <legend className={`text-base font-semibold ${labelColor}`}>
          {label}
          {required && (
            <span className="text-red-500 ml-0.5" aria-hidden="true">
              *
            </span>
          )}
        </legend>
      )}

      <div
        role="radiogroup"
        aria-labelledby={label ? `${groupId}-label` : undefined}
        aria-required={required}
        aria-invalid={hasError}
        aria-describedby={ariaDescribedBy}
        className={[
          "flex gap-3",
          orientation === "vertical" ? "flex-col" : "flex-row flex-wrap",
        ].join(" ")}
      >
        {options.map((option) => {
          const optionId = `${groupId}-${option.value}`;
          const optionHelperId = `${optionId}-helper`;
          const isChecked = value === option.value;
          const isDisabled = disabled || option.disabled;

          return (
            <div key={option.value} className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <div className="relative inline-flex items-center">
                  <input
                    type="radio"
                    id={optionId}
                    name={groupName}
                    value={option.value}
                    checked={isChecked}
                    onChange={handleChange}
                    disabled={isDisabled}
                    required={required}
                    aria-describedby={
                      option.helperText ? optionHelperId : undefined
                    }
                    className="peer sr-only"
                  />
                  <div
                    className={[
                      radioSize,
                      "rounded-full border-2 transition-colors flex items-center justify-center",
                      "peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2",
                      isDisabled
                        ? "opacity-50 cursor-not-allowed"
                        : "cursor-pointer",
                      hasError
                        ? "border-red-500 peer-focus-visible:ring-red-500"
                        : isChecked
                          ? `${checkedClasses} ${focusRingClass}`
                          : `border-gray-300 bg-white hover:border-gray-400 ${focusRingClass}`,
                    ].join(" ")}
                    aria-hidden="true"
                  >
                    {isChecked && (
                      <div className={`rounded-full bg-white ${dotSize}`} />
                    )}
                  </div>
                </div>

                <label
                  htmlFor={optionId}
                  className={[
                    labelSize,
                    "font-medium text-gray-700",
                    isDisabled
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer",
                  ].join(" ")}
                >
                  {option.label}
                </label>
              </div>

              {option.helperText && (
                <p
                  id={optionHelperId}
                  className={`text-sm text-gray-500 ${helperIndent}`}
                >
                  {option.helperText}
                </p>
              )}
            </div>
          );
        })}
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
    </fieldset>
  );
}

RadioGroup.displayName = "RadioGroup";
