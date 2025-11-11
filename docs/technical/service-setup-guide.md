# Service Setup Guide - RKPi5 Marketing Website

**Story:** 1.3 - Configure Convex, Clerk, and Resend  
**Date:** November 11, 2025  
**For:** Scott E. Townsend

---

## Overview

This guide walks through setting up the three external services required for the RKPi5 marketing website:

1. **Convex** - Backend database and serverless functions
2. **Clerk** - Authentication and billing
3. **Resend** - Email service

**Estimated time:** 30-45 minutes

---

## Task 1.3.1: Initialize Convex

### Step 1: Create Convex Account

1. Go to https://dashboard.convex.dev
2. Sign up with GitHub or Google
3. Click "Create a new project"
4. Name: `rkpi5-marketing`

### Step 2: Initialize Convex in Your Project

**Terminal 1:**
```bash
cd /Users/set/Repo/rkpi5_marketing
pnpm dlx convex dev
```

**What happens:**
- Opens browser for authentication
- Creates deployment
- Generates `.env.local` with Convex credentials
- Starts watching for schema changes

**Expected output:**
```
✔ Deployment URL: https://your-deployment.convex.cloud
✔ Convex functions ready
Watching for changes...
```

### Step 3: Verify Schema

The schema is already created at `convex/schema.ts` with 4 tables:
- `waitlist` - Email signups
- `contacts` - Contact form submissions
- `orders` - E-commerce orders
- `users` - Synced from Clerk

**Schema should deploy automatically.**

### Step 4: Copy Convex Credentials

From the generated `.env.local`:
```bash
CONVEX_DEPLOYMENT=...
NEXT_PUBLIC_CONVEX_URL=https://...
```

✅ **Task 1.3.1 Complete**

---

## Task 1.3.2: Configure Clerk

### Step 1: Create Clerk Account

1. Go to https://dashboard.clerk.com
2. Sign up with GitHub or Google
3. Click "Create application"
4. Application name: `RKPi5 Marketing`
5. Choose sign-in options:
   - ✅ Email
   - ✅ Google (optional)
   - ✅ GitHub (optional)

### Step 2: Get API Keys

1. In Clerk Dashboard → API Keys
2. Copy **Publishable Key** (starts with `pk_test_`)
3. Copy **Secret Key** (starts with `sk_test_`)

### Step 3: Add to .env.local

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

### Step 4: Configure Clerk Middleware

Create `src/middleware.ts`:

```typescript
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/product",
    "/pricing",
    "/support(.*)",
    "/use-cases",
    "/about",
    "/api/webhooks(.*)"
  ],
  ignoredRoutes: [
    "/api/webhooks/clerk",
    "/api/webhooks/stripe"
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
```

### Step 5: Wrap Layout with ClerkProvider

Update `src/app/layout.tsx`:

```typescript
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RKPi5 - Biblical Resources When Networks Fail",
  description: "26GB+ Rapture Kit content delivered via offline WiFi portal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
```

### Step 6: Enable Clerk Billing (for Stripe Integration)

1. In Clerk Dashboard → Billing
2. Click "Enable Billing"
3. Connect new Stripe account (Clerk requires fresh Stripe connection)
4. Follow prompts to complete Stripe connection

**Note:** You'll configure actual Stripe products later in EPIC 11.

✅ **Task 1.3.2 Complete**

---

## Task 1.3.3: Configure Resend

### Step 1: Create Resend Account

1. Go to https://resend.com
2. Sign up with email
3. Verify email address

### Step 2: Get API Key

1. In Resend Dashboard → API Keys
2. Click "Create API Key"
3. Name: `RKPi5 Marketing`
4. Copy API key (starts with `re_`)

### Step 3: Add to .env.local

```bash
RESEND_API_KEY=re_...
```

### Step 4: Create Email Test Function

Create `convex/emails.ts`:

```typescript
"use node";
import { Resend } from "resend";
import { action } from "./_generated/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendWaitlistConfirmation = action({
  args: {
    email: v.string(),
    name: v.optional(v.string()),
  },
  handler: async (ctx, { email, name }) => {
    try {
      const { data, error } = await resend.emails.send({
        from: "RKPi5 <noreply@your-domain.com>", // Update with your domain
        to: [email],
        subject: "Welcome to the RKPi5 Waitlist!",
        html: `
          <h1>Thank you for joining our waitlist!</h1>
          <p>Hi ${name || "there"},</p>
          <p>We're excited to have you on the waitlist for RKPi5.</p>
          <p>We'll notify you as soon as we're ready to launch.</p>
          <p>Best regards,<br/>The RKPi5 Team</p>
        `,
      });

      if (error) {
        throw new Error(error.message);
      }

      return { success: true, id: data?.id };
    } catch (error) {
      console.error("[sendWaitlistConfirmation]", error);
      throw error;
    }
  },
});
```

**Note:** You'll need to verify your sending domain with Resend or use their testing domain for development.

✅ **Task 1.3.3 Complete**

---

## Task 1.3.4: Create Service Documentation

I'll create this now...

---

## Task 1.3.5: Test All Integrations

### Test Checklist:

**Convex:**
```bash
# In terminal with convex dev running:
# Visit: https://dashboard.convex.dev
# Verify: Tables visible (waitlist, contacts, orders, users)
```

**Clerk:**
```bash
# Start dev server
pnpm dev

# In browser: http://localhost:3000
# Try visiting a protected route (will redirect to sign-in)
# Verify: Clerk sign-in modal appears
```

**Resend:**
```bash
# Test email sending (will be tested in later stories)
# For now: Verify API key is in .env.local
```

---

## ✅ Quick Setup Checklist

- [ ] Convex account created
- [ ] Run `pnpm dlx convex dev` and authenticate
- [ ] Copy Convex URLs to `.env.local`
- [ ] Clerk account created
- [ ] Copy Clerk API keys to `.env.local`
- [ ] Create `src/middleware.ts` with Clerk config
- [ ] Update `src/app/layout.tsx` with ClerkProvider
- [ ] Enable Clerk Billing
- [ ] Resend account created
- [ ] Copy Resend API key to `.env.local`
- [ ] Verify all services in `.env.local`
- [ ] Test dev server starts: `pnpm dev`
- [ ] Commit changes (NOT .env.local, only .env.local.example)

---

**Ready to start?** Would you like me to:
1. Create the middleware.ts and update layout.tsx now?
2. Wait while you create the accounts and get API keys?

Let me know and I'll continue! 🚀

