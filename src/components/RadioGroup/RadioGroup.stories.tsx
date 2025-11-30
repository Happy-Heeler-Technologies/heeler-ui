import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { RadioGroup } from "./RadioGroup";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

const basicOptions = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

const sizeOptions = [
  { label: "Small", value: "small" },
  { label: "Medium", value: "medium" },
  { label: "Large", value: "large" },
];

const paymentOptions = [
  {
    label: "Credit Card",
    value: "credit",
    helperText: "Visa, Mastercard, Amex",
  },
  { label: "PayPal", value: "paypal", helperText: "Fast and secure payment" },
  { label: "Bank Transfer", value: "bank", helperText: "Direct bank transfer" },
];

const optionsWithDisabled = [
  { label: "Available Option", value: "available" },
  { label: "Disabled Option", value: "disabled", disabled: true },
  { label: "Another Available", value: "another" },
];

const notificationOptions = [
  {
    label: "All notifications",
    value: "all",
    helperText: "Receive all updates and messages",
  },
  {
    label: "Important only",
    value: "important",
    helperText: "Only critical alerts and updates",
  },
  {
    label: "None",
    value: "none",
    helperText: "Turn off all notifications",
  },
];

// Controlled wrapper for interactive stories
const ControlledRadioGroup = (args: any) => {
  const [value, setValue] = useState(args.value || "");

  return (
    <RadioGroup
      {...args}
      value={value}
      onChange={(val) => {
        setValue(val);
        args.onChange?.(val);
      }}
    />
  );
};

export const Default: Story = {
  render: (args) => <ControlledRadioGroup {...args} />,
  args: {
    label: "Choose an option",
    options: basicOptions,
  },
};

export const WithValue: Story = {
  render: (args) => <ControlledRadioGroup {...args} />,
  args: {
    label: "Choose an option",
    options: basicOptions,
    value: "option2",
  },
};

export const WithHelperText: Story = {
  render: (args) => <ControlledRadioGroup {...args} />,
  args: {
    label: "Notification Preferences",
    options: notificationOptions,
    helperText: "Choose how you want to receive notifications",
  },
};

export const WithOptionHelperText: Story = {
  render: (args) => <ControlledRadioGroup {...args} />,
  args: {
    label: "Payment Method",
    options: paymentOptions,
  },
};

export const Required: Story = {
  render: (args) => <ControlledRadioGroup {...args} />,
  args: {
    label: "Select your preference",
    options: basicOptions,
    required: true,
    helperText: "This field is required",
  },
};

export const WithError: Story = {
  render: (args) => <ControlledRadioGroup {...args} />,
  args: {
    label: "Select an option",
    options: basicOptions,
    errorMessage: "Please select an option",
  },
};

export const Disabled: Story = {
  render: (args) => <ControlledRadioGroup {...args} />,
  args: {
    label: "Disabled Radio Group",
    options: basicOptions,
    value: "option1",
    disabled: true,
  },
};

export const DisabledOptions: Story = {
  render: (args) => <ControlledRadioGroup {...args} />,
  args: {
    label: "Select an option",
    options: optionsWithDisabled,
    helperText: "Some options are disabled",
  },
};

export const WithoutLabel: Story = {
  render: (args) => <ControlledRadioGroup {...args} />,
  args: {
    options: basicOptions,
  },
};

// Size variants
export const Small: Story = {
  render: (args) => <ControlledRadioGroup {...args} />,
  args: {
    label: "Small Size",
    options: sizeOptions,
    size: "sm",
  },
};

export const Medium: Story = {
  render: (args) => <ControlledRadioGroup {...args} />,
  args: {
    label: "Medium Size (Default)",
    options: sizeOptions,
    size: "md",
  },
};

export const Large: Story = {
  render: (args) => <ControlledRadioGroup {...args} />,
  args: {
    label: "Large Size",
    options: sizeOptions,
    size: "lg",
  },
};

// Color variants
export const Red: Story = {
  render: (args) => <ControlledRadioGroup {...args} />,
  args: {
    label: "Red Theme",
    options: basicOptions,
    value: "option1",
    color: "red",
  },
};

export const Orange: Story = {
  render: (args) => <ControlledRadioGroup {...args} />,
  args: {
    label: "Orange Theme",
    options: basicOptions,
    value: "option1",
    color: "orange",
  },
};

export const Yellow: Story = {
  render: (args) => <ControlledRadioGroup {...args} />,
  args: {
    label: "Yellow Theme",
    options: basicOptions,
    value: "option1",
    color: "yellow",
  },
};

export const Green: Story = {
  render: (args) => <ControlledRadioGroup {...args} />,
  args: {
    label: "Green Theme",
    options: basicOptions,
    value: "option1",
    color: "green",
  },
};

export const Blue: Story = {
  render: (args) => <ControlledRadioGroup {...args} />,
  args: {
    label: "Blue Theme (Default)",
    options: basicOptions,
    value: "option1",
    color: "blue",
  },
};

export const Indigo: Story = {
  render: (args) => <ControlledRadioGroup {...args} />,
  args: {
    label: "Indigo Theme",
    options: basicOptions,
    value: "option1",
    color: "indigo",
  },
};

export const Violet: Story = {
  render: (args) => <ControlledRadioGroup {...args} />,
  args: {
    label: "Violet Theme",
    options: basicOptions,
    value: "option1",
    color: "violet",
  },
};

// Size comparison
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <ControlledRadioGroup
        label="Small"
        options={sizeOptions}
        size="sm"
        value="small"
      />
      <ControlledRadioGroup
        label="Medium"
        options={sizeOptions}
        size="md"
        value="medium"
      />
      <ControlledRadioGroup
        label="Large"
        options={sizeOptions}
        size="lg"
        value="large"
      />
    </div>
  ),
};

// Color comparison
export const AllColors: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <ControlledRadioGroup
        label="Red"
        options={basicOptions}
        color="red"
        value="option1"
      />
      <ControlledRadioGroup
        label="Orange"
        options={basicOptions}
        color="orange"
        value="option1"
      />
      <ControlledRadioGroup
        label="Yellow"
        options={basicOptions}
        color="yellow"
        value="option1"
      />
      <ControlledRadioGroup
        label="Green"
        options={basicOptions}
        color="green"
        value="option1"
      />
      <ControlledRadioGroup
        label="Blue"
        options={basicOptions}
        color="blue"
        value="option1"
      />
      <ControlledRadioGroup
        label="Indigo"
        options={basicOptions}
        color="indigo"
        value="option1"
      />
      <ControlledRadioGroup
        label="Violet"
        options={basicOptions}
        color="violet"
        value="option1"
      />
    </div>
  ),
};

// Custom color overrides
export const CustomColorOverrides: Story = {
  render: (args) => <ControlledRadioGroup {...args} />,
  args: {
    label: "Custom Colors",
    options: basicOptions,
    value: "option1",
    color: "blue",
    labelTextColor: "violet",
    optionLabelColor: "green",
    helperTextColor: "orange",
    helperText:
      "Group label is violet, option labels are green, radio buttons are blue, helper text is orange",
  },
};

// Form example
export const FormExample: Story = {
  render: () => {
    const [shipping, setShipping] = useState("");
    const [payment, setPayment] = useState("");

    return (
      <form className="flex flex-col gap-6 w-96">
        <h3 className="text-lg font-semibold">Checkout Form</h3>

        <RadioGroup
          label="Shipping Method"
          options={[
            {
              label: "Standard (5-7 days)",
              value: "standard",
              helperText: "Free",
            },
            {
              label: "Express (2-3 days)",
              value: "express",
              helperText: "$9.99",
            },
            { label: "Overnight", value: "overnight", helperText: "$24.99" },
          ]}
          value={shipping}
          onChange={setShipping}
          required
          color="green"
        />

        <RadioGroup
          label="Payment Method"
          options={paymentOptions}
          value={payment}
          onChange={setPayment}
          required
          color="blue"
        />

        <div className="flex gap-2 text-sm text-gray-600">
          <span>Selected Shipping:</span>
          <span className="font-medium">{shipping || "None"}</span>
          <span className="mx-2">|</span>
          <span>Selected Payment:</span>
          <span className="font-medium">{payment || "None"}</span>
        </div>
      </form>
    );
  },
};

// Controlled example with external state
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState("option1");

    return (
      <div className="flex flex-col gap-4">
        <RadioGroup
          label="Controlled Radio Group"
          options={basicOptions}
          value={value}
          onChange={setValue}
          helperText={`Current value: ${value}`}
        />
        <div className="flex gap-2">
          <button
            onClick={() => setValue("option1")}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Set Option 1
          </button>
          <button
            onClick={() => setValue("option2")}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Set Option 2
          </button>
          <button
            onClick={() => setValue("option3")}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Set Option 3
          </button>
          <button
            onClick={() => setValue("")}
            className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Clear
          </button>
        </div>
      </div>
    );
  },
};
