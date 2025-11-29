# @heeler/ui

## 🚧 Under Construction

This React/TypeScript/Tailwind component library is actively being developed. Check back soon for updates!

---

## About

**@heeler/ui** is an open source React component library built with TypeScript and Tailwind CSS. Designed with accessibility in mind, it provides a collection of customizable, production-ready components based on a vibrant rainbow color system.

**Proudly sponsored by [Happy Heeler Technologies](https://github.com/Happy-Heeler-Technologies)** - _Your tech's best friend_ 🐾

### Key Features

- **🌈 Rainbow Design System** - Built on the colors of the rainbow with strict type safety
- **♿ Accessibility First** - WCAG AA compliant with keyboard navigation, focus management, and screen reader support
- **📘 TypeScript Native** - Fully typed with exported interfaces for downstream type safety
- **🎨 Tailwind CSS** - Leverages Tailwind's utility-first approach for consistent styling
- **🔧 Customizable** - Flexible props with both preset options and custom color overrides
- **📦 Tree-shakeable** - Modern ESM/CJS builds with optimized bundle sizes

### Accessibility Highlights

All components are built with accessibility as a core principle:

- **Keyboard Navigation** - Full keyboard support with visible focus indicators
- **Screen Reader Friendly** - Semantic HTML with proper ARIA attributes
- **Color Contrast** - All rainbow colors meet WCAG AA standards (using 600-shade variants)
- **Focus Management** - Clear focus rings with `focus-visible` for keyboard users
- **Disabled States** - Proper visual and functional disabled states with appropriate cursors

---

## Components

### Button

A flexible button component with multiple variants, colors, and sizes.

#### Props

| Prop           | Type                                                                         | Default     | Description                                                    |
| -------------- | ---------------------------------------------------------------------------- | ----------- | -------------------------------------------------------------- |
| `text`         | `ReactNode`                                                                  | -           | The text content to display inside the button                  |
| `className`    | `string`                                                                     | `undefined` | Additional CSS classes to apply to the button                  |
| `color`        | `"red" \| "orange" \| "yellow" \| "green" \| "blue" \| "indigo" \| "violet"` | `"blue"`    | Rainbow color scheme. Applies to primary and tertiary variants |
| `disabled`     | `boolean`                                                                    | `false`     | Disables the button and prevents interaction                   |
| `icon`         | `ReactNode`                                                                  | `undefined` | Optional icon element to display (works with any icon library) |
| `iconPosition` | `"left" \| "right"`                                                          | `"left"`    | Position of the icon relative to the button text               |
| `loading`      | `boolean`                                                                    | `false`     | Shows a spinner and disables the button during loading states  |
| `rounded`      | `boolean`                                                                    | `false`     | Whether the button has fully rounded (pill-shaped) corners     |
| `size`         | `"sm" \| "md" \| "lg"`                                                       | `"lg"`      | Size of the button                                             |
| `style`        | `React.CSSProperties`                                                        | `undefined` | Inline styles to apply to the button                           |
| `type`         | `"button" \| "submit" \| "reset"`                                            | `"button"`  | HTML button type attribute                                     |
| `variant`      | `"primary" \| "secondary" \| "tertiary"`                                     | `"primary"` | The visual style variant of the button                         |
| `onClick`      | `(event: React.MouseEvent<HTMLButtonElement>) => void`                       | `undefined` | Click event handler                                            |

#### Usage

```tsx
import { Button } from "@heeler/ui";

// Primary button (default)
<Button text="Click me" />

// Secondary button
<Button variant="secondary" text="Cancel" />

// Tertiary button with custom color
<Button variant="tertiary" color="green" text="Learn More" />

// Small button
<Button size="sm" text="Small" />

// Rounded pill-shaped button
<Button rounded text="Rounded" />

// Loading state
<Button loading text="Processing..." />

// With icon (works with any icon library)
<Button icon={<HeartIcon />} text="Like" />
<Button icon={<ArrowRightIcon />} iconPosition="right" text="Next" />

// Disabled state
<Button disabled text="Disabled" />
```

#### Variants

- **Primary**: Solid background with white text (default)
- **Secondary**: Neutral gray background, unaffected by color prop
- **Tertiary**: Transparent background with colored border and text

#### Colors

The design system is based on the colors of the rainbow. Choose from these preset options:

- `red`, `orange`, `yellow`, `green`, `blue` (default), `indigo`, `violet`

#### Examples

```tsx
// Different variants with colors
<Button variant="primary" color="indigo" text="Primary" />
<Button variant="secondary" text="Secondary" />
<Button variant="tertiary" color="green" text="Tertiary" />

// Different sizes
<Button size="sm" text="Small" />
<Button size="md" text="Medium" />
<Button size="lg" text="Large" />

// Rounded buttons
<Button rounded color="orange" text="Pill Button" />

// Loading states
<Button loading color="blue" text="Loading..." />
<Button variant="secondary" loading text="Processing..." />

// With icons (use any icon library: lucide-react, heroicons, react-icons, etc.)
import { Heart, ArrowRight, Plus } from "lucide-react";

<Button icon={<Heart />} text="Favorite" />
<Button icon={<ArrowRight />} iconPosition="right" text="Continue" />
<Button variant="secondary" icon={<Plus />} text="Add Item" />

// Combined features
<Button
  variant="primary"
  color="violet"
  size="md"
  rounded
  icon={<Heart />}
  text="Love It"
/>

// Disabled state
<Button disabled text="Cannot Click" />
<Button disabled loading text="Still Loading" />

// Form buttons with type attribute
<form onSubmit={handleSubmit}>
  <Input label="Email" type="email" />
  <Button type="submit" text="Submit" />
  <Button type="reset" variant="secondary" text="Clear" />
  <Button type="button" variant="tertiary" onClick={handleCancel} text="Cancel" />
</form>
```

#### Accessibility

The Button component includes comprehensive accessibility features:

- **ARIA Attributes**: `aria-disabled`, `aria-busy` for loading states
- **Keyboard Navigation**: `focus-visible` for keyboard-only focus indicators
- **Screen Reader Support**: Decorative icons hidden with `aria-hidden="true"`
- **Visual Feedback**: Clear disabled states with reduced opacity and cursor changes
- **Semantic HTML**: Proper `<button>` element with `type` attribute

---

### Input

A text input component with consistent labeling, error handling, and support for multiple input types. Built with accessibility in mind, featuring proper ARIA attributes and keyboard navigation support.

#### Props

| Prop           | Type                                                                                                                | Default     | Description                                                              |
| -------------- | ------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------ |
| `className`    | `string`                                                                                                            | `undefined` | Additional CSS classes for the container div                             |
| `color`        | `"red" \| "orange" \| "yellow" \| "green" \| "blue" \| "indigo" \| "violet"`                                        | `undefined` | Rainbow color for focus ring and border                                  |
| `disabled`     | `boolean`                                                                                                           | `false`     | Whether the input is disabled                                            |
| `errorMessage` | `string`                                                                                                            | `undefined` | Error message to display below the input                                 |
| `helperText`   | `string`                                                                                                            | `undefined` | Helper text to display below the input (when no error)                   |
| `id`           | `string`                                                                                                            | `undefined` | Unique identifier for the input element                                  |
| `label`        | `string`                                                                                                            | `undefined` | Label text for the input                                                 |
| `max`          | `number \| string`                                                                                                  | `undefined` | Maximum value (for number, date, time inputs)                            |
| `maxLength`    | `number`                                                                                                            | `undefined` | Maximum length of input value                                            |
| `min`          | `number \| string`                                                                                                  | `undefined` | Minimum value (for number, date, time inputs)                            |
| `minLength`    | `number`                                                                                                            | `undefined` | Minimum length of input value                                            |
| `name`         | `string`                                                                                                            | `undefined` | Name attribute for the input (useful for forms)                          |
| `placeholder`  | `string`                                                                                                            | `undefined` | Placeholder text                                                         |
| `readOnly`     | `boolean`                                                                                                           | `false`     | Whether the input is read-only                                           |
| `required`     | `boolean`                                                                                                           | `false`     | Whether the input is required                                            |
| `size`         | `"sm" \| "md" \| "lg"`                                                                                              | `"md"`      | Size of the input                                                        |
| `style`        | `React.CSSProperties`                                                                                               | `undefined` | Inline styles for the input element                                      |
| `textColor`    | `"red" \| "orange" \| "yellow" \| "green" \| "blue" \| "indigo" \| "violet"`                                        | `undefined` | Text color for the input value (defaults to color prop if not specified) |
| `type`         | `"text" \| "email" \| "password" \| "number" \| "tel" \| "url" \| "search" \| "date" \| "time" \| "datetime-local"` | `"text"`    | The HTML input type                                                      |
| `value`        | `string \| number`                                                                                                  | `undefined` | Input value (controlled component)                                       |
| `onBlur`       | `(event: React.FocusEvent<HTMLInputElement>) => void`                                                               | `undefined` | Blur event handler                                                       |
| `onChange`     | `(event: React.ChangeEvent<HTMLInputElement>) => void`                                                              | `undefined` | Change handler for controlled component                                  |
| `onFocus`      | `(event: React.FocusEvent<HTMLInputElement>) => void`                                                               | `undefined` | Focus event handler                                                      |
| `onKeyDown`    | `(event: React.KeyboardEvent<HTMLInputElement>) => void`                                                            | `undefined` | Key down event handler                                                   |

#### Usage

```tsx
import { Input } from "@heeler/ui";

// Basic text input
<Input label="Username" placeholder="Enter your username" />

// Email input with helper text
<Input
  type="email"
  label="Email Address"
  placeholder="you@example.com"
  helperText="We'll never share your email"
/>

// Password input (required)
<Input
  type="password"
  label="Password"
  placeholder="Enter password"
  required
/>

// Controlled input with error
const [email, setEmail] = useState("");
const [error, setError] = useState("");

<Input
  type="email"
  label="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  errorMessage={error}
/>

// With rainbow color theme
<Input
  label="Favorite Color"
  color="violet"
  placeholder="Type here..."
/>

// Small size
<Input
  label="Small Input"
  size="sm"
  placeholder="Small size"
/>
```

#### Accessibility Features

The Input component is built with WCAG 2.1 AA compliance:

- **Keyboard Navigation**: Full keyboard support with `focus-visible` rings
- **Screen Reader Support**: Proper ARIA attributes including `aria-required`, `aria-invalid`, `aria-errormessage`, and `aria-describedby`
- **Error Handling**: Dynamic error announcements with `aria-live="polite"`
- **Label Association**: Automatic ID generation and proper `htmlFor` linking
- **Required Fields**: Visual indicator with screen reader support
- **Disabled States**: Proper `aria-disabled` attribute with visual feedback

#### Examples

```tsx
// Different input types
<Input type="email" label="Email" placeholder="you@example.com" />
<Input type="password" label="Password" required />
<Input type="number" label="Age" placeholder="25" />
<Input type="date" label="Birth Date" />

// Different sizes
<Input label="Small Input" size="sm" placeholder="Small" />
<Input label="Medium Input" size="md" placeholder="Medium (default)" />
<Input label="Large Input" size="lg" placeholder="Large" />

// Rainbow colors
<Input label="Violet Theme" color="violet" placeholder="Focus to see color" />
<Input label="Green Theme" color="green" placeholder="Type here..." />

// Text color (automatically matches border color by default)
<Input label="Blue Input" color="blue" placeholder="Text will be blue" />

// Override text color
<Input
  label="Custom Colors"
  color="indigo"
  textColor="orange"
  placeholder="Indigo border, orange text"
/>

// With helper text and errors
<Input
  label="Email"
  type="email"
  helperText="We'll never share your email"
  placeholder="you@example.com"
/>

<Input
  label="Username"
  errorMessage="This username is already taken"
  placeholder="Choose a username"
/>

// Form validation example
const [email, setEmail] = useState("");
const [error, setError] = useState("");

<Input
  type="email"
  label="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  errorMessage={error}
  color="violet"
  required
/>
```

---

## Installation

### 1. Install the component library

```bash
npm install @heeler/ui
# or
yarn add @heeler/ui
# or
pnpm add @heeler/ui
```

### 2. Install and configure Tailwind CSS v4

This library requires **Tailwind CSS v4** to be installed in your project. Follow these steps:

#### Install Tailwind CSS

```bash
npm install tailwindcss@next @tailwindcss/postcss@next
# or
yarn add tailwindcss@next @tailwindcss/postcss@next
# or
pnpm add tailwindcss@next @tailwindcss/postcss@next
```

#### Configure PostCSS

Create or update `postcss.config.js` in your project root:

```javascript
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

**Note:** If your `package.json` has `"type": "module"`, use ES module syntax (`export default`) as shown above. Otherwise, use CommonJS syntax (`module.exports = { ... }`).

#### Import Tailwind in your CSS

Add this to your main CSS file (e.g., `src/index.css` or `app/globals.css`):

```css
@import "tailwindcss";
```

#### Start your dev server

The Tailwind CSS v4 engine will automatically scan your files and generate styles.

**For complete Tailwind CSS v4 setup instructions and troubleshooting, visit the [official Tailwind CSS documentation](https://tailwindcss.com/docs/installation).**

### Requirements

- **React**: 18 or higher
- **Tailwind CSS**: v4 (using `@tailwindcss/postcss`)
- **Node.js**: 16 or higher

---

## Development

```bash
# Install dependencies
npm install

# Start Storybook (interactive component playground)
npm run storybook

# Build the library
npm run build

# Lint the code
npm run lint
```

---

## License

MIT © Happy Heeler Technologies

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

For major changes, please open an issue first to discuss what you would like to change.
