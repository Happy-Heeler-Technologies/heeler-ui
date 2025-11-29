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

export const Mail = ({
  className = "",
  color = "blue",
  hideFromScreenReaders = false,
}: IconProps) => {
  const colorClass = colorMap[color];
  const sizeClass = className ? "" : "w-3 h-3";

  return (
    <svg
      className={`${sizeClass} ${colorClass} ${className}`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={hideFromScreenReaders}
    >
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  );
};
