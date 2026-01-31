import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Mail, Search, Eye, Lock } from "../../icons";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "standard", "large"],
    },
    type: {
      control: "select",
      options: [
        "text",
        "email",
        "password",
        "number",
        "tel",
        "url",
        "search",
        "date",
        "time",
        "datetime-local",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Email",
    placeholder: "you@example.com",
    type: "email",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input size="small" label="Small" placeholder="Small input" />
      <Input size="standard" label="Standard" placeholder="Standard input" />
      <Input size="large" label="Large" placeholder="Large input" />
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input label="Email" placeholder="you@example.com" startIcon={<Mail />} />
      <Input label="Search" placeholder="Search..." startIcon={<Search />} />
      <Input
        label="Password"
        type="password"
        placeholder="Enter password"
        startIcon={<Lock />}
        endIcon={<Eye />}
      />
    </div>
  ),
};

export const FocusColors: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input label="Blue (default)" placeholder="Focus me" focusColor="blue" />
      <Input label="Green" placeholder="Focus me" focusColor="green" />
      <Input label="Violet" placeholder="Focus me" focusColor="violet" />
      <Input label="Orange" placeholder="Focus me" focusColor="orange" />
    </div>
  ),
};

export const WithHelperText: Story = {
  args: {
    label: "Username",
    placeholder: "johndoe",
    helperText: "Choose a unique username for your account",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    placeholder: "you@example.com",
    value: "invalid-email",
    errorMessage: "Please enter a valid email address",
    startIcon: <Mail />,
  },
};

export const Required: Story = {
  args: {
    label: "Full Name",
    placeholder: "John Doe",
    required: true,
    helperText: "This field is required",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    value: "Cannot edit this",
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    label: "Read Only",
    value: "This value cannot be changed",
    readOnly: true,
  },
};

export const CustomColors: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input
        label="Custom Label Color"
        labelColor="text-indigo-600"
        placeholder="Indigo label"
        focusColor="indigo"
      />
      <Input
        label="Custom Text Color"
        textColor="text-blue-700"
        value="Blue text"
        focusColor="blue"
      />
      <Input
        label="Custom Border"
        borderColor="border-violet-400"
        placeholder="Violet border"
        focusColor="violet"
      />
    </div>
  ),
};

export const InputTypes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input label="Text" type="text" placeholder="Plain text" />
      <Input label="Email" type="email" placeholder="you@example.com" />
      <Input label="Password" type="password" placeholder="••••••••" />
      <Input label="Number" type="number" placeholder="42" min={0} max={100} />
      <Input label="Tel" type="tel" placeholder="+1 (555) 123-4567" />
      <Input label="URL" type="url" placeholder="https://example.com" />
      <Input label="Search" type="search" placeholder="Search..." />
      <Input label="Date" type="date" />
      <Input label="Time" type="time" />
    </div>
  ),
};

export const Controlled: Story = {
  render: function ControlledInput() {
    const [value, setValue] = useState("");
    const characterLimit = 50;
    const remaining = characterLimit - value.length;

    return (
      <div className="w-80">
        <Input
          label="Bio"
          placeholder="Tell us about yourself"
          value={value}
          onChange={(e) => setValue(e.target.value.slice(0, characterLimit))}
          helperText={`${remaining} characters remaining`}
          errorMessage={
            remaining < 10 ? "Almost at character limit" : undefined
          }
        />
      </div>
    );
  },
};

export const FormExample: Story = {
  render: function FormExample() {
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = () => {
      const newErrors: Record<string, string> = {};
      if (!formData.email.includes("@")) {
        newErrors.email = "Please enter a valid email";
      }
      if (formData.password.length < 8) {
        newErrors.password = "Password must be at least 8 characters";
      }
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    return (
      <form
        className="flex flex-col gap-4 w-80"
        onSubmit={(e) => {
          e.preventDefault();
          if (validate()) {
            alert("Form submitted!");
          }
        }}
      >
        <Input
          label="Email"
          type="email"
          placeholder="you@example.com"
          required
          startIcon={<Mail />}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          errorMessage={errors.email}
          focusColor="blue"
        />
        <Input
          label="Password"
          type="password"
          placeholder="••••••••"
          required
          startIcon={<Lock />}
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          errorMessage={errors.password}
          helperText="Must be at least 8 characters"
          focusColor="blue"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Sign In
        </button>
      </form>
    );
  },
};
