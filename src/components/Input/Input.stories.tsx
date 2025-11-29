import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { useState } from "react";

const meta = {
  title: "Components/Input",
  component: Input,
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
      description: "Rainbow color for focus ring and border",
    },
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled",
    },
    errorMessage: {
      control: "text",
      description: "Error message to display",
    },
    helperText: {
      control: "text",
      description: "Helper text to display below the input",
    },
    label: {
      control: "text",
      description: "Label text for the input",
    },
    onChange: {
      description: "Change handler for controlled component",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
    required: {
      control: "boolean",
      description: "Whether the input is required",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size of the input",
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
      description: "The HTML input type",
    },
    value: {
      control: "text",
      description: "Input value (controlled component)",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper component for controlled inputs
const ControlledInput = (args: any) => {
  const [value, setValue] = useState(args.value || "");
  return (
    <div style={{ width: "320px" }}>
      <Input
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export const Default: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
  },
  render: (args) => <ControlledInput {...args} />,
};

export const WithValue: Story = {
  args: {
    label: "Email",
    value: "user@example.com",
    type: "email",
  },
  render: (args) => <ControlledInput {...args} />,
};

export const WithError: Story = {
  args: {
    label: "Email",
    type: "email",
    errorMessage: "Please enter a valid email address",
    placeholder: "email@example.com",
  },
  render: (args) => <ControlledInput {...args} />,
};

export const WithHelperText: Story = {
  args: {
    label: "Password",
    type: "password",
    helperText: "Must be at least 8 characters long",
    placeholder: "Enter password",
  },
  render: (args) => <ControlledInput {...args} />,
};

export const Required: Story = {
  args: {
    label: "Full Name",
    required: true,
    placeholder: "John Doe",
  },
  render: (args) => <ControlledInput {...args} />,
};

export const Disabled: Story = {
  args: {
    label: "Username",
    value: "johndoe",
    disabled: true,
  },
  render: (args) => <ControlledInput {...args} />,
};

// Size variations
export const Small: Story = {
  args: {
    label: "Small Input",
    size: "sm",
    placeholder: "Small size",
  },
  render: (args) => <ControlledInput {...args} />,
};

export const Medium: Story = {
  args: {
    label: "Medium Input",
    size: "md",
    placeholder: "Medium size (default)",
  },
  render: (args) => <ControlledInput {...args} />,
};

export const Large: Story = {
  args: {
    label: "Large Input",
    size: "lg",
    placeholder: "Large size",
  },
  render: (args) => <ControlledInput {...args} />,
};

// Rainbow colors
export const Red: Story = {
  args: {
    label: "Red Theme",
    color: "red",
    placeholder: "Focus to see red theme",
  },
  render: (args) => <ControlledInput {...args} />,
};

export const Orange: Story = {
  args: {
    label: "Orange Theme",
    color: "orange",
    placeholder: "Focus to see orange theme",
  },
  render: (args) => <ControlledInput {...args} />,
};

export const Yellow: Story = {
  args: {
    label: "Yellow Theme",
    color: "yellow",
    placeholder: "Focus to see yellow theme",
  },
  render: (args) => <ControlledInput {...args} />,
};

export const Green: Story = {
  args: {
    label: "Green Theme",
    color: "green",
    placeholder: "Focus to see green theme",
  },
  render: (args) => <ControlledInput {...args} />,
};

export const Blue: Story = {
  args: {
    label: "Blue Theme",
    color: "blue",
    placeholder: "Focus to see blue theme (default)",
  },
  render: (args) => <ControlledInput {...args} />,
};

export const Indigo: Story = {
  args: {
    label: "Indigo Theme",
    color: "indigo",
    placeholder: "Focus to see indigo theme",
  },
  render: (args) => <ControlledInput {...args} />,
};

export const Violet: Story = {
  args: {
    label: "Violet Theme",
    color: "violet",
    placeholder: "Focus to see violet theme",
  },
  render: (args) => <ControlledInput {...args} />,
};

// Input types
export const EmailInput: Story = {
  args: {
    label: "Email Address",
    type: "email",
    placeholder: "you@example.com",
    helperText: "We will never share your email",
  },
  render: (args) => <ControlledInput {...args} />,
};

export const PasswordInput: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    required: true,
  },
  render: (args) => <ControlledInput {...args} />,
};

export const NumberInput: Story = {
  args: {
    label: "Age",
    type: "number",
    placeholder: "25",
    helperText: "Enter your age",
  },
  render: (args) => <ControlledInput {...args} />,
};

export const TelephoneInput: Story = {
  args: {
    label: "Phone Number",
    type: "tel",
    placeholder: "(555) 123-4567",
  },
  render: (args) => <ControlledInput {...args} />,
};

export const URLInput: Story = {
  args: {
    label: "Website",
    type: "url",
    placeholder: "https://example.com",
  },
  render: (args) => <ControlledInput {...args} />,
};

export const SearchInput: Story = {
  args: {
    label: "Search",
    type: "search",
    placeholder: "Search...",
  },
  render: (args) => <ControlledInput {...args} />,
};

export const DateInput: Story = {
  args: {
    label: "Birth Date",
    type: "date",
  },
  render: (args) => <ControlledInput {...args} />,
};

export const TimeInput: Story = {
  args: {
    label: "Appointment Time",
    type: "time",
  },
  render: (args) => <ControlledInput {...args} />,
};

// Complex example
export const ComplexForm: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      email: "",
      password: "",
      confirmPassword: "",
    });

    const [errors, setErrors] = useState({
      email: "",
      password: "",
      confirmPassword: "",
    });

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setFormData({ ...formData, email: value });

      if (value && !value.includes("@")) {
        setErrors({ ...errors, email: "Please enter a valid email address" });
      } else {
        setErrors({ ...errors, email: "" });
      }
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setFormData({ ...formData, password: value });

      if (value && value.length < 8) {
        setErrors({
          ...errors,
          password: "Password must be at least 8 characters",
        });
      } else {
        setErrors({ ...errors, password: "" });
      }
    };

    const handleConfirmPasswordChange = (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      const value = e.target.value;
      setFormData({ ...formData, confirmPassword: value });

      if (value && value !== formData.password) {
        setErrors({ ...errors, confirmPassword: "Passwords do not match" });
      } else {
        setErrors({ ...errors, confirmPassword: "" });
      }
    };

    return (
      <div
        style={{
          width: "400px",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <Input
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleEmailChange}
          errorMessage={errors.email}
          placeholder="you@example.com"
          color="violet"
          required
        />

        <Input
          label="Password"
          type="password"
          value={formData.password}
          onChange={handlePasswordChange}
          errorMessage={errors.password}
          helperText="Must be at least 8 characters"
          placeholder="Enter password"
          color="violet"
          required
        />

        <Input
          label="Confirm Password"
          type="password"
          value={formData.confirmPassword}
          onChange={handleConfirmPasswordChange}
          errorMessage={errors.confirmPassword}
          placeholder="Confirm password"
          color="violet"
          required
        />
      </div>
    );
  },
};
