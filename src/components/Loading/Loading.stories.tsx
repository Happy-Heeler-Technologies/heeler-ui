import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Loading } from "./Loading";

const meta = {
  title: "Components/Loading",
  component: Loading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    labelForScreenReaders: {
      control: "text",
      description: "Optional accessible label for screen readers",
    },
    backgroundColor: {
      control: "select",
      options: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"],
      description:
        "Rainbow color for the background (only applied when withBackground is true)",
    },
    className: {
      control: "text",
      description: "Additional CSS classes for the loading container",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Size of the spinner",
    },
    spinnerColor: {
      control: "select",
      options: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"],
      description: "Rainbow color for the spinner",
    },
    style: {
      control: "object",
      description: "Inline styles for the loading container",
    },
    text: {
      control: "text",
      description: "Optional loading text to display below spinner",
    },
    textColor: {
      control: "select",
      options: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"],
      description:
        "Rainbow color for the loading text. Defaults to spinnerColor if not specified",
    },
    withBackground: {
      control: "boolean",
      description: "Whether to show a solid background container",
    },
  },
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    size: "large",
  },
};

export const WithText: Story = {
  args: {
    text: "Loading...",
  },
};

export const WithBackground: Story = {
  args: {
    withBackground: true,
    text: "Please wait",
  },
};

export const Red: Story = {
  args: {
    spinnerColor: "red",
    withBackground: true,
    backgroundColor: "red",
    text: "Loading",
  },
};

export const Orange: Story = {
  args: {
    spinnerColor: "orange",
    withBackground: true,
    backgroundColor: "orange",
    text: "Loading",
  },
};

export const Yellow: Story = {
  args: {
    spinnerColor: "yellow",
    withBackground: true,
    backgroundColor: "yellow",
    text: "Loading",
  },
};

export const Green: Story = {
  args: {
    spinnerColor: "green",
    withBackground: true,
    backgroundColor: "green",
    text: "Loading",
  },
};

export const Blue: Story = {
  args: {
    spinnerColor: "blue",
    withBackground: true,
    backgroundColor: "blue",
    text: "Loading",
  },
};

export const Indigo: Story = {
  args: {
    spinnerColor: "indigo",
    withBackground: true,
    backgroundColor: "indigo",
    text: "Loading",
  },
};

export const Violet: Story = {
  args: {
    spinnerColor: "violet",
    withBackground: true,
    backgroundColor: "violet",
    text: "Loading",
  },
};

export const MixedColors: Story = {
  name: "Mixed Spinner and Background Colors",
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Loading spinnerColor="red" withBackground backgroundColor="blue" />
      <Loading spinnerColor="green" withBackground backgroundColor="yellow" />
      <Loading spinnerColor="violet" withBackground backgroundColor="orange" />
      <Loading spinnerColor="indigo" withBackground backgroundColor="green" />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <Loading size="small" spinnerColor="blue" />
        <span className="text-xs text-gray-600">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Loading size="medium" spinnerColor="blue" />
        <span className="text-xs text-gray-600">Medium</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Loading size="large" spinnerColor="blue" />
        <span className="text-xs text-gray-600">Large</span>
      </div>
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Loading spinnerColor="red" text="Red" />
      <Loading spinnerColor="orange" text="Orange" />
      <Loading spinnerColor="yellow" text="Yellow" />
      <Loading spinnerColor="green" text="Green" />
      <Loading spinnerColor="blue" text="Blue" />
      <Loading spinnerColor="indigo" text="Indigo" />
      <Loading spinnerColor="violet" text="Violet" />
    </div>
  ),
};

export const FullPageOverlay: Story = {
  name: "Full Page Overlay Example",
  render: () => (
    <div className="relative w-96 h-64 bg-gray-100 rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center">
        <Loading
          size="large"
          spinnerColor="blue"
          text="Processing your request..."
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Content Behind Loading</h2>
        <p className="text-gray-600">
          This content is visible but blurred behind the loading overlay.
        </p>
      </div>
    </div>
  ),
};

export const CustomTextColor: Story = {
  name: "Custom Text Color",
  render: () => (
    <div className="flex flex-wrap gap-6">
      <div className="flex flex-col items-center gap-2">
        <Loading
          spinnerColor="blue"
          text="Blue spinner, red text"
          textColor="red"
        />
        <span className="text-xs text-gray-600">Different colors</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Loading spinnerColor="green" text="Matches spinner" />
        <span className="text-xs text-gray-600">Default (matches spinner)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Loading
          spinnerColor="violet"
          text="Custom text color"
          textColor="orange"
          withBackground
          backgroundColor="violet"
        />
        <span className="text-xs text-gray-600">With background</span>
      </div>
    </div>
  ),
};
