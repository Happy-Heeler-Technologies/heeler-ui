"use client";

import { forwardRef, useId, type CSSProperties, type ReactNode } from "react";

export type CardLayout = "vertical" | "horizontal";

export type CardElevation = "flat" | "subtle" | "elevated";

export type CardImageAspectRatio = "square" | "video" | "wide" | "auto";

export interface CardProps {
  /**
   * Tailwind background color class
   * @default "bg-white"
   */
  backgroundColor?: string;
  /**
   * Tailwind border color class (only visible when elevation is "flat")
   * @default "border-gray-200"
   */
  borderColor?: string;
  /**
   * Main content of the card body
   */
  children?: ReactNode;
  /**
   * Additional CSS classes for the card container
   */
  className?: string;
  /**
   * Shadow depth of the card
   * @default "subtle"
   */
  elevation?: CardElevation;
  /**
   * Footer content rendered at the bottom of the card
   */
  footer?: ReactNode;
  /**
   * Header content rendered at the top of the card (below image if present)
   */
  header?: ReactNode;
  /**
   * Image element to display. Use an <img> or Next.js Image component.
   */
  image?: ReactNode;
  /**
   * Aspect ratio for the image container
   * @default "video"
   */
  imageAspectRatio?: CardImageAspectRatio;
  /**
   * Position of the image relative to content in horizontal layout
   * @default "left"
   */
  imagePosition?: "left" | "right";
  /**
   * Makes the card interactive with hover and focus states.
   * Use with onClick or wrap in a link for navigation.
   * @default false
   */
  interactive?: boolean;
  /**
   * Layout direction of the card
   * @default "vertical"
   */
  layout?: CardLayout;
  /**
   * Click handler for interactive cards
   */
  onClick?: () => void;
  /**
   * Inline styles for the card container
   */
  style?: CSSProperties;
}

const ELEVATION_STYLES: Record<CardElevation, string> = {
  flat: "shadow-none border",
  subtle: "shadow-sm border border-gray-100",
  elevated: "shadow-lg border-0",
};

const ASPECT_RATIO_STYLES: Record<CardImageAspectRatio, string> = {
  square: "aspect-square",
  video: "aspect-video",
  wide: "aspect-[21/9]",
  auto: "",
};

export const Card = forwardRef<HTMLElement, CardProps>(function Card(
  {
    backgroundColor = "bg-white",
    borderColor = "border-gray-200",
    children,
    className,
    elevation = "subtle",
    footer,
    header,
    image,
    imageAspectRatio = "video",
    imagePosition = "left",
    interactive = false,
    layout = "vertical",
    onClick,
    style,
  },
  ref,
) {
  const generatedId = useId();
  const headerId = header ? `card-header-${generatedId}` : undefined;

  const isHorizontal = layout === "horizontal";
  const elevationClasses = ELEVATION_STYLES[elevation];
  const borderClasses = elevation === "flat" ? borderColor : "";

  const interactiveClasses = interactive
    ? "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 hover:bg-gray-50 transition-colors"
    : "";

  const ImageContainer = image ? (
    <div
      className={[
        "overflow-hidden bg-gray-100 flex-shrink-0",
        isHorizontal ? "w-48" : "w-full",
        isHorizontal ? "" : ASPECT_RATIO_STYLES[imageAspectRatio],
        isHorizontal && layout === "horizontal" ? "h-full" : "",
        layout === "vertical" ? "rounded-t-xl" : "",
        layout === "horizontal" && imagePosition === "left"
          ? "rounded-l-xl"
          : "",
        layout === "horizontal" && imagePosition === "right"
          ? "rounded-r-xl"
          : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="w-full h-full [&>img]:w-full [&>img]:h-full [&>img]:object-cover">
        {image}
      </div>
    </div>
  ) : null;

  const ContentContainer = (
    <div
      className={["flex flex-col flex-1 min-w-0", isHorizontal ? "p-4" : ""]
        .filter(Boolean)
        .join(" ")}
    >
      {header && (
        <div id={headerId} className={isHorizontal ? "" : "px-5 pt-5"}>
          {header}
        </div>
      )}
      {children && (
        <div
          className={["flex-1", isHorizontal ? "mt-2" : "px-5 py-4"]
            .filter(Boolean)
            .join(" ")}
        >
          {children}
        </div>
      )}
      {footer && (
        <div
          className={["mt-auto", isHorizontal ? "pt-3" : "px-5 pb-5 pt-0"]
            .filter(Boolean)
            .join(" ")}
        >
          {footer}
        </div>
      )}
    </div>
  );

  const cardClasses = [
    "rounded-xl overflow-hidden",
    backgroundColor,
    elevationClasses,
    borderClasses,
    interactiveClasses,
    isHorizontal ? "flex" : "flex flex-col",
    isHorizontal && imagePosition === "right" ? "flex-row-reverse" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const Component = interactive ? "button" : "article";
  const ariaProps = headerId ? { "aria-labelledby": headerId } : {};

  return (
    <Component
      ref={ref as React.Ref<HTMLButtonElement & HTMLElement>}
      className={cardClasses}
      style={style}
      onClick={interactive ? onClick : undefined}
      type={interactive ? "button" : undefined}
      {...ariaProps}
    >
      {ImageContainer}
      {ContentContainer}
    </Component>
  );
});

Card.displayName = "Card";
