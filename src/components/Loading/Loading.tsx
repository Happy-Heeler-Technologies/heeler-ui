import { type CSSProperties } from "react";
import type { RainbowColor } from "../../icons/types";

const spinnerColorMap: Record<RainbowColor, string> = {
  red: "border-red-600",
  orange: "border-orange-500",
  yellow: "border-yellow-500",
  green: "border-green-600",
  blue: "border-blue-600",
  indigo: "border-indigo-600",
  violet: "border-violet-600",
};

const backgroundColorMap: Record<RainbowColor, string> = {
  red: "bg-red-50",
  orange: "bg-orange-50",
  yellow: "bg-yellow-50",
  green: "bg-green-50",
  blue: "bg-blue-50",
  indigo: "bg-indigo-50",
  violet: "bg-violet-50",
};

const textColorMap: Record<RainbowColor, string> = {
  red: "text-red-600",
  orange: "text-orange-500",
  yellow: "text-yellow-500",
  green: "text-green-600",
  blue: "text-blue-600",
  indigo: "text-indigo-600",
  violet: "text-violet-600",
};

export interface LoadingProps {
  /**
   * Additional CSS classes for the loading container
   */
  className?: string;
  /**
   * Rainbow color for the spinner
   * @default 'blue'
   */
  spinnerColor?: RainbowColor;
  /**
   * Rainbow color for the background (only applied when withBackground is true)
   * @default 'blue'
   */
  backgroundColor?: RainbowColor;
  /**
   * Whether to show a solid background container
   * @default false
   */
  withBackground?: boolean;
  /**
   * Size of the spinner
   * @default 'medium'
   */
  size?: "small" | "medium" | "large";
  /**
   * Optional loading text to display below spinner
   */
  text?: string;
  /**
   * Rainbow color for the loading text. Defaults to spinnerColor if not specified
   */
  textColor?: RainbowColor;
  /**
   * Inline styles for the loading container
   */
  style?: CSSProperties;
  /**
   * Optional accessible label for screen readers
   * @default 'Loading'
   */
  labelForScreenReaders?: string;
}

const sizeMap = {
  small: "w-8 h-8 border-2",
  medium: "w-12 h-12 border-3",
  large: "w-16 h-16 border-4",
};

export const Loading = ({
  className = "",
  spinnerColor = "blue",
  backgroundColor = "blue",
  withBackground = false,
  size = "medium",
  text,
  textColor,
  style,
  labelForScreenReaders = "Loading",
}: LoadingProps) => {
  const spinnerClasses = spinnerColorMap[spinnerColor];
  const bgClasses = withBackground ? backgroundColorMap[backgroundColor] : "";
  const sizeClasses = sizeMap[size];
  const textClasses = textColorMap[textColor ?? spinnerColor];

  // Use visible text for aria-label if available, otherwise use labelForScreenReaders
  const accessibleLabel = text || labelForScreenReaders;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label={accessibleLabel}
      className={`
        flex flex-col items-center justify-center gap-3
        ${withBackground ? `${bgClasses} rounded-lg p-8` : ""}
        ${className}
      `}
      style={style}
    >
      <div
        className={`
          ${sizeClasses}
          ${spinnerClasses}
          border-t-transparent
          rounded-full
          animate-spin
        `}
        aria-hidden="true"
      />
      {text ? (
        <p className={`text-sm font-medium ${textClasses}`} aria-hidden="true">
          {text}
        </p>
      ) : (
        <span className="sr-only">{labelForScreenReaders}</span>
      )}
    </div>
  );
};
