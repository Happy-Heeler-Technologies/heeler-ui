import type { Meta, StoryObj } from "@storybook/react";
import { Loading } from "./Loading";

const meta: Meta<typeof Loading> = {
  title: "Components/Loading",
  component: Loading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "standard", "large"],
    },
    variant: {
      control: "select",
      options: ["spinner", "contained"],
    },
    layout: {
      control: "select",
      options: ["vertical", "horizontal"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Loading>;

export const Default: Story = {
  args: {},
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-8">
      <Loading size="small" />
      <Loading size="standard" />
      <Loading size="large" />
    </div>
  ),
};

export const WithText: Story = {
  args: {
    text: "Loading...",
  },
};

export const HorizontalLayout: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Loading text="Loading data..." layout="horizontal" size="small" />
      <Loading text="Please wait..." layout="horizontal" size="standard" />
      <Loading text="Processing..." layout="horizontal" size="large" />
    </div>
  ),
};

export const Contained: Story = {
  args: {
    variant: "contained",
    text: "Please wait",
  },
};

export const ContainedColors: Story = {
  render: () => (
    <div className="flex gap-4">
      <Loading variant="contained" color="blue" text="Blue" />
      <Loading variant="contained" color="green" text="Green" />
      <Loading variant="contained" color="violet" text="Violet" />
      <Loading variant="contained" color="orange" text="Orange" />
    </div>
  ),
};

export const SpinnerColors: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Loading color="red" />
      <Loading color="orange" />
      <Loading color="yellow" />
      <Loading color="green" />
      <Loading color="blue" />
      <Loading color="indigo" />
      <Loading color="violet" />
    </div>
  ),
};

export const ContainedHorizontal: Story = {
  args: {
    variant: "contained",
    layout: "horizontal",
    text: "Loading your content...",
    color: "indigo",
  },
};
