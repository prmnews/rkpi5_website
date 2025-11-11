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
