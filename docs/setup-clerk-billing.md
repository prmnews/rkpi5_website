# Clerk Billing Setup Guide

**Story:** 11.1 - Configure Clerk Billing with Stripe  
**Date:** November 19, 2025  
**For:** Scott E. Townsend

---

## Overview

This guide walks through setting up Clerk Billing for the RKPi5 marketing website. 

**Important:** Clerk Billing is Clerk's own billing system that uses Stripe as the payment processor behind the scenes. You create **Clerk Plans** (not Stripe products directly), and Clerk manages the Stripe integration for you.

**Key Points:**
- ✅ Configure everything in **Clerk dashboard**
- ✅ Create **Clerk Billing Plans** (not Stripe products)
- ✅ Use **existing Clerk webhook** (from Story 10.2)
- ✅ Use **CLERK_WEBHOOK_SECRET** (already configured)
- ✅ Stripe handles payment processing (hidden from you)

---

## Prerequisites

Before starting, ensure you have:

- ✅ Clerk account with admin access to RKPi5 application
- ✅ Stripe account (create at https://stripe.com if needed)
- ✅ Local development environment running
- ✅ Epic 10 (Authentication) completed and merged

---

## Step 1: Enable Clerk Billing

**In Clerk Dashboard:**

1. Log into [Clerk Dashboard](https://dashboard.clerk.com)
2. Select your RKPi5 Marketing application
3. Navigate to **Configure** → **Billing** (or **Monetization**)
4. Click **"Enable Billing"** or **"Get Started"**
5. Follow the setup wizard
6. Verify "Billing" section appears in left sidebar

**Screenshot Location:** `docs/screenshots/clerk-billing-enabled.png` (optional)

---

## Step 2: Connect Your Stripe Account (Test Mode)

**IMPORTANT:** You need to connect YOUR Stripe account so Clerk can process payments through it.

**Why Connect Stripe:**
- Clerk needs a payment processor to charge credit cards
- Stripe processes the actual payment transactions
- Money goes to YOUR Stripe account → YOUR bank account
- Clerk manages plans/subscriptions, Stripe handles payment processing

**In Clerk Dashboard → Billing → Payment Gateway:**

1. Select **"Stripe account"** option (NOT "Clerk payment gateway")
2. Click **"Connect Stripe"** button
3. You'll be redirected to Stripe OAuth authorization flow
4. **If you don't have a Stripe account:**
   - Click "Create account" during OAuth flow
   - Complete Stripe account setup (business details, bank account)
   - Return to Clerk authorization
5. **If you have a Stripe account:**
   - Log in to your Stripe account
   - Authorize Clerk to access your Stripe account
6. **CRITICAL: Select "Test Mode"** ✅
   - This allows you to use REAL product names and prices
   - But payments use test credit cards (no real money charged)
   - Perfect for development and testing
7. Complete authorization
8. Verify connection status shows **"Connected"** in Clerk dashboard
9. Verify badge shows **"Test Mode"** (not Live/Production)

**What Test Mode Gives You:**
- ✅ Real product names: "RKPi5 Solo", "RKPi5 Field Kit"
- ✅ Real prices: $99, $299, $499
- ✅ Real checkout flow
- ✅ Test with Stripe test cards (4242 4242 4242 4242)
- ✅ No real money charged
- ✅ Can switch to Production Mode later (same plans, real charges)

**Connection Status:**
- ✅ Connected + Test Mode badge: Perfect for development
- ⚠️ Connected + Live Mode: Don't use this yet (real charges!)
- ❌ Not Connected: Payment processing won't work

**Connection Status:**
- ✅ Connected: Green checkmark, Stripe logo visible
- ❌ Not Connected: "Connect Stripe" button still visible

---

## Step 3: Create Clerk Billing Plans

Create 4 billing plans in **Clerk Dashboard → Billing** (NOT in Stripe dashboard directly):

### Plan 1: Hobbyist (FREE)

**Clerk Plan Details:**
- **Name:** RKPi5 Hobbyist Tier
- **Description:** DIY downloads and documentation - No physical device
- **Price:** $0.00 USD
- **Billing Type:** One-time payment (not recurring)
- **Plan Metadata (if available):** 
  ```json
  {
    "tier": "hobbyist",
    "includes_device": "false"
  }
  ```

**After Creation:**
- Copy **Clerk Plan ID:** `plan_xxxxxxxxxxxxx` (or similar format)
- Copy **Clerk Price ID:** (if separate)
- Document IDs in section below

**Note:** Clerk creates corresponding payment methods in Stripe automatically. You'll see transactions in Stripe but manage plans in Clerk.

---

### Plan 2: Bare Bones ($99)

**Clerk Plan Details:**
- **Name:** RKPi5 Bare Bones
- **Description:** Pre-configured Raspberry Pi 5 with 26GB biblical content
- **Price:** $99.00 USD
- **Billing Type:** One-time payment
- **Plan Metadata:**
  ```json
  {
    "tier": "bare-bones",
    "includes_device": "true"
  }
  ```

**After Creation:**
- Copy **Clerk Plan ID:** `plan_xxxxxxxxxxxxx`
- Document for code reference

---

### Plan 3: Solo ($299) - MOST POPULAR

**Clerk Plan Details:**
- **Name:** RKPi5 Solo
- **Description:** Complete system with accessories and extended content library
- **Price:** $299.00 USD
- **Billing Type:** One-time payment
- **Plan Metadata:**
  ```json
  {
    "tier": "solo",
    "includes_device": "true",
    "popular": "true"
  }
  ```

**After Creation:**
- Copy **Clerk Plan ID:** `plan_xxxxxxxxxxxxx`
- Mark as "Popular" or "Recommended" if Clerk supports this feature

---

### Plan 4: Field ($499)

**Clerk Plan Details:**
- **Name:** RKPi5 Field Kit
- **Description:** Complete field deployment kit with rugged case and extended battery
- **Price:** $499.00 USD
- **Billing Type:** One-time payment
- **Plan Metadata:**
  ```json
  {
    "tier": "field",
    "includes_device": "true",
    "rugged": "true"
  }
  ```

**After Creation:**
- Copy **Clerk Plan ID:** `plan_xxxxxxxxxxxxx`

---

## Step 4: Configure Clerk Billing Webhook Events

**Important:** Clerk Billing uses the **SAME webhook endpoint** you configured in Story 10.2 for user events!

**In Clerk Dashboard → Webhooks:**

1. Navigate to **Configure** → **Webhooks**
2. Find your existing webhook endpoint (from Story 10.2)
3. **Add Billing Events to Existing Endpoint:**
   - Clerk Billing sends events like `billing.*` through Clerk webhooks
   - Subscribe to billing-related events (exact event names TBD - will discover in dashboard)
   - Possible events: `billing.payment.succeeded`, `billing.subscription.created`, etc.
4. **No new endpoint needed** - extends existing `/api/webhooks/clerk/route.ts`
5. **No new secret needed** - uses existing `CLERK_WEBHOOK_SECRET`

**Webhook Architecture:**
```
Payment Event → Clerk Billing → Clerk Webhook → /api/webhooks/clerk
                                 (billing.* events)
```

**Webhook Status:**
- ✅ Endpoint already exists (Story 10.2: `/api/webhooks/clerk/route.ts`)
- ✅ Secret already configured (`CLERK_WEBHOOK_SECRET`)
- ⏸️ Billing event handlers will be added in Story 11.5

---

## Step 5: Test Configuration

### Test Webhook with Billing Events

1. In **Clerk Dashboard → Webhooks**, find your endpoint
2. Click **"Test"** or **"Send test event"**
3. Select a billing event type (e.g., `billing.payment.succeeded`)
4. Click **"Send test event"**
5. **Expected Result (Before Story 11.5):**
   - Webhook received at `/api/webhooks/clerk`
   - Console logs: `[Clerk Webhook] Unhandled event type: billing.payment.succeeded`
   - This is NORMAL - billing event handlers added in Story 11.5
   - Endpoint returns 200 OK (existing handler from Story 10.2)

### Verify Plans in Clerk Dashboard

1. In **Clerk Dashboard → Billing → Plans**
2. Verify all 4 plans visible:
   - ✅ RKPi5 Hobbyist Tier ($0)
   - ✅ RKPi5 Bare Bones ($99)
   - ✅ RKPi5 Solo ($299)
   - ✅ RKPi5 Field Kit ($499)
3. Click each plan → verify pricing and metadata
4. Verify all are "One-time payment" (not recurring subscription)

### Verify in Stripe Dashboard (Optional)

1. Open Stripe Dashboard (accessible from Clerk)
2. You'll see payment activity when purchases happen
3. But **plan management happens in Clerk**, not Stripe directly

---

## Clerk Plan ID Reference

**IMPORTANT:** Document your actual Clerk Plan IDs here after creation.

### Hobbyist (FREE)

```
Clerk Plan ID: plan_XXXXXXXXXXXXX
Tier:          hobbyist
Price:         $0.00
Type:          One-time
```

### Bare Bones ($99)

```
Clerk Plan ID: plan_XXXXXXXXXXXXX
Tier:          bare-bones
Price:         $99.00
Type:          One-time
```

### Solo ($299) - POPULAR

```
Clerk Plan ID: plan_XXXXXXXXXXXXX
Tier:          solo
Price:         $299.00
Type:          One-time
Popular:       true
```

### Field ($499)

```
Clerk Plan ID: plan_XXXXXXXXXXXXX
Tier:          field
Price:         $499.00
Type:          One-time
```

---

## Environment Variables

**No New Variables Required!**

Clerk Billing uses the **existing Clerk webhook** infrastructure from Story 10.2:

```bash
# Clerk Webhook Secret (already configured in Story 10.2)
CLERK_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxx
```

**Why No New Secrets:**
- ✅ Clerk Billing events come through Clerk webhooks (not direct Stripe webhooks)
- ✅ Uses same endpoint: `/api/webhooks/clerk/route.ts`
- ✅ Uses same secret: `CLERK_WEBHOOK_SECRET`
- ✅ Story 11.5 will add billing event handlers to existing webhook

**Already Configured:**
- `CLERK_WEBHOOK_SECRET` - Configured in Story 10.2
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - Configured in Story 10.1
- `CLERK_SECRET_KEY` - Configured in Story 10.1

---

## Troubleshooting

### Issue: "Cannot enable Clerk Billing"

**Possible Causes:**
- Clerk plan doesn't include Billing feature
- Need to upgrade Clerk account
- Billing not available in your region

**Solution:** Contact Clerk support or check plan features

---

### Issue: "Stripe connection fails"

**Possible Causes:**
- Stripe account not verified
- Wrong Stripe credentials
- OAuth flow interrupted

**Solution:**
- Verify Stripe account email
- Try connecting again
- Check Stripe account status

---

### Issue: "Webhook test fails immediately"

**Expected Behavior:**
- Webhook will fail until Story 11.5 implements the handler
- You should see the attempt in logs
- 404 error is normal at this stage

**When Fixed:**
- Story 11.5 extends `/api/webhooks/clerk/route.ts` with billing event handlers
- Webhook will then return 200 OK with "Event processed" message

---

## Success Checklist

Before marking story complete, verify:

- [ ] Clerk Billing enabled and visible in dashboard
- [ ] Stripe account connected (shows "Connected" + "Test Mode" badge) ✅
- [ ] All 4 Clerk plans created with real names and prices
- [ ] Plan prices correct ($0, $99, $299, $499)
- [ ] Plan metadata includes tier names (if supported)
- [ ] Billing webhook events subscribed in existing Clerk webhook
- [ ] No new webhook secrets needed (uses existing CLERK_WEBHOOK_SECRET)
- [ ] Clerk Plan IDs documented in src/lib/product-config.ts
- [ ] Test billing webhook sent (will show "Unhandled event" - OK until Story 11.5)

---

## Next Stories

After Story 11.1 is complete:

- **Story 11.2:** Build Checkout Page (uses Clerk Plan IDs from this story)
- **Story 11.3:** Handle Payment Success/Failure
- **Story 11.4:** Order Confirmation Email Template
- **Story 11.5:** Clerk Billing Webhook Handler (extends /api/webhooks/clerk for billing events)

---

**This guide will be updated with actual product IDs once configuration is complete.**

_Created by: Amelia (Dev Agent)_  
_Date: November 19, 2025_

