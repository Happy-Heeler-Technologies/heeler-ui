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
        "Optional accessible label for screen readers when badge meaning is not clear from text alone",
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
