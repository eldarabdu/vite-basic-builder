# Vite Basic Builder

Modern template for React applications using Vite, TypeScript, React Router Dom, Mantine, and SCSS
modules.

## 🚀 Quick Start

### Clone the repository

```bash
git clone https://github.com/eldarabdu/vite-basic-builder.git
cd vite-basic-builder
```

### Install dependencies

```bash
npm install
```

### Run in development mode

```bash
npm run dev
```

The application will be available at [http://localhost:8080](http://localhost:8080)

### Build for production

```bash
npm run build
```

## 📦 Available Scripts

- `npm run dev` - start development server
- `npm run build` - build application for production
- `npm run component` - generate new React component
- `npm run lint` - check code with linter
- `npm run typecheck` - check TypeScript types

## 🛠 Technologies and Dependencies

### Core Technologies

- [Vite](https://vitejs.dev/) - modern build tool for fast development
- [React](https://react.dev/) - library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - typed JavaScript
- [Mantine](https://mantine.dev/) - React components library

### Development Dependencies

- `@types/react` and `@types/react-dom` - React type definitions
- `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser` - TypeScript linter
- `@vitejs/plugin-react` - Vite plugin for React
- `eslint` - JavaScript/TypeScript linter
- `eslint-plugin-react-hooks` - linter rules for React Hooks
- `eslint-plugin-react-refresh` - linter rules for React Fast Refresh
- `sass` - SCSS preprocessor
- `vite-plugin-svgr` - SVG support for Vite

### Main Dependencies

- `@mantine/core` - core Mantine components
- `@mantine/hooks` - Mantine hooks
- `@mantine/styles` - Mantine styles

## 🎨 Styling

The project uses modular SCSS files with support for:

- Mantine theme configuration through `style.config.ts`
- Mixins for reusable styles
- Functions for unit conversion
- CSS modules for style isolation

### Style Structure

```
src/
├── configs/
│   └── style.config.ts   # Mantine theme configuration
├── styles/
│   ├── _functions.scss    # SCSS functions
│   ├── _mixins.scss      # SCSS mixins
│   └── index.scss       # SCSS root
└── components/
    └── ComponentName/
        └── styles.module.scss  # Component styles
```

## 📝 Configuration

### TypeScript

- `tsconfig.json` - main TypeScript configuration
- `tsconfig.app.json` - application configuration
- `tsconfig.node.json` - Node.js configuration

### ESLint

- `eslint.config.js` - linter configuration with TypeScript and React support

### Vite

- `vite.config.ts` - build configuration with:
  - SVG support
  - Development server settings
  - Build optimization
  - SCSS configuration

## 🔧 Path Aliases

- `@/*` -> `src/*`

## 📚 Documentation

- [Vite](https://vitejs.dev/guide/)
- [React](https://react.dev/learn)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Mantine](https://mantine.dev/getting-started/)
- [SCSS](https://sass-lang.com/documentation/)

## 🏗 Project Structure

```
src/
├── assets/          # Static assets (images, fonts, etc.)
├── components/      # React components
├── configs/         # Configuration files
├── pages/           # Page components
├── styles/          # Utility functions and styles
├── utils/           # Utility TypeScript functions
├── index.scss       # Root styles
└── App.tsx          # Root component
```

## 🔍 Features

- Fast development with Vite
- Type safety with TypeScript
- Modern UI with Mantine
- Modular styling with SCSS
- SVG support
- ESLint configuration
- Development server with hot reload
- Production build optimization
