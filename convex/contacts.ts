import { mutation } from "./_generated/server";
import { v } from "convex/values";

/**
 * Submit a contact form inquiry
 * Stores submission in contacts table with status="new"
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
    // Insert contact submission
    const contactId = await ctx.db.insert("contacts", {
      name: args.name,
      email: args.email,
      company: args.company,
      phone: args.phone,
      message: args.message,
      type: args.type,
      status: "new",
      createdAt: Date.now(),
    });

    return { success: true, contactId };
  },
});

