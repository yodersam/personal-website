# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

This is a Next.js 16 personal website with blog functionality using the App Router.

### Key Directories

- `src/app/` - Next.js App Router pages
- `src/components/` - React components (Header navigation)
- `src/content/posts/` - Blog posts as MDX/Markdown files
- `src/lib/` - Utility functions (post loading/parsing)

### Blog System

Blog posts are MDX files in `src/content/posts/` with frontmatter:

```yaml
---
title: Post Title
date: 2026-01-13
excerpt: Short description
tags:
  - tag1
  - tag2
---
```

The `src/lib/posts.ts` module provides `getAllPosts()`, `getPostBySlug()`, and `getAllPostSlugs()` for reading posts.

### Styling

Uses Tailwind CSS v4 with the typography plugin for prose styling. Dark mode is supported via `prefers-color-scheme`.
