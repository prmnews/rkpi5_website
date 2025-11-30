import { mutation } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";

/**
 * Add a user to the waitlist
 * Stores submission in waitlist table with status="pending"
 * Sends confirmation email via Resend
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

    let waitlistId: any;
    let action: "created" | "updated";

    if (existing) {
      // Update existing entry
      await ctx.db.patch(existing._id, {
        name: args.name,
        phone: args.phone,
        useCase: args.useCase,
        tier: args.tier,
        source: args.source,
        notes: args.useCase, // Map useCase to notes field for admin reference
      });

      waitlistId = existing._id;
      action = "updated";
    } else {
      // Insert new waitlist entry
      waitlistId = await ctx.db.insert("waitlist", {
        email: args.email,
        name: args.name,
        phone: args.phone,
        useCase: args.useCase,
        tier: args.tier,
        source: args.source,
        status: "pending",
        notes: args.useCase, // Map useCase to notes field for admin reference
        createdAt: Date.now(),
      });

      action = "created";
    }

    // Send confirmation email (async, don't wait for it)
    // Using scheduler to avoid blocking the mutation
    await ctx.scheduler.runAfter(0, internal.emails.sendWaitlistConfirmation, {
      email: args.email,
      name: args.name,
    });

    // Send admin notification (async)
    await ctx.scheduler.runAfter(0, internal.emails.sendAdminWaitlistNotification, {
      email: args.email,
      name: args.name,
      phone: args.phone,
      useCase: args.useCase,
      tier: args.tier,
    });

    return { success: true, waitlistId, action };
  },
});

