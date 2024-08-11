import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { routeGuard } from "@sahil/features/auth/lib/routeGuard";
import { ON_BOARDING_STEPS } from "@sahil/lib/hooks/formStores/useOnBoardingFormStore";

export const skippedRoutes = [
  "/auth/signin",
  "/auth/error",
  "/auth/verify-request",
  "/auth/onboarding/user_details",
  "/unauthorized",
  // Add more routes as needed
];

export const onboardingRoutes = ON_BOARDING_STEPS.map(
  (route) => `/auth/onboarding/${route}`
);

export async function middleware(
  req: NextRequest,
  accessRules: { path: string; roles: string[] }[],
  customLogic?: (req: NextRequest) => Promise<void>
) {
  const url = req.nextUrl.clone();

  const { isAuthenticated, isAuthorized, hasCompletedOnboarding } =
    await routeGuard(req, accessRules);

  const isOnboardingRoute = onboardingRoutes.includes(url.pathname);
  const shouldRedirectFromOnboarding =
    hasCompletedOnboarding && isOnboardingRoute;

  // Skip routeGuard for these paths
  if (skippedRoutes.includes(url.pathname) && !shouldRedirectFromOnboarding) {
    return NextResponse.next();
  }

  if (!isAuthenticated) {
    url.pathname = "/auth/signin";
  } else if (shouldRedirectFromOnboarding) {
    url.pathname = "/";
    url.search = "";
  } else if (!hasCompletedOnboarding) {
    url.pathname = "/auth/onboarding/user_details";
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
