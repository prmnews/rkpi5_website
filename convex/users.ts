import { mutation } from "./_generated/server";
import { v } from "convex/values";

/**
 * Sync user from Clerk webhook to Convex database
 * Performs upsert: creates new user if not exists, updates if exists
 */
export const syncUserFromClerk = mutation({
  args: {
    clerkId: v.string(),
    email: v.string(),
    firstName: v.optional(v.string()),
    lastName: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
    role: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // Check if user already exists
    const existing = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
      .unique();

    const now = Date.now();

    if (existing) {
      // Update existing user
      await ctx.db.patch(existing._id, {
        email: args.email,
        firstName: args.firstName,
        lastName: args.lastName,
        imageUrl: args.imageUrl,
        role: args.role || existing.role, // Keep existing role if not provided
        updatedAt: now,
        lastSeenAt: now,
      });

      return { success: true, userId: existing._id, action: "updated" };
    } else {
      // Create new user
      const userId = await ctx.db.insert("users", {
        clerkId: args.clerkId,
        email: args.email,
        firstName: args.firstName,
        lastName: args.lastName,
        imageUrl: args.imageUrl,
        role: args.role || "user", // Default role
        subscriptionStatus: undefined,
        createdAt: now,
        updatedAt: now,
        lastSeenAt: now,
        deletedAt: undefined,
      });

      return { success: true, userId, action: "created" };
    }
  },
});

/**
 * Soft delete user by setting deletedAt timestamp
 * Preserves referential integrity with orders and other records
 */
export const deleteUser = mutation({
  args: {
    clerkId: v.string(),
  },
  handler: async (ctx, args) => {
    // Find user by Clerk ID
    const user = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
      .unique();

    if (!user) {
      return { success: false, error: "User not found" };
    }

    // Soft delete: set deletedAt timestamp
    await ctx.db.patch(user._id, {
      deletedAt: Date.now(),
    });

    return { success: true, userId: user._id, action: "soft_deleted" };
  },
});

