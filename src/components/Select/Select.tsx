import {
  CSSProperties,
  FC,
  KeyboardEvent,
  useEffect,
  useId,
  useRef,
  useState,
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
   * Rainbow color for focus ring, border, text, and options
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
   * Override the label text color independently
   * If not specified, uses the color prop
   */
  labelTextColor?: RainbowColor;

  /**
   * Name attribute for the select (useful for forms)
   */
  name?: string;

  /**
   * Blur event handler
   */
  onBlur?: () => void;

  /**
   * Change handler for controlled component
   */
  onChange?: (value: string) => void;

  /**
   * Focus event handler
   */
  onFocus?: () => void;

  /**
   * Array of options to display in the select
   */
  options: SelectOption[];

  /**
   * Override the option text color independently
   * If not specified, uses the color prop
   */
  optionTextColor?: RainbowColor;

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
  labelTextColor,
  name,
  onBlur,
  onChange,
  onFocus,
  options,
  optionTextColor,
  placeholder,
  required = false,
  size = "md",
  style,
  value,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listboxRef = useRef<HTMLUListElement>(null);

  // Generate a unique ID if not provided
  const selectId = id || `select-${useId()}`;
  const helperId = `${selectId}-helper`;
  const errorId = `${selectId}-error`;
  const listboxId = `${selectId}-listbox`;

  const hasError = Boolean(errorMessage);

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2.5 text-base",
    lg: "px-5 py-3 text-lg",
  };

  const optionSizeClasses = {
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
    red: "text-red-600",
    orange: "text-orange-500",
    yellow: "text-yellow-500",
    green: "text-green-600",
    blue: "text-blue-600",
    indigo: "text-indigo-600",
    violet: "text-violet-600",
  };

  const optionColorClasses: Record<RainbowColor, string> = {
    red: "text-red-600 hover:bg-red-50",
    orange: "text-orange-500 hover:bg-orange-50",
    yellow: "text-yellow-500 hover:bg-yellow-50",
    green: "text-green-600 hover:bg-green-50",
    blue: "text-blue-600 hover:bg-blue-50",
    indigo: "text-indigo-600 hover:bg-indigo-50",
    violet: "text-violet-600 hover:bg-violet-50",
  };

  const optionHighlightClasses: Record<RainbowColor, string> = {
    red: "bg-red-50",
    orange: "bg-orange-50",
    yellow: "bg-yellow-50",
    green: "bg-green-50",
    blue: "bg-blue-50",
    indigo: "bg-indigo-50",
    violet: "bg-violet-50",
  };

  const selectedOption = options.find((opt) => opt.value === value);
  const displayValue = selectedOption?.label || placeholder || "Select...";

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setHighlightedIndex(-1);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  // Scroll highlighted option into view
  useEffect(() => {
    if (isOpen && highlightedIndex >= 0 && listboxRef.current) {
      const highlightedElement = listboxRef.current.children[
        highlightedIndex
      ] as HTMLElement;
      if (highlightedElement) {
        highlightedElement.scrollIntoView({ block: "nearest" });
      }
    }
  }, [highlightedIndex, isOpen]);

  const handleToggle = () => {
    if (disabled) return;
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);

    if (newIsOpen) {
      onFocus?.();
      // Find and highlight the currently selected option
      const selectedIndex = options.findIndex((opt) => opt.value === value);
      setHighlightedIndex(selectedIndex >= 0 ? selectedIndex : 0);
    } else {
      onBlur?.();
      setHighlightedIndex(-1);
    }
  };

  const handleSelect = (option: SelectOption) => {
    if (option.disabled) return;
    onChange?.(option.value);
    setIsOpen(false);
    setHighlightedIndex(-1);
    onBlur?.();
    triggerRef.current?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) return;

    switch (event.key) {
      case "Enter":
      case " ":
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          onFocus?.();
          const selectedIndex = options.findIndex((opt) => opt.value === value);
          setHighlightedIndex(selectedIndex >= 0 ? selectedIndex : 0);
        } else if (highlightedIndex >= 0) {
          handleSelect(options[highlightedIndex]);
        }
        break;

      case "ArrowDown":
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          onFocus?.();
          setHighlightedIndex(0);
        } else {
          let nextIndex = highlightedIndex + 1;
          while (nextIndex < options.length && options[nextIndex].disabled) {
            nextIndex++;
          }
          if (nextIndex < options.length) {
            setHighlightedIndex(nextIndex);
          }
        }
        break;

      case "ArrowUp":
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          onFocus?.();
          setHighlightedIndex(options.length - 1);
        } else {
          let prevIndex = highlightedIndex - 1;
          while (prevIndex >= 0 && options[prevIndex].disabled) {
            prevIndex--;
          }
          if (prevIndex >= 0) {
            setHighlightedIndex(prevIndex);
          }
        }
        break;

      case "Escape":
        event.preventDefault();
        setIsOpen(false);
        setHighlightedIndex(-1);
        onBlur?.();
        break;

      case "Home":
        event.preventDefault();
        if (isOpen) {
          let firstIndex = 0;
          while (firstIndex < options.length && options[firstIndex].disabled) {
            firstIndex++;
          }
          if (firstIndex < options.length) {
            setHighlightedIndex(firstIndex);
          }
        }
        break;

      case "End":
        event.preventDefault();
        if (isOpen) {
          let lastIndex = options.length - 1;
          while (lastIndex >= 0 && options[lastIndex].disabled) {
            lastIndex--;
          }
          if (lastIndex >= 0) {
            setHighlightedIndex(lastIndex);
          }
        }
        break;

      case "Tab":
        if (isOpen) {
          setIsOpen(false);
          setHighlightedIndex(-1);
          onBlur?.();
        }
        break;
    }
  };

  const triggerClasses = `
    w-full rounded-md border-2 bg-white
    ${sizeClasses[size]}
    ${hasError ? "border-red-600 text-red-600 focus:border-red-600 focus:ring-red-600" : colorClasses[color]}
    ${disabled ? "bg-gray-100 cursor-not-allowed opacity-60" : "cursor-pointer"}
    focus:outline-none focus:ring-2 focus:ring-offset-2
    transition-colors
    flex items-center justify-between
    text-left
    ${!selectedOption && placeholder ? "text-gray-400" : ""}
  `;

  // Build aria-describedby with both helper and error IDs
  const ariaDescribedBy =
    [helperText && !hasError ? helperId : null, hasError ? errorId : null]
      .filter(Boolean)
      .join(" ") || undefined;

  return (
    <div className={`flex flex-col gap-1.5 ${className}`} ref={containerRef}>
      {label && (
        <label
          htmlFor={selectId}
          className={`text-sm font-medium ${labelColorClasses[labelTextColor || color]}`}
        >
          {label}
          {required && (
            <span className="text-red-600 ml-1" aria-label="required">
              *
            </span>
          )}
        </label>
      )}

      <div className="relative">
        <button
          ref={triggerRef}
          id={selectId}
          type="button"
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-controls={listboxId}
          aria-labelledby={label ? `${selectId}-label` : undefined}
          aria-required={required}
          aria-disabled={disabled}
          aria-invalid={hasError}
          aria-errormessage={hasError ? errorId : undefined}
          aria-describedby={ariaDescribedBy}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          className={triggerClasses}
          style={style}
        >
          <span className="block truncate">{displayValue}</span>
          <svg
            className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <ul
            ref={listboxRef}
            id={listboxId}
            role="listbox"
            aria-labelledby={label ? `${selectId}-label` : undefined}
            className="absolute z-10 w-full mt-1 bg-white border-2 border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto focus:outline-none"
          >
            {options.map((option, index) => {
              const isSelected = option.value === value;
              const isHighlighted = index === highlightedIndex;

              return (
                <li
                  key={option.value}
                  role="option"
                  aria-selected={isSelected}
                  aria-disabled={option.disabled}
                  onClick={() => handleSelect(option)}
                  className={`
                    ${optionSizeClasses[size]}
                    ${optionColorClasses[optionTextColor || color]}
                    ${isHighlighted ? optionHighlightClasses[optionTextColor || color] : ""}
                    ${option.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
                    ${isSelected ? "font-semibold" : ""}
                    transition-colors
                  `}
                >
                  {option.label}
                </li>
              );
            })}
          </ul>
        )}

        {/* Hidden input for form submission */}
        <input type="hidden" name={name} value={value || ""} />
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
        <p id={helperId} className="text-sm text-gray-500">
          {helperText}
        </p>
      )}
    </div>
  );
};

Select.displayName = "Select";
