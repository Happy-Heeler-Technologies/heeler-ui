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
  argTypes: {
    size: {
      control: "select",
      options: ["small", "standard", "large"],
    },
    orientation: {
      control: "select",
      options: ["vertical", "horizontal"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

const basicOptions = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

const paymentOptions = [
  {
    label: "Credit Card",
    value: "credit",
    helperText: "Visa, Mastercard, Amex",
  },
  { label: "PayPal", value: "paypal", helperText: "Fast and secure" },
  { label: "Bank Transfer", value: "bank", helperText: "Direct transfer" },
];

const optionsWithDisabled = [
  { label: "Available", value: "available" },
  { label: "Disabled", value: "disabled", disabled: true },
  { label: "Another Available", value: "another" },
];

export const Default: Story = {
  args: {
    label: "Choose an option",
    options: basicOptions,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <RadioGroup
        label="Small"
        options={basicOptions}
        size="small"
        value="option1"
      />
      <RadioGroup
        label="Standard"
        options={basicOptions}
        size="standard"
        value="option1"
      />
      <RadioGroup
        label="Large"
        options={basicOptions}
        size="large"
        value="option1"
      />
    </div>
  ),
};

export const Horizontal: Story = {
  args: {
    label: "Select size",
    options: [
      { label: "Small", value: "sm" },
      { label: "Medium", value: "md" },
      { label: "Large", value: "lg" },
    ],
    orientation: "horizontal",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Payment Method",
    options: paymentOptions,
    helperText: "Choose your preferred payment method",
  },
};

export const WithError: Story = {
  args: {
    label: "Select an option",
    options: basicOptions,
    errorMessage: "Please select an option",
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Group",
    options: basicOptions,
    value: "option1",
    disabled: true,
  },
};

export const DisabledOptions: Story = {
  args: {
    label: "Some options disabled",
    options: optionsWithDisabled,
  },
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <RadioGroup
        label="Blue"
        options={basicOptions}
        color="blue"
        value="option1"
      />
      <RadioGroup
        label="Green"
        options={basicOptions}
        color="green"
        value="option1"
      />
      <RadioGroup
        label="Violet"
        options={basicOptions}
        color="violet"
        value="option1"
      />
      <RadioGroup
        label="Orange"
        options={basicOptions}
        color="orange"
        value="option1"
      />
    </div>
  ),
};

export const Controlled: Story = {
  render: function ControlledExample() {
    const [value, setValue] = useState("");

    return (
      <div className="flex flex-col gap-4">
        <RadioGroup
          label="Controlled Radio Group"
          options={basicOptions}
          value={value}
          onChange={setValue}
          helperText={value ? `Selected: ${value}` : "Nothing selected"}
          color="blue"
        />
        <div className="flex gap-2">
          <button
            onClick={() => setValue("")}
            className="px-3 py-1.5 text-sm bg-gray-200 rounded hover:bg-gray-300"
          >
            Clear
          </button>
        </div>
      </div>
    );
  },
};

export const FormExample: Story = {
  render: function FormExample() {
    const [shipping, setShipping] = useState("");
    const [payment, setPayment] = useState("");

    return (
      <form className="flex flex-col gap-6 w-80">
        <RadioGroup
          label="Shipping"
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
          label="Payment"
          options={paymentOptions}
          value={payment}
          onChange={setPayment}
          required
          color="blue"
        />
        <p className="text-sm text-gray-600">
          Shipping: {shipping || "None"} | Payment: {payment || "None"}
        </p>
      </form>
    );
  },
};
