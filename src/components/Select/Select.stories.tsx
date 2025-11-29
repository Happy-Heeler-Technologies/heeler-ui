import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Select, type SelectProps } from "./Select";

// Sample options for demonstrations
const fruitOptions = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Date", value: "date" },
  { label: "Elderberry", value: "elderberry" },
  { label: "Fig", value: "fig" },
  { label: "Grape", value: "grape" },
];

const countryOptions = [
  { label: "United States", value: "us" },
  { label: "Canada", value: "ca" },
  { label: "United Kingdom", value: "uk" },
  { label: "Germany", value: "de" },
  { label: "France", value: "fr" },
  { label: "Japan", value: "jp" },
  { label: "Australia", value: "au" },
];

const priorityOptions = [
  { label: "Low", value: "low" },
  { label: "Medium", value: "medium" },
  { label: "High", value: "high" },
  { label: "Critical", value: "critical" },
];

const optionsWithDisabled = [
  { label: "Available Option 1", value: "option1" },
  { label: "Disabled Option", value: "option2", disabled: true },
  { label: "Available Option 2", value: "option3" },
  { label: "Another Disabled", value: "option4", disabled: true },
  { label: "Available Option 3", value: "option5" },
];

// Wrapper component for controlled selects
const ControlledSelect = (args: SelectProps) => {
  const [value, setValue] = useState(args.value || "");
  return (
    <div style={{ width: "320px" }}>
      <Select {...args} value={value} onChange={(val) => setValue(val)} />
    </div>
  );
};

const meta = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes for the container div",
    },
    color: {
      control: "select",
      options: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"],
      description: "Rainbow color for focus ring, border, text, and options",
    },
    disabled: {
      control: "boolean",
      description: "Whether the select is disabled",
    },
    errorMessage: {
      control: "text",
      description: "Error message to display below the select",
    },
    helperText: {
      control: "text",
      description: "Helper text to display below the select (when no error)",
    },
    id: {
      control: "text",
      description: "Unique identifier for the select element",
    },
    label: {
      control: "text",
      description: "Label text for the select",
    },
    labelTextColor: {
      control: "select",
      options: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"],
      description:
        "Override the label text color independently (uses color prop if not specified)",
    },
    name: {
      control: "text",
      description: "Name attribute for the select (useful for forms)",
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
    options: {
      control: "object",
      description: "Array of options to display in the select",
    },
    optionTextColor: {
      control: "select",
      options: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"],
      description:
        "Override the option text color independently (uses color prop if not specified)",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text shown when no value is selected",
    },
    required: {
      control: "boolean",
      description: "Whether the select is required",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size of the select",
    },
    style: {
      control: "object",
      description: "Inline styles for the select element",
    },
    value: {
      control: "text",
      description: "Select value (controlled component)",
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic examples
export const Default: Story = {
  args: {
    label: "Choose a fruit",
    options: fruitOptions,
    placeholder: "Select a fruit...",
  },
  render: (args) => <ControlledSelect {...args} />,
};

export const WithValue: Story = {
  args: {
    label: "Favorite fruit",
    options: fruitOptions,
    value: "banana",
  },
  render: (args) => <ControlledSelect {...args} />,
};

export const WithHelperText: Story = {
  args: {
    label: "Country",
    options: countryOptions,
    helperText: "Select your country of residence",
    placeholder: "Choose a country...",
  },
  render: (args) => <ControlledSelect {...args} />,
};

export const Required: Story = {
  args: {
    label: "Priority level",
    options: priorityOptions,
    required: true,
    placeholder: "Select priority...",
  },
  render: (args) => <ControlledSelect {...args} />,
};

export const WithError: Story = {
  args: {
    label: "Country",
    options: countryOptions,
    errorMessage: "Please select a valid country",
    required: true,
    value: "",
  },
  render: (args) => <ControlledSelect {...args} />,
};

export const Disabled: Story = {
  args: {
    label: "Disabled select",
    options: fruitOptions,
    disabled: true,
    value: "apple",
  },
  render: (args) => <ControlledSelect {...args} />,
};

export const DisabledOptions: Story = {
  args: {
    label: "Select with disabled options",
    options: optionsWithDisabled,
    helperText: "Some options are disabled",
    placeholder: "Choose an option...",
  },
  render: (args) => <ControlledSelect {...args} />,
};

export const WithoutLabel: Story = {
  args: {
    options: fruitOptions,
    placeholder: "Select a fruit...",
  },
  render: (args) => <ControlledSelect {...args} />,
};

// Size variations
export const Small: Story = {
  args: {
    label: "Small size",
    options: fruitOptions,
    size: "sm",
    placeholder: "Select...",
  },
  render: (args) => <ControlledSelect {...args} />,
};

export const Medium: Story = {
  args: {
    label: "Medium size (default)",
    options: fruitOptions,
    size: "md",
    placeholder: "Select...",
  },
  render: (args) => <ControlledSelect {...args} />,
};

export const Large: Story = {
  args: {
    label: "Large size",
    options: fruitOptions,
    size: "lg",
    placeholder: "Select...",
  },
  render: (args) => <ControlledSelect {...args} />,
};

// Rainbow colors
export const Red: Story = {
  args: {
    label: "Red theme",
    color: "red",
    options: priorityOptions,
    placeholder: "Select priority...",
  },
  render: (args) => <ControlledSelect {...args} />,
};

export const Orange: Story = {
  args: {
    label: "Orange theme",
    color: "orange",
    options: fruitOptions,
    placeholder: "Select fruit...",
  },
  render: (args) => <ControlledSelect {...args} />,
};

export const Yellow: Story = {
  args: {
    label: "Yellow theme",
    color: "yellow",
    options: fruitOptions,
    placeholder: "Select fruit...",
  },
  render: (args) => <ControlledSelect {...args} />,
};

export const Green: Story = {
  args: {
    label: "Green theme",
    color: "green",
    options: countryOptions,
    placeholder: "Select country...",
  },
  render: (args) => <ControlledSelect {...args} />,
};

export const Blue: Story = {
  args: {
    label: "Blue theme",
    color: "blue",
    options: countryOptions,
    placeholder: "Select country...",
  },
  render: (args) => <ControlledSelect {...args} />,
};

export const Indigo: Story = {
  args: {
    label: "Indigo theme",
    color: "indigo",
    options: fruitOptions,
    placeholder: "Select fruit...",
  },
  render: (args) => <ControlledSelect {...args} />,
};

export const Violet: Story = {
  args: {
    label: "Violet theme",
    color: "violet",
    options: priorityOptions,
    placeholder: "Select priority...",
  },
  render: (args) => <ControlledSelect {...args} />,
};

// All sizes comparison
export const AllSizes: Story = {
  args: { options: [] },
  render: () => (
    <div className="flex flex-col gap-6" style={{ width: "320px" }}>
      <Select
        label="Small"
        size="sm"
        options={fruitOptions}
        value="apple"
        color="indigo"
      />
      <Select
        label="Medium (default)"
        size="md"
        options={fruitOptions}
        value="banana"
        color="indigo"
      />
      <Select
        label="Large"
        size="lg"
        options={fruitOptions}
        value="cherry"
        color="indigo"
      />
    </div>
  ),
};

// All colors comparison
export const AllColors: Story = {
  args: { options: [] },
  render: () => (
    <div className="flex flex-col gap-4" style={{ width: "320px" }}>
      <Select label="Red" color="red" options={fruitOptions} value="apple" />
      <Select
        label="Orange"
        color="orange"
        options={fruitOptions}
        value="banana"
      />
      <Select
        label="Yellow"
        color="yellow"
        options={fruitOptions}
        value="cherry"
      />
      <Select label="Green" color="green" options={fruitOptions} value="date" />
      <Select
        label="Blue"
        color="blue"
        options={fruitOptions}
        value="elderberry"
      />
      <Select
        label="Indigo"
        color="indigo"
        options={fruitOptions}
        value="fig"
      />
      <Select
        label="Violet"
        color="violet"
        options={fruitOptions}
        value="grape"
      />
    </div>
  ),
};

// Custom color overrides
export const CustomColorOverrides: Story = {
  args: { options: [] },
  render: () => (
    <div className="flex flex-col gap-6" style={{ width: "320px" }}>
      <Select
        label="Custom label color"
        options={fruitOptions}
        value="apple"
        color="blue"
        labelTextColor="violet"
        helperText="Label is violet, border/options are blue"
      />
      <Select
        label="Custom option color"
        options={countryOptions}
        value="us"
        color="green"
        optionTextColor="orange"
        helperText="Border/label is green, options are orange"
      />
      <Select
        label="All custom colors"
        options={priorityOptions}
        value="high"
        color="indigo"
        labelTextColor="red"
        optionTextColor="violet"
        helperText="Border indigo, label red, options violet"
      />
    </div>
  ),
};

// Form example with multiple selects
export const FormExample: Story = {
  args: { options: [] },
  render: () => {
    const [formData, setFormData] = useState({
      country: "",
      fruit: "",
      priority: "",
    });

    const handleChange = (field: string) => (value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    };

    return (
      <div className="flex flex-col gap-6" style={{ width: "400px" }}>
        <h3 className="text-xl font-bold text-gray-800">Sample Form</h3>
        <Select
          label="Country"
          name="country"
          color="blue"
          options={countryOptions}
          value={formData.country}
          onChange={handleChange("country")}
          required
          helperText="Required field"
          placeholder="Select your country..."
        />
        <Select
          label="Favorite Fruit"
          name="fruit"
          color="green"
          options={fruitOptions}
          value={formData.fruit}
          onChange={handleChange("fruit")}
          placeholder="Choose a fruit..."
        />
        <Select
          label="Priority"
          name="priority"
          color="red"
          options={priorityOptions}
          value={formData.priority}
          onChange={handleChange("priority")}
          required
          placeholder="Set priority..."
        />
        <div className="p-4 bg-gray-100 rounded-md">
          <p className="text-sm font-medium text-gray-600 mb-2">Form Data:</p>
          <pre className="text-xs text-gray-800">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      </div>
    );
  },
};

// Controlled vs Uncontrolled
export const Controlled: Story = {
  args: { options: [] },
  render: () => {
    const [value, setValue] = useState("banana");

    return (
      <div className="flex flex-col gap-4" style={{ width: "320px" }}>
        <Select
          label="Controlled select"
          options={fruitOptions}
          value={value}
          onChange={(val) => setValue(val)}
          helperText={`Current value: ${value || "none"}`}
          color="violet"
        />
        <button
          onClick={() => setValue("cherry")}
          className="px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700"
        >
          Set to Cherry
        </button>
        <button
          onClick={() => setValue("")}
          className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
        >
          Clear Selection
        </button>
      </div>
    );
  },
};

// Long options list
export const LongOptionsList: Story = {
  args: { options: [] },
  render: () => {
    const manyOptions = Array.from({ length: 50 }, (_, i) => ({
      label: `Option ${i + 1}`,
      value: `option-${i + 1}`,
    }));

    return (
      <div style={{ width: "320px" }}>
        <ControlledSelect
          label="Select with many options"
          options={manyOptions}
          placeholder="Choose an option..."
          helperText="Scroll to see all options"
          color="blue"
        />
      </div>
    );
  },
};
