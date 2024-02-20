// @ts-ignore
import { HMAC } from "oslo/crypto";
import { createJWT, validateJWT, parseJWT } from "oslo/jwt";
import { TimeSpan } from "oslo";

export const generateJWTClaim = (token = {}, user = {}) => {
  const claims = {
// @ts-ignore
    sub: token?.sub.toString(),
    // @ts-ignore
    name: token?.name,
    // @ts-ignore
    email: token?.email,
    iat: Date.now() / 1000,
    // @ts-ignore
    userId: user.id,
    exp: new TimeSpan(30, "d"),
    "https://hasura.io/jwt/claims": {
      "x-hasura-allowed-roles": ["user"],
      "x-hasura-default-role": "user",
      "x-hasura-role": "user",
      // @ts-ignore
      "x-hasura-user-id": token.id,
    },
  };
  return claims;
};

// const secret = await new HMAC("SHA-256").generateKey();
// @ts-ignore
export const generateJWT = async (payload, { secret }) => {
  const jwt = await createJWT("HS256", secret, payload, {
    expiresIn: new TimeSpan(30, "d"),
    includeIssuedTimestamp: true,
    ...payload,
  });
  return jwt;
};
// @ts-ignore
export const decodeJWT = (token, { secret }) => {
  // @ts-ignore
    return jwt.verify(token, secret, { algorithms: ["HS256"] });
}