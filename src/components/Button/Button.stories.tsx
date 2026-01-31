import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { ArrowRight, Plus, Heart } from "../../icons";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["filled", "outline"],
    },
    size: {
      control: "select",
      options: ["small", "standard", "large"],
    },
    backgroundColor: {
      control: "text",
    },
    textColor: {
      control: "text",
    },
    borderColor: {
      control: "text",
    },
    startIcon: {
      control: false,
    },
    endIcon: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    text: "Button",
  },
};

export const Filled: Story = {
  args: {
    text: "Filled Button",
    variant: "filled",
    backgroundColor: "bg-blue-600",
  },
};

export const Outline: Story = {
  args: {
    text: "Outline Button",
    variant: "outline",
    borderColor: "border-blue-600",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="small" text="Small" backgroundColor="bg-blue-600" />
      <Button size="standard" text="Standard" backgroundColor="bg-blue-600" />
      <Button size="large" text="Large" backgroundColor="bg-blue-600" />
    </div>
  ),
};

export const CustomColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button text="Blue" backgroundColor="bg-blue-600" />
      <Button text="Emerald" backgroundColor="bg-emerald-600" />
      <Button text="Rose" backgroundColor="bg-rose-600" />
      <Button
        text="Amber"
        backgroundColor="bg-amber-500"
        textColor="text-gray-900"
      />
    </div>
  ),
};

export const OutlineVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button variant="outline" text="Blue" borderColor="border-blue-600" />
      <Button
        variant="outline"
        text="Emerald"
        borderColor="border-emerald-600"
      />
      <Button variant="outline" text="Rose" borderColor="border-rose-600" />
    </div>
  ),
};

export const WithStartIcon: Story = {
  args: {
    text: "Add Item",
    backgroundColor: "bg-blue-600",
    startIcon: <Plus />,
  },
};

export const WithEndIcon: Story = {
  args: {
    text: "Continue",
    backgroundColor: "bg-emerald-600",
    endIcon: <ArrowRight />,
  },
};

export const IconSizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button
        size="small"
        text="Small"
        backgroundColor="bg-violet-600"
        startIcon={<Heart />}
      />
      <Button
        size="standard"
        text="Standard"
        backgroundColor="bg-violet-600"
        startIcon={<Heart />}
      />
      <Button
        size="large"
        text="Large"
        backgroundColor="bg-violet-600"
        startIcon={<Heart />}
      />
    </div>
  ),
};

export const Rounded: Story = {
  args: {
    text: "Rounded Button",
    backgroundColor: "bg-blue-600",
    rounded: true,
  },
};

export const Loading: Story = {
  args: {
    text: "Loading...",
    backgroundColor: "bg-blue-600",
    loading: true,
  },
};

export const LoadingSizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button
        size="small"
        text="Loading"
        backgroundColor="bg-blue-600"
        loading
      />
      <Button
        size="standard"
        text="Loading"
        backgroundColor="bg-blue-600"
        loading
      />
      <Button
        size="large"
        text="Loading"
        backgroundColor="bg-blue-600"
        loading
      />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    text: "Disabled",
    backgroundColor: "bg-blue-600",
    disabled: true,
  },
};
