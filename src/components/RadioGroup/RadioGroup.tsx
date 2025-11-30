import { ChangeEvent, CSSProperties, FC, useId } from "react";
import type { RainbowColor } from "../../types";

export interface RadioOption {
  /**
   * Display label for the radio option
   */
  label: string;
  /**
   * Value of the radio option
   */
  value: string;
  /**
   * Whether the radio option is disabled
   */
  disabled?: boolean;
  /**
   * Helper text for this specific option
   */
  helperText?: string;
}

// Constants defined outside component to prevent re-creation on each render
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

const LABEL_COLOR_CLASSES: Record<RainbowColor, string> = {
  red: "text-red-600",
  orange: "text-orange-600",
  yellow: "text-yellow-600",
  green: "text-green-600",
  blue: "text-blue-600",
  indigo: "text-indigo-600",
  violet: "text-violet-600",
};

const HELPER_TEXT_COLOR_CLASSES: Record<RainbowColor, string> = {
  red: "text-red-600",
  orange: "text-orange-600",
  yellow: "text-yellow-600",
  green: "text-green-600",
  blue: "text-blue-600",
  indigo: "text-indigo-600",
  violet: "text-violet-600",
};

export interface RadioGroupProps {
  /**
   * Additional CSS classes for the container div
   */
  className?: string;

  /**
   * Rainbow color for the selected state and labels
   * @default 'blue'
   */
  color?: RainbowColor;

  /**
   * Whether the entire radio group is disabled
   */
  disabled?: boolean;

  /**
   * Error message to display below the radio group
   */
  errorMessage?: string;

  /**
   * Helper text to display below the radio group
   */
  helperText?: string;

  /**
   * Override the helper text color independently
   * If not specified, uses gray-500
   */
  helperTextColor?: RainbowColor;

  /**
   * Unique identifier for the radio group
   */
  id?: string;

  /**
   * Label text for the radio group
   */
  label?: string;

  /**
   * Override the label text color independently
   * If not specified, uses the color prop
   */
  labelTextColor?: RainbowColor;

  /**
   * Name attribute for the radio group (groups radio buttons together)
   */
  name?: string;

  /**
   * Change handler for controlled component
   */
  onChange?: (value: string) => void;

  /**
   * Array of radio options to display
   */
  options: RadioOption[];

  /**
   * Override the option label text color independently
   * If not specified, uses the color prop
   */
  optionLabelColor?: RainbowColor;

  /**
   * Whether the radio group is required
   */
  required?: boolean;

  /**
   * Size of the radio buttons
   * @default 'md'
   */
  size?: "sm" | "md" | "lg";

  /**
   * Inline styles for the container element
   */
  style?: CSSProperties;

  /**
   * Selected value (controlled component)
   */
  value?: string;
}

export const RadioGroup: FC<RadioGroupProps> = ({
  className = "",
  color = "blue",
  disabled = false,
  errorMessage,
  helperText,
  helperTextColor,
  id,
  label,
  labelTextColor,
  name,
  onChange,
  options,
  optionLabelColor,
  required = false,
  size = "md",
  style,
  value,
}) => {
  // Generate a unique ID if not provided
  const generatedId = useId();
  const radioGroupId = id || `radio-group-${generatedId}`;
  const groupName = name || radioGroupId;
  const helperId = `${radioGroupId}-helper`;
  const errorId = `${radioGroupId}-error`;

  const hasError = Boolean(errorMessage);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  // Determine label colors
  const selectedLabelColor = labelTextColor
    ? LABEL_COLOR_CLASSES[labelTextColor]
    : LABEL_COLOR_CLASSES[color];

  const selectedOptionLabelColor = optionLabelColor
    ? LABEL_COLOR_CLASSES[optionLabelColor]
    : LABEL_COLOR_CLASSES[color];

  // Build aria-describedby with both helper and error IDs
  const ariaDescribedBy =
    [helperText && !hasError ? helperId : null, hasError ? errorId : null]
      .filter(Boolean)
      .join(" ") || undefined;

  return (
    <fieldset
      className={`flex flex-col gap-4 border-0 p-0 m-0 ${className}`}
      style={style}
    >
      {label && (
        <legend
          id={`${radioGroupId}-label`}
          className={`text-base font-semibold ${selectedLabelColor}`}
        >
          {label}
          {required && (
            <span className="text-red-600 ml-1" aria-label="required">
              *
            </span>
          )}
        </legend>
      )}

      <div
        role="radiogroup"
        aria-labelledby={label ? `${radioGroupId}-label` : undefined}
        aria-required={required}
        aria-invalid={hasError}
        aria-errormessage={hasError ? errorId : undefined}
        aria-describedby={ariaDescribedBy}
        className="flex flex-col gap-3"
      >
        {options.map((option) => {
          const optionId = `${radioGroupId}-${option.value}`;
          const optionHelperId = `${optionId}-helper`;
          const isChecked = value === option.value;
          const isDisabled = disabled || option.disabled;

          return (
            <div key={option.value} className="flex flex-col gap-1.5">
              <div className="flex items-start gap-2">
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
                    aria-checked={isChecked}
                    aria-disabled={isDisabled}
                    aria-describedby={
                      option.helperText ? optionHelperId : undefined
                    }
                    className="peer sr-only"
                  />
                  <div
                    className={`${SIZE_CLASSES[size]} rounded-full border-2 transition-all duration-200 flex items-center justify-center ${
                      isDisabled
                        ? "opacity-50 cursor-not-allowed pointer-events-none"
                        : "cursor-pointer"
                    } ${
                      hasError
                        ? "border-red-500 bg-red-50"
                        : isChecked
                          ? COLOR_CLASSES[color]
                          : "border-gray-300 bg-white hover:border-gray-400"
                    } peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 ${
                      hasError
                        ? "focus-visible:ring-red-500"
                        : FOCUS_RING_CLASSES[color]
                    }`}
                    aria-hidden="true"
                  >
                    {isChecked && (
                      <div
                        className={`rounded-full bg-white ${
                          size === "sm"
                            ? "w-1.5 h-1.5"
                            : size === "lg"
                              ? "w-2.5 h-2.5"
                              : "w-2 h-2"
                        }`}
                      />
                    )}
                  </div>
                </div>

                <label
                  htmlFor={optionId}
                  className={`${LABEL_SIZE_CLASSES[size]} font-medium ${selectedOptionLabelColor} ${
                    isDisabled
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                >
                  {option.label}
                </label>
              </div>

              {option.helperText && (
                <p
                  id={optionHelperId}
                  className="text-sm text-gray-500 ml-6 mt-0.5"
                >
                  {option.helperText}
                </p>
              )}
            </div>
          );
        })}
      </div>

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
        <p
          id={helperId}
          className={`text-sm ${
            helperTextColor
              ? HELPER_TEXT_COLOR_CLASSES[helperTextColor]
              : "text-gray-500"
          }`}
        >
          {helperText}
        </p>
      )}
    </fieldset>
  );
};

RadioGroup.displayName = "RadioGroup";
