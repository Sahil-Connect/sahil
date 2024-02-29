import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { routeGuard } from "@sahil/features/auth/lib/routeGuard";

const accessRules = [
  { path: "/businesses", roles: ["user"] },
  { path: "/courier", roles: ["user", "admin"] },
  // Add more rules as needed for app1
];

export async function middleware(req: NextRequest) {
  // const hasAccess = await routeGuard(req, accessRules);

  // if (!hasAccess) {
  //   // Redirect to login or unauthorized page
  //   const url = req.nextUrl.clone();
  //   url.pathname = "/auth/signin";
  //   return NextResponse.redirect(url);
  // }

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
