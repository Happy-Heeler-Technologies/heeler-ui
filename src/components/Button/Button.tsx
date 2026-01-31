"use client";

import {
  cloneElement,
  isValidElement,
  type CSSProperties,
  type MouseEvent,
  type ReactElement,
  type ReactNode,
} from "react";

export type ButtonSize = "small" | "standard" | "large";

export type ButtonVariant = "filled" | "outline";

export interface ButtonIconProps {
  "aria-hidden"?: boolean;
  width?: number;
  height?: number;
}

export interface ButtonProps {
  /**
   * Tailwind background color class for filled variant (e.g., "bg-blue-600")
   * For outline variant, this is ignored.
   * @default "bg-gray-900"
   */
  backgroundColor?: string;
  /**
   * Tailwind border color class for outline variant (e.g., "border-blue-600")
   * @default "border-gray-900"
   */
  borderColor?: string;
  /**
   * Additional CSS classes to apply to the button
   */
  className?: string;
  /**
   * Disables the button and prevents interaction
   */
  disabled?: boolean;
  /**
   * Optional icon component to display at the end of the button text.
   * Accepts any valid React element (e.g., Lucide icons, custom SVGs).
   */
  endIcon?: ReactElement;
  /**
   * Tailwind hover background color class (e.g., "hover:bg-blue-700")
   * For outline variant, defaults to a subtle hover effect.
   */
  hoverBackgroundColor?: string;
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
   * @default false
   */
  rounded?: boolean;
  /**
   * Size of the button affecting padding, font size, and icon dimensions
   * @default "standard"
   */
  size?: ButtonSize;
  /**
   * Optional icon component to display at the start of the button text.
   * Accepts any valid React element (e.g., Lucide icons, custom SVGs).
   */
  startIcon?: ReactElement;
  /**
   * Inline styles to apply to the button
   */
  style?: CSSProperties;
  /**
   * The content to display inside the button
   */
  text: ReactNode;
  /**
   * Tailwind text color class (e.g., "text-white", "text-gray-900")
   * For outline variant, defaults to match borderColor.
   * @default "text-white" for filled, inherits from borderColor for outline
   */
  textColor?: string;
  /**
   * HTML button type attribute
   * @default "button"
   */
  type?: "button" | "submit" | "reset";
  /**
   * Visual style variant of the button
   * @default "filled"
   */
  variant?: ButtonVariant;
}

const SIZE_STYLES: Record<ButtonSize, { container: string; iconSize: number }> =
  {
    small: {
      container: "px-3 py-1.5 text-xs gap-1.5",
      iconSize: 12,
    },
    standard: {
      container: "px-4 py-2 text-sm gap-2",
      iconSize: 16,
    },
    large: {
      container: "px-6 py-3 text-base gap-2.5",
      iconSize: 20,
    },
  };

const SPINNER_SIZES: Record<ButtonSize, number> = {
  small: 12,
  standard: 16,
  large: 20,
};

function Spinner({ size }: { size: number }) {
  return (
    <svg
      className="animate-spin"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
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
  );
}

function deriveTextColorFromBorder(borderColor: string): string {
  return borderColor.replace("border-", "text-");
}

export function Button({
  backgroundColor = "bg-gray-900",
  borderColor = "border-gray-900",
  className,
  disabled = false,
  endIcon,
  hoverBackgroundColor,
  loading = false,
  onClick,
  rounded = false,
  size = "standard",
  startIcon,
  style,
  text,
  textColor,
  type = "button",
  variant = "filled",
}: ButtonProps) {
  const { container: sizeClasses, iconSize } = SIZE_STYLES[size];
  const spinnerSize = SPINNER_SIZES[size];

  const resolvedTextColor =
    textColor ??
    (variant === "outline"
      ? deriveTextColorFromBorder(borderColor)
      : "text-white");

  const variantClasses =
    variant === "filled"
      ? [
          backgroundColor,
          resolvedTextColor,
          hoverBackgroundColor ?? "hover:brightness-90",
        ]
      : [
          "bg-transparent border",
          borderColor,
          resolvedTextColor,
          hoverBackgroundColor ?? "hover:bg-gray-100",
        ];

  const roundedClass = rounded ? "rounded-full" : "rounded-md";

  const scaleIcon = (icon: ReactElement | undefined) =>
    icon && isValidElement<ButtonIconProps>(icon)
      ? cloneElement(icon, {
          "aria-hidden": true,
          width: iconSize,
          height: iconSize,
        })
      : null;

  const scaledStartIcon = scaleIcon(startIcon);
  const scaledEndIcon = scaleIcon(endIcon);

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      style={style}
      className={[
        "inline-flex items-center justify-center font-medium transition-all [&_svg]:fill-current",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
        sizeClasses,
        ...variantClasses,
        roundedClass,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {loading && <Spinner size={spinnerSize} />}
      {!loading && scaledStartIcon}
      <span>{text}</span>
      {!loading && scaledEndIcon}
    </button>
  );
}

Button.displayName = "Button";
