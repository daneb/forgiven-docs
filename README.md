# Forgiven Documentation Site

This repository contains the documentation website for [Forgiven](https://github.com/daneb/forgiven), an AI-first terminal-based IDE.

Currently, this site is built with React, Vite, and Tailwind CSS, and dynamically fetches the main project's README to render the documentation.

## 🚀 Deployment Instructions (GitHub Pages)

To deploy this site automatically to GitHub Pages, you need a GitHub Actions workflow.

1. In your repository, create a file at exactly this path: `.github/workflows/deploy.yml`
2. Paste the following configuration:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ['master'] # Or 'main' depending on your default branch
  workflow_dispatch: # Allows you to run this workflow manually from the Actions tab

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

3. Go to your repository **Settings** > **Pages**.
4. Under **Build and deployment**, set the **Source** dropdown to **GitHub Actions**.

## ⚙️ Vite Configuration (Crucial for GitHub Pages)

Because GitHub Pages hosts project sites on a sub-path (e.g., `https://daneb.github.io/forgiven-docs/`), Vite needs to know about this base path. If you don't set this, your deployed site will load as a blank white page because it can't find the CSS and JS files.

In your `vite.config.ts`, ensure you have the `base` property set to your repository name:

```typescript
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: '/forgiven-docs/', // <-- THIS IS REQUIRED FOR GITHUB PAGES
    plugins: [react(), tailwindcss()],
    // ... rest of config
  };
});
```
*(Note: If you are testing locally, you may need to temporarily remove the `base` line or access the local server at `localhost:3000/forgiven-docs/`)*

## 🗺️ Roadmap: Upgrading to VitePress

While the current React-based dynamic fetcher is great for a single README, as the documentation grows, it is highly recommended to migrate to a dedicated Static Site Generator (SSG) like **VitePress**.

### Why VitePress?
* **Markdown-First:** You write standard `.md` files in a `docs/` folder, and VitePress turns them into a beautiful, fast website.
* **Multi-Page Support:** Easily split your massive README into logical pages (e.g., `/docs/keybindings.md`, `/docs/configuration.md`).
* **Built-in Search:** Out-of-the-box local search so users can instantly find commands.
* **SEO & Performance:** Generates static HTML at build time, meaning instant page loads and perfect SEO.
* **Dark Mode & Sidebar:** Comes with a polished, customizable sidebar and dark mode toggle by default.

### Migration Steps
1. **Initialize VitePress:** Run `npm add -D vitepress` and `npx vitepress init` in a new branch.
2. **Port Content:** Break the main `README.md` into smaller, focused markdown files inside a `docs/` directory.
3. **Configure Sidebar:** Update `.vitepress/config.ts` to map out your sidebar navigation.
4. **Update Action:** Change the GitHub Action build step from `npm run build` to `npm run docs:build` and point the upload artifact path to `.vitepress/dist`.
