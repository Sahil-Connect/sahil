import { NextRequest } from "next/server";
import { middleware as authMiddleware } from "@sahil/features/auth/lib/middleware";
import { ADMIN_ACCESS_RULES } from "@sahil/features/auth/lib/accessRules";

export async function middleware(req: NextRequest) {
  return authMiddleware(req, ADMIN_ACCESS_RULES);
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
