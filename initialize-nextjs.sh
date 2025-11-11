#!/bin/bash

# Manual Next.js initialization (skipping create-next-app since directory has files)
# This script manually creates the Next.js structure

set -e

echo "🏗️  Manual Next.js 14 Setup (Working Directory)"
echo "================================================"

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Check pnpm
if ! command -v pnpm &> /dev/null; then
    echo -e "${RED}❌ Error: pnpm is not installed${NC}"
    exit 1
fi

echo -e "${BLUE}Step 1: Creating package.json...${NC}"
cat > package.json << 'EOF'
{
  "name": "rkpi5-marketing",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
EOF
echo -e "${GREEN}✓ package.json created${NC}"

echo -e "${BLUE}Step 2: Installing Next.js dependencies...${NC}"
pnpm add next@^14 react@^18 react-dom@^18
pnpm add -D typescript @types/node @types/react @types/react-dom eslint eslint-config-next
pnpm add -D tailwindcss@^3.4.0 postcss@^8 autoprefixer@^10
echo -e "${GREEN}✓ Next.js dependencies installed${NC}"

echo -e "${BLUE}Step 3: Installing project dependencies...${NC}"
pnpm add convex @clerk/nextjs resend react-hook-form zod @hookform/resolvers framer-motion lucide-react @next/mdx @mdx-js/loader @mdx-js/react
echo -e "${GREEN}✓ Project dependencies installed${NC}"

echo -e "${BLUE}Step 4: Creating Next.js config files...${NC}"

# next.config.js
cat > next.config.js << 'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
EOF

# tsconfig.json
cat > tsconfig.json << 'EOF'
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
EOF

# tailwind.config.ts
cat > tailwind.config.ts << 'EOF'
import type { Config } from "tailwindcss"

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
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
EOF

# postcss.config.js
cat > postcss.config.js << 'EOF'
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOF

# .eslintrc.json
cat > .eslintrc.json << 'EOF'
{
  "extends": "next/core-web-vitals"
}
EOF

echo -e "${GREEN}✓ Config files created${NC}"

echo -e "${BLUE}Step 5: Creating src directory structure...${NC}"
mkdir -p src/app
mkdir -p src/components/{layout,marketing,interactive,ui}
mkdir -p src/lib
mkdir -p src/hooks
mkdir -p public/images/{products,og}
mkdir -p public/videos
mkdir -p content/support/{getting-started,troubleshooting,faqs}
mkdir -p convex

# Create src/app/layout.tsx
cat > src/app/layout.tsx << 'EOF'
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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
EOF

# Create src/app/page.tsx
cat > src/app/page.tsx << 'EOF'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">
        Biblical Resources When Networks Fail
      </h1>
      <p className="mt-4 text-xl text-gray-600">
        RKPi5 Marketing Website - Coming Soon
      </p>
    </main>
  );
}
EOF

# Create src/app/globals.css
cat > src/app/globals.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
  }
}
EOF

# Create src/lib/utils.ts
cat > src/lib/utils.ts << 'EOF'
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
EOF

# Create src/lib/constants.ts
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
  [PRODUCT_TIERS.BARE_BONES]: 9900,
  [PRODUCT_TIERS.SOLO]: 29900,
  [PRODUCT_TIERS.FIELD]: 49900,
} as const;
EOF

echo -e "${GREEN}✓ Directory structure created${NC}"

echo -e "${BLUE}Step 6: Installing Shadcn/ui...${NC}"
pnpm dlx shadcn-ui@latest init -y --defaults
pnpm dlx shadcn-ui@latest add button card input form toast dialog dropdown-menu tabs accordion badge -y
echo -e "${GREEN}✓ Shadcn/ui installed${NC}"

echo -e "${BLUE}Step 7: Setting up Convex...${NC}"
# Create Convex schema from architecture doc
cat > convex/schema.ts << 'EOF'
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  waitlist: defineTable({
    email: v.string(),
    name: v.optional(v.string()),
    phone: v.optional(v.string()),
    useCase: v.optional(v.string()),
    tier: v.optional(v.string()),
    source: v.optional(v.string()),
    status: v.string(),
    notes: v.optional(v.string()),
    createdAt: v.number(),
  })
    .index("by_email", ["email"])
    .index("by_status", ["status"])
    .index("by_created", ["createdAt"]),

  contacts: defineTable({
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    phone: v.optional(v.string()),
    message: v.string(),
    type: v.string(),
    status: v.string(),
    createdAt: v.number(),
  })
    .index("by_status", ["status"])
    .index("by_type", ["type"])
    .index("by_created", ["createdAt"]),

  orders: defineTable({
    userId: v.string(),
    clerkOrderId: v.optional(v.string()),
    tier: v.string(),
    quantity: v.number(),
    amount: v.number(),
    status: v.string(),
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

  users: defineTable({
    clerkId: v.string(),
    email: v.string(),
    firstName: v.optional(v.string()),
    lastName: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
    role: v.string(),
    subscriptionStatus: v.optional(v.string()),
    createdAt: v.number(),
    lastSeenAt: v.number(),
  })
    .index("by_clerk_id", ["clerkId"])
    .index("by_email", ["email"]),
});
EOF
echo -e "${GREEN}✓ Convex schema created${NC}"

echo -e "${BLUE}Step 8: Creating .gitignore...${NC}"
cat > .gitignore << 'EOF'
# Dependencies
node_modules/
.pnp
.pnp.js

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

# Debug
npm-debug.log*
yarn-debug.log*
pnpm-debug.log*

# Convex
.convex/

# Testing
coverage/
EOF
echo -e "${GREEN}✓ .gitignore created${NC}"

echo ""
echo -e "${GREEN}=========================================="
echo "✅ Next.js Project Initialized!"
echo "==========================================${NC}"
echo ""
echo -e "${BLUE}Next Steps:${NC}"
echo "1. Copy .env.local.example to .env.local and add your API keys"
echo "2. Run 'pnpm dev' to start the development server"
echo "3. Run 'pnpm dlx convex dev' in a separate terminal"
echo ""
echo -e "${GREEN}Ready to code! 🚀${NC}"

