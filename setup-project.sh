#!/bin/bash

# RKPi5 Marketing Website - Project Initialization Script
# Author: Winston (BMAD Architecture Agent)
# Date: November 11, 2025
# For: Scott E. Townsend

set -e  # Exit on error

echo "🏗️  RKPi5 Marketing Website - Project Setup"
echo "=========================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if we're in the right directory
if [ ! -f "setup-project.sh" ]; then
    echo -e "${RED}❌ Error: Must run from project root directory${NC}"
    exit 1
fi

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo -e "${RED}❌ Error: pnpm is not installed${NC}"
    echo -e "${YELLOW}Install pnpm with: npm install -g pnpm${NC}"
    echo -e "${YELLOW}Or visit: https://pnpm.io/installation${NC}"
    exit 1
fi

echo -e "${GREEN}✓ pnpm found${NC}"
echo ""

# Step 1: Initialize Next.js Project
echo -e "${BLUE}Step 1: Initializing Next.js 14 project...${NC}"
pnpm dlx create-next-app@latest . \
    --typescript \
    --tailwind \
    --app \
    --src-dir \
    --import-alias "@/*" \
    --eslint \
    --no-git

echo -e "${GREEN}✓ Next.js project initialized${NC}"
echo ""

# Step 2: Install Core Dependencies
echo -e "${BLUE}Step 2: Installing core dependencies...${NC}"
pnpm add convex @clerk/nextjs resend react-hook-form zod @hookform/resolvers framer-motion lucide-react @next/mdx @mdx-js/loader @mdx-js/react

echo -e "${GREEN}✓ Core dependencies installed${NC}"
echo ""

# Step 3: Install Dev Dependencies
echo -e "${BLUE}Step 3: Installing dev dependencies...${NC}"
pnpm add -D @types/node @types/react @types/react-dom

echo -e "${GREEN}✓ Dev dependencies installed${NC}"
echo ""

# Step 4: Initialize Shadcn/ui
echo -e "${BLUE}Step 4: Initializing Shadcn/ui...${NC}"
echo -e "${YELLOW}Note: Use default options when prompted${NC}"
pnpm dlx shadcn-ui@latest init -y

echo -e "${GREEN}✓ Shadcn/ui initialized${NC}"
echo ""

# Step 5: Install Shadcn Components
echo -e "${BLUE}Step 5: Installing Shadcn UI components...${NC}"
pnpm dlx shadcn-ui@latest add button card input form toast dialog dropdown-menu tabs accordion badge -y

echo -e "${GREEN}✓ Shadcn components installed${NC}"
echo ""

# Step 6: Initialize Convex
echo -e "${BLUE}Step 6: Initializing Convex...${NC}"
pnpm dlx convex dev --once

echo -e "${GREEN}✓ Convex initialized${NC}"
echo ""

# Step 7: Create Directory Structure
echo -e "${BLUE}Step 7: Creating project directory structure...${NC}"

# Create directories
mkdir -p src/components/layout
mkdir -p src/components/marketing
mkdir -p src/components/interactive
mkdir -p src/lib
mkdir -p src/hooks
mkdir -p content/support/getting-started
mkdir -p content/support/troubleshooting
mkdir -p content/support/faqs
mkdir -p public/images/products
mkdir -p public/images/og
mkdir -p public/videos
mkdir -p convex

echo -e "${GREEN}✓ Directory structure created${NC}"
echo ""

# Step 8: Create .env.local.example
echo -e "${BLUE}Step 8: Creating environment variables template...${NC}"

cat > .env.local.example << 'EOF'
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Convex
CONVEX_DEPLOYMENT=...
NEXT_PUBLIC_CONVEX_URL=https://...

# Resend Email
RESEND_API_KEY=re_...

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://rkpi5.replit.app
NODE_ENV=development
EOF

echo -e "${GREEN}✓ Environment variables template created${NC}"
echo ""

# Step 9: Create Convex Schema
echo -e "${BLUE}Step 9: Creating Convex schema...${NC}"

cat > convex/schema.ts << 'EOF'
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Waitlist signups
  waitlist: defineTable({
    email: v.string(),
    name: v.optional(v.string()),
    phone: v.optional(v.string()),
    useCase: v.optional(v.string()),
    tier: v.optional(v.string()), // bare-bones, solo, field
    source: v.optional(v.string()), // homepage, pricing, product
    status: v.string(), // pending, contacted, converted
    notes: v.optional(v.string()),
    createdAt: v.number(),
  })
    .index("by_email", ["email"])
    .index("by_status", ["status"])
    .index("by_created", ["createdAt"]),

  // Contact form submissions
  contacts: defineTable({
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    phone: v.optional(v.string()),
    message: v.string(),
    type: v.string(), // demo, support, sales, general
    status: v.string(), // new, responded, closed
    createdAt: v.number(),
  })
    .index("by_status", ["status"])
    .index("by_type", ["type"])
    .index("by_created", ["createdAt"]),

  // Orders (post-checkout)
  orders: defineTable({
    userId: v.string(), // Clerk user ID
    clerkOrderId: v.optional(v.string()), // Clerk billing order ID
    tier: v.string(), // bare-bones, solo, field
    quantity: v.number(),
    amount: v.number(), // in cents
    status: v.string(), // pending, paid, processing, shipped, delivered
    shippingAddress: v.object({
      name: v.string(),
      line1: v.string(),
      line2: v.optional(v.string()),
      city: v.string(),
      state: v.string(),
      postal_code: v.string(),
      country: v.string(),
    }),
    createdAt: v.number(),
    paidAt: v.optional(v.number()),
    shippedAt: v.optional(v.number()),
  })
    .index("by_user", ["userId"])
    .index("by_status", ["status"])
    .index("by_created", ["createdAt"]),

  // Users (synced from Clerk)
  users: defineTable({
    clerkId: v.string(),
    email: v.string(),
    firstName: v.optional(v.string()),
    lastName: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
    role: v.string(), // user, admin
    subscriptionStatus: v.optional(v.string()), // active, cancelled, past_due
    createdAt: v.number(),
    lastSeenAt: v.number(),
  })
    .index("by_clerk_id", ["clerkId"])
    .index("by_email", ["email"]),
});
EOF

echo -e "${GREEN}✓ Convex schema created${NC}"
echo ""

# Step 10: Create utility files
echo -e "${BLUE}Step 10: Creating utility files...${NC}"

# Create lib/utils.ts
cat > src/lib/utils.ts << 'EOF'
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | number): string {
  const d = typeof date === "number" ? new Date(date) : date;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount / 100); // Convert cents to dollars
}
EOF

# Create lib/constants.ts
cat > src/lib/constants.ts << 'EOF'
export const SITE_NAME = "RKPi5";
export const SITE_DESCRIPTION = "Biblical Resources When Networks Fail";

export const PRODUCT_TIERS = {
  HOBBYIST: "hobbyist",
  BARE_BONES: "bare-bones",
  SOLO: "solo",
  FIELD: "field",
} as const;

export const PRICING = {
  [PRODUCT_TIERS.HOBBYIST]: 0,
  [PRODUCT_TIERS.BARE_BONES]: 9900, // $99.00 in cents
  [PRODUCT_TIERS.SOLO]: 29900, // $299.00 in cents
  [PRODUCT_TIERS.FIELD]: 49900, // $499.00 in cents
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/pricing", label: "Pricing" },
  { href: "/support", label: "Support" },
  { href: "/about", label: "About" },
] as const;
EOF

echo -e "${GREEN}✓ Utility files created${NC}"
echo ""

# Step 11: Update tailwind.config.ts with custom theme
echo -e "${BLUE}Step 11: Configuring Tailwind theme...${NC}"

cat > tailwind.config.ts << 'EOF'
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          500: "#0ea5e9",
          600: "#0284c7",
          900: "#0c4a6e",
        },
        accent: {
          purple: "#8b5cf6",
          green: "#10b981",
          orange: "#f59e0b",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      maxWidth: {
        content: "65ch",
        container: "1280px",
        wide: "1536px",
      },
      spacing: {
        section: "6rem",
        card: "1.5rem",
      },
      transitionDuration: {
        fast: "150ms",
        base: "200ms",
        slow: "300ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
EOF

echo -e "${GREEN}✓ Tailwind theme configured${NC}"
echo ""

# Step 12: Create Git branch structure
echo -e "${BLUE}Step 12: Setting up Git repository and branches...${NC}"

# Initialize git if not already
if [ ! -d ".git" ]; then
    git init
    echo -e "${GREEN}✓ Git repository initialized${NC}"
fi

# Add remote
git remote add origin https://github.com/prmnews/rkpi5_website.git 2>/dev/null || true
echo -e "${GREEN}✓ Git remote configured${NC}"

# Create .gitignore if it doesn't exist
if [ ! -f ".gitignore" ]; then
    cat > .gitignore << 'EOF'
# Dependencies
node_modules/
.pnp
.pnp.js

# Testing
coverage/

# Next.js
.next/
out/
build/
dist/

# Production
.vercel
.replit

# Misc
.DS_Store
*.pem
.env*.local
.env.local
.env.development.local
.env.test.local
.env.production.local

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDEs
.vscode/
.idea/
*.swp
*.swo
*~

# Convex
.convex/
EOF
    echo -e "${GREEN}✓ .gitignore created${NC}"
fi

# Create epic branches
echo -e "${YELLOW}Creating EPIC branches...${NC}"
EPICS=(
    "epic/1-foundation"
    "epic/2-design-system"
    "epic/3-layout"
    "epic/4-homepage"
    "epic/5-product"
    "epic/6-pricing"
    "epic/7-support"
    "epic/8-use-cases"
    "epic/9-about"
    "epic/10-auth"
    "epic/11-ecommerce"
    "epic/12-dashboard"
    "epic/13-admin"
    "epic/14-backend"
)

# Commit initial setup
git add .
git commit -m "Initial project setup: Next.js 14 + Convex + Clerk + Shadcn/ui" || true

# Create epic branches
for epic in "${EPICS[@]}"; do
    git branch "$epic" 2>/dev/null || true
    echo -e "${GREEN}  ✓ Created branch: $epic${NC}"
done

echo ""

# Step 13: Create README
echo -e "${BLUE}Step 13: Creating project README...${NC}"

cat > README.md << 'EOF'
# RKPi5 Marketing Website

**Product:** RKPi5 Captive WiFi Portal + Rapture Kit Content Platform  
**Framework:** Next.js 14 + TypeScript + Tailwind CSS  
**Backend:** Convex + Clerk + Resend  
**Deployment:** Replit

## Quick Start

### Prerequisites
- Node.js 20.x
- npm or pnpm
- Clerk account
- Convex account
- Resend API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/prmnews/rkpi5_website.git
cd rkpi5_website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
# Edit .env.local with your API keys
```

4. Run development server:
```bash
npm run dev
# In a separate terminal:
npx convex dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
rkpi5-marketing/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   ├── lib/              # Utilities
│   └── hooks/            # Custom hooks
├── convex/               # Convex backend
├── content/              # MDX content
├── public/               # Static assets
└── docs/                 # Documentation
```

## Development Workflow

### Git Branching Strategy

- **Main branch:** Production-ready code
- **EPIC branches:** `epic/{number}-{name}` (e.g., `epic/1-foundation`)
- **Story branches:** `story/{epic}.{story}-{name}` (e.g., `story/1.1-initialize-nextjs`)

### Workflow:
1. Create story branch from epic: `git checkout -b story/1.1-initialize-nextjs epic/1-foundation`
2. Complete all tasks in the story
3. Test thoroughly
4. Merge story to epic: `git checkout epic/1-foundation && git merge story/1.1-initialize-nextjs`
5. When epic complete, merge to main: `git checkout main && git merge epic/1-foundation`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

## Documentation

- [Architecture Decisions](./docs/technical/architecture-decisions.md)
- [Epic/Story/Task Breakdown](./docs/technical/epic-story-task-breakdown.md)
- [Product Brief](./docs/product-brief.md)

## License

Proprietary - All Rights Reserved
EOF

echo -e "${GREEN}✓ README created${NC}"
echo ""

# Step 14: Summary
echo ""
echo -e "${GREEN}=========================================="
echo "✅ Project Setup Complete!"
echo "==========================================${NC}"
echo ""
echo -e "${BLUE}Next Steps:${NC}"
echo "1. Copy .env.local.example to .env.local and add your API keys"
echo "2. Run 'pnpm dev' to start the development server"
echo "3. Run 'pnpm dlx convex dev' in a separate terminal"
echo "4. Check out an epic branch to start development:"
echo "   git checkout epic/1-foundation"
echo ""
echo -e "${YELLOW}Documentation:${NC}"
echo "- Architecture: docs/technical/architecture-decisions.md"
echo "- Epic Breakdown: docs/technical/epic-story-task-breakdown.md"
echo ""
echo -e "${BLUE}Epic Branches Created:${NC}"
for epic in "${EPICS[@]}"; do
    echo "  - $epic"
done
echo ""
echo -e "${GREEN}Happy coding! 🚀${NC}"

