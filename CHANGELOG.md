# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
