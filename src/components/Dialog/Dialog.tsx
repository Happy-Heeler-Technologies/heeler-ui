import { type CSSProperties, useEffect, useRef } from "react";
import type { RainbowColor } from "../../types";

const BORDER_COLOR_MAP: Record<RainbowColor, string> = {
  red: "border-red-600",
  orange: "border-orange-500",
  yellow: "border-yellow-500",
  green: "border-green-600",
  blue: "border-blue-600",
  indigo: "border-indigo-600",
  violet: "border-violet-600",
};

const TITLE_COLOR_MAP: Record<RainbowColor, string> = {
  red: "text-red-600",
  orange: "text-orange-500",
  yellow: "text-yellow-500",
  green: "text-green-600",
  blue: "text-blue-600",
  indigo: "text-indigo-600",
  violet: "text-violet-600",
};

const BUTTON_COLOR_MAP: Record<RainbowColor, string> = {
  red: "bg-red-600 hover:bg-red-700 focus-visible:ring-red-600",
  orange: "bg-orange-500 hover:bg-orange-600 focus-visible:ring-orange-500",
  yellow: "bg-yellow-500 hover:bg-yellow-600 focus-visible:ring-yellow-500",
  green: "bg-green-600 hover:bg-green-700 focus-visible:ring-green-600",
  blue: "bg-blue-600 hover:bg-blue-700 focus-visible:ring-blue-600",
  indigo: "bg-indigo-600 hover:bg-indigo-700 focus-visible:ring-indigo-600",
  violet: "bg-violet-600 hover:bg-violet-700 focus-visible:ring-violet-600",
};

const ICON_BACKGROUND_MAP: Record<RainbowColor, string> = {
  red: "bg-red-600",
  orange: "bg-orange-500",
  yellow: "bg-yellow-500",
  green: "bg-green-600",
  blue: "bg-blue-600",
  indigo: "bg-indigo-600",
  violet: "bg-violet-600",
};

export interface DialogButton {
  /**
   * Color for the button (only applies to primary buttons)
   * If not specified, uses the dialog's color
   */
  color?: RainbowColor;
  /**
   * Text label for the button
   */
  label: string;
  /**
   * Click handler for the button
   */
  onClick: () => void;
}

export interface DialogProps {
  /**
   * Override the border color independently
   */
  borderColor?: RainbowColor;
  /**
   * Additional CSS classes for the dialog container
   */
  className?: string;
  /**
   * Rainbow color for the dialog (border, title, and default primary button color)
   * @default 'blue'
   */
  color?: "red" | "orange" | "yellow" | "green" | "blue" | "indigo" | "violet";
  /**
   * Dialog description/content
   */
  description: string;
  /**
   * Override the description text color with a rainbow color
   */
  descriptionColor?: RainbowColor;
  /**
   * Optional icon component to display next to the title
   */
  icon?: React.ReactNode;
  /**
   * Whether to show a rounded background behind the icon
   * @default false
   */
  iconBackground?: boolean;
  /**
   * Optional accessible label for the dialog
   * Uses title by default for screen reader announcements
   */
  labelForScreenReaders?: string;
  /**
   * Callback when the dialog should close (e.g., clicking backdrop or pressing Escape)
   */
  onClose: () => void;
  /**
   * Whether the dialog is open
   */
  open: boolean;
  /**
   * Primary action button configuration (e.g., "OK", "Confirm")
   */
  primaryButton?: DialogButton;
  /**
   * Secondary action button configuration (e.g., "Cancel")
   */
  secondaryButton?: DialogButton;
  /**
   * Inline styles for the dialog container
   */
  style?: CSSProperties;
  /**
   * Dialog title
   */
  title: string;
  /**
   * Override the title text color independently
   */
  titleColor?: RainbowColor;
}

export const Dialog = ({
  borderColor,
  className = "",
  color = "blue",
  description,
  descriptionColor,
  icon,
  iconBackground = false,
  labelForScreenReaders,
  onClose,
  open,
  primaryButton,
  secondaryButton,
  style,
  title,
  titleColor,
}: DialogProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  // handle Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [open, onClose]);

  // focus management - save previous focus and set initial focus
  useEffect(() => {
    if (open) {
      previousActiveElement.current = document.activeElement as HTMLElement;

      // Focus primary button if exists, otherwise secondary button, otherwise dialog container
      setTimeout(() => {
        const focusableElements =
          dialogRef.current?.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );

        if (focusableElements && focusableElements.length > 0) {
          focusableElements[0].focus();
        } else {
          dialogRef.current?.focus();
        }
      }, 0);
    } else if (previousActiveElement.current) {
      previousActiveElement.current.focus();
    }
  }, [open]);

  // focus trap - keep focus within dialog
  useEffect(() => {
    if (!open) return;

    const handleTab = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;

      const focusableElements =
        dialogRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

      if (!focusableElements || focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }, [open]);

  // prevent body scroll when dialog is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  if (!open) return null;

  const borderClasses = BORDER_COLOR_MAP[borderColor ?? color];
  const titleClasses = TITLE_COLOR_MAP[titleColor ?? color];
  const descriptionClasses = descriptionColor
    ? TITLE_COLOR_MAP[descriptionColor]
    : "text-gray-700";
  const iconColorClasses = TITLE_COLOR_MAP[color];
  const iconBackgroundClasses = ICON_BACKGROUND_MAP[color];

  const getPrimaryButtonColor = () => {
    if (primaryButton?.color) {
      return BUTTON_COLOR_MAP[primaryButton.color];
    }
    return BUTTON_COLOR_MAP[color];
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        aria-hidden="true"
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        aria-label={labelForScreenReaders}
        tabIndex={-1}
        className={`
          relative z-10 w-full max-w-lg rounded-lg bg-white shadow-xl
          border-2 ${borderClasses}
          ${className}
        `}
        style={style}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            {icon && (
              <div
                className={`
                  flex items-center justify-center
                  ${iconBackground ? `${iconBackgroundClasses} rounded-full p-3 text-white [&>svg]:!text-white` : iconColorClasses}
                `}
              >
                {icon}
              </div>
            )}
            <h2
              id="dialog-title"
              className={`text-2xl font-bold ${titleClasses}`}
            >
              {title}
            </h2>
          </div>

          <p
            id="dialog-description"
            className={`text-base leading-relaxed mb-6 ${descriptionClasses}`}
          >
            {description}
          </p>

          {(primaryButton || secondaryButton) && (
            <div className="flex gap-3 justify-end mt-8">
              {secondaryButton && (
                <button
                  onClick={secondaryButton.onClick}
                  type="button"
                  className="
                    px-5 py-2.5 rounded-md text-sm font-medium
                    text-gray-700 bg-gray-100 hover:bg-gray-200
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2
                    transition-colors
                  "
                >
                  {secondaryButton.label}
                </button>
              )}
              {primaryButton && (
                <button
                  onClick={primaryButton.onClick}
                  type="button"
                  className={`
                    px-5 py-2.5 rounded-md text-sm font-medium
                    text-white
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                    transition-colors
                    ${getPrimaryButtonColor()}
                  `}
                >
                  {primaryButton.label}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
