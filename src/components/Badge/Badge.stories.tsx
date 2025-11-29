import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import { Bell, Check, Fire, Lightning, Star } from "../../icons";

const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    ariaLabel: {
      control: "text",
      description:
        "Optional accessible label for screen readers. If not provided, defaults to 'Status: {text}' for status badges",
    },
    className: {
      control: "text",
      description: "Additional CSS classes for the badge",
    },
    color: {
      control: "select",
      options: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"],
      description: "Rainbow color for the badge",
    },
    icon: {
      control: false,
      description: "Optional icon to display before the text",
    },
    style: {
      control: "object",
      description: "Inline styles for the badge",
    },
    text: {
      control: "text",
      description: "Text content of the badge",
    },
    variant: {
      control: "select",
      options: ["label", "status"],
      description:
        "Semantic variant: 'label' for static info (default), 'status' for live updates",
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Badge",
  },
};

export const Red: Story = {
  args: {
    color: "red",
    text: "Error",
  },
};

export const Orange: Story = {
  args: {
    color: "orange",
    text: "Warning",
  },
};

export const Yellow: Story = {
  args: {
    color: "yellow",
    text: "Pending",
  },
};

export const Green: Story = {
  args: {
    color: "green",
    text: "Success",
  },
};

export const Blue: Story = {
  args: {
    color: "blue",
    text: "Info",
  },
};

export const Indigo: Story = {
  args: {
    color: "indigo",
    text: "New",
  },
};

export const Violet: Story = {
  args: {
    color: "violet",
    text: "Featured",
  },
};

export const WithCheckIcon: Story = {
  args: {
    color: "green",
    text: "Verified",
    icon: <Check />,
  },
};

export const WithStarIcon: Story = {
  args: {
    color: "yellow",
    text: "Premium",
    icon: <Star />,
  },
};

export const WithFireIcon: Story = {
  args: {
    color: "orange",
    text: "Hot",
    icon: <Fire />,
  },
};

export const WithBellIcon: Story = {
  args: {
    color: "blue",
    text: "Notification",
    icon: <Bell />,
  },
};

export const WithLightningIcon: Story = {
  args: {
    color: "violet",
    text: "Fast",
    icon: <Lightning />,
  },
};

export const MultipleVariants: Story = {
  args: {
    text: "Multiple",
  },
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge text="Default" />
      <Badge color="red" text="Error" icon={<Check />} />
      <Badge color="orange" text="Warning" />
      <Badge color="yellow" text="Pending" icon={<Star />} />
      <Badge color="green" text="Success" icon={<Check />} />
      <Badge color="blue" text="Info" />
      <Badge color="indigo" text="New" icon={<Bell />} />
      <Badge color="violet" text="Featured" icon={<Lightning />} />
    </div>
  ),
};

export const WithAriaLabel: Story = {
  args: {
    color: "green",
    text: "Verified",
    icon: <Check />,
    ariaLabel: "Account verified status badge",
  },
};

export const StatusVariant: Story = {
  name: "Status Variant (Live Updates)",
  args: {
    color: "green",
    text: "Online",
    variant: "status",
  },
  render: (args) => (
    <div className="flex flex-col gap-4">
      <div>
        <p className="text-sm mb-2 text-gray-600">
          Status badges use role="status" to announce changes to screen readers:
        </p>
        <Badge {...args} />
      </div>
      <div className="flex gap-2">
        <Badge variant="status" color="green" text="Online" />
        <Badge variant="status" color="yellow" text="Away" />
        <Badge variant="status" color="red" text="Offline" />
      </div>
    </div>
  ),
};

export const LabelVariant: Story = {
  name: "Label Variant (Static Info)",
  args: {
    color: "blue",
    text: "Admin",
    variant: "label",
  },
  render: (args) => (
    <div className="flex flex-col gap-4">
      <div>
        <p className="text-sm mb-2 text-gray-600">
          Label badges are static and don't use ARIA roles:
        </p>
        <Badge {...args} />
      </div>
      <div className="flex gap-2">
        <Badge variant="label" color="blue" text="Admin" />
        <Badge variant="label" color="violet" text="Pro" />
        <Badge variant="label" color="indigo" text="Beta" />
      </div>
    </div>
  ),
};
