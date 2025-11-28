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

| Prop           | Type                                                                         | Default     | Description                                                                              |
| -------------- | ---------------------------------------------------------------------------- | ----------- | ---------------------------------------------------------------------------------------- |
| `variant`      | `"primary" \| "secondary" \| "tertiary"`                                     | `"primary"` | The visual style variant of the button                                                   |
| `color`        | `"red" \| "orange" \| "yellow" \| "green" \| "blue" \| "indigo" \| "violet"` | `"blue"`    | Rainbow color scheme. Applies to primary and tertiary variants                           |
| `customColor`  | `string`                                                                     | `undefined` | Custom hex color to override the rainbow color. Applies to primary and tertiary variants |
| `size`         | `"sm" \| "md" \| "lg"`                                                       | `"lg"`      | Size of the button                                                                       |
| `rounded`      | `boolean`                                                                    | `false`     | Whether the button has fully rounded (pill-shaped) corners                               |
| `loading`      | `boolean`                                                                    | `false`     | Shows a spinner and disables the button during loading states                            |
| `icon`         | `ReactNode`                                                                  | `undefined` | Optional icon element to display (works with any icon library)                           |
| `iconPosition` | `"left" \| "right"`                                                          | `"left"`    | Position of the icon relative to the button text                                         |
| `disabled`     | `boolean`                                                                    | `false`     | Disables the button and prevents interaction                                             |
| `children`     | `ReactNode`                                                                  | -           | Button content                                                                           |

#### Usage

```tsx
import { Button } from "@heeler/ui";

// Primary button (default)
<Button>Click me</Button>

// Secondary button
<Button variant="secondary">Cancel</Button>

// Tertiary button with custom color
<Button variant="tertiary" color="green">Learn More</Button>

// Small button
<Button size="sm">Small</Button>

// Rounded pill-shaped button
<Button rounded>Rounded</Button>

// Custom hex color (overrides color prop)
<Button customColor="#FF1493">Custom Pink</Button>

// Loading state
<Button loading>Processing...</Button>

// With icon (works with any icon library)
<Button icon={<HeartIcon />}>Like</Button>
<Button icon={<ArrowRightIcon />} iconPosition="right">Next</Button>

// Disabled state
<Button disabled>Disabled</Button>
```

#### Variants

- **Primary**: Solid background with white text (default)
- **Secondary**: Neutral gray background, unaffected by color prop
- **Tertiary**: Transparent background with colored border and text

#### Colors

The design system is based on the colors of the rainbow. Choose from these preset options:

- `red`, `orange`, `yellow`, `green`, `blue` (default), `indigo`, `violet`

For custom colors outside the rainbow palette, use the `customColor` prop:

- `customColor="#FF1493"`, `customColor="#00CED1"`, etc.

#### Examples

```tsx
// Different variants with colors
<Button variant="primary" color="indigo">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="tertiary" color="green">Tertiary</Button>

// Different sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Rounded buttons
<Button rounded color="orange">Pill Button</Button>

// Custom colors
<Button customColor="#8B5CF6">Custom Purple</Button>
<Button variant="tertiary" customColor="#10B981">Custom Green Outline</Button>

// Loading states
<Button loading color="blue">Loading...</Button>
<Button variant="secondary" loading>Processing...</Button>

// With icons (use any icon library: lucide-react, heroicons, react-icons, etc.)
import { Heart, ArrowRight, Plus } from "lucide-react";

<Button icon={<Heart />}>Favorite</Button>
<Button icon={<ArrowRight />} iconPosition="right">Continue</Button>
<Button variant="secondary" icon={<Plus />}>Add Item</Button>

// Combined features
<Button
  variant="primary"
  color="violet"
  size="md"
  rounded
  icon={<Heart />}
>
  Love It
</Button>

// Disabled state
<Button disabled>Cannot Click</Button>
<Button disabled loading>Still Loading</Button>
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
