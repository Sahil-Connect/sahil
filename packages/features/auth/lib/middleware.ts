import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { routeGuard } from "@sahil/features/auth/lib/routeGuard";
import { ON_BOARDING_STEPS } from "@sahil/lib/hooks/formStores/useOnBoardingFormStore";

export const skippedRoutes = [
  "/auth/signin",
  "/auth/error",
  "/auth/verify-request",
  "/unauthorized",
  "/auth/new/user_details",
  // Add more routes as needed
];

export const onboardingRoutes = ON_BOARDING_STEPS.map(
  (route) => `/auth/new/${route}`
);

export async function middleware(
  req: NextRequest,
  accessRules: { path: string; roles: string[] }[],
  customLogic?: (req: NextRequest) => Promise<void>
) {
  const url = req.nextUrl.clone();

  // Skip routeGuard for these paths
  if (skippedRoutes.includes(url.pathname)) {
    return NextResponse.next();
  }

  const { isAuthenticated, isAuthorized, hasCompletedOnboarding } =
    await routeGuard(req, accessRules);

  console.log(isAuthenticated, isAuthorized, hasCompletedOnboarding);

  const isOnboardingRoute = onboardingRoutes.includes(url.pathname);
  const shouldRedirectFromOnboarding =
    hasCompletedOnboarding && isOnboardingRoute;

  if (!isAuthenticated) {
    url.pathname = "/auth/signin";
  } else if (shouldRedirectFromOnboarding) {
    url.pathname = "/";
  } else if (!hasCompletedOnboarding) {
    url.pathname = "/auth/new/user_details";
  } else if (!isAuthorized) {
    url.pathname = "/unauthorized";
  }

  if (
    shouldRedirectFromOnboarding ||
    !isAuthenticated ||
    !hasCompletedOnboarding ||
    !isAuthorized
  ) {
    return NextResponse.redirect(url);
  }

  // Run the custom logic for the app, if provided
  if (customLogic) {
    await customLogic(req);
  }

  return NextResponse.next();
}
