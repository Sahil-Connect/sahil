import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";
import type { NextApiRequest } from "next";
import jwt, { JwtPayload } from "jsonwebtoken";
import { skippedRoutes } from "./middleware";

interface AccessRule {
  path: string;
  roles: string[];
}

const secret = process.env.SECRET;

const fetchToken = async (req: NextRequest) => {
  try {
    return await getToken({ req, secret, raw: true });
  } catch (error) {
    console.error("Error fetching token:", error);
    return null;
  }
};

export const routeGuard = async (
  req: NextRequest,
  accessRules: AccessRule[]
): Promise<{
  isAuthorized: boolean;
  isAuthenticated: boolean;
  hasCompletedOnboarding: boolean;
}> => {
  const url = req.nextUrl.clone();

  const rawToken = await fetchToken(req);
  if (!rawToken)
    return {
      isAuthenticated: false,
      isAuthorized: false,
      hasCompletedOnboarding: false,
    };

  const protocol = req.headers.get("x-forwarded-proto") || "http";
  const host = req.headers.get("host");

  if (!host) {
    console.error("Host header is undefined");
    return {
      isAuthenticated: false,
      isAuthorized: false,
      hasCompletedOnboarding: false,
    };
  }

  const apiUrl = `${protocol}://${host}/api/auth/token`;

  const response = await fetch(apiUrl, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${rawToken}`,
    },
  });
  const payload = await response.json();

  const userRole: string =
    payload?.["https://hasura.io/jwt/claims"]?.["x-hasura-role"];

  // Extract the hasCompletedOnboarding field from the payload
  const hasCompletedOnboarding: boolean =
    payload?.hasCompletedOnboarding || false;

  if (skippedRoutes.includes(url.pathname)) {
    return {
      isAuthenticated: true,
      isAuthorized: true,
      hasCompletedOnboarding,
    };
  }

  const matchingRule = accessRules.find((rule) =>
    url.pathname.includes(rule.path)
  );
  if (!matchingRule)
    return {
      isAuthenticated: true,
      isAuthorized: true,
      hasCompletedOnboarding,
    };

  const isAuthorized = matchingRule.roles.includes(userRole);

  return { isAuthenticated: !!userRole, isAuthorized, hasCompletedOnboarding };
};

export const getIdTokenClaims = async (req: NextRequest | NextApiRequest) => {
  try {
    const authHeader = (req.headers as any)["authorization"] || "";
    const rawToken = authHeader.replace("Bearer ", "");

    if (!rawToken) {
      console.log("Token not found");
      return false;
    }

    const payload = jwt.verify(rawToken, secret!, {
      algorithms: ["HS256"],
    }) as JwtPayload;

    return payload;
  } catch (error) {
    console.log("Error in getIdTokenClaims: ", error);
    return false;
  }
};
