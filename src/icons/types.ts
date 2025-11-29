export interface IconProps {
  /**
   * Additional CSS classes for the icon (typically for sizing and layout)
   */
  className?: string;
  /**
   * Rainbow color for the icon
   * @default 'blue'
   */
  color?: "red" | "orange" | "yellow" | "green" | "blue" | "indigo" | "violet";
  /**
   * Whether the icon should be hidden from screen readers
   * @default false
   */
  hideFromScreenReaders?: boolean;
}
