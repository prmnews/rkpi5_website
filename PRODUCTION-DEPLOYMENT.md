# Production Deployment Checklist - v1.0.0

**Deployment Date:** _____________  
**Deployed By:** Scott E. Townsend

---

## Pre-Deployment Checklist

### ☐ 1. Vercel Production Environment Variables

Go to: **Vercel Dashboard → rkpi5-marketing → Settings → Environment Variables**

Verify these are set for **Production** environment:

```bash
# Convex (PRODUCTION - NOT dev!)
NEXT_PUBLIC_CONVEX_URL=https://[your-prod].convex.cloud
CONVEX_DEPLOYMENT=prod:[your-deployment-name]
CONVEX_DEPLOY_KEY=[production-deploy-key]

# Resend (Production API key)
RESEND_API_KEY=re_[your-production-key]

# Site
NEXT_PUBLIC_SITE_URL=https://rkpi5.com
NEXT_PUBLIC_SHOW_WAITLIST=true
```

**How to get Convex Production credentials:**
1. Go to https://dashboard.convex.dev
2. Select your PRODUCTION deployment (not dev!)
3. Settings → URL & Deploy Key
4. Copy deployment URL and name
5. Generate a new Deploy Key for production

---

### ☐ 2. Clean Up Deprecated Convex Tables

**Problem:** Production has `users` and `orders` tables that need to be removed.

**Solution:**

```bash
# Connect to PRODUCTION deployment
npx convex env set CONVEX_DEPLOYMENT prod:your-deployment-name

# Run cleanup script
./cleanup-convex-tables.sh
```

**Manual alternative:**
```bash
# Delete users table
npx convex data delete users --all

# Delete orders table  
npx convex data delete orders --all
```

**Verify after cleanup:**
- Go to Convex Dashboard → Data
- Confirm only these tables exist:
  - ✅ `waitlist`
  - ✅ `contacts`

---

### ☐ 3. Verify Current Schema is Deployed

```bash
# Push current schema to production
npx convex deploy --prod
```

This ensures production Convex has the correct schema (waitlist + contacts only).

---

### ☐ 4. Pre-Flight Build Test

```bash
# Verify everything builds locally
pnpm lint && pnpm exec tsc --noEmit && pnpm build
```

Expected: All checks pass ✅

---

## Deployment Steps

### ☐ 5. Create Production Tag

```bash
# Create v1.0.0 tag
git tag -a v1.0.0 -m "Production release v1.0.0 - Beta launch"

# Push tag to trigger production deployment
git push origin v1.0.0
```

**What happens:**
1. GitHub Actions runs quality checks (lint, typecheck, build)
2. If checks pass, deploys to Vercel production
3. Creates GitHub Release automatically

---

### ☐ 6. Monitor Deployment

**GitHub Actions:**
- https://github.com/prmnews/rkpi5_website/actions
- Watch for "Deploy to Vercel" workflow
- Ensure all steps pass

**Vercel:**
- https://vercel.com/prmnews/rkpi5-website
- Watch for production deployment
- Check build logs

Expected duration: 3-5 minutes

---

## Post-Deployment Verification

### ☐ 7. Test Production Site

Visit: **https://rkpi5.com** (or your production URL)

**Critical paths to test:**
- [ ] Homepage loads
- [ ] Product page displays content
- [ ] Pricing page shows configurations
- [ ] Support docs work (/support)
- [ ] Waitlist form submission works
- [ ] Contact form submission works
- [ ] Email notifications arrive (check admin email)

---

### ☐ 8. Verify Convex Data

**Convex Dashboard → Data:**
- [ ] Waitlist entries are being saved
- [ ] Contact submissions are being saved
- [ ] No errors in function logs

---

### ☐ 9. Verify Email Delivery

**Test waitlist signup:**
1. Join waitlist with test email
2. Verify confirmation email arrives
3. Check admin notification email arrives at info@rapturekit.com

**Resend Dashboard:**
- https://resend.com/emails
- Check delivery status
- Verify no bounces

---

### ☐ 10. Check Vercel Analytics

**Vercel Dashboard → Analytics:**
- [ ] Pageviews tracking
- [ ] No 404 errors
- [ ] Fast load times

---

## Rollback Plan (If Needed)

If something goes wrong:

```bash
# Option 1: Delete the tag and Vercel will revert
git tag -d v1.0.0
git push origin :refs/tags/v1.0.0

# Option 2: Rollback in Vercel Dashboard
# Go to Deployments → Find previous deployment → Promote to Production
```

---

## Success Criteria

- [ ] Production URL is live and accessible
- [ ] All pages load without errors
- [ ] Waitlist and contact forms work
- [ ] Emails are being sent and received
- [ ] Convex has only waitlist and contacts tables
- [ ] No console errors in browser
- [ ] Lighthouse score > 90

---

## Notes

**Production URL:** _______________________  
**Convex Deployment:** _______________________  
**Issues Encountered:** _______________________  
**Resolution:** _______________________

---

## Post-Launch Monitoring

**First 24 hours:**
- [ ] Monitor error logs (Vercel + Convex)
- [ ] Check email delivery rates (Resend)
- [ ] Review form submissions
- [ ] Monitor site performance

**First week:**
- [ ] Review analytics
- [ ] Collect beta tester feedback
- [ ] Address any bugs
- [ ] Document learnings

---

**Deployment Status:** ⏳ Pending  
**Deployed At:** _____________  
**Deployed By:** Scott E. Townsend

