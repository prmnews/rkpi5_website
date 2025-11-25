# Refactor Plan: Remove E-commerce, Reframe as DIY Build Configurations

## Overview
Remove e-commerce functionality (users, authentication, checkout) and convert to waitlist-only marketing site. Reframe pricing page as "Build Your Own - Estimated Cost" with 4 DIY configuration tiers. Add SHOW_WAITLIST feature flag for future expiration.

---

## 1. DELETE: Authentication Infrastructure

**Files to delete:**
- `src/app/(public)/sign-in/[[...sign-in]]/page.tsx` - Sign in page
- `src/app/(public)/sign-up/[[...sign-up]]/page.tsx` - Sign up page  
- `src/app/api/webhooks/clerk/route.ts` - Clerk webhook handler
- `src/lib/auth-utils.ts` - Auth utility functions (isAdmin, getUserRole)
- `src/components/guards/admin-guard.tsx` - Admin guard component
- `src/components/guards/index.ts` - Guards barrel export
- `src/middleware.ts` - Clerk authentication middleware

**Result:** Removes entire Clerk authentication flow

---

## 2. DELETE: Checkout Infrastructure

**Files/directories to delete:**
- `src/app/(auth)/checkout/page.tsx` - Checkout page
- `src/components/checkout/` - Entire directory (OrderSummary, PaymentSection, ProductSelector, ShippingAddressForm, index.ts)
- `src/lib/product-config.ts` - Product tier definitions with Clerk plan IDs (will be replaced with new build config)

**Result:** Removes Story 11.2 partial implementation

---

## 3. UPDATE: Convex Schema - Remove User/Order Tables

**File:** `convex/schema.ts`

Remove:
- `users` table definition (lines 58-72)
- `orders` table definition (lines 34-56)

Keep:
- `waitlist` table
- `contacts` table

**File:** `convex/users.ts`
- Delete entire file (syncUserFromClerk, deleteUser mutations)

---

## 4. CREATE: Feature Flag for Waitlist

**File:** `src/lib/constants.ts`

Add feature flag:

```typescript
export const SHOW_WAITLIST = process.env.NEXT_PUBLIC_SHOW_WAITLIST === 'true';
```

**File:** `.env.local` (create if doesn't exist)

```bash
NEXT_PUBLIC_SHOW_WAITLIST=true
```

**Usage:** Wrap all "Join Waitlist" CTAs with conditional rendering:
```tsx
{SHOW_WAITLIST && <button>Join Waitlist</button>}
```

**Future:** Set to `false` to hide all waitlist CTAs without code deploy

---

## 5. UPDATE: Navigation Components - Remove Auth, Add Feature-Flagged Waitlist

**File:** `src/components/layout/header.tsx`

Remove:
- Line 6: `import { useAuth, UserButton } from "@clerk/nextjs"`
- Line 23: `const { isSignedIn } = useAuth()`
- Lines 100-153: Entire auth CTA section (Sign In/Sign Up/UserButton)

Keep:
- Lines 11-16: Keep "Pricing" in navigation array (now renamed to "Configurations")

Add:
- Import `SHOW_WAITLIST` from constants
- Simple "Join Waitlist" button wrapped in `{SHOW_WAITLIST && ...}`

**File:** `src/components/layout/mobile-menu.tsx`

Remove:
- Line 7: `import { useAuth, UserButton } from "@clerk/nextjs"`
- Line 24: `const { isSignedIn } = useAuth()`
- Lines 134-193: Entire auth footer section

Keep:
- Lines 10-16: Keep "Pricing" in navigation array (rename to "Configurations")

Add:
- Import `SHOW_WAITLIST` from constants
- "Join Waitlist" button in footer wrapped in `{SHOW_WAITLIST && ...}`

**File:** `src/components/layout/footer.tsx`

Update:
- Line 6: Change `{ name: "Pricing", href: "/pricing" }` to `{ name: "Configurations", href: "/pricing" }`

---

## 6. UPDATE: Pricing Page - Reframe as "Build Configurations & Estimates"

### Strategy: "Build Your Own - Estimated Cost" (Option 1)

**File:** `src/app/(public)/pricing/page.tsx`

### Page-Level Changes:

**Hero Section Updates:**
- Title: "Build Configurations & Estimates" (was: "Pricing")
- Subtitle: "Approximate hardware costs if you build your own RKPi5. All build scripts are FREE."
- Add prominent disclaimer:
  ```
  ℹ️ IMPORTANT: These are estimated DIY component costs. All build scripts (.sh) 
  are FREE to download. RKPi5 units are not currently for sale. 
  {SHOW_WAITLIST && "Join waitlist to be notified when pre-built units become available."}
  ```

### Pricing Card Data Updates:

**Hobbyist:**
- Software: "FREE"
- Hardware: "FREE" (assumes user has Pi5)
- Note: "Requires your Raspberry Pi 5 (8GB+)"
- BOM Variant: A (basic Pi config)
- Build Difficulty: "Intermediate"
- Setup Time: "45 minutes"
- CTA: {SHOW_WAITLIST ? "Join Waitlist for Pre-Built" : "Download Build Scripts"}

**Bare Bones:**
- Software: "FREE"
- Hardware Range: "~$80-$120"
- Components: 2× 128GB microSD cards
- BOM Variant: A (basic Pi config)
- Build Difficulty: "Beginner"
- Setup Time: "30 minutes"
- CTA: {SHOW_WAITLIST ? "Join Waitlist for Pre-Built" : "View Detailed BOM"}

**Solo:**
- Software: "FREE"
- Hardware Range: "~$280-$320"
- Components: Pi5 8GB + 2× microSD + battery pack + case
- BOM Variant: A (basic Pi config)
- Build Difficulty: "Beginner"
- Setup Time: "2-3 hours"
- CTA: {SHOW_WAITLIST ? "Join Waitlist for Pre-Built" : "View Detailed BOM"}

**Field:**
- Software: "FREE"
- Hardware Range: "~$450-$550"
- Components: Pi5 8GB + 2× microSD + display + speakers + solar panel + field case
- BOM Variant: B (field config with different case + solar)
- Build Difficulty: "Intermediate"
- Setup Time: "3-4 hours"
- CTA: {SHOW_WAITLIST ? "Join Waitlist for Pre-Built" : "View Detailed BOM"}

### Keep Unchanged:
- FAQ section (lines 106-114) - update questions to address DIY vs pre-built
- Enterprise/Church contact section (lines 117-119)

---

**File:** `src/components/pricing/pricing-card.tsx`

### Add New Props:

```typescript
interface PricingCardProps {
  title: string;
  softwareCost: "FREE"; // Always FREE
  hardwareCostRange?: { min: number, max: number } | "FREE";
  description: string;
  features: string[];
  bomVariant: "A" | "B"; // Which build guide
  buildDifficulty?: "Beginner" | "Intermediate" | "Advanced";
  setupTime?: string;
  ctaLabel: string;
  ctaHref: string;
  badge?: string;
  highlighted?: boolean;
}
```

### Add Expandable "View Detailed BOM" Section:

```tsx
<details className="mt-4 border-t pt-4">
  <summary className="cursor-pointer font-semibold text-sm text-primary-600 hover:text-primary-700">
    View Detailed BOM & Build Guide
  </summary>
  <div className="mt-3 space-y-2 text-sm text-gray-700">
    <h4 className="font-semibold">Required Components:</h4>
    <ul className="space-y-1 ml-4">
      {components.map(c => (
        <li key={c.name}>
          {c.name} - {c.estimatedCost} {c.notes && `(${c.notes})`}
        </li>
      ))}
    </ul>
    <div className="mt-3 pt-3 border-t">
      <a href={buildGuideUrl} className="text-primary-600 hover:underline">
        → Download Build Scripts (.sh) - FREE
      </a>
    </div>
  </div>
</details>
```

### Price Display Update:

```tsx
<div className="mb-6">
  <div className="text-xs uppercase text-gray-500 mb-1">Software</div>
  <div className="text-lg font-bold text-green-600 mb-3">FREE</div>
  
  <div className="text-xs uppercase text-gray-500 mb-1">Hardware Components</div>
  <div className="flex items-baseline gap-2">
    {hardwareCostRange === "FREE" ? (
      <span className="text-4xl font-bold text-gray-900">FREE</span>
    ) : (
      <>
        <span className="text-4xl font-bold text-gray-900">
          ${hardwareCostRange.min}-${hardwareCostRange.max}
        </span>
        <span className="text-gray-500 text-sm">estimated</span>
      </>
    )}
  </div>
  
  {buildDifficulty && (
    <div className="mt-2 text-xs text-gray-600">
      Difficulty: <span className="font-medium">{buildDifficulty}</span> • 
      Setup: <span className="font-medium">{setupTime}</span>
    </div>
  )}
</div>
```

---

**File:** `src/lib/build-config.ts` (NEW - replaces product-config.ts)

Create new configuration structure:

```typescript
export type BuildTier = "hobbyist" | "bare-bones" | "solo" | "field";
export type BOMVariant = "A" | "B";
export type BuildDifficulty = "Beginner" | "Intermediate" | "Advanced";

export interface ComponentItem {
  name: string;
  estimatedCost: string;
  required: boolean;
  notes?: string;
  purchaseLinks?: Array<{ vendor: string; url: string }>;
}

export interface BuildConfig {
  tier: BuildTier;
  name: string;
  description: string;
  softwareCost: "FREE";
  hardwareCostRange: { min: number; max: number } | "FREE";
  bomVariant: BOMVariant;
  buildDifficulty: BuildDifficulty;
  setupTime: string;
  components: ComponentItem[];
  features: string[];
  buildGuideUrl: string;
  popular?: boolean;
}

export const BUILD_CONFIGS: Record<BuildTier, BuildConfig> = {
  hobbyist: {
    tier: "hobbyist",
    name: "Hobbyist",
    description: "DIY setup for technical users",
    softwareCost: "FREE",
    hardwareCostRange: "FREE",
    bomVariant: "A",
    buildDifficulty: "Intermediate",
    setupTime: "45 minutes",
    components: [
      {
        name: "Build scripts & documentation",
        estimatedCost: "FREE",
        required: true,
      },
      {
        name: "Raspberry Pi 5 (8GB+)",
        estimatedCost: "You provide",
        required: true,
        notes: "Must already own"
      }
    ],
    features: [
      "Install scripts + documentation",
      "Requires Raspberry Pi 5 (8GB+)",
      "Self-guided ~45-minute setup",
      "Complete Rapture Kit content",
      "Create your own golden master",
      "Personal use only (no resale)",
    ],
    buildGuideUrl: "/downloads/hobbyist-setup.sh",
  },
  
  "bare-bones": {
    tier: "bare-bones",
    name: "Bare Bones",
    description: "Pre-configured microSD kit",
    softwareCost: "FREE",
    hardwareCostRange: { min: 80, max: 120 },
    bomVariant: "A",
    buildDifficulty: "Beginner",
    setupTime: "30 minutes",
    components: [
      {
        name: "2× 128GB microSD (SanDisk Extreme)",
        estimatedCost: "$40-$60 each",
        required: true,
        purchaseLinks: [
          { vendor: "Amazon", url: "https://amazon.com/..." }
        ]
      },
      {
        name: "Build scripts",
        estimatedCost: "FREE",
        required: true,
      },
      {
        name: "Raspberry Pi 5 (8GB+)",
        estimatedCost: "You provide",
        required: true,
      }
    ],
    features: [
      "2× 128GB microSD (pre-configured)",
      "Rapture Kit content included",
      "Use with your Pi 5 (8GB+)",
      "Insert card, boot in < 5 minutes",
      "Quick start guide (PDF)",
      "Email support",
    ],
    buildGuideUrl: "/downloads/bare-bones-setup.sh",
  },
  
  solo: {
    tier: "solo",
    name: "Solo",
    description: "Complete portable starter kit",
    softwareCost: "FREE",
    hardwareCostRange: { min: 280, max: 320 },
    bomVariant: "A",
    buildDifficulty: "Beginner",
    setupTime: "2-3 hours",
    components: [
      {
        name: "Raspberry Pi 5 (8GB)",
        estimatedCost: "$80-$100",
        required: true,
      },
      {
        name: "2× 128GB microSD",
        estimatedCost: "$80-$120",
        required: true,
      },
      {
        name: "25,000 mAh battery pack",
        estimatedCost: "$40-$50",
        required: true,
      },
      {
        name: "Protective carry case",
        estimatedCost: "$30-$40",
        required: true,
      },
      {
        name: "USB-C cables & power adapter",
        estimatedCost: "$20-$30",
        required: true,
      },
      {
        name: "Build scripts",
        estimatedCost: "FREE",
        required: true,
      }
    ],
    features: [
      "Raspberry Pi 5 (8GB) included",
      "2× 128GB microSD (pre-configured)",
      "25,000 mAh battery pack",
      "Protective carry case",
      "Captive WiFi portal (< 5 min setup)",
      "Quick start guide",
      "Email support",
    ],
    buildGuideUrl: "/downloads/solo-setup.sh",
    popular: true,
  },
  
  field: {
    tier: "field",
    name: "Field",
    description: "Self-contained unit for the field",
    softwareCost: "FREE",
    hardwareCostRange: { min: 450, max: 550 },
    bomVariant: "B",
    buildDifficulty: "Intermediate",
    setupTime: "3-4 hours",
    components: [
      {
        name: "Raspberry Pi 5 (8GB)",
        estimatedCost: "$80-$100",
        required: true,
      },
      {
        name: "2× 128GB microSD",
        estimatedCost: "$80-$120",
        required: true,
      },
      {
        name: "5\" touchscreen display",
        estimatedCost: "$60-$80",
        required: true,
      },
      {
        name: "Integrated speakers",
        estimatedCost: "$20-$30",
        required: true,
      },
      {
        name: "25,000 mAh battery pack",
        estimatedCost: "$40-$50",
        required: true,
      },
      {
        name: "50W foldable solar panel",
        estimatedCost: "$80-$100",
        required: true,
      },
      {
        name: "Field-ready rugged case",
        estimatedCost: "$60-$80",
        required: true,
        notes: "Different design than Solo"
      },
      {
        name: "Build scripts",
        estimatedCost: "FREE",
        required: true,
      }
    ],
    features: [
      "Raspberry Pi 5 (8GB) included",
      "2× 128GB microSD (pre-configured)",
      "Integrated 5\" display + speakers",
      "25,000 mAh battery pack",
      "50W foldable solar panel",
      "Protective carry case",
      "Captive WiFi portal (< 5 min setup)",
      "Priority email support",
    ],
    buildGuideUrl: "/downloads/field-setup.sh",
  },
};
```

---

## 7. UPDATE: Homepage - Remove Pricing Preview

**File:** `src/components/homepage/pricing-preview.tsx`

**Decision:** Delete entire file (too purchase-focused for new strategy)

**File:** `src/app/page.tsx`

Remove:
- Line 5: `PricingPreview` import
- Line 15: `<PricingPreview />` component usage

Optional: Replace with simple CTA section:
```tsx
<section className="py-section-lg bg-gray-50">
  <Container className="text-center">
    <h2 className="text-3xl font-bold mb-4">Ready to Build Your Own?</h2>
    <p className="text-lg text-gray-600 mb-8">
      Choose from 4 configurations with free build scripts
    </p>
    <div className="flex gap-4 justify-center">
      <Link href="/pricing" className="btn-primary">
        View Build Configurations
      </Link>
      {SHOW_WAITLIST && (
        <Link href="/waitlist" className="btn-secondary">
          Join Waitlist for Pre-Built
        </Link>
      )}
    </div>
  </Container>
</section>
```

---

## 8. KEEP: Product Page Unchanged

**File:** `src/app/(public)/product/page.tsx`

**NO CHANGES** - User wants to keep product page as-is

---

## 9. UPDATE: Root Layout - Remove Clerk

**File:** `src/app/layout.tsx`

Remove:
- Line 1: `import { ClerkProvider } from '@clerk/nextjs'`
- Lines 30-32: clerkPublishableKey logic
- Lines 34-42: LayoutContent variable
- Lines 44-56: Conditional ClerkProvider wrapper
- Lines 58-67: Fallback without Clerk

Simplify to single return:

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConvexProvider>
      <html lang="en">
        <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
          <Header />
          <main className="min-h-screen pt-16 lg:pt-20">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ConvexProvider>
  );
}
```

---

## 10. CLEANUP: Package Dependencies

**File:** `package.json`

Remove dependencies:
- `@clerk/nextjs` (line 13)
- `svix` (line 27)

**Command to run:**
```bash
pnpm remove @clerk/nextjs svix
```

---

## 11. DELETE: Empty Directories

After file deletions, remove:
- `src/app/(auth)/` - entire directory
- `src/components/guards/` - entire directory  
- `src/components/checkout/` - entire directory

---

## Impact Summary

### Added:
- Feature flag `SHOW_WAITLIST` for future waitlist expiration without deploy
- New `src/lib/build-config.ts` with DIY build configurations
- Expandable "View Detailed BOM" sections on pricing cards
- Price ranges instead of fixed prices
- Clear "Software FREE" messaging on all tiers

### Deleted:
- ~15 files, 3 directories
- Authentication infrastructure (Clerk)
- Checkout flow (Story 11.2)
- User/Order database tables

### Modified:
- ~10 files
- Pricing page → Build Configurations page
- Pricing cards → DIY estimate cards with BOM details
- Navigation labels ("Pricing" → "Configurations")

### Preserved:
- Product page (unchanged)
- 4 tier structure (Hobbyist, Bare Bones, Solo, Field)
- FAQ section (updated for DIY context)
- Enterprise/Church CTA
- Waitlist functionality (feature-flagged)

### Database:
- Removed: `users`, `orders` tables
- Kept: `waitlist`, `contacts` tables

### Dependencies:
- Removed: `@clerk/nextjs`, `svix`

### Result:
Clean DIY-focused marketing site with:
- Free build scripts for all tiers
- Transparent hardware cost estimates
- 2 BOM variants (A: basic Pi, B: field config)
- Feature-flagged waitlist CTAs for future pre-built offerings
- No e-commerce, no authentication, no checkout

