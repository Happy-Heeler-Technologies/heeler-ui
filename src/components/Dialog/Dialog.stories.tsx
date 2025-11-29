import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Dialog, type DialogProps } from "./Dialog";
import type { RainbowColor } from "../../types";
import { Cancel } from "../../icons/Cancel";
import { Fire } from "../../icons/Fire";
import { Bell } from "../../icons/Bell";
import { Check } from "../../icons/Check";
import { Heart } from "../../icons/Heart";

const getButtonClasses = (color?: RainbowColor | string): string => {
  switch (color) {
    case "red":
      return "bg-red-600 hover:bg-red-700";
    case "orange":
      return "bg-orange-500 hover:bg-orange-600";
    case "yellow":
      return "bg-yellow-500 hover:bg-yellow-600";
    case "green":
      return "bg-green-600 hover:bg-green-700";
    case "indigo":
      return "bg-indigo-600 hover:bg-indigo-700";
    case "violet":
      return "bg-violet-600 hover:bg-violet-700";
    default:
      return "bg-blue-600 hover:bg-blue-700";
  }
};

const DialogWrapper = (
  props: Partial<DialogProps> & { title: string; description: string }
) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className={`px-4 py-2 text-white rounded-md ${getButtonClasses(props.color)}`}
      >
        Open Dialog
      </button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        title={props.title}
        description={props.description}
        color={props.color}
        borderColor={props.borderColor}
        titleColor={props.titleColor}
        descriptionColor={props.descriptionColor}
        icon={props.icon}
        iconBackground={props.iconBackground}
        className={props.className}
        style={props.style}
        labelForScreenReaders={props.labelForScreenReaders}
        primaryButton={
          props.primaryButton !== undefined
            ? props.primaryButton
            : {
                label: "OK",
                onClick: () => setOpen(false),
              }
        }
        secondaryButton={props.secondaryButton}
      />
    </div>
  );
};

const meta = {
  title: "Components/Dialog",
  component: DialogWrapper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    borderColor: {
      control: "select",
      options: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"],
      description: "Override the border color independently",
    },
    className: {
      control: "text",
      description: "Additional CSS classes for the dialog container",
    },
    color: {
      control: "select",
      options: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"],
      description:
        "Rainbow color for the dialog (border, title, and default primary button color)",
    },
    description: {
      control: "text",
      description: "Dialog description/content",
    },
    descriptionColor: {
      control: "select",
      options: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"],
      description: "Override the description text color with a rainbow color",
    },
    icon: {
      control: false,
      description: "Optional icon component to display next to the title",
    },
    iconBackground: {
      control: "boolean",
      description: "Whether to show a rounded background behind the icon",
    },
    labelForScreenReaders: {
      control: "text",
      description: "Optional accessible label for the dialog",
    },
    primaryButton: {
      control: "object",
      description:
        'Primary action button configuration (e.g., "OK", "Confirm")',
    },
    secondaryButton: {
      control: "object",
      description: 'Secondary action button configuration (e.g., "Cancel")',
    },
    style: {
      control: "object",
      description: "Inline styles for the dialog container",
    },
    title: {
      control: "text",
      description: "Dialog title",
    },
    titleColor: {
      control: "select",
      options: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"],
      description: "Override the title text color independently",
    },
  },
} satisfies Meta<typeof DialogWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

// Helper functions for showcase stories
const getBorderClass = (color: RainbowColor): string => {
  const map: Record<RainbowColor, string> = {
    red: "border-red-600",
    orange: "border-orange-500",
    yellow: "border-yellow-500",
    green: "border-green-600",
    blue: "border-blue-600",
    indigo: "border-indigo-600",
    violet: "border-violet-600",
  };
  return map[color];
};

const getTextClass = (color: RainbowColor): string => {
  const map: Record<RainbowColor, string> = {
    red: "text-red-600",
    orange: "text-orange-500",
    yellow: "text-yellow-500",
    green: "text-green-600",
    blue: "text-blue-600",
    indigo: "text-indigo-600",
    violet: "text-violet-600",
  };
  return map[color];
};

const getIconForColor = (color: RainbowColor) => {
  switch (color) {
    case "red":
      return <Cancel className="w-6 h-6" color={color} />;
    case "orange":
      return <Fire className="w-6 h-6" color={color} />;
    case "yellow":
      return <Bell className="w-6 h-6" color={color} />;
    case "green":
      return <Check className="w-6 h-6" color={color} />;
    case "blue":
      return <Bell className="w-6 h-6" color={color} />;
    case "indigo":
      return <Heart className="w-6 h-6" color={color} />;
    case "violet":
      return <Heart className="w-6 h-6" color={color} />;
  }
};

const getContent = (color: RainbowColor) => {
  const content: Record<RainbowColor, { title: string; description: string }> =
    {
      red: {
        title: "Error",
        description:
          "Perfect for error messages, destructive actions, and critical warnings that require immediate attention.",
      },
      orange: {
        title: "Warning",
        description:
          "Ideal for urgent notifications, important alerts, and actions that need careful consideration before proceeding.",
      },
      yellow: {
        title: "Caution",
        description:
          "Great for advisory notices, gentle warnings, and information that users should be aware of before continuing.",
      },
      green: {
        title: "Success",
        description:
          "Best for confirmation messages, successful operations, and positive feedback to users.",
      },
      blue: {
        title: "Information",
        description:
          "Suited for general information, helpful tips, and neutral notifications that provide context or guidance.",
      },
      indigo: {
        title: "Premium",
        description:
          "Perfect for premium features, exclusive content, and special offerings that highlight advanced functionality.",
      },
      violet: {
        title: "Special",
        description:
          "Excellent for special offers, unique features, and content that deserves extra attention or celebration.",
      },
    };
  return content[color];
};

// Showcase Stories
export const Default: Story = {
  name: "Icons with Background",
  args: { title: "", description: "" },
  render: () => {
    const colors: RainbowColor[] = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "indigo",
      "violet",
    ];

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 max-w-7xl">
        {colors.map((color) => {
          const content = getContent(color);
          return (
            <div key={color} className="relative">
              <div
                className={`rounded-lg bg-white shadow-xl border-2 ${getBorderClass(color)}`}
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`flex items-center justify-center rounded-full p-3 text-white [&>svg]:!text-white ${getButtonClasses(color).split(" ")[0]}`}
                    >
                      {getIconForColor(color)}
                    </div>
                    <h2 className={`text-2xl font-bold ${getTextClass(color)}`}>
                      {content.title}
                    </h2>
                  </div>
                  <p className="text-base leading-relaxed mb-6 text-gray-700">
                    {content.description}
                  </p>
                  <div className="flex gap-3 justify-end mt-8">
                    <button className="px-5 py-2.5 rounded-md text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors">
                      Cancel
                    </button>
                    <button
                      className={`px-5 py-2.5 rounded-md text-sm font-medium text-white transition-colors ${getButtonClasses(color)}`}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  },
};

export const IconsWithoutBackground: Story = {
  name: "Icons without Background",
  args: { title: "", description: "" },
  render: () => {
    const colors: RainbowColor[] = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "indigo",
      "violet",
    ];

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 max-w-7xl">
        {colors.map((color) => {
          const content = getContent(color);
          return (
            <div key={color} className="relative">
              <div
                className={`rounded-lg bg-white shadow-xl border-2 ${getBorderClass(color)}`}
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`${getTextClass(color)}`}>
                      {getIconForColor(color)}
                    </div>
                    <h2 className={`text-2xl font-bold ${getTextClass(color)}`}>
                      {content.title}
                    </h2>
                  </div>
                  <p className="text-base leading-relaxed mb-6 text-gray-700">
                    {content.description}
                  </p>
                  <div className="flex gap-3 justify-end mt-8">
                    <button className="px-5 py-2.5 rounded-md text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors">
                      Cancel
                    </button>
                    <button
                      className={`px-5 py-2.5 rounded-md text-sm font-medium text-white transition-colors ${getButtonClasses(color)}`}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  },
};

export const NoIcons: Story = {
  name: "Without Icons",
  args: { title: "", description: "" },
  render: () => {
    const colors: RainbowColor[] = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "indigo",
      "violet",
    ];

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 max-w-7xl">
        {colors.map((color) => {
          const content = getContent(color);
          return (
            <div key={color} className="relative">
              <div
                className={`rounded-lg bg-white shadow-xl border-2 ${getBorderClass(color)}`}
              >
                <div className="p-6">
                  <h2
                    className={`text-2xl font-bold mb-4 ${getTextClass(color)}`}
                  >
                    {content.title}
                  </h2>
                  <p className="text-base leading-relaxed mb-6 text-gray-700">
                    {content.description}
                  </p>
                  <div className="flex gap-3 justify-end mt-8">
                    <button className="px-5 py-2.5 rounded-md text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors">
                      Cancel
                    </button>
                    <button
                      className={`px-5 py-2.5 rounded-md text-sm font-medium text-white transition-colors ${getButtonClasses(color)}`}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  },
};
