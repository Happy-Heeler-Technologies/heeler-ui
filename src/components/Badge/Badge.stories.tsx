import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import { Check, Star, Bell } from "../../icons";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "text",
      description: 'Tailwind background color class (e.g., "bg-blue-600")',
    },
    textColor: {
      control: "text",
      description: 'Tailwind text color class (e.g., "text-white")',
    },
    size: {
      control: "select",
      options: ["small", "standard", "large"],
    },
    variant: {
      control: "select",
      options: ["label", "status"],
    },
    icon: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    text: "Badge",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Badge size="small" text="Small" backgroundColor="bg-blue-600" />
      <Badge size="standard" text="Standard" backgroundColor="bg-blue-600" />
      <Badge size="large" text="Large" backgroundColor="bg-blue-600" />
    </div>
  ),
};

export const WithIcon: Story = {
  args: {
    text: "Verified",
    backgroundColor: "bg-green-600",
    icon: <Check />,
  },
};

export const IconSizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Badge
        size="small"
        text="Small"
        backgroundColor="bg-emerald-600"
        icon={<Check />}
      />
      <Badge
        size="standard"
        text="Standard"
        backgroundColor="bg-emerald-600"
        icon={<Check />}
      />
      <Badge
        size="large"
        text="Large"
        backgroundColor="bg-emerald-600"
        icon={<Check />}
      />
    </div>
  ),
};

export const CustomColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge text="Default" />
      <Badge text="Blue" backgroundColor="bg-blue-600" />
      <Badge text="Emerald" backgroundColor="bg-emerald-500" />
      <Badge text="Rose" backgroundColor="bg-rose-500" />
      <Badge
        text="Amber"
        backgroundColor="bg-amber-500"
        textColor="text-gray-900"
      />
      <Badge text="Cyan" backgroundColor="bg-cyan-500" />
    </div>
  ),
};

export const StatusVariant: Story = {
  args: {
    text: "Online",
    backgroundColor: "bg-green-600",
    variant: "status",
  },
};

export const StatusExamples: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge variant="status" backgroundColor="bg-green-600" text="Online" />
      <Badge
        variant="status"
        backgroundColor="bg-yellow-500"
        textColor="text-gray-900"
        text="Away"
      />
      <Badge variant="status" backgroundColor="bg-red-600" text="Offline" />
    </div>
  ),
};

export const LabelExamples: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge backgroundColor="bg-blue-600" text="Admin" icon={<Star />} />
      <Badge backgroundColor="bg-violet-600" text="Pro" />
      <Badge backgroundColor="bg-indigo-600" text="Beta" icon={<Bell />} />
    </div>
  ),
};
