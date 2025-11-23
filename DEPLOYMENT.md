# Deploying Nafas for Free

You can deploy your Vite + React application for free using **Vercel** or **Netlify**. Both are excellent, high-performance hosting providers.

## Option 1: Vercel (Recommended)

Vercel is optimized for frontend frameworks and offers a very smooth deployment experience.

### Method A: via GitHub (Best for updates)
1.  **Push your code to GitHub**:
    - Initialize git: `git init`
    - Add files: `git add .`
    - Commit: `git commit -m "Initial commit"`
    - Create a new repository on GitHub and push your code.
2.  **Connect to Vercel**:
    - Go to [vercel.com](https://vercel.com) and sign up/login.
    - Click **"Add New..."** -> **"Project"**.
    - Import your `GabESense` (or `Nafas`) repository.
    - Vercel will detect Vite automatically.
    - Click **"Deploy"**.

### Method B: Vercel CLI (Fastest command line)
1.  Install Vercel CLI: `npm i -g vercel`
2.  Run `vercel` in your project terminal.
3.  Follow the prompts (mostly just hit Enter).

---

## Option 2: Netlify Drop (Easiest, no account needed initially)

If you just want to show it off *right now* without setting up Git:

1.  **Build the project locally**:
    Run the following command in your terminal:
    ```bash
    npm run build
    ```
    This creates a `dist` folder in your project directory.

2.  **Drag and Drop**:
    - Go to [app.netlify.com/drop](https://app.netlify.com/drop).
    - Drag the `dist` folder from your file explorer and drop it onto the page.
    - Netlify will deploy it instantly and give you a URL.

## Pre-Deployment Checklist
- [x] **Build Check**: Ensure `npm run build` completes without errors.
- [x] **Environment Variables**: If you use any API keys (like Open-Meteo, though it's free/public), ensure they are set up. *Note: Open-Meteo is public, so no keys needed.*
- [x] **Base URL**: Vite handles relative paths well, but if you see broken assets, check `vite.config.js`.

## Troubleshooting
- **Blank Page?** If the deployed site is blank, it might be a routing issue. Create a `vercel.json` or `_redirects` file for SPA routing, but standard Vite apps usually work out of the box on Vercel.
