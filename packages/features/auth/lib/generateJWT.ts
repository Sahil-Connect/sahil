import { HMAC } from "oslo/crypto";
import { createJWT, validateJWT, parseJWT } from "oslo/jwt";
import { TimeSpan } from "oslo";
import jwt from "jsonwebtoken";

export const generateJWTClaim = (token: any) => {
  const claims = {
    sub: token?.sub.toString(),
    name: token?.name,
    email: token?.email,
    iat: Date.now() / 1000,
    exp: new TimeSpan(30, "d"),
    "https://hasura.io/jwt/claims": {
      "x-hasura-allowed-roles": ["user"],
      "x-hasura-default-role": "user",
      "x-hasura-role": "user",
      "x-hasura-user-id": token.id,
    },
  };
  return claims;
};

// const secret = await new HMAC("SHA-256").generateKey();

export const generateJWT = async (
  payload:
    | Record<any, any>
    | {
        headers?: Record<any, any> | undefined;
        expiresIn?: TimeSpan | undefined;
        issuer?: string | undefined;
        subject?: string | undefined;
        audiences?: string[] | undefined;
        notBefore?: Date | undefined;
        includeIssuedTimestamp?: boolean | undefined;
        jwtId?: string | undefined;
      }
    | undefined,
  { secret }: { secret: any }
) => {
  const jwt = await createJWT("HS256", secret, payload!, {
    expiresIn: new TimeSpan(30, "d"),
    includeIssuedTimestamp: true,
    ...payload,
  });
  return jwt;
};

export const decodeJWT = (token: any, { secret }: { secret: any }) => {
  return jwt.verify(token, secret, { algorithms: ["HS256"] });
};
