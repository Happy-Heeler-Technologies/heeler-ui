# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
