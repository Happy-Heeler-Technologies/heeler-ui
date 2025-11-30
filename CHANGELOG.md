# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-11-29

### Added

**🎉 Initial stable release with 10 production-ready components!**

This release marks the first stable version of @heeler/ui, featuring a complete set of accessible, customizable React components built with TypeScript and Tailwind CSS v4. All components follow consistent patterns, support the rainbow color system (red, orange, yellow, green, blue, indigo, violet), and meet WCAG AA accessibility standards.

**Core Features:**

- 🌈 Rainbow color system with 7 vibrant variants across all components
- ♿ WCAG AA compliant with comprehensive keyboard navigation and screen reader support
- 📘 Full TypeScript support with exported types and interfaces
- 🎨 Pre-compiled CSS bundle - **no Tailwind configuration required in your app**
- 📦 Tree-shakeable ESM/CJS builds
- 📚 Comprehensive Storybook documentation (150+ stories total)
- ⚡ Simple 2-step installation: `npm install @heeler/ui` and `import "@heeler/ui/styles.css"`

**Component Library:**

- **Badge Component**: Status indicators and labels with icons
  - 7 props: `text`, `icon`, `color`, `variant`, `labelForScreenReaders`, `className`, `style`
  - Two semantic variants: `label` (default) and `status` (with live region announcements)
  - Optional icon support with automatic `aria-hidden` handling
  - Smart ARIA labeling for status badges
  - 7 rainbow color variants with WCAG AA contrast ratios

- **Button Component**: Flexible, accessible buttons with variants and states
  - 10 props: `children`, `color`, `disabled`, `icon`, `iconPosition`, `loading`, `onClick`, `size`, `variant`, `className`, `style`
  - 3 variants: solid (default), outline, ghost
  - 3 sizes: small, medium (default), large
  - Optional icon support with left/right positioning
  - Loading state with spinner and disabled interaction
  - Full keyboard and focus management

- **Card Component**: Content cards for images, titles, and descriptions
  - 8 props: `title`, `description`, `image`, `color`, `titleColorOverride`, `descriptionColorOverride`, `className`, `style`
  - Semantic `<article>` HTML with ARIA relationships
  - 7 rainbow color variants for borders and titles
  - Independent color overrides for title and description text
  - Responsive image container with consistent styling
  - Unique ID generation for proper accessibility

- **Checkbox Component**: Boolean selection with full customization
  - 16 props: `checked`, `onChange`, `label`, `color`, `labelColor`, `size`, `disabled`, `required`, `helperText`, `errorMessage`, `name`, `id`, `className`, `style`
  - 3 sizes: small, medium (default), large
  - Custom SVG checkmark with adaptive coloring
  - Helper text and error message support
  - Full ARIA attributes and keyboard support

- **Dialog Component**: Modal dialogs with icons and flexible buttons
  - 13 props: `open`, `onClose`, `title`, `description`, `icon`, `iconBackground`, `primaryButton`, `secondaryButton`, `color`, `borderColor`, `titleColor`, `descriptionColor`, `labelForScreenReaders`, `className`, `style`
  - Optional icon with two display modes (with/without background)
  - Flexible button system (both optional)
  - Per-button color overrides
  - Focus trap with Tab/Shift+Tab wrapping
  - Body scroll lock and backdrop blur
  - Focus restoration on close
  - `role="dialog"` with full ARIA implementation

- **Icon Library**: 30 accessible SVG icons
  - Icons: ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Bell, Calendar, Cancel, Chart, Check, Clock, Cloud, Cog, Document, Download, Eye, Fire, Heart, Home, Lightning, Lock, LockOpen, Mail, Menu, Pencil, Plus, Refresh, Search, Star, Trash, User
  - Consistent 12px default size (customizable via `className`)
  - Accessibility props: `title`, `hideFromScreenReaders`
  - Automatic `role="img"` with `aria-label` when titled
  - Individual component files for optimal tree-shaking

- **Input Component**: Text inputs with validation and error handling
  - 15 props: `type`, `value`, `onChange`, `label`, `labelColor`, `helperText`, `helperTextColor`, `errorMessage`, `placeholder`, `disabled`, `required`, `color`, `size`, `name`, `id`, `className`, `style`
  - Multiple input types: text, email, password, number, tel, url, search, date, time
  - 3 sizes: small, medium (default), large
  - Helper text and error message support with ARIA associations
  - Full keyboard and form integration

- **Loading Component**: Animated spinners for loading states
  - 8 props: `spinnerColor`, `backgroundColor`, `textColor`, `size`, `text`, `withBackground`, `labelForScreenReaders`, `className`, `style`
  - 3 sizes: small (32px), medium (48px), large (64px)
  - Optional solid background container
  - Optional loading text with customizable color
  - `role="status"` with `aria-live="polite"` for announcements
  - Smart `aria-label` handling with screen-reader-only fallbacks

- **RadioGroup Component**: Single-selection radio groups
  - 17 props: `options`, `value`, `onChange`, `label`, `helperText`, `helperTextColor`, `errorMessage`, `color`, `labelTextColor`, `optionLabelColor`, `size`, `disabled`, `required`, `name`, `id`, `className`, `style`
  - `RadioOption` interface: `label`, `value`, optional `disabled`, optional `helperText`
  - 3 sizes: small, medium (default), large
  - Independent color controls for group label, option labels, and helper text
  - Per-option helper text with proper ARIA associations
  - Circular radio buttons with white inner dot when selected
  - Semantic `<fieldset>` and `<legend>` structure
  - `role="radiogroup"` with comprehensive ARIA attributes
  - Native keyboard navigation (Tab, Space/Enter, Arrow keys)
  - 26 Storybook stories

- **Select Component**: Custom dropdown with full styling control
  - 17 props: `options`, `value`, `onChange`, `label`, `helperText`, `errorMessage`, `color`, `labelTextColor`, `optionTextColor`, `helperTextColor`, `size`, `placeholder`, `disabled`, `required`, `name`, `id`, `onFocus`, `onBlur`, `className`, `style`
  - `SelectOption` interface: `label`, `value`, optional `disabled`
  - 3 sizes: small, medium (default), large
  - WAI-ARIA combobox pattern (button + listbox)
  - Independent color controls for labels, options, and helper text
  - Animated chevron icon with rotation
  - Type-ahead search with wraparound
  - Disabled option support with skip behavior
  - Full keyboard navigation (Enter/Space, Arrows, Home/End, Escape, Tab)
  - Intelligent focus management with auto-scroll
  - Hidden input for form submission
  - 26 Storybook stories

- **Tabs Component**: Tabbed interfaces with keyboard navigation
  - 8 props: `tabs`, `color`, `defaultTab`, `activeTab`, `onTabChange`, `solid`, `className`, `style`
  - Two styling modes: tertiary (default, border + text) and solid (background + white text)
  - Per-tab color override support for mixed colors
  - Controlled and uncontrolled patterns
  - Full keyboard navigation (ArrowLeft/Right with wrapping, Home, End)
  - Semantic ARIA roles: `tablist`, `tab`, `tabpanel`
  - `aria-selected`, `aria-controls`, `aria-labelledby` relationships
  - Focus management with `tabIndex` and `focus-visible` styling
  - 13 Storybook stories

### Changed

- **Component Standardization**: All components now follow consistent patterns:
  - Centralized `RainbowColor` type from `types.ts`
  - Constants moved outside components with UPPERCASE_NAMING
  - Consistent `useId()` pattern with `generatedId` variable
  - All components have `displayName` property
  - Standardized prop naming: `labelForScreenReaders` (not `ariaLabel`)
  - Alphabetically ordered props for consistency

- **Global Styles**: Added `.sr-only` utility class for screen-reader-only content across all components

### Notes

This v1.0.0 release establishes the stable API for @heeler/ui. Going forward, all changes will follow semantic versioning:

- **Patch** (1.0.x): Bug fixes and minor improvements
- **Minor** (1.x.0): New features and components (backward compatible)
- **Major** (x.0.0): Breaking changes to existing APIs

All 10 components are production-ready with comprehensive documentation, full accessibility, and extensive test coverage via Storybook.

### Added

- **Loading Component**: New loading spinner component with comprehensive customization and accessibility:
  - 8 configurable props including `spinnerColor`, `backgroundColor`, `textColor`, `size`, `text`, `withBackground`, `labelForScreenReaders`, `className`, `style`
  - 7 rainbow color variants (red, orange, yellow, green, blue, indigo, violet) for spinner, background, and text
  - Independent color control: spinner, background, and text colors can be customized separately
  - 3 size options: small (32px), medium (48px), large (64px)
  - Optional solid background container with soft colored backgrounds
  - Optional loading text with customizable color (defaults to spinner color)
  - Complete accessibility implementation with WCAG AA compliance:
    - `role="status"` for semantic loading state
    - `aria-live="polite"` for screen reader announcements
    - `aria-busy="true"` to indicate loading state
    - Smart `aria-label` handling: uses visible text or custom label for screen readers
    - Visually hidden fallback text when no visible text is shown (`.sr-only` class)
    - Spinner marked decorative with `aria-hidden="true"`
  - Complete Storybook documentation with stories for all colors, sizes, backgrounds, mixed color combinations, and overlay examples

- **Badge Component**: New badge component for status indicators and labels with the following features:
  - 7 configurable props including `text`, `icon`, `color`, `variant`, `ariaLabel`, `className`, `style`
  - 7 rainbow color variants (red, orange, yellow, green, blue, indigo, violet) with solid backgrounds and white text
  - Optional icon support with proper `aria-hidden` handling
  - Two semantic variants:
    - `"label"` (default): Static informational badges without ARIA role
    - `"status"`: Live status indicators with `role="status"` for screen reader announcements
  - Smart ARIA labeling: status badges automatically get `aria-label="Status: {text}"` if not provided
  - Complete accessibility implementation with WCAG AA compliant color contrast ratios
  - Complete Storybook documentation with stories for all color variants, icon combinations, and both semantic variants

- **Icon Library**: 30 reusable icon components with comprehensive accessibility features:
  - Icons: ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Bell, Calendar, Cancel, Chart, Check, Clock, Cloud, Cog, Document, Download, Eye, Fire, Heart, Home, Lightning, Lock, LockOpen, Mail, Menu, Pencil, Plus, Refresh, Search, Star, Trash, User
  - Rainbow color system with 7 variants
  - Accessibility props: `title` for descriptions, `hideFromScreenReaders`, automatic `role="img"` with `aria-label` when title provided, `focusable="false"`
  - Consistent 12px default size (w-3 h-3) with customizable `className` for sizing
  - Individual component files for tree-shaking and optimal bundle size

- **RainbowColor Type**: Centralized type definition (`"red" | "orange" | "yellow" | "green" | "blue" | "indigo" | "violet"`) exported from `icons/types.ts` and used across Badge, Loading, Tabs, and all icon components for consistency

- **Tabs Component**: New tabbed interface component with the following features:
  - 8 configurable props including `tabs`, `color`, `defaultTab`, `activeTab`, `onTabChange`, `solid`, `className`, `style`
  - 7 rainbow color variants (red, orange, yellow, green, blue, indigo, violet) for both solid and tertiary styling modes
  - Per-tab color override support for mixed color tabs
  - Two styling modes: default tertiary (border + text color) and optional solid (background + white text)
  - Full keyboard navigation support (ArrowLeft/Right with wrapping, Home, End keys)
  - Controlled and uncontrolled component patterns with `activeTab` and `defaultTab` props
  - Complete accessibility implementation with WCAG AA compliance:
    - Semantic ARIA roles (`tablist`, `tab`, `tabpanel`)
    - `aria-selected`, `aria-controls`, and `aria-labelledby` relationships
    - `aria-orientation="horizontal"` for screen reader context
    - Unique ID generation using React's `useId` hook to prevent collisions
    - Proper focus management with `tabIndex` (0 for active, -1 for inactive)
    - Keyboard-only focus indicators with `focus-visible` styling
  - Complete Storybook documentation with 13 stories covering all variants, solid examples, mixed colors, and default tab selection

### Changed

- **README**: Updated component list format from simple bullets to heading-style entries with emojis for improved visibility and scanning
- **Tabs Component**: Updated to use centralized `RainbowColor` type from `icons/types.ts`
- **Global Styles**: Added `.sr-only` utility class for screen-reader-only content to support accessibility patterns across all components

## [0.1.0-alpha.8] - 2025-11-29

### Added

- **Card Component**: New flexible card component for displaying images, titles, and descriptions with the following features:
  - 8 configurable props including `title`, `description`, `image`, `color`, `className`, `style`
  - 7 rainbow color variants (red, orange, yellow, green, blue, indigo, violet) for border and title styling
  - Optional `titleColorOverride` and `descriptionColorOverride` props for custom text colors
  - Semantic `<article>` HTML for proper document structure
  - Full accessibility support with `aria-labelledby` and `aria-describedby` relationships
  - Unique ID generation for proper ARIA associations
  - Responsive image container with consistent height and overflow handling
  - Complete Storybook documentation with 12 stories covering all variants and customization options

### Changed

- **README**: Streamlined component documentation section - replaced extensive prop tables with concise component list and Storybook instructions for detailed exploration
- Updated yellow color in Card component from `text-yellow-700` to `text-yellow-500` for improved vibrancy and reduced brownish appearance
- Updated yellow border in Card component from `border-yellow-400` to `border-yellow-500` for better color consistency

### Improved

- Standardized prop ordering across all components to alphabetical order for consistency and ease of use
- Enhanced Card component accessibility with semantic HTML and proper ARIA relationships

## [0.1.0-alpha.7] - 2025-11-28

### Added

- **Checkbox Component**: New customizable checkbox component with the following features:
  - 16 configurable props including `checked`, `color`, `size`, `disabled`, `required`
  - 7 rainbow color variants (red, orange, yellow, green, blue, indigo, violet)
  - 3 size options (small, medium, large)
  - `labelColor` prop for customizing label and checkmark colors
  - `errorMessage` prop with error state styling
  - `helperText` prop for additional guidance
  - Custom SVG checkmark with white default color
  - Full accessibility support with ARIA attributes
  - Complete Storybook documentation with 26 stories

### Changed

- **Button Component**: Added comprehensive JSDoc comments to all props for improved developer experience

### Improved

- Enhanced accessibility across components with proper ARIA labeling and error messaging
- Improved checkmark visibility with white default color that adapts when `labelColor` is specified
