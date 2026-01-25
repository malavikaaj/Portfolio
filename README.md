# Deploy to GitHub Pages

Follow these steps to host this portfolio via GitHub Pages.

## 1) Create repository
- Sign in to GitHub and create a new repo (e.g. `portfolio`)
- Keep it public

## 2) Push code
```bash
cd "/Users/malavikaajith/Documents/trae_projects/portfolio website/portfolio"
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/malavikaaj/portfolio.git
git push -u origin main
```

## 3) Enable Pages
- Open the repo → Settings → Pages
- Source: Deploy from a branch
- Branch: `main` and folder: `/ (root)`
- Save

Your site will publish at:
- https://malavikaaj.github.io/portfolio/ (project pages)

## Notes
- `.nojekyll` prevents Jekyll from interfering with static assets
- Avoid spaces in filenames for reliability; rename images if needed
