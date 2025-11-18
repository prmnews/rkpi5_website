# GitHub Actions CI/CD Setup

**Date:** 2025-11-18  
**Story:** 9.2 - Build Contact Form  
**Purpose:** Configure CI/CD pipeline for Next.js + Convex + TypeScript

---

## Overview

The GitHub Actions workflow (`.github/workflows/ci.yml`) runs on every push to:
- `main` branch
- `epic/**` branches
- `story/**` branches

---

## Required GitHub Secrets

Navigate to: **GitHub Repo → Settings → Secrets and variables → Actions**

### 1. NEXT_PUBLIC_CONVEX_URL

**What it is:** Your Convex deployment URL  
**Where to find it:** 
- Run `npx convex dev` locally
- Look for the URL in the output or in `.env.local`
- Format: `https://your-deployment.convex.cloud`

**How to add:**
```
Name: NEXT_PUBLIC_CONVEX_URL
Value: https://your-deployment.convex.cloud
```

### 2. CONVEX_DEPLOYMENT

**What it is:** Your Convex deployment name  
**Where to find it:**
- Run `npx convex dev` locally
- Check `.env.local` for `CONVEX_DEPLOYMENT=`
- Or check your Convex dashboard: Settings → Deployment Name
- Format: `your-deployment-name` (example: `happy-animal-123`)

**How to add:**
```
Name: CONVEX_DEPLOYMENT
Value: happy-animal-123
```

### 3. CONVEX_DEPLOY_KEY (Optional - for production deployments)

**What it is:** Deploy key for pushing schema changes  
**Where to find it:**
- Convex Dashboard → Settings → Deploy Keys → Create new deploy key
- Only needed if CI/CD will deploy schema changes

**How to add:**
```
Name: CONVEX_DEPLOY_KEY
Value: [your-deploy-key]
```

**Note:** For now, just `CONVEX_DEPLOYMENT` might be enough for codegen. Try without `CONVEX_DEPLOY_KEY` first.

---

## Workflow Steps

The CI/CD pipeline runs these steps in order:

### 1. Validate Branch Name (story branches only)
- Checks story branch format: `story/{epic}.{story}-{name}`
- Example: `story/9.2-build-contact-form` ✅
- Fails on: `story/9.2` ❌

### 2. Install Dependencies
- Uses pnpm with lockfile
- Caches node_modules for speed

### 3. Generate Convex Types
- Runs `npx convex codegen`
- Creates `convex/_generated/` files
- Requires `CONVEX_DEPLOYMENT` secret

### 4. TypeScript Check
- Runs `pnpm exec tsc --noEmit`
- Verifies no type errors

### 5. ESLint Check
- Runs `pnpm run lint`
- Verifies code quality

### 6. Next.js Build
- Runs `pnpm run build`
- Creates production build
- Verifies all pages compile

---

## Testing the Workflow

### Local Test (Before Pushing)
```bash
# Ensure Convex types are current
npx convex codegen

# Run type check
pnpm exec tsc --noEmit

# Run lint
pnpm run lint

# Run build
pnpm run build
```

All should pass before pushing.

### After Pushing
1. Go to GitHub repo → Actions tab
2. Find your workflow run
3. Check each step for ✅ or ❌
4. Click failed steps to see error details

---

## Troubleshooting

### Error: "Cannot find module './_generated/server'"
**Cause:** Convex codegen didn't run or failed  
**Fix:** Check `CONVEX_DEPLOYMENT` secret is set correctly

### Error: "Could not find Convex client"
**Cause:** Missing ConvexProvider in layout  
**Fix:** Already fixed in Story 9.2 (`src/providers/convex-provider.tsx`)

### Error: "Invalid story branch name"
**Cause:** Branch name doesn't match format  
**Fix:** Rename branch: `git branch -m story/X.Y story/X.Y-name`

---

## Best Practices

### ✅ DO:
- Use story key format for branches: `story/9.2-build-contact-form`
- Commit with conventional commits: `feat(epic-9): Story 9.2 - Build contact form`
- Test locally before pushing
- Keep secrets in GitHub Secrets (never commit)

### ❌ DON'T:
- Commit `.env.local` or secrets
- Commit `convex/_generated/` (it's auto-generated)
- Use short branch names like `story/9.2`
- Skip local testing

---

## Adding Secrets to GitHub

**Step-by-step:**

1. Go to your GitHub repository
2. Click **Settings** (top navigation)
3. Click **Secrets and variables** → **Actions** (left sidebar)
4. Click **New repository secret**
5. Add each secret:
   - Name: `NEXT_PUBLIC_CONVEX_URL`
   - Value: Your Convex URL from `.env.local`
   - Click **Add secret**
6. Repeat for `CONVEX_DEPLOYMENT`

---

## Quick Start

**To get your workflow passing:**

```bash
# 1. Rename branch
git branch -m story/9.2 story/9.2-build-contact-form

# 2. Add GitHub secrets (see above)

# 3. Test locally
npx convex codegen
pnpm exec tsc --noEmit
pnpm run lint
pnpm run build

# 4. Commit workflow file
git add .github/workflows/ci.yml
git add docs/technical/github-actions-setup.md
git commit -m "ci: Add GitHub Actions workflow for Convex + Next.js"

# 5. Push and watch Actions tab
git push origin story/9.2-build-contact-form
```

---

## Story 9.2 Completion

This CI/CD setup is part of Story 9.2 infrastructure improvements and should be included in the story's file list.

**Files Added:**
- `.github/workflows/ci.yml` - GitHub Actions workflow
- `docs/technical/github-actions-setup.md` - This documentation

