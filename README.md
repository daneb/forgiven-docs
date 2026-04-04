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
