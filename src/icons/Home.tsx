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

export const Home = ({
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
      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    </svg>
  );
};
