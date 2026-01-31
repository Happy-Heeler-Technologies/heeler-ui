"use client";

import {
  useCallback,
  useId,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type ReactNode,
} from "react";

export type TabsSize = "small" | "standard" | "large";
export type TabsVariant = "underline" | "solid";

export interface Tab {
  color?: string;
  content: ReactNode;
  id: string;
  label: string;
}

export interface TabsProps {
  activeTab?: number;
  className?: string;
  color?: string;
  defaultTab?: number;
  onTabChange?: (index: number) => void;
  size?: TabsSize;
  style?: CSSProperties;
  tabs: Tab[];
  variant?: TabsVariant;
}

const SIZE_STYLES: Record<TabsSize, { tab: string; panel: string }> = {
  small: { tab: "px-3 py-1.5 text-xs", panel: "py-3" },
  standard: { tab: "px-4 py-2 text-sm", panel: "py-4" },
  large: { tab: "px-5 py-3 text-base", panel: "py-6" },
};

const UNDERLINE_ACTIVE_CLASSES: Record<string, string> = {
  red: "border-red-500 text-red-700",
  orange: "border-orange-500 text-orange-700",
  amber: "border-amber-500 text-amber-700",
  yellow: "border-yellow-500 text-yellow-700",
  lime: "border-lime-500 text-lime-700",
  green: "border-green-500 text-green-700",
  emerald: "border-emerald-500 text-emerald-700",
  teal: "border-teal-500 text-teal-700",
  cyan: "border-cyan-500 text-cyan-700",
  sky: "border-sky-500 text-sky-700",
  blue: "border-blue-500 text-blue-700",
  indigo: "border-indigo-500 text-indigo-700",
  violet: "border-violet-500 text-violet-700",
  purple: "border-purple-500 text-purple-700",
  fuchsia: "border-fuchsia-500 text-fuchsia-700",
  pink: "border-pink-500 text-pink-700",
  rose: "border-rose-500 text-rose-700",
};

const SOLID_ACTIVE_CLASSES: Record<string, string> = {
  red: "bg-red-600 text-white",
  orange: "bg-orange-500 text-white",
  amber: "bg-amber-500 text-white",
  yellow: "bg-yellow-500 text-white",
  lime: "bg-lime-500 text-white",
  green: "bg-green-600 text-white",
  emerald: "bg-emerald-600 text-white",
  teal: "bg-teal-600 text-white",
  cyan: "bg-cyan-600 text-white",
  sky: "bg-sky-600 text-white",
  blue: "bg-blue-600 text-white",
  indigo: "bg-indigo-600 text-white",
  violet: "bg-violet-600 text-white",
  purple: "bg-purple-600 text-white",
  fuchsia: "bg-fuchsia-600 text-white",
  pink: "bg-pink-600 text-white",
  rose: "bg-rose-600 text-white",
};

const FOCUS_RING_CLASSES: Record<string, string> = {
  red: "focus-visible:ring-red-500",
  orange: "focus-visible:ring-orange-500",
  amber: "focus-visible:ring-amber-500",
  yellow: "focus-visible:ring-yellow-500",
  lime: "focus-visible:ring-lime-500",
  green: "focus-visible:ring-green-500",
  emerald: "focus-visible:ring-emerald-500",
  teal: "focus-visible:ring-teal-500",
  cyan: "focus-visible:ring-cyan-500",
  sky: "focus-visible:ring-sky-500",
  blue: "focus-visible:ring-blue-500",
  indigo: "focus-visible:ring-indigo-500",
  violet: "focus-visible:ring-violet-500",
  purple: "focus-visible:ring-purple-500",
  fuchsia: "focus-visible:ring-fuchsia-500",
  pink: "focus-visible:ring-pink-500",
  rose: "focus-visible:ring-rose-500",
};

function deriveUnderlineActiveClass(color: string): string {
  return UNDERLINE_ACTIVE_CLASSES[color] || UNDERLINE_ACTIVE_CLASSES.blue;
}

function deriveSolidActiveClass(color: string): string {
  return SOLID_ACTIVE_CLASSES[color] || SOLID_ACTIVE_CLASSES.blue;
}

function deriveFocusRingClass(color: string): string {
  return FOCUS_RING_CLASSES[color] || FOCUS_RING_CLASSES.blue;
}

export function Tabs({
  activeTab,
  className,
  color = "blue",
  defaultTab = 0,
  onTabChange,
  size = "standard",
  style,
  tabs,
  variant = "underline",
}: TabsProps) {
  const baseId = useId();
  const [internalActiveTab, setInternalActiveTab] = useState(defaultTab);

  const currentTab = activeTab !== undefined ? activeTab : internalActiveTab;
  const sizeStyles = SIZE_STYLES[size];

  const handleTabClick = useCallback(
    (index: number) => {
      if (activeTab === undefined) {
        setInternalActiveTab(index);
      }
      onTabChange?.(index);
    },
    [activeTab, onTabChange],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
      const lastIndex = tabs.length - 1;

      switch (event.key) {
        case "ArrowRight":
          event.preventDefault();
          const nextIndex = index === lastIndex ? 0 : index + 1;
          handleTabClick(nextIndex);
          document.getElementById(`${baseId}-tab-${nextIndex}`)?.focus();
          break;
        case "ArrowLeft":
          event.preventDefault();
          const prevIndex = index === 0 ? lastIndex : index - 1;
          handleTabClick(prevIndex);
          document.getElementById(`${baseId}-tab-${prevIndex}`)?.focus();
          break;
        case "Home":
          event.preventDefault();
          handleTabClick(0);
          document.getElementById(`${baseId}-tab-0`)?.focus();
          break;
        case "End":
          event.preventDefault();
          handleTabClick(lastIndex);
          document.getElementById(`${baseId}-tab-${lastIndex}`)?.focus();
          break;
      }
    },
    [baseId, handleTabClick, tabs.length],
  );

  const getTabClasses = (isActive: boolean, tabColor: string): string => {
    const focusRing = deriveFocusRingClass(tabColor);

    if (variant === "solid") {
      const activeClass = deriveSolidActiveClass(tabColor);
      const inactiveClass = "bg-gray-100 text-gray-600 hover:bg-gray-200";
      return [
        sizeStyles.tab,
        "font-medium rounded-t-md transition-colors",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        focusRing,
        isActive ? activeClass : inactiveClass,
      ].join(" ");
    }

    const activeClass = deriveUnderlineActiveClass(tabColor);
    const inactiveClass =
      "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300";
    return [
      sizeStyles.tab,
      "font-medium border-b-2 transition-colors",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      focusRing,
      isActive ? activeClass : inactiveClass,
    ].join(" ");
  };

  return (
    <div
      className={["flex flex-col", className].filter(Boolean).join(" ")}
      style={style}
    >
      <div
        role="tablist"
        aria-label="Content tabs"
        aria-orientation="horizontal"
        className="flex gap-1 border-b border-gray-200"
      >
        {tabs.map((tab, index) => {
          const isActive = currentTab === index;
          const tabColor = tab.color || color;

          return (
            <button
              key={tab.id}
              id={`${baseId}-tab-${index}`}
              role="tab"
              aria-selected={isActive}
              aria-controls={`${baseId}-tabpanel-${index}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => handleTabClick(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={getTabClasses(isActive, tabColor)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {tabs.map((tab, index) => {
        const isActive = currentTab === index;

        if (!isActive) {
          return (
            <div
              key={tab.id}
              id={`${baseId}-tabpanel-${index}`}
              role="tabpanel"
              aria-labelledby={`${baseId}-tab-${index}`}
              hidden
            />
          );
        }

        return (
          <div
            key={tab.id}
            id={`${baseId}-tabpanel-${index}`}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${index}`}
            tabIndex={0}
            className={sizeStyles.panel}
          >
            {tab.content}
          </div>
        );
      })}
    </div>
  );
}

Tabs.displayName = "Tabs";
