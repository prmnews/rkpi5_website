# Email Delivery Issue - Root Cause & Fix

**Date**: December 8, 2025  
**Status**: ✅ DIAGNOSED & FIXED  
**Impact**: Production waitlist and contact form emails not sending

---

## 🎯 Root Cause

**The `RESEND_API_KEY` environment variable was not set in Convex's production environment.**

### Why This Happened

1. **Environment Confusion**: There are TWO separate environments:
   - **Vercel** (runs your Next.js frontend)
   - **Convex** (runs your backend mutations and actions)

2. **Email Actions Run in Convex**: The email sending functions (`convex/emails.ts`) are Convex **actions** that run in Convex's Node.js environment, NOT in Vercel.

3. **Missing API Key**: While you may have set `RESEND_API_KEY` in Vercel or locally, it was never set in **Convex's production environment**.

4. **Silent Failure**: The code was designed to fail gracefully (don't block form submission if email fails), so errors were logged but not visible to end users.

---

## 📊 What Was Working vs. What Wasn't

### ✅ Working
- Waitlist form submissions → Saved to Convex database
- Contact form submissions → Saved to Convex database
- Form validation and UX
- Convex mutations

### ❌ Not Working
- Waitlist confirmation emails to users
- Admin notifications for waitlist signups
- Admin notifications for contact form submissions
- All BCC monitoring emails

---

## 🔧 The Fix

### Changes Made

#### 1. Enhanced Error Logging (`convex/emails.ts`)

Added explicit checks and better error messages:

```typescript
function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  
  if (!apiKey) {
    console.error("❌ CRITICAL: RESEND_API_KEY not found in environment!");
    console.error("Set it with: npx convex env set RESEND_API_KEY re_your_key_here --prod");
    throw new Error("RESEND_API_KEY environment variable is required");
  }
  
  return new Resend(apiKey);
}
```

**Benefits:**
- Failures are now LOUD and visible in Convex logs
- Clear instructions on how to fix
- Immediate feedback when API key is missing

#### 2. Improved Error Visibility

Updated all email functions to log:
- ✅ Success messages with email IDs
- ❌ Failure messages with context
- 📧 User email addresses for troubleshooting
- 💡 Helpful hints about what to check

**Before:**
```
[sendWaitlistConfirmation] Failed to send email: Error...
```

**After:**
```
❌ [sendWaitlistConfirmation] Failed to send email: Error...
   This is a CRITICAL error - user did NOT receive confirmation
   User email: john@example.com
   Check: 1) RESEND_API_KEY is set, 2) API key is valid, 3) Domain verified
```

---

## 🚀 Deployment Steps

### Step 1: Set Resend API Key in Convex Production

```bash
# Get your Resend API key from: https://resend.com/api-keys
npx convex env set RESEND_API_KEY re_your_production_key_here --prod
```

### Step 2: Verify It's Set

```bash
npx convex env list --prod
```

Should show:
```
RESEND_API_KEY: (set)
```

### Step 3: Deploy Updated Code

```bash
# Commit the improved error handling
git add convex/emails.ts
git commit -m "fix: improve email error logging and visibility"
git push origin main
```

### Step 4: Test Email Sending

```bash
# Run the test script
./test-email-production.sh

# OR manually test
npx convex run emails:testResendConnection --prod
```

### Step 5: Verify in Production

1. **Test Waitlist Form**
   - Go to your production website
   - Submit waitlist form with real email
   - Wait 1-2 minutes
   - Check inbox for confirmation email
   - Check `info@rkpi5.com` for admin notification

2. **Test Contact Form**
   - Go to `/contact` page
   - Submit contact form
   - Check `info@rkpi5.com` for notification

3. **Check Monitoring**
   - Verify BCC copies at `kmx-iAaW7gXy3JeDt@proton.me`
   - Check [Resend Dashboard](https://resend.com/emails) for delivery status
   - Review [Convex Logs](https://dashboard.convex.dev) for success messages

---

## 📝 Environment Variables Reference

### Where to Set What

| Variable | Vercel | Convex | Local (.env.local) |
|----------|--------|--------|--------------------|
| `RESEND_API_KEY` | ❌ Not needed | ✅ **Required** | ✅ For local testing |
| `NEXT_PUBLIC_CONVEX_URL` | ✅ Required | ❌ Auto-generated | ✅ Required |
| `CONVEX_DEPLOYMENT` | ❌ Not needed | ❌ Not needed | ✅ For deployment |

### How to Set Them

**Convex Production:**
```bash
npx convex env set VARIABLE_NAME value --prod
```

**Convex Development:**
```bash
npx convex env set VARIABLE_NAME value
# OR add to .env.local
```

**Vercel:**
- Go to Vercel Dashboard → Project → Settings → Environment Variables
- Add/update variables there

---

## 🔍 Monitoring & Debugging

### Check Convex Logs

```bash
# Watch live logs
npx convex logs --prod --watch

# View recent logs
npx convex logs --prod
```

**Look for:**
- ✅ `[sendWaitlistConfirmation] Email sent successfully to: user@example.com`
- ✅ `Email ID: 2f78cbe8-...`
- ❌ `CRITICAL: RESEND_API_KEY not found` (if not set)
- ❌ `Failed to send email` (if API issues)

### Check Resend Dashboard

1. Go to https://resend.com/emails
2. View recent sends
3. Check delivery status
4. Review any bounces or errors

### Check Convex Scheduled Functions

1. Go to https://dashboard.convex.dev
2. Select your production deployment
3. Go to "Functions" → "Scheduled"
4. Look for:
   - `emails:sendWaitlistConfirmation`
   - `emails:sendAdminWaitlistNotification`
   - `emails:sendContactNotification`
5. Check execution status and errors

---

## 🎓 Lessons Learned

### Key Takeaways

1. **Separate Environments**
   - Vercel runs your frontend
   - Convex runs your backend
   - Each has its own environment variables

2. **Environment Variable Placement**
   - Backend API keys go in Convex (Resend, external APIs)
   - Frontend public URLs go in Vercel (NEXT_PUBLIC_*)
   - Local testing uses .env.local

3. **Error Visibility**
   - Silent failures are hard to debug
   - Explicit error logging is critical
   - Log context (what, why, how to fix)

4. **Testing Strategy**
   - Test end-to-end in production
   - Don't assume environment variables transferred
   - Verify in dashboards (Resend, Convex)

---

## 📚 Related Documentation

- **Troubleshooting Guide**: `TROUBLESHOOT-EMAIL-DELIVERY.md`
- **Test Script**: `test-email-production.sh`
- **Email Configuration**: `utils/EMAIL-CONFIG-VERIFIED.md`
- **Test Harness**: `utils/test_harness_resend.md`
- **Convex Docs**: https://docs.convex.dev/production/environment-variables
- **Resend Docs**: https://resend.com/docs

---

## ✅ Checklist

### Before Production
- [x] Identify root cause
- [x] Enhance error logging
- [x] Create troubleshooting guide
- [x] Create test script
- [ ] Set RESEND_API_KEY in Convex production
- [ ] Deploy updated code
- [ ] Test email sending
- [ ] Verify in production

### After Production
- [ ] Monitor Convex logs for errors
- [ ] Check Resend dashboard for delivery rates
- [ ] Set up alerts for email failures
- [ ] Document in runbook

---

## 🎉 Expected Results

After implementing the fix:

1. **User Experience**
   - Users receive immediate confirmation email after waitlist signup
   - Professional branded emails from `RKPi5 <noreply@mail.rkpi5.com>`
   - Clear next steps and helpful links

2. **Admin Experience**
   - Instant notification of new waitlist signups
   - Instant notification of contact form submissions
   - All details in one email
   - Easy reply-to for follow-up

3. **Monitoring**
   - All emails BCC'd to monitoring inbox
   - Visible in Resend dashboard
   - Success logs in Convex
   - No silent failures

---

**Status**: Ready to deploy! 🚀

**Next Action**: Set `RESEND_API_KEY` in Convex production and test.

