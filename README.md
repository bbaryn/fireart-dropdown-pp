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

- Custom dropdown component matching exact design specifications
- Tailwind CSS v4 with custom theme colors
- TypeScript for type safety
- React 19 with React Compiler
- Hover states and smooth transitions
- Custom scrollbar styling
- Click outside to close functionality

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

- **White**: `#FFFFFF` - Pure white background
- **Black**: `#000000` - Text color
- **Kodama White**: `#e6f6fd` - Dropdown hover state
- **Gibraltar**: `#646971` - Primary text color
- **Doctor White**: `#f8f9fa` - Page background
- **Vesper Violet**: `#99A4B3` - Placeholder and scrollbar color

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Dropdown.tsx           # Main dropdown component
│   └── DropdownOptions.tsx    # Dropdown option item component
├── styles/
│   └── global.css             # Tailwind imports and custom styles
├── types/
│   └── index.tsx              # TypeScript type definitions
├── App.tsx                     # Main app component
└── main.tsx                    # Entry point
```

## 📐 Component Dimensions

- Dropdown width: `500px`
- Dropdown height: `30px`
- Inner padding: `16px` horizontal, `8px` vertical
- Gap between selector and menu: `10px` (2.5 Tailwind units)
- Dropdown menu: `500px × 275px`
- Scroll padding: `8px × 4px`

## 🔧 Tech Stack

- **React 19.1.1** with React Compiler
- **TypeScript 5.9.3**
- **Vite 7.1.7**
- **Tailwind CSS v4.1.16**
- **ESLint 9.36.0**
- **Prettier** for code formatting

## 📝 Notes

This project demonstrates pixel-perfect implementation techniques with limited design resources. In real-world scenarios, working with Figma files and collaborating closely with designers ensures the highest accuracy and eliminates guesswork.
