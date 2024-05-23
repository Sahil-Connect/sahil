import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { routeGuard } from "@sahil/features/auth/lib/routeGuard";

export const agentAccessRules = [
  { path: "/", roles: ["user"] },
  { path: "/businesses", roles: ["user"] },
  { path: "/couriers", roles: ["user", "admin"] },
  // Add more rules as needed for app1
];

export async function middleware(
  req: NextRequest,
  customLogic?: (req: NextRequest) => Promise<void>
) {
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

  // Run the custom logic for the app, if provided
  if (customLogic) {
    await customLogic(req);
  }

  return NextResponse.next();
}
