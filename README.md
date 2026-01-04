# iMessage Automation Dashboard - Technical Assessment

## 📋 Project Overview
This is a responsive, animated Hero section for "Coup" - an iMessage automation platform. Built as part of a technical assessment, this project demonstrates modern frontend development practices with a focus on animations, responsiveness, and clean architecture.

## 🎯 Project Requirements Met
- ✅ **Responsive Design**: Perfectly adapts from mobile to 4K displays
- ✅ **Smooth Animations**: 15+ synchronized motion elements
- ✅ **Performance Optimized**: 60fps animations with reduced motion support
- ✅ **Pixel-Perfect Implementation**: Exact match to design specifications
- ✅ **Clean Code Architecture**: Type-safe, modular, and maintainable

## 🛠️ Tech Stack & Rationale

| Technology | Purpose | Why Chosen |
|------------|---------|------------|
| **React 18** | UI Components | Industry standard, component-based architecture |
| **TypeScript** | Type Safety | Catches errors early, improves developer experience |
| **Tailwind CSS** | Styling | Utility-first, rapid development, responsive design |
| **Framer Motion** | Animations | Production-ready, smooth 60fps animations |
| **Vite** | Build Tool | Lightning-fast builds, excellent dev experience |
| **Lucide Icons** | Iconography | Consistent, lightweight, React-optimized |

## 🏗️ Architecture Decisions

### 1. **Responsive Strategy**
```tsx
// Instead of fixed pixels, use responsive units:
className="top-[15%] sm:top-[20%] lg:top-[291px]"
// Mobile-first: Base → sm:640px → md:768px → lg:1024px → xl:1280px



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
