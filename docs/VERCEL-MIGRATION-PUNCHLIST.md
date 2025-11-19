# Vercel Migration & Clerk Billing Setup - Punchlist

**Date:** November 19, 2025  
**For:** Scott E. Townsend  
**Story:** 11.1 - Configure Clerk Billing with Stripe

---

## ✅ COMPLETED (By Dev Agent)

### Deployment Migration: Replit → Vercel

- [x] Deleted `.replit` configuration file
- [x] Deleted `.github/workflows/deploy-replit.yml`
- [x] Deleted `docs/technical/deployment-replit.md`
- [x] Created `vercel.json` configuration
- [x] Created `.github/workflows/deploy-vercel.yml` with tagged release workflow
- [x] Created `docs/technical/deployment-vercel.md` comprehensive guide
- [x] Updated `docs/technical/architecture-decisions.md` (all Replit → Vercel)
- [x] Updated `docs/technical/github-actions-setup.md`
- [x] Updated `docs/technical/README.md`
- [x] Updated `setup-project.sh` (URL defaults)
- [x] Updated `QUICKSTART.md`
- [x] Build verified: All changes compile successfully

### Clerk Billing Documentation

- [x] Updated `docs/setup-clerk-billing.md` with Stripe Test Mode clarification
- [x] Updated `docs/technical/epic-story-task-breakdown.md` Story 11.5 webhook endpoint
- [x] Clarified Clerk Plans vs Stripe Products architecture
- [x] Documented webhook architecture (Clerk webhook, not separate Stripe webhook)

---

## 📋 YOUR MANUAL TASKS (Scott)

### Phase 1: Vercel Setup (Do First - 15 minutes)

**1. Create Vercel Project**
- [ ] Go to https://vercel.com/dashboard
- [ ] Click "Add New Project"
- [ ] Import GitHub: `prmnews/rkpi5_website`
- [ ] Framework: Next.js (auto-detected)
- [ ] **WAIT - Don't deploy yet! Add environment variables first** ⚠️

**2. Add Environment Variables to Vercel** (CRITICAL FOR BUILD)
- [ ] Go to Project Settings → Environment Variables
- [ ] Add ALL variables from your `.env.local`:
  
  **Convex (REQUIRED FOR BUILD):**
  - `NEXT_PUBLIC_CONVEX_URL` = https://...convex.cloud
  - `CONVEX_DEPLOYMENT` = prod:... (your deployment name)
  - `CONVEX_DEPLOY_KEY` = ... (from Convex Settings → Deploy Keys)
  
  **Clerk:**
  - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
  - `CLERK_SECRET_KEY`
  - `CLERK_WEBHOOK_SECRET`
  - `NEXT_PUBLIC_CLERK_SIGN_IN_URL` = /sign-in
  - `NEXT_PUBLIC_CLERK_SIGN_UP_URL` = /sign-up
  - `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL` = /dashboard
  - `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL` = /dashboard
  
  **Email:**
  - `RESEND_API_KEY`
  
  **Site:**
  - `NEXT_PUBLIC_SITE_URL` = https://rkpi5-marketing.vercel.app
  - `NODE_ENV` = production

- [ ] Set scope: Both "Production" and "Preview"
- [ ] Click "Save"
- [ ] **IMPORTANT:** Redeploy after adding environment variables

**3. Get Vercel IDs for GitHub Actions**
- [ ] Copy Project ID (Project Settings → General)
- [ ] Copy Team/Org ID (Account Settings)
- [ ] Go to Account Settings → Tokens
- [ ] Create token: "GitHub Actions Deploy"
- [ ] Copy token (shows once!)

**4. Add GitHub Secrets**
- [ ] Go to GitHub: Settings → Secrets and variables → Actions
- [ ] Add: `VERCEL_TOKEN` = your Vercel token
- [ ] Add: `VERCEL_ORG_ID` = your org/team ID
- [ ] Add: `VERCEL_PROJECT_ID` = your project ID

**5. Update Clerk Webhook URL**
- [ ] Go to Clerk Dashboard → Webhooks
- [ ] Edit your existing webhook endpoint
- [ ] Update URL to Vercel preview URL: `https://rkpi5-marketing-git-main-[yourorg].vercel.app/api/webhooks/clerk`
- [ ] Save (will update to production URL after first tagged release)

---

### Phase 2: Clerk Billing Configuration (Do Second - 30 minutes)

**Follow:** `docs/setup-clerk-billing.md`

**1. Enable Clerk Billing**
- [ ] Clerk Dashboard → Configure → Billing
- [ ] Click "Enable Billing"
- [ ] Verify Billing section appears in sidebar

**2. Connect Stripe Account (Test Mode) ✅**
- [ ] In Billing section, select **"Stripe account"** option (NOT Clerk payment gateway)
- [ ] Click "Connect Stripe"
- [ ] Log into YOUR Stripe account (or create one)
- [ ] Authorize Clerk to access your Stripe
- [ ] **CRITICAL:** Select **"Test Mode"** ✅
- [ ] Verify shows "Connected" + "Test Mode" badge

**3. Create 4 Clerk Plans (Real Names, Test Mode)**
- [ ] Create Plan: "RKPi5 Hobbyist Tier" - $0.00 (free)
- [ ] Create Plan: "RKPi5 Bare Bones" - $99.00
- [ ] Create Plan: "RKPi5 Solo" - $299.00 (mark as popular if possible)
- [ ] Create Plan: "RKPi5 Field Kit" - $499.00
- [ ] Add metadata to each: `{"tier": "hobbyist"}`, etc.
- [ ] Copy all Clerk Plan IDs

**4. Subscribe to Billing Webhook Events**
- [ ] Clerk Dashboard → Configure → Webhooks
- [ ] Find your existing webhook endpoint
- [ ] Subscribe to billing events (billing.* types)
- [ ] No new endpoint or secret needed

**5. Document Plan IDs**
- [ ] Open `src/lib/product-config.ts`
- [ ] Replace placeholder `plan_PLACEHOLDER_XXX` with actual Clerk Plan IDs
- [ ] Update `docs/setup-clerk-billing.md` Plan ID Reference section

**6. Test Webhook**
- [ ] In Clerk Webhooks, send test billing event
- [ ] Check terminal logs: Should see "Unhandled event type: billing.*"
- [ ] This is normal - handlers added in Story 11.5

---

### Phase 3: Test Vercel Deployment (5 minutes)

**1. Test Preview Deployment**
- [ ] Push any commit to main (or wait for next merge)
- [ ] Go to GitHub Actions → See workflow run
- [ ] Go to Vercel Dashboard → See preview deployment
- [ ] Test preview URL in browser
- [ ] Verify auth pages work (sign-in/sign-up)

**2. Create First Tagged Release (When Ready)**
- [ ] Ensure main is stable and tested
- [ ] Run: `git tag v0.1.0 -m "Initial Vercel deployment with Epic 10"`
- [ ] Run: `git push origin v0.1.0`
- [ ] Watch GitHub Actions deploy-vercel.yml workflow
- [ ] Verify production deployment in Vercel
- [ ] Test production URL
- [ ] GitHub Release created automatically

---

## 🎯 OUTCOME

**After Completing This Punchlist:**

### Deployment
- ✅ Vercel project connected to GitHub
- ✅ Preview deployments on every push to main
- ✅ Production deployments on tagged releases
- ✅ Full CI/CD pipeline: GitHub Actions → Vercel
- ✅ Public URL for Stripe verification

### Clerk Billing
- ✅ Stripe account connected in Test Mode
- ✅ 4 real product plans with real names and prices
- ✅ Test checkout with Stripe test cards (4242 4242 4242 4242)
- ✅ Billing webhooks configured
- ✅ Ready for Stories 11.2-11.5 (checkout implementation)

### Next Steps After Punchlist
1. Mark Story 11.1 as done (`@sm.md *story-done`)
2. Commit changes (Vercel config + docs)
3. Push to remote
4. Create PR to merge Story 11.1 into Epic 11
5. After merge: Create Epic 11 stories 11.2-11.5

---

## 📚 REFERENCE DOCS

**Vercel Setup:**
- `docs/technical/deployment-vercel.md` - Complete Vercel guide

**Clerk Billing Setup:**
- `docs/setup-clerk-billing.md` - Complete Clerk Billing guide (updated for Test Mode)

**Tagged Release Workflow:**
- `.github/workflows/deploy-vercel.yml` - Deployment automation
- `docs/technical/deployment-vercel.md` - Tagged release strategy

---

## ⏱️ ESTIMATED TIME

- **Phase 1 (Vercel):** 15 minutes
- **Phase 2 (Clerk Billing):** 30 minutes  
- **Phase 3 (Testing):** 5 minutes
- **Total:** ~50 minutes

---

**Start with Phase 1, then move to Phase 2. Phase 3 happens after all configuration is complete.**

---

_Generated: November 19, 2025_  
_By: Amelia (Dev Agent)_

