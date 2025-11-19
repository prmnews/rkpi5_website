import type { User } from "@clerk/nextjs/server";

/**
 * User role type definition
 * - "user": Regular user (default)
 * - "admin": Administrator with access to admin dashboard
 */
export type UserRole = "user" | "admin";

/**
 * Check if a user has admin role
 * 
 * @param user - Clerk user object (from useUser hook or auth() function)
 * @returns true if user has admin role, false otherwise
 * 
 * @example
 * ```typescript
 * const { user } = useUser();
 * if (isAdmin(user)) {
 *   // Show admin features
 * }
 * ```
 */
export function isAdmin(user: User | null | undefined): boolean {
  if (!user) return false;
  const role = user.publicMetadata?.role as string | undefined;
  return role === "admin";
}

/**
 * Get user's role from metadata
 * 
 * @param user - Clerk user object
 * @returns User role ("user" or "admin")
 * 
 * @example
 * ```typescript
 * const { user } = useUser();
 * const role = getUserRole(user);
 * console.log(`User role: ${role}`);
 * ```
 */
export function getUserRole(user: User | null | undefined): UserRole {
  if (!user) return "user";
  const role = user.publicMetadata?.role as string | undefined;
  return role === "admin" ? "admin" : "user";
}

