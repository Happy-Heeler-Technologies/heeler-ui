"use client";

import type { CSSProperties } from "react";

export type LoadingSize = "small" | "standard" | "large";
export type LoadingVariant = "spinner" | "contained";
export type LoadingLayout = "vertical" | "horizontal";

export interface LoadingProps {
  /**
   * Additional CSS classes for the container
   */
  className?: string;
  /**
   * Tailwind color name for the spinner, background, and text
   * Derives: border-{color}-600, bg-{color}-50, text-{color}-600
   * @default "blue"
   */
  color?: string;
  /**
   * Accessible label for screen readers
   * @default "Loading"
   */
  label?: string;
  /**
   * Layout direction for spinner and text
   * @default "vertical"
   */
  layout?: LoadingLayout;
  /**
   * Size of the spinner
   * @default "standard"
   */
  size?: LoadingSize;
  /**
   * Inline styles for the container
   */
  style?: CSSProperties;
  /**
   * Optional loading text to display
   */
  text?: string;
  /**
   * Visual variant
   * @default "spinner"
   */
  variant?: LoadingVariant;
}

const SIZE_STYLES: Record<LoadingSize, { spinner: string; text: string }> = {
  small: { spinner: "w-6 h-6 border-2", text: "text-xs" },
  standard: { spinner: "w-10 h-10 border-[3px]", text: "text-sm" },
  large: { spinner: "w-14 h-14 border-4", text: "text-base" },
};

function deriveSpinnerColor(color: string): string {
  return `border-${color}-600`;
}

function deriveBackgroundColor(color: string): string {
  return `bg-${color}-50`;
}

function deriveTextColor(color: string): string {
  return `text-${color}-600`;
}

export function Loading({
  className,
  color = "blue",
  label = "Loading",
  layout = "vertical",
  size = "standard",
  style,
  text,
  variant = "spinner",
}: LoadingProps) {
  const { spinner: spinnerSize, text: textSize } = SIZE_STYLES[size];
  const spinnerColor = deriveSpinnerColor(color);
  const textColor = deriveTextColor(color);

  const accessibleLabel = text || label;

  const containerClasses = [
    "inline-flex items-center justify-center",
    layout === "vertical" ? "flex-col gap-3" : "flex-row gap-3",
    variant === "contained" && `${deriveBackgroundColor(color)} rounded-lg p-6`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const spinnerClasses = [
    spinnerSize,
    spinnerColor,
    "border-t-transparent rounded-full animate-spin",
  ].join(" ");

  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label={accessibleLabel}
      className={containerClasses}
      style={style}
    >
      <div className={spinnerClasses} aria-hidden="true" />
      {text ? (
        <p
          className={`${textSize} font-medium ${textColor}`}
          aria-hidden="true"
        >
          {text}
        </p>
      ) : (
        <span className="sr-only">{label}</span>
      )}
    </div>
  );
}

Loading.displayName = "Loading";
