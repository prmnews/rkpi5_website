import { mutation } from "./_generated/server";
import { v } from "convex/values";

/**
 * Add a user to the waitlist
 * Stores submission in waitlist table with status="pending"
 */
export const joinWaitlist = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    useCase: v.optional(v.string()),
    tier: v.optional(v.string()),
    source: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // Check if email already exists
    const existing = await ctx.db
      .query("waitlist")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .unique();

    if (existing) {
      // Update existing entry
      await ctx.db.patch(existing._id, {
        name: args.name,
        phone: args.phone,
        useCase: args.useCase,
        tier: args.tier,
        source: args.source,
      });

      return { success: true, waitlistId: existing._id, action: "updated" };
    }

    // Insert new waitlist entry
    const waitlistId = await ctx.db.insert("waitlist", {
      email: args.email,
      name: args.name,
      phone: args.phone,
      useCase: args.useCase,
      tier: args.tier,
      source: args.source,
      status: "pending",
      notes: undefined,
      createdAt: Date.now(),
    });

    return { success: true, waitlistId, action: "created" };
  },
});

