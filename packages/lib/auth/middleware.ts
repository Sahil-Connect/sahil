import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { routeGuard } from "@sahil/features/auth/lib/routeGuard";

export const agentAccessRules = [
  { path: "/", roles: ["user"] },
  { path: "/businesses", roles: ["user"] },
  { path: "/couriers", roles: ["user", "admin"] },
  // Add more rules as needed for agent
];

export const clientAccessRules = [
  { path: "/", roles: ["user", "business", "supplier"] },
  { path: "/products", roles: ["user"] },
  { path: "/orders", roles: ["user"] },
  { path: "/account", roles: ["user"] },
  { path: "/settings", roles: ["user"] },
  // Add more rules as needed for client
];

export async function middleware(
  req: NextRequest,
  accessRules: { path: string; roles: string[] }[],
  customLogic?: (req: NextRequest) => Promise<void>
) {
  const url = req.nextUrl.clone();

  // Skip routeGuard for these paths
  if (url.pathname === "/auth/signin" || url.pathname === "/unauthorized") {
    return NextResponse.next();
  }

  const { isAuthenticated, isAuthorized } = await routeGuard(req, accessRules);

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
