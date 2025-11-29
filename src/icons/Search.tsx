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

export const Search = ({
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
      <path
        fillRule="evenodd"
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
