import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import type { IconProps } from "./types";
import {
  BellIcon,
  CheckIcon,
  FireIcon,
  LightningIcon,
  StarIcon,
} from "./index";

const meta = {
  title: "Icons/Overview",
  component: CheckIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description:
        "Additional CSS classes for the icon (typically for sizing and layout)",
      table: {
        type: { summary: "string" },
      },
    },
    color: {
      control: "select",
      options: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"],
      description: "Rainbow color for the icon",
      table: {
        type: { summary: "RainbowColor" },
        defaultValue: { summary: "blue" },
      },
    },
    hideFromScreenReaders: {
      control: "boolean",
      description: "Whether the icon should be hidden from screen readers",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
} satisfies Meta<IconProps>;

export default meta;
type Story = StoryObj<typeof meta>;

const IconShowcase = ({
  icon: Icon,
  name,
  color,
}: {
  icon: React.ComponentType<any>;
  name: string;
  color: "red" | "orange" | "yellow" | "green" | "blue" | "indigo" | "violet";
}) => (
  <div className="flex flex-col items-center gap-2 p-4 border border-gray-200 rounded-lg min-w-[120px]">
    <Icon className="w-8 h-8" color={color} />
    <p className="font-semibold text-sm text-center">{name}</p>
  </div>
);

export const AllIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 p-8">
      <IconShowcase icon={BellIcon} name="BellIcon" color="blue" />
      <IconShowcase icon={CheckIcon} name="CheckIcon" color="green" />
      <IconShowcase icon={FireIcon} name="FireIcon" color="orange" />
      <IconShowcase icon={LightningIcon} name="LightningIcon" color="violet" />
      <IconShowcase icon={StarIcon} name="StarIcon" color="yellow" />
    </div>
  ),
};

export const SizesExample: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-8">
      <div className="flex flex-col items-center gap-2">
        <CheckIcon className="w-4 h-4" color="indigo" />
        <p className="text-xs text-gray-600">Small (w-4 h-4)</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <CheckIcon className="w-6 h-6" color="indigo" />
        <p className="text-xs text-gray-600">Medium (w-6 h-6)</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <CheckIcon className="w-8 h-8" color="indigo" />
        <p className="text-xs text-gray-600">Large (w-8 h-8)</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <CheckIcon className="w-12 h-12" color="indigo" />
        <p className="text-xs text-gray-600">XL (w-12 h-12)</p>
      </div>
    </div>
  ),
};
