import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import type { IconProps } from "./types";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Bell,
  Calendar,
  Cancel,
  Chart,
  Check,
  Clock,
  Cloud,
  Cog,
  Document,
  Download,
  Eye,
  Fire,
  Heart,
  Home,
  Lightning,
  Lock,
  LockOpen,
  Mail,
  Menu,
  Pencil,
  Plus,
  Refresh,
  Search,
  Star,
  Trash,
  User,
} from "./index";

const meta = {
  title: "Icons/Overview",
  component: Check,
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
      <IconShowcase icon={ArrowDown} name="ArrowDown" color="orange" />
      <IconShowcase icon={ArrowLeft} name="ArrowLeft" color="green" />
      <IconShowcase icon={ArrowRight} name="ArrowRight" color="violet" />
      <IconShowcase icon={ArrowUp} name="ArrowUp" color="indigo" />
      <IconShowcase icon={Bell} name="Bell" color="orange" />
      <IconShowcase icon={Calendar} name="Calendar" color="blue" />
      <IconShowcase icon={Cancel} name="Cancel" color="red" />
      <IconShowcase icon={Chart} name="Chart" color="green" />
      <IconShowcase icon={Check} name="Check" color="red" />
      <IconShowcase icon={Clock} name="Clock" color="indigo" />
      <IconShowcase icon={Cloud} name="Cloud" color="yellow" />
      <IconShowcase icon={Cog} name="Cog" color="violet" />
      <IconShowcase icon={Document} name="Document" color="orange" />
      <IconShowcase icon={Download} name="Download" color="green" />
      <IconShowcase icon={Eye} name="Eye" color="indigo" />
      <IconShowcase icon={Fire} name="Fire" color="red" />
      <IconShowcase icon={Heart} name="Heart" color="red" />
      <IconShowcase icon={Home} name="Home" color="blue" />
      <IconShowcase icon={Lightning} name="Lightning" color="yellow" />
      <IconShowcase icon={Lock} name="Lock" color="indigo" />
      <IconShowcase icon={LockOpen} name="LockOpen" color="green" />
      <IconShowcase icon={Mail} name="Mail" color="blue" />
      <IconShowcase icon={Menu} name="Menu" color="violet" />
      <IconShowcase icon={Pencil} name="Pencil" color="orange" />
      <IconShowcase icon={Plus} name="Plus" color="green" />
      <IconShowcase icon={Refresh} name="Refresh" color="blue" />
      <IconShowcase icon={Search} name="Search" color="green" />
      <IconShowcase icon={Star} name="Star" color="yellow" />
      <IconShowcase icon={Trash} name="Trash" color="red" />
      <IconShowcase icon={User} name="User" color="indigo" />
    </div>
  ),
};

export const SizesExample: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-8">
      <div className="flex flex-col items-center gap-2">
        <Check className="w-4 h-4" color="indigo" />
        <p className="text-xs text-gray-600">Small (w-4 h-4)</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Check className="w-6 h-6" color="indigo" />
        <p className="text-xs text-gray-600">Medium (w-6 h-6)</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Check className="w-8 h-8" color="indigo" />
        <p className="text-xs text-gray-600">Large (w-8 h-8)</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Check className="w-12 h-12" color="indigo" />
        <p className="text-xs text-gray-600">XL (w-12 h-12)</p>
      </div>
    </div>
  ),
};
