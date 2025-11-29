import {
  useCallback,
  useId,
  useMemo,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import type { RainbowColor } from "../../types";

// default style (border + matching text)
const COLOR_MAP: Record<string, string> = {
  red: "border-red-600 text-red-700",
  orange: "border-orange-500 text-orange-700",
  yellow: "border-yellow-500 text-yellow-500",
  green: "border-green-600 text-green-700",
  blue: "border-blue-600 text-blue-700",
  indigo: "border-indigo-600 text-indigo-700",
  violet: "border-violet-600 text-violet-700",
};

// solid variant (background + white text)
const SOLID_COLOR_MAP: Record<string, string> = {
  red: "bg-red-600 text-white",
  orange: "bg-orange-500 text-white",
  yellow: "bg-yellow-500 text-white",
  green: "bg-green-600 text-white",
  blue: "bg-blue-600 text-white",
  indigo: "bg-indigo-600 text-white",
  violet: "bg-violet-600 text-white",
};

export interface Tab {
  /**
   * Optional rainbow color for this tab
   */
  color?: RainbowColor;
  /**
   * Content to display when tab is active
   */
  content: ReactNode;
  /**
   * Unique identifier for the tab
   */
  id: string;
  /**
   * Display label for the tab
   */
  label: string;
}

export interface TabsProps {
  /**
   * Controlled active tab index
   */
  activeTab?: number;
  /**
   * Additional CSS classes for the container
   */
  className?: string;
  /**
   * Default rainbow color for all tabs (can be overridden per tab)
   * @default 'blue'
   */
  color?: RainbowColor;
  /**
   * Index of the initially active tab
   * @default 0
   */
  defaultTab?: number;
  /**
   * Callback when active tab changes
   */
  onTabChange?: (index: number) => void;
  /**
   * Use solid colored background for active tabs with white text instead of border styling
   * @default false
   */
  solid?: boolean;
  /**
   * Inline styles for the container
   */
  style?: CSSProperties;
  /**
   * Array of tab configurations
   */
  tabs: Tab[];
}

export const Tabs = ({
  activeTab,
  className = "",
  color = "blue",
  defaultTab = 0,
  onTabChange,
  solid = false,
  style,
  tabs,
}: TabsProps) => {
  const baseId = useId();
  const [internalActiveTab, setInternalActiveTab] = useState(defaultTab);

  const currentTab = activeTab !== undefined ? activeTab : internalActiveTab;

  const handleTabClick = useCallback(
    (index: number) => {
      if (activeTab === undefined) {
        setInternalActiveTab(index);
      }
      onTabChange?.(index);
    },
    [activeTab, onTabChange]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
      const lastIndex = tabs.length - 1;

      switch (event.key) {
        case "ArrowRight":
          event.preventDefault();
          const nextIndex = index === lastIndex ? 0 : index + 1;
          handleTabClick(nextIndex);
          // focus the next tab button
          document.getElementById(`${baseId}-tab-${nextIndex}`)?.focus();
          break;
        case "ArrowLeft":
          event.preventDefault();
          const prevIndex = index === 0 ? lastIndex : index - 1;
          handleTabClick(prevIndex);
          // focus the previous tab button
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
    [baseId, handleTabClick, tabs.length]
  );

  const getTabClasses = useMemo(() => {
    return (isActive: boolean, tabColor: string) => {
      let activeClasses = "";
      let inactiveClasses = "";

      if (solid) {
        activeClasses = SOLID_COLOR_MAP[tabColor];
        inactiveClasses = "bg-gray-100 text-gray-500 hover:bg-gray-200";
      } else {
        const tertiaryClasses = COLOR_MAP[tabColor];
        const borderColor = tertiaryClasses.split(" ")[0];
        const textColor = tertiaryClasses.split(" ")[1];
        activeClasses = `${borderColor} ${textColor}`;
        inactiveClasses =
          "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300";
      }

      return isActive ? activeClasses : inactiveClasses;
    };
  }, [solid]);

  return (
    <div className={className} style={style}>
      <div
        role="tablist"
        aria-label="Content tabs"
        aria-orientation="horizontal"
        className="flex gap-1 border-b border-gray-200"
      >
        {tabs.map((tab, index) => {
          const isActive = currentTab === index;
          const tabColor = tab.color || color;
          const tabClasses = getTabClasses(isActive, tabColor);

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
              className={`
                px-4 py-2 font-medium text-sm transition-colors
                focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-${tabColor}-500
                ${solid ? "rounded-t-md" : "border-b-2"}
                ${tabClasses}
              `}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {tabs.map((tab, index) => {
        const isActive = currentTab === index;

        // only render active tab content to avoid rendering hidden panels
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
            className="py-4"
          >
            {tab.content}
          </div>
        );
      })}
    </div>
  );
};
