"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
} from "react";

export type SelectSize = "small" | "standard" | "large";

export interface SelectOption {
  disabled?: boolean;
  label: string;
  value: string;
}

export interface SelectProps {
  className?: string;
  color?: string;
  disabled?: boolean;
  errorMessage?: string;
  helperText?: string;
  helperTextColor?: string;
  id?: string;
  label?: string;
  labelTextColor?: string;
  name?: string;
  onBlur?: () => void;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  options: SelectOption[];
  optionTextColor?: string;
  placeholder?: string;
  required?: boolean;
  size?: SelectSize;
  style?: CSSProperties;
  value?: string;
}

const SIZE_STYLES: Record<
  SelectSize,
  { trigger: string; option: string; label: string; helper: string }
> = {
  small: {
    trigger: "px-2.5 py-1.5 text-sm",
    option: "px-2.5 py-1.5 text-sm",
    label: "text-xs",
    helper: "text-xs",
  },
  standard: {
    trigger: "px-3 py-2 text-base",
    option: "px-3 py-2 text-base",
    label: "text-sm",
    helper: "text-sm",
  },
  large: {
    trigger: "px-4 py-3 text-lg",
    option: "px-4 py-3 text-lg",
    label: "text-base",
    helper: "text-base",
  },
};

const BORDER_CLASSES: Record<string, string> = {
  red: "border-red-500",
  orange: "border-orange-500",
  amber: "border-amber-500",
  yellow: "border-yellow-500",
  lime: "border-lime-500",
  green: "border-green-500",
  emerald: "border-emerald-500",
  teal: "border-teal-500",
  cyan: "border-cyan-500",
  sky: "border-sky-500",
  blue: "border-blue-500",
  indigo: "border-indigo-500",
  violet: "border-violet-500",
  purple: "border-purple-500",
  fuchsia: "border-fuchsia-500",
  pink: "border-pink-500",
  rose: "border-rose-500",
  gray: "border-gray-300",
};

const FOCUS_RING_CLASSES: Record<string, string> = {
  red: "focus-visible:ring-red-500",
  orange: "focus-visible:ring-orange-500",
  amber: "focus-visible:ring-amber-500",
  yellow: "focus-visible:ring-yellow-500",
  lime: "focus-visible:ring-lime-500",
  green: "focus-visible:ring-green-500",
  emerald: "focus-visible:ring-emerald-500",
  teal: "focus-visible:ring-teal-500",
  cyan: "focus-visible:ring-cyan-500",
  sky: "focus-visible:ring-sky-500",
  blue: "focus-visible:ring-blue-500",
  indigo: "focus-visible:ring-indigo-500",
  violet: "focus-visible:ring-violet-500",
  purple: "focus-visible:ring-purple-500",
  fuchsia: "focus-visible:ring-fuchsia-500",
  pink: "focus-visible:ring-pink-500",
  rose: "focus-visible:ring-rose-500",
  gray: "focus-visible:ring-gray-500",
};

const HIGHLIGHT_CLASSES: Record<string, string> = {
  red: "bg-red-100 text-red-900",
  orange: "bg-orange-100 text-orange-900",
  amber: "bg-amber-100 text-amber-900",
  yellow: "bg-yellow-100 text-yellow-900",
  lime: "bg-lime-100 text-lime-900",
  green: "bg-green-100 text-green-900",
  emerald: "bg-emerald-100 text-emerald-900",
  teal: "bg-teal-100 text-teal-900",
  cyan: "bg-cyan-100 text-cyan-900",
  sky: "bg-sky-100 text-sky-900",
  blue: "bg-blue-100 text-blue-900",
  indigo: "bg-indigo-100 text-indigo-900",
  violet: "bg-violet-100 text-violet-900",
  purple: "bg-purple-100 text-purple-900",
  fuchsia: "bg-fuchsia-100 text-fuchsia-900",
  pink: "bg-pink-100 text-pink-900",
  rose: "bg-rose-100 text-rose-900",
  gray: "bg-gray-100 text-gray-900",
};

const LABEL_TEXT_CLASSES: Record<string, string> = {
  red: "text-red-700",
  orange: "text-orange-700",
  amber: "text-amber-700",
  yellow: "text-yellow-700",
  lime: "text-lime-700",
  green: "text-green-700",
  emerald: "text-emerald-700",
  teal: "text-teal-700",
  cyan: "text-cyan-700",
  sky: "text-sky-700",
  blue: "text-blue-700",
  indigo: "text-indigo-700",
  violet: "text-violet-700",
  purple: "text-purple-700",
  fuchsia: "text-fuchsia-700",
  pink: "text-pink-700",
  rose: "text-rose-700",
  gray: "text-gray-700",
};

const HELPER_TEXT_CLASSES: Record<string, string> = {
  red: "text-red-600",
  orange: "text-orange-600",
  amber: "text-amber-600",
  yellow: "text-yellow-600",
  lime: "text-lime-600",
  green: "text-green-600",
  emerald: "text-emerald-600",
  teal: "text-teal-600",
  cyan: "text-cyan-600",
  sky: "text-sky-600",
  blue: "text-blue-600",
  indigo: "text-indigo-600",
  violet: "text-violet-600",
  purple: "text-purple-600",
  fuchsia: "text-fuchsia-600",
  pink: "text-pink-600",
  rose: "text-rose-600",
  gray: "text-gray-500",
};

const OPTION_TEXT_CLASSES: Record<string, string> = {
  red: "text-red-700",
  orange: "text-orange-700",
  amber: "text-amber-700",
  yellow: "text-yellow-700",
  lime: "text-lime-700",
  green: "text-green-700",
  emerald: "text-emerald-700",
  teal: "text-teal-700",
  cyan: "text-cyan-700",
  sky: "text-sky-700",
  blue: "text-blue-700",
  indigo: "text-indigo-700",
  violet: "text-violet-700",
  purple: "text-purple-700",
  fuchsia: "text-fuchsia-700",
  pink: "text-pink-700",
  rose: "text-rose-700",
  gray: "text-gray-700",
};

const CHEVRON_CLASSES: Record<string, string> = {
  red: "text-red-500",
  orange: "text-orange-500",
  amber: "text-amber-500",
  yellow: "text-yellow-500",
  lime: "text-lime-500",
  green: "text-green-500",
  emerald: "text-emerald-500",
  teal: "text-teal-500",
  cyan: "text-cyan-500",
  sky: "text-sky-500",
  blue: "text-blue-500",
  indigo: "text-indigo-500",
  violet: "text-violet-500",
  purple: "text-purple-500",
  fuchsia: "text-fuchsia-500",
  pink: "text-pink-500",
  rose: "text-rose-500",
  gray: "text-gray-400",
};

const DROPDOWN_BORDER_CLASSES: Record<string, string> = {
  red: "border-red-300",
  orange: "border-orange-300",
  amber: "border-amber-300",
  yellow: "border-yellow-300",
  lime: "border-lime-300",
  green: "border-green-300",
  emerald: "border-emerald-300",
  teal: "border-teal-300",
  cyan: "border-cyan-300",
  sky: "border-sky-300",
  blue: "border-blue-300",
  indigo: "border-indigo-300",
  violet: "border-violet-300",
  purple: "border-purple-300",
  fuchsia: "border-fuchsia-300",
  pink: "border-pink-300",
  rose: "border-rose-300",
  gray: "border-gray-200",
};

function deriveBorderClass(color: string): string {
  return BORDER_CLASSES[color] || BORDER_CLASSES.blue;
}

function deriveFocusRingClass(color: string): string {
  return FOCUS_RING_CLASSES[color] || FOCUS_RING_CLASSES.blue;
}

function deriveHighlightClass(color: string): string {
  return HIGHLIGHT_CLASSES[color] || HIGHLIGHT_CLASSES.blue;
}

function deriveLabelTextClass(color: string): string {
  return LABEL_TEXT_CLASSES[color] || LABEL_TEXT_CLASSES.blue;
}

function deriveHelperTextClass(color: string): string {
  return HELPER_TEXT_CLASSES[color] || HELPER_TEXT_CLASSES.blue;
}

function deriveOptionTextClass(color: string): string {
  return OPTION_TEXT_CLASSES[color] || OPTION_TEXT_CLASSES.gray;
}

function deriveChevronClass(color: string): string {
  return CHEVRON_CLASSES[color] || CHEVRON_CLASSES.blue;
}

function deriveDropdownBorderClass(color: string): string {
  return DROPDOWN_BORDER_CLASSES[color] || DROPDOWN_BORDER_CLASSES.blue;
}

export function Select({
  className,
  color = "blue",
  disabled = false,
  errorMessage,
  helperText,
  helperTextColor,
  id,
  label,
  labelTextColor,
  name,
  onBlur,
  onChange,
  onFocus,
  options,
  optionTextColor,
  placeholder = "Select...",
  required = false,
  size = "standard",
  style,
  value,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listboxRef = useRef<HTMLUListElement>(null);

  const generatedId = useId();
  const selectId = id ?? `select-${generatedId}`;
  const helperId = `${selectId}-helper`;
  const errorId = `${selectId}-error`;
  const listboxId = `${selectId}-listbox`;

  const hasError = Boolean(errorMessage);
  const selectedOption = options.find((opt) => opt.value === value);
  const displayValue = selectedOption?.label || placeholder;

  const sizeStyles = SIZE_STYLES[size];

  const borderClass = hasError ? "border-red-500" : deriveBorderClass(color);
  const focusRingClass = hasError
    ? "focus-visible:ring-red-500"
    : deriveFocusRingClass(color);
  const highlightClass = deriveHighlightClass(color);
  const labelClass = deriveLabelTextClass(labelTextColor || color);
  const helperClass = deriveHelperTextClass(helperTextColor || color);
  const optionClass = deriveOptionTextClass(optionTextColor || "gray");
  const chevronClass = deriveChevronClass(color);
  const dropdownBorderClass = deriveDropdownBorderClass(color);

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

  useEffect(() => {
    if (isOpen && highlightedIndex >= 0 && listboxRef.current) {
      const element = listboxRef.current.children[
        highlightedIndex
      ] as HTMLElement;
      element?.scrollIntoView({ block: "nearest" });
    }
  }, [highlightedIndex, isOpen]);

  const handleToggle = () => {
    if (disabled) return;
    const opening = !isOpen;
    setIsOpen(opening);

    if (opening) {
      onFocus?.();
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
          let next = highlightedIndex + 1;
          while (next < options.length && options[next].disabled) next++;
          if (next < options.length) setHighlightedIndex(next);
        }
        break;

      case "ArrowUp":
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          onFocus?.();
          setHighlightedIndex(options.length - 1);
        } else {
          let prev = highlightedIndex - 1;
          while (prev >= 0 && options[prev].disabled) prev--;
          if (prev >= 0) setHighlightedIndex(prev);
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
          let first = 0;
          while (first < options.length && options[first].disabled) first++;
          if (first < options.length) setHighlightedIndex(first);
        }
        break;

      case "End":
        event.preventDefault();
        if (isOpen) {
          let last = options.length - 1;
          while (last >= 0 && options[last].disabled) last--;
          if (last >= 0) setHighlightedIndex(last);
        }
        break;

      case "Tab":
        if (isOpen) {
          setIsOpen(false);
          setHighlightedIndex(-1);
          onBlur?.();
        }
        break;

      default:
        if (event.key.length === 1 && !event.ctrlKey && !event.metaKey) {
          event.preventDefault();
          const char = event.key.toLowerCase();
          const start = isOpen ? highlightedIndex + 1 : 0;

          let found = -1;
          for (let i = start; i < options.length; i++) {
            if (
              !options[i].disabled &&
              options[i].label.toLowerCase().startsWith(char)
            ) {
              found = i;
              break;
            }
          }
          if (found === -1) {
            for (let i = 0; i < start; i++) {
              if (
                !options[i].disabled &&
                options[i].label.toLowerCase().startsWith(char)
              ) {
                found = i;
                break;
              }
            }
          }

          if (found !== -1) {
            if (!isOpen) {
              setIsOpen(true);
              onFocus?.();
            }
            setHighlightedIndex(found);
          }
        }
        break;
    }
  };

  const ariaDescribedBy =
    [helperText && !hasError ? helperId : null, hasError ? errorId : null]
      .filter(Boolean)
      .join(" ") || undefined;

  return (
    <div
      ref={containerRef}
      className={["flex flex-col gap-1.5", className].filter(Boolean).join(" ")}
    >
      {label && (
        <label
          id={`${selectId}-label`}
          htmlFor={selectId}
          className={[sizeStyles.label, "font-medium", labelClass].join(" ")}
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
        <button
          ref={triggerRef}
          id={selectId}
          type="button"
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-controls={listboxId}
          aria-activedescendant={
            isOpen && highlightedIndex >= 0
              ? `${selectId}-option-${highlightedIndex}`
              : undefined
          }
          aria-labelledby={label ? `${selectId}-label` : undefined}
          aria-label={!label ? placeholder : undefined}
          aria-required={required}
          aria-invalid={hasError}
          aria-describedby={ariaDescribedBy}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          className={[
            "w-full rounded-md border bg-white transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0",
            "flex items-center justify-between text-left",
            sizeStyles.trigger,
            borderClass,
            focusRingClass,
            disabled
              ? "opacity-50 cursor-not-allowed bg-gray-50"
              : "cursor-pointer",
            !selectedOption ? "text-gray-400" : "text-gray-900",
          ].join(" ")}
          style={style}
        >
          <span className="block truncate">{displayValue}</span>
          <svg
            className={[
              "w-5 h-5 transition-transform",
              chevronClass,
              isOpen && "rotate-180",
            ]
              .filter(Boolean)
              .join(" ")}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
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
            className={[
              "absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto",
              dropdownBorderClass,
            ].join(" ")}
          >
            {options.map((option, index) => {
              const isSelected = option.value === value;
              const isHighlighted = index === highlightedIndex;

              return (
                <li
                  key={option.value}
                  id={`${selectId}-option-${index}`}
                  role="option"
                  aria-selected={isSelected}
                  aria-disabled={option.disabled}
                  onClick={() => handleSelect(option)}
                  className={[
                    sizeStyles.option,
                    "transition-colors",
                    option.disabled
                      ? "opacity-50 cursor-not-allowed text-gray-400"
                      : `cursor-pointer ${optionClass} hover:bg-gray-50`,
                    isHighlighted && !option.disabled && highlightClass,
                    isSelected && "font-semibold",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {option.label}
                </li>
              );
            })}
          </ul>
        )}

        <input type="hidden" name={name} value={value || ""} />
      </div>

      {hasError && (
        <p
          id={errorId}
          className={[sizeStyles.helper, "text-red-600"].join(" ")}
          role="alert"
        >
          {errorMessage}
        </p>
      )}

      {!hasError && helperText && (
        <p id={helperId} className={[sizeStyles.helper, helperClass].join(" ")}>
          {helperText}
        </p>
      )}
    </div>
  );
}

Select.displayName = "Select";
