import type { CSSProperties, MouseEvent, ReactNode } from "react";

export interface ButtonProps {
  /**
   * Additional CSS classes to apply to the button
   */
  className?: string;

  /**
   * Rainbow color scheme. Applies to primary and tertiary variants
   * @default 'blue'
   */
  color?: "red" | "orange" | "yellow" | "green" | "blue" | "indigo" | "violet";

  /**
   * Disables the button and prevents interaction
   */
  disabled?: boolean;

  /**
   * Optional icon element to display (works with any icon library)
   */
  icon?: ReactNode;

  /**
   * Position of the icon relative to the button text
   * @default 'left'
   */
  iconPosition?: "left" | "right";

  /**
   * Shows a spinner and disables the button during loading states
   */
  loading?: boolean;

  /**
   * Click event handler
   */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;

  /**
   * Whether the button has fully rounded (pill-shaped) corners
   */
  rounded?: boolean;

  /**
   * Size of the button
   * @default 'lg'
   */
  size?: "sm" | "md" | "lg";

  /**
   * Inline styles to apply to the button
   */
  style?: CSSProperties;

  /**
   * The text content to display inside the button
   */
  text: ReactNode;

  /**
   * HTML button type attribute
   * @default 'button'
   */
  type?: "button" | "submit" | "reset";

  /**
   * The visual style variant of the button
   * @default 'primary'
   */
  variant?: "primary" | "secondary" | "tertiary";
}

export function Button({
  className,
  color = "blue",
  disabled,
  icon,
  iconPosition = "left",
  loading = false,
  onClick,
  rounded = false,
  size = "lg",
  style,
  text,
  type = "button",
  variant = "primary",
}: ButtonProps) {
  const colorClasses = {
    red: {
      primary: "bg-red-600 text-white hover:bg-red-700",
      tertiary:
        "bg-transparent border border-red-600 text-red-600 hover:bg-red-50",
    },
    orange: {
      primary: "bg-orange-600 text-white hover:bg-orange-700",
      tertiary:
        "bg-transparent border border-orange-600 text-orange-600 hover:bg-orange-50",
    },
    yellow: {
      primary: "bg-yellow-500 text-white hover:bg-yellow-600",
      tertiary:
        "bg-transparent border border-yellow-500 text-yellow-600 hover:bg-yellow-50",
    },
    green: {
      primary: "bg-green-600 text-white hover:bg-green-700",
      tertiary:
        "bg-transparent border border-green-600 text-green-600 hover:bg-green-50",
    },
    blue: {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      tertiary:
        "bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50",
    },
    indigo: {
      primary: "bg-indigo-600 text-white hover:bg-indigo-700",
      tertiary:
        "bg-transparent border border-indigo-600 text-indigo-600 hover:bg-indigo-50",
    },
    violet: {
      primary: "bg-violet-600 text-white hover:bg-violet-700",
      tertiary:
        "bg-transparent border border-violet-600 text-violet-600 hover:bg-violet-50",
    },
  };

  let variantClass = "";

  if (variant === "secondary") {
    variantClass = "bg-gray-200 text-gray-900 hover:bg-gray-300";
  } else {
    // Use preset rainbow color
    variantClass = colorClasses[color][variant];
  }

  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs min-w-20",
    md: "px-4 py-2 text-sm min-w-24",
    lg: "px-6 py-3 text-base min-w-32",
  };

  const iconSizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  };

  const roundedClass = rounded ? "rounded-full" : "rounded-md";

  // Accessibility classes
  const a11yClasses =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      style={style}
      className={`inline-flex items-center justify-center font-medium ${variantClass} ${sizeClasses[size]} ${roundedClass} ${a11yClasses} ${
        className ?? ""
      }`}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {!loading && icon && iconPosition === "left" && (
        <span
          className={`-ml-1 mr-2 ${iconSizeClasses[size]}`}
          aria-hidden="true"
        >
          {icon}
        </span>
      )}
      {text}
      {!loading && icon && iconPosition === "right" && (
        <span
          className={`ml-2 -mr-1 ${iconSizeClasses[size]}`}
          aria-hidden="true"
        >
          {icon}
        </span>
      )}
    </button>
  );
}
