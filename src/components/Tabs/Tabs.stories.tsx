import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    activeTab: {
      control: "number",
      description: "Controlled active tab index",
    },
    className: {
      control: "text",
      description: "Additional CSS classes for the container",
    },
    color: {
      control: "select",
      options: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"],
      description:
        "Default rainbow color for all tabs (can be overridden per tab)",
    },
    defaultTab: {
      control: "number",
      description: "Index of the initially active tab",
    },
    onTabChange: {
      action: "tab changed",
      description: "Callback when active tab changes",
    },
    solid: {
      control: "boolean",
      description:
        "Use solid colored background for active tabs with white text instead of border styling",
    },
    style: {
      control: "object",
      description: "Inline styles for the container",
    },
    tabs: {
      control: "object",
      description: "Array of tab configurations",
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabs: [
      {
        id: "tab1",
        label: "Overview",
        content: (
          <div>
            <h3 className="text-lg font-semibold mb-2">Overview</h3>
            <p className="text-gray-700">
              This is the overview tab content. You can put any React component
              or content here.
            </p>
          </div>
        ),
      },
      {
        id: "tab2",
        label: "Details",
        content: (
          <div>
            <h3 className="text-lg font-semibold mb-2">Details</h3>
            <p className="text-gray-700">
              This tab contains detailed information about the topic.
            </p>
          </div>
        ),
      },
      {
        id: "tab3",
        label: "Settings",
        content: (
          <div>
            <h3 className="text-lg font-semibold mb-2">Settings</h3>
            <p className="text-gray-700">
              Configure your preferences in this tab.
            </p>
          </div>
        ),
      },
    ],
  },
};

export const Red: Story = {
  args: {
    color: "red",
    tabs: [
      {
        id: "tab1",
        label: "Tab 1",
        content: <p className="text-gray-700">Red themed tabs</p>,
      },
      {
        id: "tab2",
        label: "Tab 2",
        content: <p className="text-gray-700">Content for tab 2</p>,
      },
      {
        id: "tab3",
        label: "Tab 3",
        content: <p className="text-gray-700">Content for tab 3</p>,
      },
    ],
  },
};

export const Orange: Story = {
  args: {
    color: "orange",
    tabs: [
      {
        id: "tab1",
        label: "Tab 1",
        content: <p className="text-gray-700">Orange themed tabs</p>,
      },
      {
        id: "tab2",
        label: "Tab 2",
        content: <p className="text-gray-700">Content for tab 2</p>,
      },
      {
        id: "tab3",
        label: "Tab 3",
        content: <p className="text-gray-700">Content for tab 3</p>,
      },
    ],
  },
};

export const Yellow: Story = {
  args: {
    color: "yellow",
    tabs: [
      {
        id: "tab1",
        label: "Tab 1",
        content: <p className="text-gray-700">Yellow themed tabs</p>,
      },
      {
        id: "tab2",
        label: "Tab 2",
        content: <p className="text-gray-700">Content for tab 2</p>,
      },
      {
        id: "tab3",
        label: "Tab 3",
        content: <p className="text-gray-700">Content for tab 3</p>,
      },
    ],
  },
};

export const Green: Story = {
  args: {
    color: "green",
    tabs: [
      {
        id: "tab1",
        label: "Tab 1",
        content: <p className="text-gray-700">Green themed tabs</p>,
      },
      {
        id: "tab2",
        label: "Tab 2",
        content: <p className="text-gray-700">Content for tab 2</p>,
      },
      {
        id: "tab3",
        label: "Tab 3",
        content: <p className="text-gray-700">Content for tab 3</p>,
      },
    ],
  },
};

export const Blue: Story = {
  args: {
    color: "blue",
    tabs: [
      {
        id: "tab1",
        label: "Tab 1",
        content: <p className="text-gray-700">Blue themed tabs</p>,
      },
      {
        id: "tab2",
        label: "Tab 2",
        content: <p className="text-gray-700">Content for tab 2</p>,
      },
      {
        id: "tab3",
        label: "Tab 3",
        content: <p className="text-gray-700">Content for tab 3</p>,
      },
    ],
  },
};

export const Indigo: Story = {
  args: {
    color: "indigo",
    tabs: [
      {
        id: "tab1",
        label: "Tab 1",
        content: <p className="text-gray-700">Indigo themed tabs</p>,
      },
      {
        id: "tab2",
        label: "Tab 2",
        content: <p className="text-gray-700">Content for tab 2</p>,
      },
      {
        id: "tab3",
        label: "Tab 3",
        content: <p className="text-gray-700">Content for tab 3</p>,
      },
    ],
  },
};

export const Violet: Story = {
  args: {
    color: "violet",
    tabs: [
      {
        id: "tab1",
        label: "Tab 1",
        content: <p className="text-gray-700">Violet themed tabs</p>,
      },
      {
        id: "tab2",
        label: "Tab 2",
        content: <p className="text-gray-700">Content for tab 2</p>,
      },
      {
        id: "tab3",
        label: "Tab 3",
        content: <p className="text-gray-700">Content for tab 3</p>,
      },
    ],
  },
};

export const MixedColors: Story = {
  args: {
    tabs: [
      {
        id: "tab1",
        label: "Red Tab",
        content: <p className="text-gray-700">This tab uses red color</p>,
        color: "red",
      },
      {
        id: "tab2",
        label: "Green Tab",
        content: <p className="text-gray-700">This tab uses green color</p>,
        color: "green",
      },
      {
        id: "tab3",
        label: "Violet Tab",
        content: <p className="text-gray-700">This tab uses violet color</p>,
        color: "violet",
      },
    ],
  },
};

export const DefaultSecondTab: Story = {
  args: {
    defaultTab: 1,
    color: "indigo",
    tabs: [
      {
        id: "tab1",
        label: "First",
        content: <p className="text-gray-700">First tab content</p>,
      },
      {
        id: "tab2",
        label: "Second (Default)",
        content: (
          <p className="text-gray-700">This tab is selected by default</p>
        ),
      },
      {
        id: "tab3",
        label: "Third",
        content: <p className="text-gray-700">Third tab content</p>,
      },
    ],
  },
};

export const SolidRed: Story = {
  args: {
    solid: true,
    color: "red",
    tabs: [
      {
        id: "tab1",
        label: "Tab 1",
        content: (
          <p className="text-gray-700">Solid red tabs with white text</p>
        ),
      },
      {
        id: "tab2",
        label: "Tab 2",
        content: <p className="text-gray-700">Content for tab 2</p>,
      },
      {
        id: "tab3",
        label: "Tab 3",
        content: <p className="text-gray-700">Content for tab 3</p>,
      },
    ],
  },
};

export const SolidBlue: Story = {
  args: {
    solid: true,
    color: "blue",
    tabs: [
      {
        id: "tab1",
        label: "Tab 1",
        content: (
          <p className="text-gray-700">Solid blue tabs with white text</p>
        ),
      },
      {
        id: "tab2",
        label: "Tab 2",
        content: <p className="text-gray-700">Content for tab 2</p>,
      },
      {
        id: "tab3",
        label: "Tab 3",
        content: <p className="text-gray-700">Content for tab 3</p>,
      },
    ],
  },
};

export const SolidViolet: Story = {
  args: {
    solid: true,
    color: "violet",
    tabs: [
      {
        id: "tab1",
        label: "Tab 1",
        content: (
          <p className="text-gray-700">Solid violet tabs with white text</p>
        ),
      },
      {
        id: "tab2",
        label: "Tab 2",
        content: <p className="text-gray-700">Content for tab 2</p>,
      },
      {
        id: "tab3",
        label: "Tab 3",
        content: <p className="text-gray-700">Content for tab 3</p>,
      },
    ],
  },
};
