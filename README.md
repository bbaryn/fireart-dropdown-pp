# Fireart Dropdown - Pixel Perfect

A custom dropdown component built with React and Tailwind CSS v4, designed to match a pixel-perfect specification with precision.

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

The application will be available at `http://localhost:5173`

## 📋 Features

- **Custom Dropdown Component**: Matching exact design specifications with pixel-perfect implementation
- **Dynamic Content Management**: Edit placeholder text and options in real-time via UI controls
- **Smart Scrolling**: Automatic scrollbar appears when more than 7 options are available
- **Tailwind CSS v4**: With custom theme colors and utilities
- **TypeScript**: Full type safety across all components
- **React 19**: Using React Compiler for optimized performance
- **Modular Architecture**: Separated concerns with reusable components and custom hooks
- **Interactive Controls**: Add, edit, and delete dropdown options dynamically
- **Hover States**: Smooth transitions and visual feedback
- **Click Outside**: Intuitive close functionality

## 🎨 Pixel Perfect Approach

This project was built with a pixel-perfect mindset, carefully matching the provided design specification down to the last pixel. Here's how the precision was achieved:

### Tools Used

- **macOS Built-in Screenshot Tool**: Used to measure exact distances between elements with pixel-level precision
- **Chrome Simple Color Picker Extension**: Extracted exact color values (#E6F6FC, #646971, #f8f9fa, #99A4B3) from the design images
- **Visual Inspection**: Cross-referenced the built component with the original design images

### Limitations in the Current Approach

Since the design was delivered as static images without a Figma file, some information was missing and had to be inferred:

- **Font**: No font information was provided, so the system default font stack is used
- **Measurements**: All spacing and dimensions were measured manually using screenshot tools
- **Colors**: Extracted manually using browser extensions

### Proper Implementation Approach

For production projects with full design resources:

- Obtain Figma file access from the UI/UX designer
- Export design tokens directly from Figma (colors, spacing, typography)
- Get precise font families from the designer
- Clarify responsive breakpoints and behavior with the client/designer
- Use Figma Dev Mode for pixel-perfect measurements

### Responsive Design

This component was designed for a **1000px screen width** and **Chrome Web Browsers** and does not include responsive breakpoints. With pixel-perfect implementations:

- Specific breakpoints need to be determined in collaboration with the client
- Each breakpoint should have its own design mockups
- The current component displays optimally at 1000px viewport width
- For responsive versions, additional designs for tablets and mobile would be required

## 🎨 Custom Colors

The project uses custom Tailwind colors defined in `src/styles/global.css`:

- **White**: `#ffffff` - Pure white background
- **Black**: `#000000` - Default text color
- **Kodama White**: `#e6f6fd` - Dropdown hover state
- **Gibraltar**: `#76849a` - Primary text color (gibraltar)
- **Doctor White**: `#f8f9fa` - Page background
- **Vesper Violet**: `#99a4b3` - Placeholder and scrollbar color
- **Errigal White**: `#f1f2f5` - Scrollbar track background
- **Silver Chalice**: `#ebebec` - Border color for inputs and containers

## 💡 Usage

### Basic Implementation

```tsx
import Dropdown from "./components/Dropdown";
import { useDropdownState } from "./hooks/useDropdownState";

function App() {
  const {
    selectedOption,
    placeholder,
    options,
    handleChange,
    handlePlaceholderChange,
    handleOptionLabelChange,
    handleAddOption,
    handleDeleteOption,
  } = useDropdownState(initialOptions);

  return (
    <Dropdown
      value={selectedOption}
      placeholder={placeholder}
      options={options}
      onChange={handleChange}
    />
  );
}
```

### Dynamic Content Editing

The component supports real-time editing of:
- **Placeholder text**: Change the default placeholder via user input
- **Options list**: Add, edit, or delete options dynamically
- **Smart scrolling**: Appears automatically when more than 7 options exist

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Dropdown.tsx              # Main dropdown component with open/close state
│   ├── DropdownOptions.tsx        # Individual dropdown option item with hover states
│   ├── OptionsManager.tsx         # Control panel for managing dropdown options (CRUD operations)
│   ├── PlaceholderControl.tsx    # Input control for editing placeholder text
│   └── SelectedValueDisplay.tsx   # Display component showing currently selected option
├── hooks/
│   └── useDropdownState.ts       # Custom hook managing dropdown state and handlers
├── styles/
│   └── global.css                 # Tailwind imports, theme colors, and scrollbar styles
├── types/
│   └── index.tsx                  # TypeScript type definitions
├── App.tsx                        # Main app component orchestrating all components
└── main.tsx                       # Entry point
```

### Component Architecture

The project follows a modular architecture with clear separation of concerns:

- **Dropdown**: Core presentation component handling UI and interactions
- **Control Components**: Reusable UI components for managing dropdown properties
- **Custom Hook**: Encapsulates state logic for reusability and testability
- **TypeScript**: Shared type definitions ensure type safety across components

## 📐 Component Dimensions

### Dropdown Selector
- Width: `500px`
- Height: `30px` (max-height: `32px`)
- Padding: `16px` horizontal (`px-4`), `8px` vertical (`py-2.5`)
- Border: `1px` solid silver-chalice
- Border radius: `0.5rem` (rounded-lg)

### Dropdown Menu
- Width: `500px`
- Height: Auto when ≤ 7 options, fixed `275px` when > 7 options (with scrollbar)
- Gap between selector and menu: `10px` (top-10 spacing)
- Border: `1px` solid silver-chalice
- Border radius: `0.5rem` (rounded-lg)
- Scrollbar width: `16px` when visible
- Scroll padding: `8px` horizontal, `4px` vertical

### Option Items
- Padding: `8px` horizontal (`px-4`), `8px` vertical (`py-2`)
- Hover background: `#e6f6fd` (kodama-white)
- Text color: `#76849a` (gibraltar)

## 🔧 Tech Stack

- **React 19.1.1** with React Compiler
- **TypeScript 5.9.3**
- **Vite 7.1.7**
- **Tailwind CSS v4.1.16**
- **ESLint 9.36.0**
- **Prettier** for code formatting

## 📝 Notes

### Architecture Highlights

This project demonstrates:
- **Pixel-perfect implementation** techniques with limited design resources
- **Component-based architecture** for maintainability and reusability
- **Custom hooks** for state management and business logic separation
- **Type safety** throughout with TypeScript
- **Modular design** allowing easy customization and extension

### Development Best Practices

In real-world scenarios:
- Work with Figma files and collaborate closely with designers
- Use design tokens exported from Figma for consistency
- Implement responsive breakpoints from the start
- Establish clear component boundaries and separation of concerns
- Write reusable hooks for shared state logic
