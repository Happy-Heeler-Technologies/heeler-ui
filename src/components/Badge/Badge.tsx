"use client";

import {
  cloneElement,
  isValidElement,
  type CSSProperties,
  type ReactElement,
} from "react";

export type BadgeSize = "small" | "standard" | "large";

export type BadgeVariant = "status" | "label";

export interface BadgeIconProps {
  "aria-hidden"?: boolean;
  width?: number;
  height?: number;
}

export interface BadgeProps {
  /**
   * Tailwind background color class (e.g., "bg-blue-600", "bg-emerald-500")
   * @default "bg-gray-600"
   */
  backgroundColor?: string;
  /**
   * Additional CSS classes for the badge container
   */
  className?: string;
  /**
   * Optional icon component to display before the text.
   * Accepts any valid React element (e.g., Lucide icons, custom SVGs).
   * Icon size is automatically scaled based on the badge size.
   */
  icon?: ReactElement;
  /**
   * Accessible label for screen readers.
   * For status variants, defaults to "Status: {text}" if not provided.
   */
  labelForScreenReaders?: string;
  /**
   * Badge size affecting padding, font size, and icon dimensions
   * @default "standard"
   */
  size?: BadgeSize;
  /**
   * Inline styles for the badge container
   */
  style?: CSSProperties;
  /**
   * Text content displayed in the badge
   */
  text: string;
  /**
   * Tailwind text color class (e.g., "text-white", "text-gray-900")
   * @default "text-white"
   */
  textColor?: string;
  /**
   * Semantic variant of the badge:
   * - "status": Live status indicator (uses role="status" for screen reader announcements)
   * - "label": Static informational label (no ARIA role)
   * @default "label"
   */
  variant?: BadgeVariant;
}

const SIZE_STYLES: Record<BadgeSize, { container: string; iconSize: number }> =
  {
    small: {
      container: "px-2 py-0.5 text-xs gap-1",
      iconSize: 12,
    },
    standard: {
      container: "px-2.5 py-0.5 text-sm gap-1.5",
      iconSize: 14,
    },
    large: {
      container: "px-3 py-1 text-base gap-2",
      iconSize: 18,
    },
  };

export function Badge({
  backgroundColor = "bg-gray-600",
  className,
  icon,
  labelForScreenReaders,
  size = "standard",
  style,
  text,
  textColor = "text-white",
  variant = "label",
}: BadgeProps) {
  const { container: sizeClasses, iconSize } = SIZE_STYLES[size];

  const ariaLabel =
    variant === "status" && !labelForScreenReaders
      ? `Status: ${text}`
      : labelForScreenReaders;

  const scaledIcon =
    icon && isValidElement<BadgeIconProps>(icon)
      ? cloneElement(icon, {
          "aria-hidden": true,
          width: iconSize,
          height: iconSize,
        })
      : null;

  return (
    <span
      role={variant === "status" ? "status" : undefined}
      aria-label={ariaLabel}
      className={[
        "inline-flex items-center rounded-full font-medium [&_svg]:fill-current",
        sizeClasses,
        backgroundColor,
        textColor,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      {scaledIcon}
      <span>{text}</span>
    </span>
  );
}

Badge.displayName = "Badge";
