import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  color?: "red" | "orange" | "yellow" | "green" | "blue" | "indigo" | "violet";
  customColor?: string;
  size?: "sm" | "md" | "lg";
  rounded?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

export function Button({
  children,
  variant = "primary",
  color = "blue",
  customColor,
  size = "lg",
  rounded = false,
  loading = false,
  icon,
  iconPosition = "left",
  disabled,
  className,
  style,
  ...props
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
  let customStyles = { ...style };

  if (variant === "secondary") {
    variantClass = "bg-gray-200 text-gray-900 hover:bg-gray-300";
  } else if (customColor) {
    // Custom color takes precedence
    if (variant === "primary") {
      customStyles = {
        ...customStyles,
        backgroundColor: customColor,
        color: "white",
      };
      variantClass = "hover:opacity-90";
    } else if (variant === "tertiary") {
      customStyles = {
        ...customStyles,
        borderColor: customColor,
        color: customColor,
        backgroundColor: "transparent",
      };
      variantClass = "border hover:opacity-75";
    }
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
      {...props}
      disabled={disabled || loading}
      style={customStyles}
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
      {children}
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
