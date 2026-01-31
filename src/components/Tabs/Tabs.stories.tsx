import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Tabs } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "standard", "large"],
    },
    variant: {
      control: "select",
      options: ["underline", "solid"],
    },
    color: {
      control: "select",
      options: [
        "red",
        "orange",
        "amber",
        "yellow",
        "lime",
        "green",
        "emerald",
        "teal",
        "cyan",
        "sky",
        "blue",
        "indigo",
        "violet",
        "purple",
        "fuchsia",
        "pink",
        "rose",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const sampleTabs = [
  {
    id: "overview",
    label: "Overview",
    content: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Overview</h3>
        <p className="text-gray-700">
          This is the overview tab content. You can put any React component
          here.
        </p>
      </div>
    ),
  },
  {
    id: "details",
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
    id: "settings",
    label: "Settings",
    content: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Settings</h3>
        <p className="text-gray-700">Configure your preferences in this tab.</p>
      </div>
    ),
  },
];

export const Default: Story = {
  args: {
    tabs: sampleTabs,
    color: "blue",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-sm font-medium text-gray-500 mb-2">Small</p>
        <Tabs tabs={sampleTabs} size="small" color="blue" />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500 mb-2">Standard</p>
        <Tabs tabs={sampleTabs} size="standard" color="blue" />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500 mb-2">Large</p>
        <Tabs tabs={sampleTabs} size="large" color="blue" />
      </div>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-sm font-medium text-gray-500 mb-2">Underline</p>
        <Tabs tabs={sampleTabs} variant="underline" color="blue" />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500 mb-2">Solid</p>
        <Tabs tabs={sampleTabs} variant="solid" color="blue" />
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <Tabs tabs={sampleTabs} color="red" />
      <Tabs tabs={sampleTabs} color="green" />
      <Tabs tabs={sampleTabs} color="violet" />
      <Tabs tabs={sampleTabs} color="orange" />
    </div>
  ),
};

export const SolidColors: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <Tabs tabs={sampleTabs} variant="solid" color="red" />
      <Tabs tabs={sampleTabs} variant="solid" color="green" />
      <Tabs tabs={sampleTabs} variant="solid" color="violet" />
      <Tabs tabs={sampleTabs} variant="solid" color="indigo" />
    </div>
  ),
};

export const PerTabColors: Story = {
  args: {
    tabs: [
      {
        id: "danger",
        label: "Danger",
        color: "red",
        content: <p className="text-red-700">Red themed danger content</p>,
      },
      {
        id: "warning",
        label: "Warning",
        color: "orange",
        content: (
          <p className="text-orange-700">Orange themed warning content</p>
        ),
      },
      {
        id: "success",
        label: "Success",
        color: "green",
        content: <p className="text-green-700">Green themed success content</p>,
      },
    ],
  },
};

export const Controlled: Story = {
  render: function ControlledExample() {
    const [activeTab, setActiveTab] = useState(0);

    return (
      <div className="flex flex-col gap-4">
        <Tabs
          tabs={sampleTabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          color="indigo"
        />
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab(0)}
            className="px-3 py-1.5 text-sm bg-gray-200 rounded hover:bg-gray-300"
          >
            Go to Overview
          </button>
          <button
            onClick={() => setActiveTab(2)}
            className="px-3 py-1.5 text-sm bg-gray-200 rounded hover:bg-gray-300"
          >
            Go to Settings
          </button>
        </div>
        <p className="text-sm text-gray-600">Active tab index: {activeTab}</p>
      </div>
    );
  },
};

export const ManyTabs: Story = {
  args: {
    tabs: [
      { id: "tab1", label: "Dashboard", content: <p>Dashboard content</p> },
      { id: "tab2", label: "Analytics", content: <p>Analytics content</p> },
      { id: "tab3", label: "Reports", content: <p>Reports content</p> },
      { id: "tab4", label: "Users", content: <p>Users content</p> },
      { id: "tab5", label: "Settings", content: <p>Settings content</p> },
      { id: "tab6", label: "Billing", content: <p>Billing content</p> },
    ],
    color: "violet",
  },
};
