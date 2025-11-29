import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
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

// Simple icon examples using SVG
const CheckIcon = () => (
  <svg
    className="w-3 h-3"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const StarIcon = () => (
  <svg
    className="w-3 h-3"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const FireIcon = () => (
  <svg
    className="w-3 h-3"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
      clipRule="evenodd"
    />
  </svg>
);

const BellIcon = () => (
  <svg
    className="w-3 h-3"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
  </svg>
);

const LightningIcon = () => (
  <svg
    className="w-3 h-3"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
      clipRule="evenodd"
    />
  </svg>
);

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
    icon: <CheckIcon />,
  },
};

export const WithStarIcon: Story = {
  args: {
    color: "yellow",
    text: "Premium",
    icon: <StarIcon />,
  },
};

export const WithFireIcon: Story = {
  args: {
    color: "orange",
    text: "Hot",
    icon: <FireIcon />,
  },
};

export const WithBellIcon: Story = {
  args: {
    color: "blue",
    text: "Notification",
    icon: <BellIcon />,
  },
};

export const WithLightningIcon: Story = {
  args: {
    color: "violet",
    text: "Fast",
    icon: <LightningIcon />,
  },
};

export const MultipleVariants: Story = {
  args: {
    text: "Multiple",
  },
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge text="Default" />
      <Badge color="red" text="Error" icon={<CheckIcon />} />
      <Badge color="orange" text="Warning" />
      <Badge color="yellow" text="Pending" icon={<StarIcon />} />
      <Badge color="green" text="Success" icon={<CheckIcon />} />
      <Badge color="blue" text="Info" />
      <Badge color="indigo" text="New" icon={<BellIcon />} />
      <Badge color="violet" text="Featured" icon={<LightningIcon />} />
    </div>
  ),
};
