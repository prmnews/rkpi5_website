import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { clerkClient } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/product(.*)",
  "/pricing(.*)",
  "/support(.*)",
  "/use-cases(.*)",
  "/about(.*)",
  "/contact(.*)",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/webhooks(.*)"
]);

const isAdminRoute = createRouteMatcher([
  "/admin(.*)"
]);

export default clerkMiddleware(async (auth, request) => {
  // Public routes - no authentication required
  if (isPublicRoute(request)) {
    return;
  }

  // Get authentication context
  const { userId, sessionClaims } = await auth();

  // Protected routes - require authentication
  if (!userId) {
    await auth.protect();
    return;
  }

  // Admin routes - require admin role
  if (isAdminRoute(request)) {
    try {
      // Fetch user to get publicMetadata (since it's not in sessionClaims by default)
      const client = await clerkClient();
      const user = await client.users.getUser(userId);
      const role = user.publicMetadata?.role as string | undefined;

      if (role !== "admin") {
        // Authenticated but not admin - redirect to dashboard with error
        const dashboardUrl = new URL("/dashboard", request.url);
        dashboardUrl.searchParams.set("error", "unauthorized");
        return Response.redirect(dashboardUrl);
      }
      
      // User is admin - allow access
    } catch (error) {
      console.error("[Middleware] Error checking admin role:", error);
      // On error, deny access to be safe
      const dashboardUrl = new URL("/dashboard", request.url);
      dashboardUrl.searchParams.set("error", "unauthorized");
      return Response.redirect(dashboardUrl);
    }
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

