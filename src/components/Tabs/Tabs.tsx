import {
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
  style,
  tabs,
}: TabsProps) => {
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
        document.getElementById(`tab-${nextIndex}`)?.focus();
        break;
      case "ArrowLeft":
        event.preventDefault();
        const prevIndex = index === 0 ? lastIndex : index - 1;
        handleTabClick(prevIndex);
        // Focus the previous tab button
        document.getElementById(`tab-${prevIndex}`)?.focus();
        break;
      case "Home":
        event.preventDefault();
        handleTabClick(0);
        document.getElementById(`tab-0`)?.focus();
        break;
      case "End":
        event.preventDefault();
        handleTabClick(lastIndex);
        document.getElementById(`tab-${lastIndex}`)?.focus();
        break;
    }
  };

  // Color mapping for active tab
  const colorMap: Record<string, string> = {
    red: "border-red-600 text-red-700",
    orange: "border-orange-500 text-orange-700",
    yellow: "border-yellow-500 text-yellow-500",
    green: "border-green-600 text-green-700",
    blue: "border-blue-600 text-blue-700",
    indigo: "border-indigo-600 text-indigo-700",
    violet: "border-violet-600 text-violet-700",
  };

  return (
    <div className={className} style={style}>
      {/* Tab List */}
      <div
        role="tablist"
        aria-label="Content tabs"
        className="flex border-b border-gray-200"
      >
        {tabs.map((tab, index) => {
          const isActive = currentTab === index;
          const tabColor = tab.color || color;
          const activeClasses = colorMap[tabColor];
          const borderColor = activeClasses.split(" ")[0];
          const textColor = activeClasses.split(" ")[1];

          return (
            <button
              key={tab.id}
              id={`tab-${index}`}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${index}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => handleTabClick(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`
                px-4 py-2 font-medium text-sm border-b-2 transition-colors
                focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-${tabColor}-500
                ${
                  isActive
                    ? `${borderColor} ${textColor}`
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }
              `}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Panels */}
      {tabs.map((tab, index) => {
        const isActive = currentTab === index;
        return (
          <div
            key={tab.id}
            id={`tabpanel-${index}`}
            role="tabpanel"
            aria-labelledby={`tab-${index}`}
            hidden={!isActive}
            className="py-4"
          >
            {tab.content}
          </div>
        );
      })}
    </div>
  );
};
