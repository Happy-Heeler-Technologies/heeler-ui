import {
  useId,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type ReactNode,
} from "react";

export interface Tab {
  /**
   * Unique identifier for the tab
   */
  id: string;
  /**
   * Display label for the tab
   */
  label: string;
  /**
   * Content to display when tab is active
   */
  content: ReactNode;
  /**
   * Optional rainbow color for this tab
   */
  color?: "red" | "orange" | "yellow" | "green" | "blue" | "indigo" | "violet";
}

export interface TabsProps {
  /**
   * Additional CSS classes for the container
   */
  className?: string;
  /**
   * Default rainbow color for all tabs (can be overridden per tab)
   * @default 'blue'
   */
  color?: "red" | "orange" | "yellow" | "green" | "blue" | "indigo" | "violet";
  /**
   * Index of the initially active tab
   * @default 0
   */
  defaultTab?: number;
  /**
   * Controlled active tab index
   */
  activeTab?: number;
  /**
   * Callback when active tab changes
   */
  onTabChange?: (index: number) => void;
  /**
   * Inline styles for the container
   */
  style?: CSSProperties;
  /**
   * Use solid colored background for active tabs with white text instead of border styling
   * @default false
   */
  solid?: boolean;
  /**
   * Array of tab configurations
   */
  tabs: Tab[];
}

export const Tabs = ({
  className = "",
  color = "blue",
  defaultTab = 0,
  activeTab,
  onTabChange,
  solid = false,
  style,
  tabs,
}: TabsProps) => {
  const baseId = useId();
  const [internalActiveTab, setInternalActiveTab] = useState(defaultTab);

  // Use controlled or uncontrolled state
  const currentTab = activeTab !== undefined ? activeTab : internalActiveTab;

  const handleTabClick = (index: number) => {
    if (activeTab === undefined) {
      setInternalActiveTab(index);
    }
    onTabChange?.(index);
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    const lastIndex = tabs.length - 1;

    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();
        const nextIndex = index === lastIndex ? 0 : index + 1;
        handleTabClick(nextIndex);
        // Focus the next tab button
        document.getElementById(`${baseId}-tab-${nextIndex}`)?.focus();
        break;
      case "ArrowLeft":
        event.preventDefault();
        const prevIndex = index === 0 ? lastIndex : index - 1;
        handleTabClick(prevIndex);
        // Focus the previous tab button
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
  };

  // Color mapping for default style (border + matching text)
  const colorMap: Record<string, string> = {
    red: "border-red-600 text-red-700",
    orange: "border-orange-500 text-orange-700",
    yellow: "border-yellow-500 text-yellow-500",
    green: "border-green-600 text-green-700",
    blue: "border-blue-600 text-blue-700",
    indigo: "border-indigo-600 text-indigo-700",
    violet: "border-violet-600 text-violet-700",
  };

  // Color mapping for solid variant (background + white text)
  const solidColorMap: Record<string, string> = {
    red: "bg-red-600 text-white",
    orange: "bg-orange-500 text-white",
    yellow: "bg-yellow-500 text-white",
    green: "bg-green-600 text-white",
    blue: "bg-blue-600 text-white",
    indigo: "bg-indigo-600 text-white",
    violet: "bg-violet-600 text-white",
  };

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

          let activeClasses = "";
          let inactiveClasses = "";

          if (solid) {
            activeClasses = solidColorMap[tabColor];
            inactiveClasses = "bg-gray-100 text-gray-500 hover:bg-gray-200";
          } else {
            const tertiaryClasses = colorMap[tabColor];
            const borderColor = tertiaryClasses.split(" ")[0];
            const textColor = tertiaryClasses.split(" ")[1];
            activeClasses = `${borderColor} ${textColor}`;
            inactiveClasses =
              "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300";
          }

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
                ${isActive ? activeClasses : inactiveClasses}
              `}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {tabs.map((tab, index) => {
        const isActive = currentTab === index;
        return (
          <div
            key={tab.id}
            id={`${baseId}-tabpanel-${index}`}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${index}`}
            hidden={!isActive}
            tabIndex={isActive ? 0 : -1}
            className="py-4"
          >
            {tab.content}
          </div>
        );
      })}
    </div>
  );
};
