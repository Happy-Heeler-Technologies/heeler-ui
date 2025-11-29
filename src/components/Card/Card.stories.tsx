import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "Custom CSS classes for the card container.",
    },
    color: {
      control: {
        type: "select",
        options: [
          "red",
          "orange",
          "yellow",
          "green",
          "blue",
          "indigo",
          "violet",
        ],
      },
      description:
        "Rainbow color for border and title. If not set, uses default styling.",
    },
    description: {
      control: "text",
      description: "Description text displayed below the title.",
    },
    descriptionColorOverride: {
      control: "text",
      description:
        "Optional override for the description text color (Tailwind class or CSS string).",
    },
    style: {
      control: "object",
      description: "Inline styles for the card container.",
    },
    title: {
      control: "text",
      description: "Title text displayed prominently in the card.",
    },
    titleColorOverride: {
      control: "text",
      description:
        "Optional override for the title text color (Tailwind class or CSS string).",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: (
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
        alt="Happy Heeler Card"
        className="w-full h-full object-cover"
      />
    ),
    title: "Happy Heeler Card",
    description:
      "This is a simple card component following Heeler UI conventions.",
  },
};

export const TitleColorOverride: Story = {
  args: {
    image: (
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
        alt="Custom Title Color"
        className="w-full h-full object-cover"
      />
    ),
    title: "Custom Title Color",
    description: "This card uses a custom title color.",
    color: "yellow",
    titleColorOverride: "text-pink-600",
  },
};

export const DescriptionColorOverride: Story = {
  args: {
    image: (
      <img
        src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
        alt="Custom Description Color"
        className="w-full h-full object-cover"
      />
    ),
    title: "Custom Description Color",
    description: "This card uses a custom description color.",
    color: "yellow",
    descriptionColorOverride: "text-green-600",
  },
};

export const Red: Story = {
  args: {
    image: (
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
        alt="Red Card"
        className="w-full h-full object-cover"
      />
    ),
    title: "Red Card",
    description: "Card with red border and title.",
    color: "red",
  },
};

export const Orange: Story = {
  args: {
    image: (
      <img
        src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
        alt="Orange Card"
        className="w-full h-full object-cover"
      />
    ),
    title: "Orange Card",
    description: "Card with orange border and title.",
    color: "orange",
  },
};

export const Yellow: Story = {
  args: {
    image: (
      <img
        src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
        alt="Yellow Card"
        className="w-full h-full object-cover"
      />
    ),
    title: "Yellow Card",
    description: "Card with yellow border and title.",
    color: "yellow",
  },
};

export const Green: Story = {
  args: {
    image: (
      <img
        src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
        alt="Green Card"
        className="w-full h-full object-cover"
      />
    ),
    title: "Green Card",
    description: "Card with green border and title.",
    color: "green",
  },
};

export const Blue: Story = {
  args: {
    image: (
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
        alt="Blue Card"
        className="w-full h-full object-cover"
      />
    ),
    title: "Blue Card",
    description: "Card with blue border and title.",
    color: "blue",
  },
};

export const Indigo: Story = {
  args: {
    image: (
      <img
        src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
        alt="Indigo Card"
        className="w-full h-full object-cover"
      />
    ),
    title: "Indigo Card",
    description: "Card with indigo border and title.",
    color: "indigo",
  },
};

export const Violet: Story = {
  args: {
    image: (
      <img
        src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
        alt="Violet Card"
        className="w-full h-full object-cover"
      />
    ),
    title: "Violet Card",
    description: "Card with violet border and title.",
    color: "violet",
  },
};

export const CustomClass: Story = {
  args: {
    image: (
      <img
        src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
        alt="Custom Styled Card"
        className="w-full h-full object-cover"
      />
    ),
    title: "Custom Styled Card",
    description: "This card uses a custom background color.",
    className: "bg-blue-50",
  },
};

export const CustomStyle: Story = {
  args: {
    image: (
      <img
        src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
        alt="Inline Styled Card"
        className="w-full h-full object-cover"
      />
    ),
    title: "Inline Styled Card",
    description: "This card uses inline styles for a border.",
    style: { border: "2px solid #4F46E5" },
  },
};
