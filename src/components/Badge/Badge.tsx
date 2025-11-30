import { type CSSProperties, type ReactNode } from "react";
import type { RainbowColor } from "../../types";

const COLOR_MAP: Record<RainbowColor, string> = {
  red: "bg-red-600 text-white",
  orange: "bg-orange-500 text-white",
  yellow: "bg-yellow-500 text-white",
  green: "bg-green-600 text-white",
  blue: "bg-blue-600 text-white",
  indigo: "bg-indigo-600 text-white",
  violet: "bg-violet-600 text-white",
};

export interface BadgeProps {
  /**
   * Additional CSS classes for the badge
   */
  className?: string;
  /**
   * Rainbow color for the badge
   * @default 'blue'
   */
  color?: RainbowColor;
  /**
   * Optional icon to display before the text
   */
  icon?: ReactNode;
  /**
   * Optional accessible label for screen readers. If not provided, defaults to "Status: {text}" for status badges
   */
  labelForScreenReaders?: string;
  /**
   * Inline styles for the badge
   */
  style?: CSSProperties;
  /**
   * Text content of the badge
   */
  text: string;
  /**
   * Semantic variant of the badge:
   * - "status": Live status indicator (uses role="status" for announcements)
   * - "label": Static informational label (no ARIA role)
   * @default 'label'
   */
  variant?: "status" | "label";
}

export const Badge = ({
  className = "",
  color = "blue",
  icon,
  labelForScreenReaders,
  style,
  text,
  variant = "label",
}: BadgeProps) => {
  const colorClasses = COLOR_MAP[color];

  // For status badges, default aria-label to "Status: {text}" if not provided
  const computedAriaLabel =
    variant === "status" && !labelForScreenReaders
      ? `Status: ${text}`
      : labelForScreenReaders;

  return (
    <span
      role={variant === "status" ? "status" : undefined}
      aria-label={computedAriaLabel}
      className={`
        inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium
        ${colorClasses}
        ${className}
      `}
      style={style}
    >
      {icon && (
        <span className="inline-flex items-center" aria-hidden="true">
          {icon}
        </span>
      )}
      <span>{text}</span>
    </span>
  );
};

Badge.displayName = "Badge";
