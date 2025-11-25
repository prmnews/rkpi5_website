import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  waitlist: defineTable({
    email: v.string(),
    name: v.string(),
    phone: v.optional(v.string()),
    useCase: v.optional(v.string()),
    tier: v.optional(v.string()),
    source: v.optional(v.string()),
    status: v.string(),
    notes: v.optional(v.string()),
    createdAt: v.number(),
  })
    .index("by_email", ["email"])
    .index("by_status", ["status"])
    .index("by_created", ["createdAt"]),

  contacts: defineTable({
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    phone: v.optional(v.string()),
    message: v.string(),
    type: v.string(),
    status: v.string(),
    createdAt: v.number(),
  })
    .index("by_status", ["status"])
    .index("by_type", ["type"])
    .index("by_created", ["createdAt"]),
});
