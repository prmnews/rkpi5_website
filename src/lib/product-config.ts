/**
 * Product Configuration for RKPi5 Marketing Website
 * 
 * This file contains Clerk Plan IDs and pricing information for Clerk Billing integration.
 * 
 * IMPORTANT: Clerk Billing manages plans separately from Stripe products.
 * You create plans in Clerk dashboard, and Clerk handles Stripe payment processing behind the scenes.
 * 
 * SETUP INSTRUCTIONS:
 * 1. Complete Story 11.1: Configure Clerk Billing in Clerk dashboard
 * 2. Copy Clerk Plan IDs from Clerk Dashboard → Billing → Plans
 * 3. Update the planId values in the PRODUCTS constant below
 * 4. Ensure tier names match Convex orders.tier field values
 * 
 * Story: 11.1 - Configure Clerk Billing with Stripe
 */

export type ProductTier = "hobbyist" | "bare-bones" | "solo" | "field";

export interface ProductConfig {
  planId: string; // Clerk Plan ID from Clerk Billing (plan_xxxxx)
  tier: ProductTier;
  name: string;
  description: string;
  price: number; // Price in cents (e.g., 9900 = $99.00)
  priceDisplay: string; // Display string (e.g., "$99")
  features: string[];
  popular?: boolean;
  includesDevice: boolean;
  targetUsers: number;
}

/**
 * Product catalog for RKPi5 devices
 * 
 * TODO (Story 11.1): Update with actual Clerk Plan IDs from Clerk Dashboard → Billing
 */
export const PRODUCTS: Record<ProductTier, ProductConfig> = {
  hobbyist: {
    planId: "plan_PLACEHOLDER_HOBBYIST", // TODO: Replace with actual Clerk Plan ID
    tier: "hobbyist",
    name: "RKPi5 Hobbyist Tier",
    description: "DIY downloads and documentation - Build your own",
    price: 0,
    priceDisplay: "FREE",
    features: [
      "Download DIY setup scripts",
      "Documentation and guides",
      "Community support",
      "Self-hosted setup",
    ],
    popular: false,
    includesDevice: false,
    targetUsers: 1,
  },
  "bare-bones": {
    planId: "plan_PLACEHOLDER_BARE_BONES", // TODO: Replace with actual Clerk Plan ID
    tier: "bare-bones",
    name: "RKPi5 Bare Bones",
    description: "Pre-configured Raspberry Pi 5 with 26GB biblical content",
    price: 9900, // $99.00 in cents
    priceDisplay: "$99",
    features: [
      "Raspberry Pi 5 (4GB RAM)",
      "26GB+ biblical resources",
      "Pre-configured WiFi hotspot",
      "6-hour battery runtime",
      "Supports up to 15 concurrent users",
      "Email support",
    ],
    popular: false,
    includesDevice: true,
    targetUsers: 15,
  },
  solo: {
    planId: "plan_PLACEHOLDER_SOLO", // TODO: Replace with actual Clerk Plan ID
    tier: "solo",
    name: "RKPi5 Solo",
    description: "Complete system with accessories and extended content library",
    price: 29900, // $299.00 in cents
    priceDisplay: "$299",
    features: [
      "Raspberry Pi 5 (8GB RAM)",
      "26GB+ biblical resources + extras",
      "WiFi hotspot + Ethernet",
      "8-hour battery runtime",
      "Supports up to 15 concurrent users",
      "Carrying case included",
      "USB-C power adapter",
      "Priority email support",
    ],
    popular: true, // Most popular tier
    includesDevice: true,
    targetUsers: 15,
  },
  field: {
    planId: "plan_PLACEHOLDER_FIELD", // TODO: Replace with actual Clerk Plan ID
    tier: "field",
    name: "RKPi5 Field Kit",
    description: "Complete field deployment kit with rugged case and extended battery",
    price: 49900, // $499.00 in cents
    priceDisplay: "$499",
    features: [
      "Raspberry Pi 5 (8GB RAM)",
      "26GB+ complete content library",
      "WiFi hotspot + Ethernet + LTE option",
      "12-hour extended battery",
      "Supports up to 15 concurrent users",
      "Rugged weatherproof case",
      "Extended warranty",
      "Priority support + setup assistance",
    ],
    popular: false,
    includesDevice: true,
    targetUsers: 15,
  },
};

/**
 * Get product config by tier
 */
export function getProduct(tier: ProductTier): ProductConfig {
  return PRODUCTS[tier];
}

/**
 * Get all products as array
 */
export function getAllProducts(): ProductConfig[] {
  return Object.values(PRODUCTS);
}

/**
 * Get products sorted by price
 */
export function getProductsByPrice(): ProductConfig[] {
  return getAllProducts().sort((a, b) => a.price - b.price);
}

/**
 * Format price in cents to display string
 */
export function formatPrice(cents: number): string {
  if (cents === 0) return "FREE";
  return `$${(cents / 100).toFixed(2)}`;
}

