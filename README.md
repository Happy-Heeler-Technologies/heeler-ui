# 🐾 @heeler/ui

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

@heeler/ui currently includes the following components:

### 🏷️ Badge

Status indicators and labels with optional icons and semantic variants

### 🔘 Button

Flexible button with variants, colors, sizes, and loading states

### 🃏 Card

Content card for displaying images, titles, and descriptions

### ☑️ Checkbox

Boolean selection with labels, helper text, and custom styling

### 🎨 Icons

Library of 30 accessible icons with rainbow colors (ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Bell, Calendar, Cancel, Chart, Check, Clock, Cloud, Cog, Document, Download, Eye, Fire, Heart, Home, Lightning, Lock, LockOpen, Mail, Menu, Pencil, Plus, Refresh, Search, Star, Trash, User)

### ✏️ Input

Text input with support for multiple types, validation, and error handling

### ⏳ Loading

Spinner component with customizable colors, sizes, and optional backgrounds

### 📑 Tabs

Tabbed interface with keyboard navigation, rainbow colors, and solid/tertiary styling

## Exploring Components

To see detailed documentation, interactive examples, and all available props for each component, run Storybook locally:

```bash
npm run storybook
```

This will start an interactive component explorer at `http://localhost:6006` where you can:

- View all components and their variants
- Interactively modify props and see live updates
- Copy code examples
- Test accessibility features
- Explore the full rainbow color system

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
