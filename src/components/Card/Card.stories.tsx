import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Button } from "../Button/Button";
import { Badge } from "../Badge/Badge";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    layout: {
      control: "select",
      options: ["vertical", "horizontal"],
    },
    elevation: {
      control: "select",
      options: ["flat", "subtle", "elevated"],
    },
    imageAspectRatio: {
      control: "select",
      options: ["square", "video", "wide", "auto"],
    },
    imagePosition: {
      control: "select",
      options: ["left", "right"],
    },
    image: { control: false },
    header: { control: false },
    children: { control: false },
    footer: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

const sampleImage = (
  <img
    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    alt="Mountain landscape"
  />
);

export const Default: Story = {
  args: {
    image: sampleImage,
    header: <h3 className="text-lg font-semibold text-gray-900">Card Title</h3>,
    children: (
      <p className="text-gray-600 text-sm">
        This is a flexible card component with composable slots for header,
        body, and footer content.
      </p>
    ),
    className: "w-80",
  },
};

export const WithFooter: Story = {
  args: {
    image: sampleImage,
    header: (
      <h3 className="text-lg font-semibold text-gray-900">Project Update</h3>
    ),
    children: (
      <p className="text-gray-600 text-sm">
        The new design system is ready for review. Check out the latest
        components.
      </p>
    ),
    footer: (
      <div className="flex gap-2">
        <Button size="small" text="View" backgroundColor="bg-blue-600" />
        <Button
          size="small"
          text="Dismiss"
          variant="outline"
          borderColor="border-gray-300"
        />
      </div>
    ),
    className: "w-80",
  },
};

export const Elevations: Story = {
  render: () => (
    <div className="flex gap-6">
      <Card
        elevation="flat"
        header={<h3 className="font-semibold text-gray-900">Flat</h3>}
        children={
          <p className="text-gray-600 text-sm">No shadow, border only</p>
        }
        className="w-48"
      />
      <Card
        elevation="subtle"
        header={<h3 className="font-semibold text-gray-900">Subtle</h3>}
        children={<p className="text-gray-600 text-sm">Light shadow</p>}
        className="w-48"
      />
      <Card
        elevation="elevated"
        header={<h3 className="font-semibold text-gray-900">Elevated</h3>}
        children={<p className="text-gray-600 text-sm">Prominent shadow</p>}
        className="w-48"
      />
    </div>
  ),
};

export const Horizontal: Story = {
  args: {
    layout: "horizontal",
    image: sampleImage,
    header: (
      <h3 className="text-lg font-semibold text-gray-900">Horizontal Layout</h3>
    ),
    children: (
      <p className="text-gray-600 text-sm">
        Image positioned beside the content for a different visual treatment.
      </p>
    ),
    className: "w-[480px]",
  },
};

export const HorizontalImageRight: Story = {
  args: {
    layout: "horizontal",
    imagePosition: "right",
    image: sampleImage,
    header: (
      <h3 className="text-lg font-semibold text-gray-900">Image Right</h3>
    ),
    children: (
      <p className="text-gray-600 text-sm">
        The image can be positioned on either side of the content.
      </p>
    ),
    className: "w-[480px]",
  },
};

export const AspectRatios: Story = {
  render: () => (
    <div className="flex gap-6">
      <Card
        image={sampleImage}
        imageAspectRatio="square"
        header={<h3 className="font-semibold text-gray-900">Square</h3>}
        className="w-48"
      />
      <Card
        image={sampleImage}
        imageAspectRatio="video"
        header={<h3 className="font-semibold text-gray-900">Video (16:9)</h3>}
        className="w-48"
      />
      <Card
        image={sampleImage}
        imageAspectRatio="wide"
        header={<h3 className="font-semibold text-gray-900">Wide (21:9)</h3>}
        className="w-48"
      />
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    interactive: true,
    image: sampleImage,
    header: (
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Clickable Card</h3>
        <Badge size="small" text="New" backgroundColor="bg-blue-600" />
      </div>
    ),
    children: (
      <p className="text-gray-600 text-sm">
        This card is interactive. Click it or focus with keyboard to see states.
      </p>
    ),
    onClick: () => alert("Card clicked!"),
    className: "w-80",
  },
};

export const NoImage: Story = {
  args: {
    header: (
      <h3 className="text-lg font-semibold text-gray-900">Text Only Card</h3>
    ),
    children: (
      <p className="text-gray-600 text-sm">
        Cards work perfectly without images. Great for text-heavy content or
        simple info panels.
      </p>
    ),
    footer: <span className="text-xs text-gray-400">Updated 2 hours ago</span>,
    className: "w-80",
  },
};

export const CustomColors: Story = {
  args: {
    backgroundColor: "bg-gray-900",
    elevation: "elevated",
    image: sampleImage,
    header: <h3 className="text-lg font-semibold text-white">Dark Card</h3>,
    children: (
      <p className="text-gray-300 text-sm">
        Custom background color with matching text.
      </p>
    ),
    className: "w-80",
  },
};
