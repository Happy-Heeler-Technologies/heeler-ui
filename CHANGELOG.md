# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- **Select Component**: New custom dropdown select component with comprehensive accessibility and customization:
  - 17 configurable props including `options`, `value`, `onChange`, `label`, `helperText`, `errorMessage`, `color`, `labelTextColor`, `optionTextColor`, `helperTextColor`, `size`, `placeholder`, `disabled`, `required`, `name`, `id`, `onFocus`, `onBlur`, `className`, `style`
  - Custom dropdown implementation using WAI-ARIA combobox pattern (button + listbox) for full styling control
  - `SelectOption` interface with `label`, `value`, and optional `disabled` properties
  - 7 rainbow color variants (red, orange, yellow, green, blue, indigo, violet) for select border and text
  - Independent color control: label, options, and helper text colors can be customized separately via optional override props
  - Label text defaults to primary color (600-shade) with `labelTextColor` prop for customization
  - Option text defaults to primary color (500-shade) with `optionTextColor` prop for customization
  - Helper text defaults to gray with `helperTextColor` prop for customization
  - 3 size options: small, medium (default), large affecting padding and text size
  - Custom-styled options with primary color text and hover backgrounds
  - Disabled option support with visual styling and keyboard skip behavior
  - Animated chevron icon with rotation on open/close
  - Hidden input element for form submission with `name` attribute
  - Complete accessibility implementation with WCAG AA compliance:
    - WAI-ARIA combobox pattern with `role="combobox"` on trigger button and `role="listbox"` on dropdown
    - `role="option"` on all options with unique IDs for `aria-activedescendant` tracking
    - `aria-expanded`, `aria-haspopup="listbox"`, `aria-controls`, `aria-activedescendant` for screen reader context
    - `aria-labelledby` for labeled selects, `aria-label` fallback for unlabeled selects
    - `aria-required`, `aria-disabled`, `aria-invalid`, `aria-errormessage`, `aria-describedby` for form states
    - `aria-selected` on options for current value indication
    - Full keyboard navigation: Enter/Space to toggle/select, ArrowDown/Up to navigate (skipping disabled), Home/End for first/last, Escape to close, Tab to close and continue
    - Type-ahead search: press characters to jump to matching options with wraparound support
    - Intelligent focus management: auto-scroll highlighted option into view, return focus to trigger after selection
    - Click outside to close with proper focus return
    - Error announcements with `role="alert"` and `aria-live="polite"`
    - Keyboard-only focus indicators using `focus-visible` for better UX
  - `onChange` callback receives value string directly (not event object) for simplified state management
  - `onFocus` and `onBlur` callbacks for external focus tracking
  - Complete Storybook documentation with 26 comprehensive stories demonstrating all features, color variants, sizes, form integration, controlled patterns, and custom color overrides

- **Dialog Component**: New modal dialog component with comprehensive accessibility and customization:
  - 13 configurable props including `open`, `onClose`, `title`, `description`, `icon`, `iconBackground`, `primaryButton`, `secondaryButton`, `color`, `borderColor`, `titleColor`, `descriptionColor`, `labelForScreenReaders`, `className`, `style`
  - 7 rainbow color variants (red, orange, yellow, green, blue, indigo, violet) for dialog border, title, description, icon, and button colors
  - Independent color control: border, title, description, and icon colors can be customized separately for maximum flexibility
  - Optional icon support with two display modes:
    - With background: Icon displayed in rounded colored circle matching primary button color with white icon color
    - Without background: Icon displayed in primary color without background
  - Flexible button system: both primary and secondary buttons are optional, with backdrop click and Escape key as fallback close mechanisms
  - Per-button color override: primary buttons can specify custom colors independent of dialog color
  - Secondary buttons use gray styling for visual hierarchy
  - Complete accessibility implementation with WCAG AA compliance:
    - `role="dialog"` with `aria-modal="true"` for semantic dialog structure
    - `aria-labelledby` and `aria-describedby` relationships for proper screen reader announcements
    - `aria-label` support via `labelForScreenReaders` prop for dialogs with emoji or icon-only titles
    - Full keyboard navigation: Escape key to close, Tab/Shift+Tab focus trap with wrapping
    - Intelligent focus management: automatically focuses first interactive element (buttons, links, inputs) or dialog container on open
    - Focus restoration: returns focus to previously active element when dialog closes
    - Body scroll lock: prevents background scrolling while dialog is open
    - Backdrop click to close: clicking outside dialog triggers `onClose` callback
    - Keyboard-only focus indicators using `focus-visible` for better UX
  - Responsive design with mobile-friendly padding and max-width constraints
  - Semi-transparent backdrop with blur effect for visual depth
  - Complete Storybook documentation with 3 comprehensive showcase stories demonstrating all color variants with icons (with background, without background, and no icons)

## [0.1.0-alpha.9] - 2025-11-29

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
