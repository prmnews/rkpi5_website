#!/bin/bash

# Quick Email Testing Script for Production
# Run this after setting RESEND_API_KEY in Convex

set -e

echo "🧪 Testing Email Delivery in Production"
echo "========================================"
echo ""

echo "Step 1: Checking Convex environment variables..."
npx convex env list --prod | grep -q "RESEND_API_KEY" && {
  echo "✅ RESEND_API_KEY is set in Convex production"
} || {
  echo "❌ RESEND_API_KEY is NOT set in Convex production"
  echo ""
  echo "Fix with:"
  echo "  npx convex env set RESEND_API_KEY re_your_key_here --prod"
  exit 1
}

echo ""
echo "Step 2: Testing Resend connection..."
npx convex run emails:testResendConnection --prod

echo ""
echo "✅ Email test complete!"
echo ""
echo "Next steps:"
echo "1. Check inbox at info@rkpi5.com for test email"
echo "2. Check BCC inbox at kmx-iAaW7gXy3JeDt@proton.me"
echo "3. Test production waitlist form at your website"
echo "4. Test production contact form"
echo ""
echo "Monitor emails at:"
echo "- Resend Dashboard: https://resend.com/emails"
echo "- Convex Logs: https://dashboard.convex.dev"

