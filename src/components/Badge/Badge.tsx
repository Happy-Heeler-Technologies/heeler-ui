import { type CSSProperties, type ReactNode } from "react";

// Color mapping for badge backgrounds
const colorMap: Record<string, string> = {
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
  color?: "red" | "orange" | "yellow" | "green" | "blue" | "indigo" | "violet";
  /**
   * Optional icon to display before the text
   */
  icon?: ReactNode;
  /**
   * Optional accessible label for screen readers when badge meaning is not clear from text alone
   */
  ariaLabel?: string;
  /**
   * Inline styles for the badge
   */
  style?: CSSProperties;
  /**
   * Text content of the badge
   */
  text: string;
}

export const Badge = ({
  ariaLabel,
  className = "",
  color = "blue",
  icon,
  style,
  text,
}: BadgeProps) => {
  const colorClasses = colorMap[color];

  return (
    <span
      role="status"
      aria-label={ariaLabel}
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
