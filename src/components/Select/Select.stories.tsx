import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "standard", "large"],
    },
    color: {
      control: "select",
      options: [
        "red",
        "orange",
        "amber",
        "yellow",
        "lime",
        "green",
        "emerald",
        "teal",
        "cyan",
        "sky",
        "blue",
        "indigo",
        "violet",
        "purple",
        "fuchsia",
        "pink",
        "rose",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const fruitOptions = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Date", value: "date" },
  { label: "Elderberry", value: "elderberry" },
];

const countryOptions = [
  { label: "United States", value: "us" },
  { label: "Canada", value: "ca" },
  { label: "United Kingdom", value: "uk" },
  { label: "Germany", value: "de" },
  { label: "France", value: "fr" },
];

const optionsWithDisabled = [
  { label: "Available", value: "available" },
  { label: "Disabled", value: "disabled", disabled: true },
  { label: "Another Available", value: "another" },
];

export const Default: Story = {
  args: {
    label: "Choose a fruit",
    options: fruitOptions,
    placeholder: "Select a fruit...",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Select
        label="Small"
        size="small"
        options={fruitOptions}
        placeholder="Select..."
        color="blue"
      />
      <Select
        label="Standard"
        size="standard"
        options={fruitOptions}
        placeholder="Select..."
        color="blue"
      />
      <Select
        label="Large"
        size="large"
        options={fruitOptions}
        placeholder="Select..."
        color="blue"
      />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Select
        label="Red"
        options={fruitOptions}
        color="red"
        placeholder="Focus to see color"
      />
      <Select
        label="Orange"
        options={fruitOptions}
        color="orange"
        placeholder="Focus to see color"
      />
      <Select
        label="Green"
        options={fruitOptions}
        color="green"
        placeholder="Focus to see color"
      />
      <Select
        label="Blue"
        options={fruitOptions}
        color="blue"
        placeholder="Focus to see color"
      />
      <Select
        label="Violet"
        options={fruitOptions}
        color="violet"
        placeholder="Focus to see color"
      />
      <Select
        label="Pink"
        options={fruitOptions}
        color="pink"
        placeholder="Focus to see color"
      />
    </div>
  ),
};

export const WithValue: Story = {
  args: {
    label: "Favorite fruit",
    options: fruitOptions,
    value: "banana",
    color: "green",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Country",
    options: countryOptions,
    helperText: "Select your country of residence",
    placeholder: "Choose a country...",
    color: "blue",
  },
};

export const WithError: Story = {
  args: {
    label: "Country",
    options: countryOptions,
    errorMessage: "Please select a country",
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled select",
    options: fruitOptions,
    disabled: true,
    value: "apple",
  },
};

export const DisabledOptions: Story = {
  args: {
    label: "Some options disabled",
    options: optionsWithDisabled,
    placeholder: "Choose an option...",
    color: "indigo",
  },
};

export const CustomTextColors: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Select
        label="Custom label color"
        options={fruitOptions}
        color="blue"
        labelTextColor="violet"
        placeholder="Label is violet..."
        helperText="Focus ring and highlight are blue"
      />
      <Select
        label="Custom option color"
        options={fruitOptions}
        color="green"
        optionTextColor="orange"
        placeholder="Open to see orange options..."
        helperText="Options text is orange"
      />
      <Select
        label="Custom helper color"
        options={fruitOptions}
        color="indigo"
        helperTextColor="rose"
        placeholder="Select..."
        helperText="This helper text is rose colored"
      />
    </div>
  ),
};

export const Controlled: Story = {
  render: function ControlledExample() {
    const [value, setValue] = useState("");

    return (
      <div className="flex flex-col gap-4 w-80">
        <Select
          label="Controlled select"
          options={fruitOptions}
          value={value}
          onChange={setValue}
          helperText={value ? `Selected: ${value}` : "Nothing selected"}
          color="violet"
        />
        <button
          onClick={() => setValue("")}
          className="px-3 py-1.5 text-sm bg-gray-200 rounded hover:bg-gray-300"
        >
          Clear
        </button>
      </div>
    );
  },
};

export const FormExample: Story = {
  render: function FormExample() {
    const [formData, setFormData] = useState({
      country: "",
      fruit: "",
    });

    return (
      <form className="flex flex-col gap-4 w-80">
        <Select
          label="Country"
          options={countryOptions}
          value={formData.country}
          onChange={(val) => setFormData({ ...formData, country: val })}
          required
          placeholder="Select country..."
          color="blue"
        />
        <Select
          label="Favorite Fruit"
          options={fruitOptions}
          value={formData.fruit}
          onChange={(val) => setFormData({ ...formData, fruit: val })}
          placeholder="Select fruit..."
          color="green"
        />
        <p className="text-sm text-gray-600">
          Country: {formData.country || "None"} | Fruit:{" "}
          {formData.fruit || "None"}
        </p>
      </form>
    );
  },
};

export const ManyOptions: Story = {
  render: () => {
    const options = Array.from({ length: 50 }, (_, i) => ({
      label: `Option ${i + 1}`,
      value: `option-${i + 1}`,
    }));

    return (
      <div className="w-80">
        <Select
          label="Many options"
          options={options}
          placeholder="Scroll to see all..."
          helperText="50 options available"
          color="indigo"
        />
      </div>
    );
  },
};
