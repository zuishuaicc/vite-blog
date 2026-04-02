# AGENTS.md - VitePress Blog Development Guide

## Project Overview

This is a VitePress-based documentation/blog site for personal learning notes. It uses Vue 3, TypeScript, and pnpm.

## Build Commands

### Development
```bash
pnpm docs:dev      # Start dev server with hot reload
```

### Build & Deploy
```bash
pnpm docs:build    # Build for production (outputs to docs/.vitepress/dist)
pnpm docs:preview  # Preview production build locally
```

### Package Management
```bash
pnpm install                    # Install dependencies
pnpm install --frozen-lockfile  # Install with locked versions (CI/CD)
corepack enable                 # Enable pnpm if needed
```

### Dependencies
```bash
pnpm add <package>              # Add runtime dependency
pnpm add -D <package>           # Add dev dependency
```

## Project Structure

```
vite-blog/
├── docs/                       # Documentation source files
│   ├── index.md               # Home page (VitePress home layout)
│   ├── markdown-examples.md   # Markdown examples
│   ├── api-examples.md        # Runtime API examples
│   ├── views/                 # Blog posts by category
│   │   ├── frontend/          # Frontend articles
│   │   ├── backend/           # Backend articles
│   │   ├── techStack/         # Technology stack articles
│   │   └── application/       # Application development articles
│   ├── public/                # Static assets (served at root)
│   └── assets/                # Local assets (images, etc.)
└── docs/.vitepress/           # VitePress configuration
    ├── config.mts             # Main VitePress config
    ├── slidebar.mts           # Sidebar configuration
    ├── fruitesIcon.ts        # Emoji icons for sidebar
    └── theme/                 # Custom theme
        ├── index.ts           # Theme entry point
        ├── Layout.vue         # Custom layout wrapper
        ├── custom.css         # Custom styles
        ├── hooks/             # Composable functions
        │   └── useClickEffect.ts
        └── components/        # Vue components
            └── ValineComment.vue
```

## Code Style Guidelines

### TypeScript

- Use strict TypeScript typing; avoid `any` when possible
- Prefer interfaces over type aliases for object shapes
- Use proper type annotations for function parameters and return values

```typescript
// Good
interface Ball {
  angle: number
  multiplier: number
  x: number
  y: number
  r: number
  color: string
}

// Bad
const ball: any = { ... }
```

### Vue Components

- Use `<script lang="ts" setup>` syntax for Vue 3 Composition API
- Separate concerns: template, script, and styles
- Use `toRefs` when destructuring reactive data

```vue
<script lang="ts" setup>
import { ref, computed } from 'vue'
const count = ref(0)
</script>

<template>
  <div>{{ count }}</div>
</template>

<style scoped>
/* scoped styles */
</style>
```

### File Naming Conventions

- Vue components: PascalCase (e.g., `ValineComment.vue`)
- TypeScript files: camelCase (e.g., `useClickEffect.ts`)
- Config files: kebab-case with extensions (e.g., `config.mts`, `slidebar.mts`)

### Import Conventions

- Vue ecosystem imports first, then external packages, then local imports
- Use absolute paths via VitePress aliases when available
- Use ES module syntax (`import`/`export`)

```typescript
// Order: 1. Vue built-ins, 2. External packages, 3. Local imports
import { ref } from 'vue'
import imageViewer from 'vitepress-plugin-image-viewer'
import Layout from './Layout.vue'
```

### VitePress Configuration

- Use `.mts` extension for ESM config files
- Use `defineConfig` helper from VitePress
- Use sidebar configuration for navigation structure

```typescript
import { defineConfig } from "vitepress"
import { sidebar } from "./slidebar.mts"

export default defineConfig({
  title: "Site Title",
  themeConfig: {
    sidebar: sidebar,
  },
})
```

### Markdown Guidelines

- Use frontmatter for page metadata
- Follow VitePress markdown extensions (code highlighting, custom containers)
- Use relative links for internal navigation
- Use absolute URLs for external links

```markdown
---
title: Page Title
description: Page description
---

# Content
```

### CSS/Styling

- Use scoped styles in Vue components
- Follow existing custom.css patterns for global styles
- Use CSS custom properties (variables) for theming

### Error Handling

- Handle null/undefined cases explicitly
- Use optional chaining (`?.`) and nullish coalescing (`??`)
- Log errors with meaningful messages for debugging

```typescript
// Good
ctx = canvas.getContext("2d")!
if (canvas.getContext && window.addEventListener) {
  // proceed
}

// Avoid
if (something == true)  // Prefer strict equality
```

### Comments

- Use Chinese comments for business logic and documentation
- Add JSDoc-style comments for public functions
- Comment complex algorithms or non-obvious code

## VitePress Specific

### Frontmatter Variables

Available in templates via `frontmatter`:
- `comment: true` - Enable comments for specific pages
- `title`, `description`, `author`, etc.

### Built-in Components

- Use `vImageViewer` for image galleries (registered globally)
- Use Giscus for comments (configured in theme)

### Plugin Configuration

Plugins are configured in `theme/index.ts`:
- `vitepress-plugin-image-viewer` - Image preview
- `vitepress-plugin-comment-with-giscus` - Comments

## CI/CD

GitHub Actions workflow (`.github/workflows/deploy.yml`):
1. Checkout and setup Node 20
2. Install dependencies with pnpm
3. Build with `pnpm docs:build`
4. Deploy to GitHub Pages

Branch: `master` triggers automatic deployment.

## Useful Resources

- [VitePress Documentation](https://vitepress.dev/)
- [VitePress Theme API](https://vitepress.dev/reference/theme-introduction)
- [Default Theme Config](https://vitepress.dev/reference/default-theme-config)
