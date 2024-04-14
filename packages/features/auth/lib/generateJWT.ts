import { HMAC } from "oslo/crypto";
import { createJWT, validateJWT, parseJWT } from "oslo/jwt";
import { TimeSpan } from "oslo";
import jwt from "jsonwebtoken";
import { JWT } from "next-auth/jwt";

export const generateJWTClaim = (token: JWT) => {
  const claims = {
    sub: token?.sub?.toString(),
    name: token?.name,
    email: token?.email,
    iat: Date.now() / 1000,
    exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
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
  const encodedToken = jwt.sign(payload!, secret, { algorithm: "HS256" });
  return encodedToken;
};

export const decodeJWT = (token: any, { secret }: { secret: any }) => {
  const decodedToken = jwt.verify(token, secret, { algorithms: ["HS256"] });
  return decodedToken as JWT;
};

const stringToArrayBuffer = (str: string) => {
  var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
  var bufView = new Uint16Array(buf);
  for (var i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
};
