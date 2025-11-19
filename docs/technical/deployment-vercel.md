# Deploying to Vercel with Tagged Releases

**Platform:** Vercel  
**Strategy:** Tagged releases for production, main branch for preview  
**Date:** November 19, 2025

---

## Overview

This deployment strategy uses **tagged releases** to control production deployments while providing automatic preview deployments for testing on the main branch.

**Deployment Flow:**
```
Main Branch Push → Vercel Preview (test URL)
Tagged Release (v1.0.0) → Vercel Production (public URL)
```

---

## Prerequisites

- ✅ Vercel account created
- ✅ GitHub repository: prmnews/rkpi5_website
- ✅ All environment variables ready (from `.env.local`)

---

## Initial Vercel Setup

### Step 1: Connect GitHub Repository to Vercel

1. Log into [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New Project"**
3. Select **"Import Git Repository"**
4. Choose: `prmnews/rkpi5_website`
5. **Configure Project:**
   - Framework Preset: **Next.js**
   - Root Directory: `./`
   - Build Command: `pnpm build`
   - Output Directory: `.next`
   - Install Command: `pnpm install`
6. Click **"Deploy"** (this creates initial deployment)

### Step 2: Configure Environment Variables

In Vercel Project Settings → Environment Variables, add:

```bash
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Clerk Webhooks
CLERK_WEBHOOK_SECRET=whsec_...

# Convex Backend
NEXT_PUBLIC_CONVEX_URL=https://...convex.cloud
CONVEX_DEPLOYMENT=prod:...
CONVEX_DEPLOY_KEY=...

# Resend Email
RESEND_API_KEY=re_...

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-project.vercel.app
NODE_ENV=production
```

**Environment Scopes:**
- **Production:** Use for tagged releases
- **Preview:** Use for main branch and PRs
- **Development:** Not needed (uses local `.env.local`)

### Step 3: Get Vercel IDs for GitHub Actions

1. In Vercel Project Settings → General:
   - Copy **Project ID**
   - Copy **Team/Org ID** (from account settings)
2. Go to Vercel Account Settings → Tokens:
   - Create new token: "GitHub Actions Deploy"
   - Copy token (shows once!)
3. Add to GitHub Secrets:
   - `VERCEL_TOKEN` = your token
   - `VERCEL_ORG_ID` = your org/team ID
   - `VERCEL_PROJECT_ID` = your project ID

---

## Tagged Release Workflow

### Creating a Release

**When an epic is complete and tested:**

```bash
# Ensure you're on main and up to date
git checkout main
git pull origin main

# Create and push tag
git tag v1.0.0 -m "Release v1.0.0 - Epic 10 Complete"
git push origin v1.0.0

# GitHub Actions automatically:
# 1. Detects tag push
# 2. Runs deploy-vercel.yml workflow
# 3. Builds project
# 4. Deploys to Vercel PRODUCTION
# 5. Creates GitHub Release
```

**Version Numbering:**
- **v1.0.0** - Major release (Epic 10 complete - Authentication)
- **v1.1.0** - Minor release (Epic 11 complete - E-commerce)
- **v1.1.1** - Patch release (Bug fixes, small changes)

### Typical Release Cadence

**Epic Completion:**
```bash
# Epic 10 complete → v1.0.0
git tag v1.0.0 -m "Epic 10: Authentication System Complete"
git push origin v1.0.0

# Epic 11 complete → v1.1.0
git tag v1.1.0 -m "Epic 11: E-commerce Complete"
git push origin v1.1.0

# Epic 12 complete → v1.2.0
git tag v1.2.0 -m "Epic 12: User Dashboard Complete"
git push origin v1.2.0
```

**Hotfixes:**
```bash
# Critical bug fix
git tag v1.0.1 -m "Hotfix: Fix payment webhook error"
git push origin v1.0.1
```

---

## Deployment Environments

### Preview Deployments (Automatic)

**Triggered by:**
- Every push to `main` branch
- Pull requests to `main`

**URL Format:**
- Main: `https://rkpi5-marketing-git-main-yourorg.vercel.app`
- PR: `https://rkpi5-marketing-git-pr-123-yourorg.vercel.app`

**Purpose:**
- Test changes before creating tagged release
- Share with team for review
- Staging environment

### Production Deployment (Tagged Releases)

**Triggered by:**
- Git tags matching `v*.*.*` pattern

**URL:**
- `https://rkpi5-marketing.vercel.app` (your main Vercel URL)
- Or custom domain when configured

**Purpose:**
- Public-facing website
- Stable, tested releases only
- Version controlled

---

## Vercel CLI Commands

### Deploy from Local

```bash
# Install Vercel CLI
pnpm add -g vercel

# Login
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod

# Check deployment status
vercel list
```

### Environment Variables

```bash
# Add environment variable
vercel env add CLERK_SECRET_KEY

# Pull environment variables locally
vercel env pull .env.local
```

---

## Monitoring Deployments

### Vercel Dashboard

- **Deployments Tab:** See all deployments (preview + production)
- **Logs Tab:** View build and runtime logs
- **Analytics Tab:** Traffic and performance metrics
- **Settings Tab:** Environment variables, domains, etc.

### GitHub Actions

- **Actions Tab:** See workflow runs
- **Releases Tab:** See all tagged releases with deployment links

---

## Custom Domain Setup (Future)

When ready for custom domain (e.g., `rkpi5.com`):

1. **In Vercel Project Settings → Domains:**
   - Add domain: `rkpi5.com`
   - Add domain: `www.rkpi5.com`
2. **In Domain Registrar:**
   - Add A record: `76.76.19.19` (Vercel)
   - Add CNAME: `www` → `cname.vercel-dns.com`
3. **Verify in Vercel:**
   - Wait for DNS propagation (5-60 minutes)
   - Vercel automatically provisions SSL certificate
4. **Update Environment Variables:**
   - `NEXT_PUBLIC_SITE_URL=https://rkpi5.com`

---

## Webhook Configuration

### Clerk Webhooks

Update webhook URLs in Clerk Dashboard:

**Development:**
- Use ngrok for local testing
- URL: `https://your-ngrok-url.ngrok.io/api/webhooks/clerk`

**Preview (Main Branch):**
- Vercel preview URL
- URL: `https://rkpi5-marketing-git-main-yourorg.vercel.app/api/webhooks/clerk`

**Production (Tagged Releases):**
- Vercel production URL
- URL: `https://rkpi5-marketing.vercel.app/api/webhooks/clerk`
- Update after each domain change

---

## Troubleshooting

### Build Fails on Vercel

**Issue:** "Module not found" or dependency errors

**Fix:**
- Verify `package.json` has all dependencies
- Check that `pnpm-lock.yaml` is committed
- Ensure `.vercelignore` doesn't exclude required files

### Environment Variables Not Working

**Issue:** App can't connect to Clerk/Convex

**Fix:**
1. Verify variables are set in Vercel dashboard
2. Redeploy (env changes require redeploy)
3. Check variable names match exactly (case-sensitive)

### Convex Types Not Generated

**Issue:** TypeScript errors in CI/CD

**Fix:**
- Ensure `CONVEX_DEPLOY_KEY` is set in Vercel
- Check that `convex/schema.ts` is committed
- Verify build command includes Convex codegen

### Tagged Release Doesn't Deploy

**Issue:** Tag pushed but no deployment

**Fix:**
1. Verify `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` in GitHub Secrets
2. Check GitHub Actions workflow runs (Actions tab)
3. Verify tag matches `v*.*.*` pattern
4. Check Vercel dashboard for deployment logs

---

## Cost

**Vercel Pricing (as of 2024):**

| Plan | Price | Bandwidth | Build Time | Team Members |
|------|-------|-----------|------------|--------------|
| **Hobby** | Free | 100 GB/mo | 6000 min/mo | 1 |
| **Pro** | $20/mo | 1 TB/mo | Unlimited | Unlimited |

**Estimated Costs:**
- **During Development:** Free (Hobby plan sufficient)
- **Production (low traffic):** Free - $20/month
- **Production (high traffic):** Pro plan recommended

---

## Deployment Checklist

### Initial Setup
- [ ] Vercel project created and connected to GitHub
- [ ] All environment variables configured in Vercel
- [ ] GitHub secrets added (VERCEL_TOKEN, VERCEL_ORG_ID, VERCEL_PROJECT_ID)
- [ ] Initial deployment successful
- [ ] Preview URL tested

### Before First Tagged Release
- [ ] Epic complete and merged to main
- [ ] CI/CD passes on main
- [ ] Preview deployment tested thoroughly
- [ ] All acceptance criteria met
- [ ] Ready for public access

### Creating Tagged Release
- [ ] On main branch, up to date
- [ ] Create tag: `git tag v1.0.0 -m "Description"`
- [ ] Push tag: `git push origin v1.0.0`
- [ ] Monitor GitHub Actions workflow
- [ ] Verify production deployment in Vercel
- [ ] Test production URL
- [ ] GitHub Release created automatically

---

## Next Steps

1. ✅ Complete initial Vercel setup (Steps 1-3 above)
2. ✅ Test preview deployment (push to main)
3. ✅ Complete Epic 11 (E-commerce)
4. ✅ Create first tagged release when Epic 11 is stable
5. ⏭️ Configure custom domain (optional, later)

---

**Vercel Advantages for Next.js:**
- Built specifically for Next.js by Next.js creators
- Automatic edge caching and optimization
- Zero-config deployments
- Excellent developer experience
- Free SSL certificates
- Global CDN

---

_Created: November 19, 2025_  
_For: RKPi5 Marketing Website - Vercel Deployment_

