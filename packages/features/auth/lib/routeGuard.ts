import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';
import jwt, { JwtPayload } from 'jsonwebtoken';

interface AccessRule {
  path: string;
  roles: string[];
}

const authPaths = {
  signIn: '/auth/signin',
  signOut: '/auth/signout',
  error: '/auth/error',
  verifyRequest: '/auth/verify-request',
  newUser: '/auth/new',
};

const secret = process.env.SECRET;

export const routeGuard = async (
  req: NextRequest,
  accessRules: AccessRule[]
) => {
  const { pathname } = new URL(req.url, `http://${req.headers.get('host')}`);

  // Bypass route guard for authentication-related paths
  if (Object.values(authPaths).includes(pathname)) {
    return true;
  }

  try {
    const rawToken: string = await getToken({ req, secret, raw: true });
    if (!rawToken) return false; // Handle case where token is not found

    const payload = jwt.verify(rawToken, secret!, {
      algorithms: ['HS256'],
    }) as JwtPayload;

    console.log(payload);
    // If there's no specific access control defined, allow by default
    const rule = accessRules.find((rule) => pathname.includes(rule.path));
    if (!rule) return true;

    // Check if the user's role matches any of the roles required by the rule
    const userRole = payload['https://hasura.io/jwt/claims']['x-hasura-role'];
    return rule.roles.includes(userRole);
  } catch (error) {
    console.error('Token verification error:', error);
    return false; // Return false or handle the error as needed
  }
};
