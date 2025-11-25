export const SITE_NAME = "RKPi5";
export const SITE_DESCRIPTION = "Biblical Resources When Networks Fail";

// Feature flag to control waitlist CTA visibility
// Set to false in production to hide waitlist features without code deploy
export const SHOW_WAITLIST = process.env.NEXT_PUBLIC_SHOW_WAITLIST === 'true';

export const PRODUCT_TIERS = {
  HOBBYIST: "hobbyist",
  BARE_BONES: "bare-bones",
  SOLO: "solo",
  FIELD: "field",
} as const;
