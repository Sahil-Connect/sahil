import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";
import type { NextApiRequest } from "next";
import jwt, { JwtPayload } from "jsonwebtoken";

interface AccessRule {
  path: string;
  roles: string[];
}

const authPaths = {
  signIn: "/auth/signin",
  signOut: "/auth/signout",
  error: "/auth/error",
  verifyRequest: "/auth/verify-request",
  newUser: "/auth/new",
};

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
): Promise<{ isAuthorized: boolean; isAuthenticated: boolean }> => {
  const { pathname } = new URL(req.url, `http://${req.headers.get("host")}`);

  if (Object.values(authPaths).includes(pathname)) {
    return { isAuthenticated: true, isAuthorized: true };
  }

  const matchingRule = accessRules.find((rule) => pathname.includes(rule.path));
  if (!matchingRule) return { isAuthenticated: true, isAuthorized: true };

  const rawToken = await fetchToken(req);
  if (!rawToken) return { isAuthenticated: false, isAuthorized: false };

  const protocol = req.headers.get("x-forwarded-proto") || "http";
  const host = req.headers.get("host");
  if (!host) {
    console.error("Host header is undefined");
    return { isAuthenticated: false, isAuthorized: false };
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
  const isAuthorized = matchingRule.roles.includes(userRole);
  return { isAuthenticated: !!userRole, isAuthorized };
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
