import { HMAC } from "oslo/crypto";
import { createJWT, validateJWT, parseJWT } from "oslo/jwt";
import { TimeSpan } from "oslo";

export const generateJWTClaim = (token) => {
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

export const generateJWT = async (payload, { secret }) => {
  const jwt = await createJWT("HS256", secret, payload, {
    expiresIn: new TimeSpan(30, "d"),
    includeIssuedTimestamp: true,
    ...payload,
  });
  return jwt;
};

export const decodeJWT = (token, { secret }) => {
  return jwt.verify(token, secret, { algorithms: ["HS256"] });
};
