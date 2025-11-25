# React + TypeScript + Vite Template

This project provides a modern setup for building React applications using Vite, TypeScript, and ESLint. It includes tools and configurations designed to help maintain high-quality, maintainable code while developing efficiently.

## Features

- **React with TypeScript**: Type-safe components and hooks for robust applications.
- **Vite**: Lightning-fast development server with Hot Module Replacement (HMR).
- **ESLint**: Configured to help maintain consistent code quality.
- **React Compiler**: Enabled for improved performance and optimized builds.
- **Flexible plugin support**:
  - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react): Uses Babel (or oxc in advanced setups) for Fast Refresh.
  - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc): Uses SWC for Fast Refresh.

## Project Structure

```
src/
├─ components/       # Reusable React components
├─ pages/            # Page-level components for routing
├─ api/              # API interaction utilities
├─ types/            # TypeScript types and interfaces
├─ context/          # React context providers
├─ App.tsx           # Main application entry
└─ main.tsx          # ReactDOM entry point
public/              # Static assets (images, favicon, etc.)
```

## ESLint Configuration

The template comes with a default ESLint setup. For production applications, enabling **type-aware lint rules** is recommended:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

For React-specific linting, you can add:

```js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

## Getting Started

1. **Install dependencies**:

```bash
npm install
```

2. **Start development server**:

```bash
npm run dev
```

3. **Build for production**:

```bash
npm run build
```

4. **Preview production build locally**:

```bash
npm run preview
```

## Learn More

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [ESLint Documentation](https://eslint.org/docs/latest/)
