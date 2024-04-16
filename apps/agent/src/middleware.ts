import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { routeGuard } from "@sahil/features/auth/lib/routeGuard";
import { agentAccessRules } from "@sahil/lib/auth/middleware";

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // Skip routeGuard for these paths
  if (url.pathname === "/auth/signin" || url.pathname === "/unauthorized") {
    return NextResponse.next();
  }

  const { isAuthenticated, isAuthorized } = await routeGuard(
    req,
    agentAccessRules
  );

  if (!isAuthenticated) {
    url.pathname = "/auth/signin";
  } else if (!isAuthorized) {
    url.pathname = "/unauthorized";
  }

  if (!isAuthenticated || !isAuthorized) {
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
