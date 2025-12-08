#!/bin/bash
#
# Convex Table Cleanup Script
# Removes deprecated users and orders tables from production
#

echo "🗑️  Convex Table Cleanup Script"
echo "================================"
echo ""
echo "This script will DELETE the following tables from your Convex deployment:"
echo "  - users"
echo "  - orders"
echo ""
echo "⚠️  WARNING: This action cannot be undone!"
echo ""

# Check if we're connected to the right deployment
echo "Checking Convex deployment..."
npx convex env get CONVEX_DEPLOYMENT || {
  echo "❌ Not connected to a Convex deployment"
  echo ""
  echo "To connect to your PRODUCTION deployment:"
  echo "  npx convex env set CONVEX_DEPLOYMENT prod:your-deployment-name"
  echo ""
  exit 1
}

echo ""
read -p "Are you SURE you want to delete users and orders tables? (type 'yes' to confirm): " confirm

if [ "$confirm" != "yes" ]; then
  echo "❌ Aborted"
  exit 1
fi

echo ""
echo "Deleting tables..."

# Delete all documents from users table, then the table itself
echo "🗑️  Deleting 'users' table..."
npx convex data delete users --all || echo "⚠️  users table may not exist"

# Delete all documents from orders table, then the table itself  
echo "🗑️  Deleting 'orders' table..."
npx convex data delete orders --all || echo "⚠️  orders table may not exist"

echo ""
echo "✅ Cleanup complete!"
echo ""
echo "Verify in Convex Dashboard that only these tables remain:"
echo "  - waitlist"
echo "  - contacts"

