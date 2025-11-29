import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import { useState } from "react";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
      description: "Whether the checkbox is checked",
    },
    className: {
      control: "text",
      description: "Additional CSS classes for the container div",
    },
    color: {
      control: "select",
      options: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"],
      description: "Rainbow color for the checked state",
    },
    disabled: {
      control: "boolean",
      description: "Whether the checkbox is disabled",
    },
    errorMessage: {
      control: "text",
      description: "Error message to display below the checkbox",
    },
    helperText: {
      control: "text",
      description: "Helper text to display below the checkbox",
    },
    id: {
      control: "text",
      description: "Unique identifier for the checkbox element",
    },
    label: {
      control: "text",
      description: "Label text for the checkbox",
    },
    labelColor: {
      control: "select",
      options: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"],
      description:
        "Label and checkmark color (defaults to color prop for label, white for checkmark)",
    },
    name: {
      control: "text",
      description: "Name attribute for the checkbox (useful for forms)",
    },
    required: {
      control: "boolean",
      description: "Whether the checkbox is required",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size of the checkbox",
    },
    style: {
      control: "object",
      description: "Inline styles for the checkbox element",
    },
    onBlur: {
      action: "blurred",
      description: "Blur event handler",
    },
    onChange: {
      action: "changed",
      description: "Change handler for controlled component",
    },
    onFocus: {
      action: "focused",
      description: "Focus event handler",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic checkbox
export const Default: Story = {
  args: {
    label: "I agree to the terms and conditions",
  },
};

// Checked state
export const Checked: Story = {
  args: {
    label: "Subscribe to newsletter",
    checked: true,
  },
};

// Without label
export const WithoutLabel: Story = {
  args: {
    checked: false,
  },
};

// With helper text
export const WithHelperText: Story = {
  args: {
    label: "Enable notifications",
    helperText: "We'll send you updates about your account",
    checked: false,
  },
};

// Required checkbox
export const Required: Story = {
  args: {
    label: "I agree to the terms and conditions",
    required: true,
    checked: false,
  },
};

// With error message
export const WithError: Story = {
  args: {
    label: "I agree to the terms and conditions",
    errorMessage: "You must agree to the terms to continue",
    checked: false,
    required: true,
  },
};

// Error state checked
export const ErrorChecked: Story = {
  args: {
    label: "Enable notifications",
    errorMessage: "This option conflicts with your privacy settings",
    checked: true,
  },
};

// Disabled unchecked
export const DisabledUnchecked: Story = {
  args: {
    label: "This option is not available",
    disabled: true,
    checked: false,
  },
};

// Disabled checked
export const DisabledChecked: Story = {
  args: {
    label: "This option is permanently enabled",
    disabled: true,
    checked: true,
  },
};

// Small size
export const Small: Story = {
  args: {
    label: "Small checkbox",
    size: "sm",
    checked: true,
  },
};

// Medium size (default)
export const Medium: Story = {
  args: {
    label: "Medium checkbox (default)",
    size: "md",
    checked: true,
  },
};

// Large size
export const Large: Story = {
  args: {
    label: "Large checkbox",
    size: "lg",
    checked: true,
  },
};

// Rainbow colors - Red
export const ColorRed: Story = {
  args: {
    label: "Red checkbox",
    color: "red",
    checked: true,
  },
};

// Rainbow colors - Orange
export const ColorOrange: Story = {
  args: {
    label: "Orange checkbox",
    color: "orange",
    checked: true,
  },
};

// Rainbow colors - Yellow
export const ColorYellow: Story = {
  args: {
    label: "Yellow checkbox",
    color: "yellow",
    checked: true,
  },
};

// Rainbow colors - Green
export const ColorGreen: Story = {
  args: {
    label: "Green checkbox",
    color: "green",
    checked: true,
  },
};

// Rainbow colors - Blue (default)
export const ColorBlue: Story = {
  args: {
    label: "Blue checkbox (default)",
    color: "blue",
    checked: true,
  },
};

// Rainbow colors - Indigo
export const ColorIndigo: Story = {
  args: {
    label: "Indigo checkbox",
    color: "indigo",
    checked: true,
  },
};

// Rainbow colors - Violet
export const ColorViolet: Story = {
  args: {
    label: "Violet checkbox",
    color: "violet",
    checked: true,
  },
};

// Label and checkmark color override
export const LabelColorOverride: Story = {
  args: {
    label: "Green checkbox with orange label and checkmark",
    color: "green",
    labelColor: "orange",
    checked: true,
    helperText: "The checkmark color matches the label when labelColor is set",
  },
};

// Controlled component
export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <div className="flex flex-col gap-4">
        <Checkbox
          label="Controlled checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          helperText={`Current state: ${checked ? "checked" : "unchecked"}`}
        />
        <button
          onClick={() => setChecked(!checked)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Toggle from outside
        </button>
      </div>
    );
  },
};

// Multiple checkboxes (form example)
export const MultipleCheckboxes: Story = {
  render: () => {
    const [preferences, setPreferences] = useState({
      email: true,
      sms: false,
      push: true,
    });

    const handleChange = (key: keyof typeof preferences) => {
      setPreferences((prev) => ({
        ...prev,
        [key]: !prev[key],
      }));
    };

    return (
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Notification Preferences
        </h3>
        <Checkbox
          label="Email notifications"
          checked={preferences.email}
          onChange={() => handleChange("email")}
          helperText="Receive updates via email"
          color="blue"
        />
        <Checkbox
          label="SMS notifications"
          checked={preferences.sms}
          onChange={() => handleChange("sms")}
          helperText="Receive text messages"
          color="green"
        />
        <Checkbox
          label="Push notifications"
          checked={preferences.push}
          onChange={() => handleChange("push")}
          helperText="Receive push notifications in your browser"
          color="violet"
        />
        <div className="mt-4 p-3 bg-gray-100 rounded-md">
          <p className="text-sm text-gray-700">
            Selected:{" "}
            {Object.entries(preferences)
              .filter(([, v]) => v)
              .map(([k]) => k)
              .join(", ") || "None"}
          </p>
        </div>
      </div>
    );
  },
};

// All sizes comparison
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox label="Small" size="sm" checked color="indigo" />
      <Checkbox label="Medium (default)" size="md" checked color="indigo" />
      <Checkbox label="Large" size="lg" checked color="indigo" />
    </div>
  ),
};

// All colors comparison
export const AllColors: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Checkbox label="Red" color="red" checked />
      <Checkbox label="Orange" color="orange" checked />
      <Checkbox label="Yellow" color="yellow" checked />
      <Checkbox label="Green" color="green" checked />
      <Checkbox label="Blue" color="blue" checked />
      <Checkbox label="Indigo" color="indigo" checked />
      <Checkbox label="Violet" color="violet" checked />
    </div>
  ),
};
