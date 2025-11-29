import type { IconProps } from "./types";

const colorMap: Record<string, string> = {
  red: "text-red-600",
  orange: "text-orange-500",
  yellow: "text-yellow-500",
  green: "text-green-600",
  blue: "text-blue-600",
  indigo: "text-indigo-600",
  violet: "text-violet-600",
};

export const LockOpen = ({
  className = "",
  color = "blue",
  hideFromScreenReaders = false,
  title,
}: IconProps) => {
  const colorClass = colorMap[color];
  const sizeClass = className ? "" : "w-3 h-3";

  return (
    <svg
      className={`${sizeClass} ${colorClass} ${className}`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={title ? undefined : hideFromScreenReaders || undefined}
      role={title ? "img" : undefined}
      aria-label={title}
      focusable="false"
    >
      <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
    </svg>
  );
};
