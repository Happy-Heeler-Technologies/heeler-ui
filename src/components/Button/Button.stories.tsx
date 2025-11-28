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
    customColor: {
      control: "color",
      description:
        "Custom hex color to override the rainbow color (applies to primary and tertiary variants)",
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
    children: {
      control: "text",
      description: "The content to display inside the button",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    color: "blue",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    color: "blue",
    children: "Tertiary Button",
  },
};

export const PrimaryGreen: Story = {
  args: {
    variant: "primary",
    color: "green",
    children: "Green Primary",
  },
};

export const TertiaryIndigo: Story = {
  args: {
    variant: "tertiary",
    color: "indigo",
    children: "Indigo Tertiary",
  },
};

export const SmallButton: Story = {
  args: {
    variant: "primary",
    color: "blue",
    size: "sm",
    children: "Small Button",
  },
};

export const MediumButton: Story = {
  args: {
    variant: "primary",
    color: "blue",
    size: "md",
    children: "Medium Button",
  },
};

export const LargeButton: Story = {
  args: {
    variant: "primary",
    color: "blue",
    size: "lg",
    children: "Large Button",
  },
};

export const CustomHexPrimary: Story = {
  args: {
    variant: "primary",
    customColor: "#FF1493",
    children: "Custom Pink",
  },
};

export const CustomHexTertiary: Story = {
  args: {
    variant: "tertiary",
    customColor: "#00CED1",
    children: "Custom Cyan",
  },
};

export const OvalButton: Story = {
  args: {
    variant: "primary",
    color: "blue",
    rounded: true,
    children: "Oval Button",
  },
};

export const OvalSecondary: Story = {
  args: {
    variant: "secondary",
    rounded: true,
    children: "Oval Secondary",
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    color: "blue",
    disabled: true,
    children: "Disabled Button",
  },
};

export const DisabledSecondary: Story = {
  args: {
    variant: "secondary",
    disabled: true,
    children: "Disabled Secondary",
  },
};
