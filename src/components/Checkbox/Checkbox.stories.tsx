import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import { useState } from "react";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "standard", "large"],
    },
    checkedColor: {
      control: "text",
    },
    labelColor: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "I agree to the terms and conditions",
  },
};

export const Checked: Story = {
  args: {
    label: "Subscribe to newsletter",
    checked: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox size="small" label="Small checkbox" checked />
      <Checkbox size="standard" label="Standard checkbox" checked />
      <Checkbox size="large" label="Large checkbox" checked />
    </div>
  ),
};

export const CustomColors: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Checkbox label="Blue (default)" checked checkedColor="bg-blue-600" />
      <Checkbox label="Emerald" checked checkedColor="bg-emerald-600" />
      <Checkbox label="Rose" checked checkedColor="bg-rose-600" />
      <Checkbox label="Amber" checked checkedColor="bg-amber-500" />
      <Checkbox label="Violet" checked checkedColor="bg-violet-600" />
    </div>
  ),
};

export const WithHelperText: Story = {
  args: {
    label: "Enable notifications",
    helperText: "We'll send you updates about your account",
  },
};

export const Required: Story = {
  args: {
    label: "I agree to the terms and conditions",
    required: true,
  },
};

export const WithError: Story = {
  args: {
    label: "I agree to the terms and conditions",
    errorMessage: "You must agree to the terms to continue",
    required: true,
  },
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Checkbox label="Disabled unchecked" disabled />
      <Checkbox label="Disabled checked" disabled checked />
    </div>
  ),
};

export const Indeterminate: Story = {
  args: {
    label: "Select all items",
    indeterminate: true,
  },
};

export const IndeterminateExample: Story = {
  render: () => {
    const [items, setItems] = useState([
      { id: "1", label: "Item 1", checked: true },
      { id: "2", label: "Item 2", checked: false },
      { id: "3", label: "Item 3", checked: true },
    ]);

    const allChecked = items.every((item) => item.checked);
    const someChecked = items.some((item) => item.checked);
    const indeterminate = someChecked && !allChecked;

    const handleSelectAll = () => {
      const newValue = !allChecked;
      setItems(items.map((item) => ({ ...item, checked: newValue })));
    };

    const handleItemChange = (id: string) => {
      setItems(
        items.map((item) =>
          item.id === id ? { ...item, checked: !item.checked } : item,
        ),
      );
    };

    return (
      <div className="flex flex-col gap-2">
        <Checkbox
          label="Select all"
          checked={allChecked}
          indeterminate={indeterminate}
          onChange={handleSelectAll}
          checkedColor="bg-blue-600"
        />
        <div className="ml-6 flex flex-col gap-2">
          {items.map((item) => (
            <Checkbox
              key={item.id}
              label={item.label}
              checked={item.checked}
              onChange={() => handleItemChange(item.id)}
              checkedColor="bg-blue-600"
            />
          ))}
        </div>
      </div>
    );
  },
};

export const CustomLabelColor: Story = {
  args: {
    label: "Custom label color",
    labelColor: "text-indigo-600",
    checked: true,
    checkedColor: "bg-indigo-600",
  },
};

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
      </div>
    );
  },
};
