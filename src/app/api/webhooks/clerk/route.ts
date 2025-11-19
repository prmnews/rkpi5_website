import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { api } from "../../../../../convex/_generated/api";
import { ConvexHttpClient } from "convex/browser";

// Initialize Convex client for server-side mutations
const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export async function POST(req: Request) {
  // Get webhook secret from environment
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    console.error("[Clerk Webhook] Missing CLERK_WEBHOOK_SECRET environment variable");
    return new Response("Webhook secret not configured", { status: 500 });
  }

  // Get headers
  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // Verify headers exist
  if (!svix_id || !svix_timestamp || !svix_signature) {
    console.error("[Clerk Webhook] Missing svix headers");
    return new Response("Missing svix headers", { status: 400 });
  }

  // Get raw body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create svix instance and verify webhook
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("[Clerk Webhook] Error verifying webhook signature:", err);
    return new Response("Invalid signature", { status: 401 });
  }

  // Handle webhook event
  const { type, data } = evt;

  console.log(`[Clerk Webhook] Received event: ${type}`);

  try {
    switch (type) {
      case "user.created":
        await handleUserCreated(data);
        break;

      case "user.updated":
        await handleUserUpdated(data);
        break;

      case "user.deleted":
        await handleUserDeleted(data);
        break;

      default:
        console.log(`[Clerk Webhook] Unhandled event type: ${type}`);
    }

    return new Response("Webhook processed successfully", { status: 200 });
  } catch (error) {
    console.error(`[Clerk Webhook] Error processing ${type} event:`, error);
    return new Response("Error processing webhook", { status: 500 });
  }
}

/**
 * Handle user.created event - sync new user to Convex
 */
async function handleUserCreated(data: any) {
  const clerkId = data.id;
  const email = data.email_addresses?.[0]?.email_address || `${clerkId}@clerk.users`;
  const firstName = data.first_name || undefined;
  const lastName = data.last_name || undefined;
  const imageUrl = data.image_url || undefined;
  const role = data.public_metadata?.role || "user"; // Read role from publicMetadata, default to "user"

  console.log(`[Clerk Webhook] Creating user: ${email} (${clerkId}) with role: ${role}`);

  const result = await convex.mutation(api.users.syncUserFromClerk, {
    clerkId,
    email,
    firstName,
    lastName,
    imageUrl,
    role,
  });

  console.log(`[Clerk Webhook] User created successfully:`, result);
}

/**
 * Handle user.updated event - sync user changes to Convex
 */
async function handleUserUpdated(data: any) {
  const clerkId = data.id;
  const email = data.email_addresses?.[0]?.email_address || `${clerkId}@clerk.users`;
  const firstName = data.first_name || undefined;
  const lastName = data.last_name || undefined;
  const imageUrl = data.image_url || undefined;
  const role = data.public_metadata?.role || undefined; // Read role from publicMetadata if present

  console.log(`[Clerk Webhook] Updating user: ${email} (${clerkId})${role ? ` with role: ${role}` : ''}`);

  const result = await convex.mutation(api.users.syncUserFromClerk, {
    clerkId,
    email,
    firstName,
    lastName,
    imageUrl,
    role, // Pass role if present, otherwise preserves existing role in Convex
  });

  console.log(`[Clerk Webhook] User updated successfully:`, result);
}

/**
 * Handle user.deleted event - soft delete user in Convex
 */
async function handleUserDeleted(data: any) {
  const clerkId = data.id;

  console.log(`[Clerk Webhook] Deleting user: ${clerkId}`);

  const result = await convex.mutation(api.users.deleteUser, {
    clerkId,
  });

  console.log(`[Clerk Webhook] User deleted successfully:`, result);
}

