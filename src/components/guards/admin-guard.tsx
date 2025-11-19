"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { LoadingSpinner } from "@/components/ui";

interface AdminGuardProps {
  children: React.ReactNode;
}

/**
 * AdminGuard Component
 * 
 * Protects admin pages by checking user role from Clerk publicMetadata.
 * 
 * - If user is not authenticated: Redirects to /sign-in
 * - If user is authenticated but not admin: Shows access denied message
 * - If user is admin: Renders children (protected content)
 * 
 * Usage:
 * ```tsx
 * <AdminGuard>
 *   <AdminDashboard />
 * </AdminGuard>
 * ```
 */
export function AdminGuard({ children }: AdminGuardProps) {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      if (!user) {
        // Not authenticated - redirect to sign-in
        router.push("/sign-in");
        return;
      }

      const role = user.publicMetadata?.role as string | undefined;

      if (role === "admin") {
        setIsAdmin(true);
      } else {
        // Authenticated but not admin - redirect to dashboard with error
        router.push("/dashboard?error=unauthorized");
      }
    }
  }, [isLoaded, user, router]);

  // Loading state while checking role
  if (!isLoaded || !isAdmin) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="text-center">
          <LoadingSpinner size="lg" />
          <p className="mt-4 text-sm text-gray-600">Verifying access...</p>
        </div>
      </div>
    );
  }

  // User is admin - render protected content
  return <>{children}</>;
}

/**
 * Access Denied Component
 * 
 * Shown when non-admin user tries to access admin content.
 * This is a backup - middleware should catch most cases.
 */
export function AccessDenied() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-md text-center p-8 bg-white rounded-lg shadow-xl">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h1>
        <p className="text-gray-600 mb-6">
          You don&apos;t have permission to access this page. Admin privileges are required.
        </p>
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
}

