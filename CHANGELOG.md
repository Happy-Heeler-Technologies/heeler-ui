# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

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

- **RainbowColor Type**: Centralized type definition (`"red" | "orange" | "yellow" | "green" | "blue" | "indigo" | "violet"`) exported from `icons/types.ts` and used across Badge, Tabs, and all icon components for consistency

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
