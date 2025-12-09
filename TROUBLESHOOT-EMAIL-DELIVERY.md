# Email Delivery Troubleshooting Guide

**Status**: 🔍 DIAGNOSING  
**Issue**: Emails not being sent from production waitlist/contact forms  
**Data**: ✅ Forms saving to Convex successfully  
**Emails**: ❌ Not being delivered

---

## 🎯 Root Cause Identified

**The `RESEND_API_KEY` environment variable is not set in Convex's production environment.**

### Why This Matters

1. **Convex Actions** (`convex/emails.ts`) run in **Convex's Node.js environment**, not Vercel's environment
2. The email functions use `process.env.RESEND_API_KEY` which reads from **Convex's environment variables**
3. Vercel environment variables are separate from Convex environment variables
4. Without the API key, Resend cannot send emails (fails silently with graceful error handling)

---

## 🔍 Diagnostic Steps

### Step 1: Check Convex Environment Variables

Run this command to see what's currently set in your Convex **production** deployment:

```bash
# List all Convex production environment variables
npx convex env list --prod
```

**Expected Output:**
```
RESEND_API_KEY: (set)
```

**If `RESEND_API_KEY` is missing**, that's the problem!

---

### Step 2: Check Convex Logs for Errors

1. Go to [Convex Dashboard](https://dashboard.convex.dev)
2. Select your production deployment
3. Go to "Logs" tab
4. Filter for errors related to email sending
5. Look for messages like:
   - `[sendWaitlistConfirmation] Failed to send email`
   - `[sendAdminWaitlistNotification] Failed to send email`
   - `[sendContactNotification] Failed to send email`
   - Resend API errors

---

### Step 3: Verify Resend API Key

1. Go to [Resend Dashboard](https://resend.com/api-keys)
2. Verify you have a production API key
3. Make sure it's not expired or revoked
4. Copy the key (starts with `re_`)

---

## ✅ Fix: Set Resend API Key in Convex

### Production Environment

```bash
# Set the RESEND_API_KEY in Convex production
npx convex env set RESEND_API_KEY re_your_production_key_here --prod
```

**Important:**
- Replace `re_your_production_key_here` with your actual Resend API key
- The `--prod` flag targets your production deployment
- This sets the environment variable in Convex's backend, not Vercel

---

### Development Environment (Optional)

If you want to test emails locally:

```bash
# Set for local development
npx convex env set RESEND_API_KEY re_your_dev_key_here
```

Or add to `.env.local`:
```bash
RESEND_API_KEY=re_your_dev_key_here
```

---

## 🧪 Verification Steps

### After Setting the API Key:

1. **Test Email Sending Function**

```bash
# Test the email connection
npx convex run emails:testResendConnection --prod
```

Expected output:
```json
{
  "success": true,
  "emailId": "2f78cbe8-...",
  "message": "Test email sent successfully!"
}
```

2. **Check Your Inbox**

- Check `info@rkpi5.com` for test email
- Check `kmx-iAaW7gXy3JeDt@proton.me` for BCC copy
- Verify it's not in spam folder

3. **Test Production Waitlist Form**

- Go to your production website
- Submit waitlist form with a real email address
- Check for confirmation email within 1-2 minutes
- Verify admin notification arrives at `info@rkpi5.com`

4. **Test Production Contact Form**

- Go to `/contact` page
- Submit contact form
- Verify admin receives notification at `info@rkpi5.com`

---

## 🔍 Additional Diagnostics

### Check Convex Scheduled Jobs

1. Go to Convex Dashboard → Functions → Scheduled
2. Look for recent executions of:
   - `emails:sendWaitlistConfirmation`
   - `emails:sendAdminWaitlistNotification`
   - `emails:sendContactNotification`
3. Check if they completed successfully or failed
4. Review error messages if any

### Check Resend Dashboard

1. Go to [Resend Emails](https://resend.com/emails)
2. Look for recent sends
3. Check delivery status
4. Review any bounces or errors

---

## 🐛 Common Issues & Solutions

### Issue 1: "RESEND_API_KEY not found"

**Symptom:** Convex logs show errors about missing API key

**Solution:**
```bash
npx convex env set RESEND_API_KEY re_your_key_here --prod
```

---

### Issue 2: "Invalid API key"

**Symptom:** Resend returns 401/403 errors

**Solution:**
1. Verify key is correct in Resend dashboard
2. Generate new API key if needed
3. Update in Convex:
```bash
npx convex env set RESEND_API_KEY re_new_key_here --prod
```

---

### Issue 3: Emails go to spam

**Symptom:** Emails delivered but in spam folder

**Solution:**
1. Verify domain authentication in Resend
2. Check SPF/DKIM records are configured
3. Use verified sending domain (`mail.rkpi5.com`)

---

### Issue 4: Scheduled jobs not running

**Symptom:** Emails never trigger, no logs

**Solution:**
1. Check Convex dashboard for scheduled function executions
2. Verify mutations are calling `ctx.scheduler.runAfter(...)`
3. Check for deployment errors in Convex

---

## 📋 Environment Variables Checklist

### Convex Production (Required for emails)
- [ ] `RESEND_API_KEY` - Set via `npx convex env set --prod`

### Vercel Production (Not needed for emails, but for other features)
- [ ] `NEXT_PUBLIC_CONVEX_URL` - Convex deployment URL
- [ ] Other app-specific variables

### Local Development (.env.local)
- [ ] `RESEND_API_KEY` - For testing emails locally
- [ ] `CONVEX_DEPLOYMENT` - Your dev deployment name
- [ ] `NEXT_PUBLIC_CONVEX_URL` - Local Convex URL

---

## 🎯 Quick Fix Commands

```bash
# 1. Set Resend API key in Convex production
npx convex env set RESEND_API_KEY re_your_production_key_here --prod

# 2. Test email sending
npx convex run emails:testResendConnection --prod

# 3. Check Convex logs
npx convex logs --prod

# 4. List all environment variables
npx convex env list --prod
```

---

## 📊 Expected Email Flow

```
User submits form
       ↓
Convex mutation saves data ✅ (WORKING)
       ↓
Mutation schedules email action
       ↓
Email action runs in Convex's Node environment
       ↓
Reads RESEND_API_KEY from Convex env ❌ (MISSING)
       ↓
Calls Resend API to send email
       ↓
Email delivered to recipient
```

---

## 🔐 Security Notes

1. **Never commit API keys to git**
2. **Use separate keys for dev/prod**
3. **Rotate keys periodically**
4. **Monitor usage in Resend dashboard**
5. **Set up billing alerts** to avoid surprises

---

## 📚 Reference Documentation

- [Convex Environment Variables](https://docs.convex.dev/production/environment-variables)
- [Resend API Documentation](https://resend.com/docs)
- Email Test Harness: `utils/test_harness_resend.md`
- Email Configuration: `utils/EMAIL-CONFIG-VERIFIED.md`

---

## ✅ Success Criteria

After fixing, you should see:

- [x] `npx convex env list --prod` shows RESEND_API_KEY
- [x] Test email arrives at inbox
- [x] Production waitlist sends confirmation to user
- [x] Production waitlist sends notification to admin
- [x] Production contact form sends notification to admin
- [x] BCC copies arrive at monitoring inbox
- [x] No errors in Convex logs
- [x] Emails visible in Resend dashboard

---

**Next Step:** Run the fix command and test!

```bash
npx convex env set RESEND_API_KEY re_your_key_here --prod
```

