import { mutation } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";

/**
 * Submit a contact form inquiry
 * Stores submission in contacts table with status="new"
 * Sends notification email to admin
 */
export const submitContact = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    phone: v.optional(v.string()),
    message: v.string(),
    type: v.string(),
  },
  handler: async (ctx, args) => {
    // Check if email already exists
    const existing = await ctx.db
      .query("contacts")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .unique();

    let contactId: any;
    let action: "created" | "updated";

    if (existing) {
      // Update existing entry
      await ctx.db.patch(existing._id, {
        name: args.name,
        company: args.company,
        phone: args.phone,
        message: args.message,
        type: args.type,
        status: "new",
      });

      contactId = existing._id;
      action = "updated";
    } else {
      // Insert contact submission
      contactId = await ctx.db.insert("contacts", {
        name: args.name,
        email: args.email,
        company: args.company,
        phone: args.phone,
        message: args.message,
        type: args.type,
        status: "new",
        createdAt: Date.now(),
      });

      action = "created";
    }

    // Send admin notification (async)
    await ctx.scheduler.runAfter(0, internal.emails.sendContactNotification, {
      email: args.email,
      name: args.name,
      company: args.company,
      phone: args.phone,
      message: args.message,
      type: args.type,
    });

    return { success: true, contactId, action };
  },
});

