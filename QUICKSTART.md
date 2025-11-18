# 🚀 RKPi5 Marketing Website - Quick Start Guide

**For:** Scott E. Townsend  
**Date:** November 11, 2025

---

## Prerequisites

Before you begin, ensure you have:

- ✅ Node.js 20.x installed
- ✅ pnpm installed (`npm install -g pnpm` or see https://pnpm.io/installation)
- ✅ Git installed
- ✅ GitHub CLI (optional, for easier workflows)
- ✅ Clerk account (for auth + billing)
- ✅ Convex account (for backend)
- ✅ Resend API key (Scott to provide)

---

## Step 1: Navigate to Project Directory

```bash
# You're already in the directory from committing!
cd /Users/set/Repo/rkpi5_marketing

# Or if cloning from scratch:
# git clone https://github.com/prmnews/rkpi5_website.git
# cd rkpi5_website
```

---

## Step 2: Run Setup Script

```bash
# Make script executable (if not already)
chmod +x setup-project.sh

# Run setup script
./setup-project.sh
```

**This script will:**
- ✅ Initialize Next.js 14 with TypeScript & Tailwind
- ✅ Install all dependencies (Convex, Clerk, Resend, Shadcn/ui)
- ✅ Set up Shadcn/ui with core components
- ✅ Initialize Convex
- ✅ Create project directory structure
- ✅ Generate Convex schema
- ✅ Create utility files
- ✅ Configure Tailwind theme
- ✅ Set up Git branches for all 14 EPICs
- ✅ Create environment variable template

**Time:** ~10-15 minutes

---

## Step 3: Configure Environment Variables

```bash
# Copy template
cp .env.local.example .env.local

# Edit with your credentials
nano .env.local  # or use your preferred editor
```

**Required environment variables:**

```bash
# Clerk (get from https://dashboard.clerk.com)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Convex (get from https://dashboard.convex.dev)
CONVEX_DEPLOYMENT=...
NEXT_PUBLIC_CONVEX_URL=https://...

# Resend (Scott will provide)
RESEND_API_KEY=re_...

# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000  # For development
```

### Getting Clerk API Keys

1. **Create Clerk Account** (if you haven't already):
   - Go to https://dashboard.clerk.com
   - Sign up for a free account

2. **Create a New Application:**
   - Click "Add application"
   - Name it "RKPi5 Marketing" (or your preferred name)
   - Select authentication methods (Email, Google, etc.)
   - Click "Create application"

3. **Get API Keys:**
   - Once in your application dashboard, navigate to **API Keys** in the left sidebar
   - Copy **Publishable Key** → paste as `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - Click "Show" next to **Secret Key** → paste as `CLERK_SECRET_KEY`
   - **Important:** Keep your secret key secure and never commit it to git

4. **Configure Sign-in/Sign-up URLs:**
   - The URLs are already configured in `.env.local.example`:
     - `NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in`
     - `NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up`
   - These point to pages that will be created in Story 10.3

### Getting Convex Credentials

1. Go to https://dashboard.convex.dev
2. Create a new project or select existing
3. Navigate to **Settings** → **URL & Deploy Key**
4. Copy the deployment URL and deployment name

### Troubleshooting Clerk Setup

**Issue: "Clerk publishable key not found"**
- Verify `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` is set in `.env.local`
- Ensure it starts with `pk_test_` or `pk_live_`
- Restart your dev server after adding environment variables

**Issue: "Middleware redirect loop"**
- Check that `/sign-in` and `/sign-up` are included in public routes
- Verify middleware config in `src/middleware.ts`

**Issue: "ClerkProvider not found"**
- Run `pnpm install` to ensure `@clerk/nextjs` is installed
- Check that version is 5.x or higher in `package.json`

---

## Step 4: Start Development

Open **two terminal windows:**

**Terminal 1 - Next.js:**
```bash
pnpm dev
```

**Terminal 2 - Convex:**
```bash
pnpm dlx convex dev
```

**Access:**
- 🌐 **Website:** http://localhost:3000
- 📊 **Convex Dashboard:** https://dashboard.convex.dev

---

## Step 5: Start First Epic

```bash
# Checkout EPIC 1: Foundation
git checkout epic/1-foundation

# Create first story branch
git checkout -b story/1.1-initialize-nextjs

# Start working on tasks...
```

**See:** `docs/technical/epic-story-task-breakdown.md` for complete task list

---

## Git Workflow Cheat Sheet

### Start New Story
```bash
git checkout epic/{number}-{name}
git checkout -b story/{epic}.{story}-{name}
```

### Commit Task
```bash
git add .
git commit -m "Task {epic}.{story}.{task}: Description"
```

### Test Before Merging
```bash
pnpm lint
pnpm build
pnpm test  # When tests exist
```

### Merge Story to Epic
```bash
git checkout epic/{number}-{name}
git merge --no-ff story/{epic}.{story}-{name}
git push origin epic/{number}-{name}
```

### Merge Epic to Main (When Complete)
```bash
git checkout main
git merge --no-ff epic/{number}-{name}
git push origin main
```

---

## Multi-Agent UI Prototyping

**For UI components only** (Hero, Header, Pricing Cards, etc.)

### 1. Create Prototype Branches
```bash
git checkout story/3.1-create-header

# Create 3 variants
git checkout -b prototype/header-v1
git checkout story/3.1-create-header
git checkout -b prototype/header-v2
git checkout story/3.1-create-header
git checkout -b prototype/header-v3
```

### 2. Run Parallel Agents in Cursor 2.0
- Open 3 Cursor instances
- Each works on different prototype branch
- Review results

### 3. Select Best & Merge
```bash
git checkout story/3.1-create-header
git merge prototype/header-v2  # Best variant

# Clean up unused
git branch -D prototype/header-v1
git branch -D prototype/header-v3
```

---

## CI/CD Pipeline

**Automated checks run on every push:**

### Story Branch (`story/**`)
- ✅ Branch name validation
- ✅ Lint & type check
- ✅ Build verification
- ✅ Merge conflict detection

### Epic Branch (`epic/**`)
- ✅ Full lint & type check
- ✅ Build application
- ✅ Run tests
- ✅ Security audit

### Main Branch
- ✅ All epic checks
- ✅ Lighthouse performance check
- ✅ Deploy to production (Replit)

**GitHub Actions workflows:**
- `.github/workflows/ci.yml` - Main CI/CD pipeline
- `.github/workflows/story-validation.yml` - Story branch validation

---

## Development Phases

### Phase 1: Foundation (Week 1)
```bash
git checkout epic/1-foundation  # Project init, design system, layout
git checkout epic/2-design-system
git checkout epic/14-backend     # Stories 14.1-14.2 (schema)
git checkout epic/3-layout
```

### Phase 2: Core Pages (Week 2-3)
```bash
git checkout epic/4-homepage
git checkout epic/5-product
git checkout epic/6-pricing
git checkout epic/10-auth       # Stories 10.1-10.3
```

### Phase 3: Content & E-commerce (Week 3-4)
```bash
git checkout epic/7-support
git checkout epic/8-use-cases
git checkout epic/9-about
git checkout epic/14-backend    # Stories 14.3-14.6
git checkout epic/11-ecommerce
```

### Phase 4: Dashboards (Week 4-5)
```bash
git checkout epic/12-dashboard
git checkout epic/13-admin
git checkout epic/10-auth       # Story 10.4 (RBAC)
```

---

## Useful Commands

### Development
```bash
pnpm dev             # Start dev server
pnpm build           # Build for production
pnpm start           # Start production server
pnpm lint            # Run ESLint
pnpm dlx convex dev  # Start Convex backend
```

### Git
```bash
git branch -a                    # List all branches
git log --oneline --graph --all  # View branch history
git status                       # Check current status
```

### Debugging
```bash
# Clear Next.js cache
rm -rf .next

# Clear node_modules and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install

# Reset Convex
rm -rf .convex
pnpm dlx convex dev --once
```

---

## Documentation Quick Links

- **[Architecture](./docs/technical/architecture-decisions.md)** - Complete technical architecture
- **[Epic Breakdown](./docs/technical/epic-story-task-breakdown.md)** - All epics, stories, tasks
- **[Git Workflow](./docs/technical/git-workflow.md)** - Detailed branching strategy
- **[Product Brief](./docs/product-brief.md)** - Product requirements
- **[Website Structure](./docs/website-structure.md)** - Original specifications

---

## Common Issues & Solutions

### Issue: "Cannot find module '@/components/ui/button'"
**Solution:** Run `pnpm dlx shadcn-ui@latest add button`

### Issue: "Convex deployment not found"
**Solution:** Run `pnpm dlx convex dev` and follow setup prompts

### Issue: "Clerk environment variables missing"
**Solution:** Add Clerk keys to `.env.local` from dashboard.clerk.com

### Issue: "Build fails with type errors"
**Solution:** Run `pnpm exec tsc --noEmit` to see all errors, fix them

### Issue: "Story branch won't merge to epic"
**Solution:** 
```bash
git fetch origin
git checkout story/X.Y-name
git merge origin/epic/X-name  # Pull latest epic changes
# Resolve conflicts, then merge to epic
```

---

## Success Checklist

Before merging to main, verify:

- [ ] All lint checks pass (`pnpm lint`)
- [ ] TypeScript compiles (`pnpm exec tsc --noEmit`)
- [ ] Build succeeds (`pnpm build`)
- [ ] Manual testing complete
- [ ] All story acceptance criteria met
- [ ] CI/CD pipeline passes
- [ ] No console errors in browser
- [ ] Mobile responsive verified
- [ ] Performance acceptable (Lighthouse >90)

---

## Next Steps

1. ✅ **Review documentation** in `docs/` folder
2. ⏭️ **Start EPIC 1** - Foundation & Project Init
3. ⏭️ **Complete Story 1.1** - Initialize Next.js (already done by setup script!)
4. ⏭️ **Complete Story 1.2** - Install Shadcn/ui (already done!)
5. ⏭️ **Complete Story 1.3** - Configure Convex, Clerk, Resend (env vars)

---

## Support & Help

**For technical questions:**
- Check documentation in `docs/technical/`
- Review architecture decisions
- See git workflow guide

**For architecture questions:**
- Reference `architecture-decisions.md`
- Check ADRs (Architecture Decision Records)

**For epic/story details:**
- Reference `epic-story-task-breakdown.md`
- Check acceptance criteria per story

---

## Project Status

- ✅ **Architecture:** Complete
- ✅ **Setup Script:** Ready
- ✅ **Git Branches:** Created (14 epics)
- ✅ **CI/CD Pipeline:** Configured
- ⏭️ **Development:** Ready to start EPIC 1

**Estimated time to v1:** 4-5 weeks

---

🚀 **You're ready to start development!**

**First command:**
```bash
git checkout epic/1-foundation
```

**Happy coding!** 🎉

---

_Quick Start Guide for RKPi5 Marketing Website_  
_Created by Winston (BMAD Architecture Agent)_  
_Date: November 11, 2025_

