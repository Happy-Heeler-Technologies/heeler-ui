import type { RainbowColor } from "../types";

export interface IconProps {
  /**
   * Additional CSS classes for the icon (typically for sizing and layout)
   */
  className?: string;
  /**
   * Rainbow color for the icon
   * @default 'blue'
   */
  color?: RainbowColor;
  /**
   * Whether the icon should be hidden from screen readers
   * @default false
   */
  hideFromScreenReaders?: boolean;
  /**
   * Accessible title for the icon. When provided, the icon will have role="img" and be visible to screen readers.
   * Use this when the icon is standalone and conveys meaning without accompanying text.
   */
  title?: string;
}
