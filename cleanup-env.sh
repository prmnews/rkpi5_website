#!/bin/bash
#
# Clean up .env.local - Remove deprecated Clerk variables
#

echo "🧹 Cleaning up .env.local"
echo "=========================="
echo ""
echo "This will remove 7 deprecated Clerk variables from your .env.local"
echo ""

# Backup current .env.local
cp .env.local .env.local.backup
echo "✅ Backup created: .env.local.backup"
echo ""

# Remove Clerk variables
echo "Removing Clerk variables..."
grep -v "CLERK_SECRET_KEY" .env.local | \
grep -v "CLERK_WEBHOOK_SECRET" | \
grep -v "NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL" | \
grep -v "NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL" | \
grep -v "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY" | \
grep -v "NEXT_PUBLIC_CLERK_SIGN_IN_URL" | \
grep -v "NEXT_PUBLIC_CLERK_SIGN_UP_URL" > .env.local.tmp

mv .env.local.tmp .env.local

echo "✅ Cleaned .env.local"
echo ""
echo "Remaining variables:"
grep "=" .env.local | grep -v "^#" | cut -d'=' -f1
echo ""
echo "Expected variables for local dev:"
echo "  - CONVEX_DEPLOYMENT (dev)"
echo "  - NEXT_PUBLIC_CONVEX_URL (dev)"
echo "  - RESEND_API_KEY"
echo "  - NEXT_PUBLIC_SITE_URL"
echo "  - NEXT_PUBLIC_SHOW_WAITLIST"
echo "  - NODE_ENV"

