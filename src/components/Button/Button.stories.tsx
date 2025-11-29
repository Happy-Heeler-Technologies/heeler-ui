import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
      description: "The text content to display inside the button",
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
      description: "The visual style variant of the button",
    },
    color: {
      control: "select",
      options: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"],
      description:
        "The rainbow color scheme (applies to primary and tertiary variants)",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "The size of the button",
    },
    rounded: {
      control: "boolean",
      description: "Whether the button has fully rounded (pill-shaped) corners",
    },
    loading: {
      control: "boolean",
      description:
        "Whether the button is in a loading state (shows spinner and disables interaction)",
    },
    icon: {
      control: false,
      description: "Optional icon element to display (ReactNode)",
    },
    iconPosition: {
      control: "select",
      options: ["left", "right"],
      description: "Position of the icon relative to the button text",
    },
    disabled: {
      control: "boolean",
      description: "Disables the button and prevents interaction",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the button",
    },
    style: {
      control: "object",
      description: "Inline styles to apply to the button",
    },
    onClick: {
      control: false,
      description: "Click event handler",
    },
    type: {
      control: "select",
      options: ["button", "submit", "reset"],
      description: "HTML button type attribute",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    color: "blue",
    text: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    text: "Secondary Button",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    color: "blue",
    text: "Tertiary Button",
  },
};

export const PrimaryGreen: Story = {
  args: {
    variant: "primary",
    color: "green",
    text: "Green Primary",
  },
};

export const TertiaryIndigo: Story = {
  args: {
    variant: "tertiary",
    color: "indigo",
    text: "Indigo Tertiary",
  },
};

export const SmallButton: Story = {
  args: {
    variant: "primary",
    color: "blue",
    size: "sm",
    text: "Small Button",
  },
};

export const MediumButton: Story = {
  args: {
    variant: "primary",
    color: "blue",
    size: "md",
    text: "Medium Button",
  },
};

export const LargeButton: Story = {
  args: {
    variant: "primary",
    color: "blue",
    size: "lg",
    text: "Large Button",
  },
};

export const OvalButton: Story = {
  args: {
    variant: "primary",
    color: "blue",
    rounded: true,
    text: "Oval Button",
  },
};

export const OvalSecondary: Story = {
  args: {
    variant: "secondary",
    rounded: true,
    text: "Oval Secondary",
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    color: "blue",
    disabled: true,
    text: "Disabled Button",
  },
};

export const DisabledSecondary: Story = {
  args: {
    variant: "secondary",
    disabled: true,
    text: "Disabled Secondary",
  },
};

export const Loading: Story = {
  args: {
    variant: "primary",
    color: "blue",
    loading: true,
    text: "Loading...",
  },
};

export const LoadingSecondary: Story = {
  args: {
    variant: "secondary",
    loading: true,
    text: "Processing...",
  },
};

export const LoadingTertiary: Story = {
  args: {
    variant: "tertiary",
    color: "green",
    loading: true,
    text: "Submitting...",
  },
};

// Example SVG icons for demonstration
const HeartIcon = (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    style={{ width: "100%", height: "100%" }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
    />
  </svg>
);

const ArrowRightIcon = (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    style={{ width: "100%", height: "100%" }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
    />
  </svg>
);

const PlusIcon = (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    style={{ width: "100%", height: "100%" }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>
);

export const WithIconLeft: Story = {
  args: {
    variant: "primary",
    color: "blue",
    icon: HeartIcon,
    iconPosition: "left",
    text: "Like",
  },
};

export const WithIconRight: Story = {
  args: {
    variant: "primary",
    color: "green",
    icon: ArrowRightIcon,
    iconPosition: "right",
    text: "Next",
  },
};

export const SecondaryWithIcon: Story = {
  args: {
    variant: "secondary",
    icon: PlusIcon,
    iconPosition: "left",
    text: "Add Item",
  },
};

export const TertiaryWithIcon: Story = {
  args: {
    variant: "tertiary",
    color: "violet",
    icon: HeartIcon,
    iconPosition: "left",
    text: "Favorite",
  },
};

export const SmallWithIcon: Story = {
  args: {
    variant: "primary",
    color: "indigo",
    size: "sm",
    icon: PlusIcon,
    iconPosition: "left",
    text: "Add",
  },
};
