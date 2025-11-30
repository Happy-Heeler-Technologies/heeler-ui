import { CSSProperties, FC, ReactNode, useId } from "react";
import type { RainbowColor } from "../../types";

// Rainbow color mapping for border and title
const COLOR_MAP: Record<RainbowColor, string> = {
  red: "border-red-600 text-red-700",
  orange: "border-orange-500 text-orange-700",
  yellow: "border-yellow-500 text-yellow-500",
  green: "border-green-600 text-green-700",
  blue: "border-blue-600 text-blue-700",
  indigo: "border-indigo-600 text-indigo-700",
  violet: "border-violet-600 text-violet-700",
};

export interface CardProps {
  /**
   * Optional custom class name for the card container.
   */
  className?: string;
  /**
   * Rainbow color for border and title. If not set, uses default styling.
   */
  color?: RainbowColor;
  /**
   * Description text displayed below the title.
   */
  description: string;
  /**
   * Optional override for the description text color (Tailwind class or CSS string).
   */
  descriptionColorOverride?: string;
  /**
   * Optional image component to display at the top of the card (e.g., <img>, <Avatar>, etc.).
   */
  image?: ReactNode;
  /**
   * Optional inline styles for the card container.
   */
  style?: CSSProperties;
  /**
   * Title text displayed prominently in the card.
   */
  title: string;
  /**
   * Optional override for the title text color (Tailwind class or CSS string).
   */
  titleColorOverride?: string;
}

export const Card: FC<CardProps> = ({
  className = "",
  color,
  description,
  descriptionColorOverride,
  image,
  style,
  title,
  titleColorOverride,
}) => {
  // Generate unique IDs for accessibility
  const generatedId = useId();
  const titleId = `card-title-${generatedId}`;
  const descriptionId = `card-desc-${generatedId}`;

  const borderColor = color
    ? COLOR_MAP[color]?.split(" ")[0]
    : "border-gray-200";
  const titleColor = titleColorOverride
    ? titleColorOverride
    : color
      ? COLOR_MAP[color]?.split(" ")[1]
      : "text-gray-900";
  const descriptionColor = descriptionColorOverride
    ? descriptionColorOverride
    : "text-gray-700";

  return (
    <article
      className={`rounded-lg shadow-md bg-white border ${borderColor} p-4 flex flex-col items-center ${className}`}
      style={style}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
    >
      {image && (
        <div className="w-full h-40 rounded-md mb-4 flex items-center justify-center overflow-hidden">
          {image}
        </div>
      )}
      <h2
        id={titleId}
        className={`text-lg font-semibold mb-2 text-center ${titleColor}`}
      >
        {title}
      </h2>
      <p
        id={descriptionId}
        className={`text-sm text-center ${descriptionColor}`}
      >
        {description}
      </p>
    </article>
  );
};

Card.displayName = "Card";
