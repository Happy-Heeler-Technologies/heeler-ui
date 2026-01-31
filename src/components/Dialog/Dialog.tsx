"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

export interface DialogProps {
  /**
   * Tailwind background color class for the dialog
   * @default "bg-white"
   */
  backgroundColor?: string;
  /**
   * Main content of the dialog body
   */
  children?: ReactNode;
  /**
   * Additional CSS classes for the dialog container
   */
  className?: string;
  /**
   * Footer content (typically action buttons)
   */
  footer?: ReactNode;
  /**
   * Header content (typically title and optional icon)
   */
  header?: ReactNode;
  /**
   * Accessible label for screen readers (uses header text by default)
   */
  labelForScreenReaders?: string;
  /**
   * Maximum width of the dialog. Pass a Tailwind max-width class.
   * @default "max-w-lg"
   */
  maxWidth?: string;
  /**
   * Callback when dialog requests to close (backdrop click, Escape, or close button)
   */
  onClose: () => void;
  /**
   * Whether the dialog is open
   */
  open: boolean;
  /**
   * Whether to show the X close button in the top-right corner
   * @default true
   */
  showCloseButton?: boolean;
  /**
   * Inline styles for the dialog container
   */
  style?: CSSProperties;
}

function CloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function Dialog({
  backgroundColor = "bg-white",
  children,
  className,
  footer,
  header,
  labelForScreenReaders,
  maxWidth = "max-w-lg",
  onClose,
  open,
  showCloseButton = true,
  style,
}: DialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  const generatedId = useId();
  const titleId = `dialog-title-${generatedId}`;
  const descriptionId = `dialog-description-${generatedId}`;

  const handleClose = useCallback(() => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, 150);
  }, [onClose]);

  useEffect(() => {
    if (open) {
      setShouldRender(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      });
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => setShouldRender(false), 150);
      return () => clearTimeout(timer);
    }
  }, [open]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        handleClose();
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [open, handleClose]);

  useEffect(() => {
    if (open) {
      previousActiveElement.current = document.activeElement as HTMLElement;

      const timer = setTimeout(() => {
        const focusableElements =
          dialogRef.current?.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
          );

        if (focusableElements && focusableElements.length > 0) {
          focusableElements[0].focus();
        } else {
          dialogRef.current?.focus();
        }
      }, 0);

      return () => clearTimeout(timer);
    } else if (previousActiveElement.current) {
      previousActiveElement.current.focus();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleTab = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;

      const focusableElements =
        dialogRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );

      if (!focusableElements || focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }, [open]);

  useEffect(() => {
    if (open) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      return () => {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
      };
    }
  }, [open]);

  if (!shouldRender) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className={[
          "absolute inset-0 bg-black/60 transition-opacity duration-150",
          isAnimating ? "opacity-100" : "opacity-0",
        ].join(" ")}
        aria-hidden="true"
        onClick={handleClose}
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={header ? titleId : undefined}
        aria-describedby={children ? descriptionId : undefined}
        aria-label={labelForScreenReaders}
        tabIndex={-1}
        className={[
          "relative z-10 w-full rounded-xl shadow-2xl transition-all duration-150",
          maxWidth,
          backgroundColor,
          isAnimating ? "opacity-100 scale-100" : "opacity-0 scale-95",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        style={style}
        onClick={(e) => e.stopPropagation()}
      >
        {showCloseButton && (
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-4 right-4 p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors"
            aria-label="Close dialog"
          >
            <CloseIcon />
          </button>
        )}

        {header && (
          <div id={titleId} className="px-6 pt-6 pr-12">
            {header}
          </div>
        )}

        {children && (
          <div id={descriptionId} className="px-6 py-4">
            {children}
          </div>
        )}

        {footer && <div className="px-6 pb-6 pt-2">{footer}</div>}
      </div>
    </div>
  );
}

Dialog.displayName = "Dialog";
