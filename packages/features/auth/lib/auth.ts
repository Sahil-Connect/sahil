import GitHub from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { generateJWT, decodeJWT } from "./generateJWT";
import { HasuraAdapter } from "next-auth-hasura-adapter";
import { AuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";

const providers = [
  // GitHub({
  //   clientId: process.env.NEXT_PUBLIC_GITHUB_ID!,
  //   clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET!,
  // }),
  GoogleProvider({
    clientId: process.env.NEXT_PUBLIC_GOOGLE_ID!,
    clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET!,
  }),
];

const jwtConfig = () => {
  return {
    // A secret to use for key generation (you should set this explicitly)
    secret: process.env.SECRET,
    encode: async ({ secret, token, maxAge }: any) => {
      // const claims = generateJWTClaim(token);

      const encodedToken = await generateJWT(token, {
        secret,
      });
      return encodedToken;
    },
    decode: async ({ secret, token, maxAge }: any) => {
      const decodedToken = decodeJWT(token, { secret });
      return decodedToken as JWT;
    },
  };
};

const authPagesConfig = () => {
  return {
    signIn: "/auth/signin", // Displays signin buttons
    signOut: "/auth/signout", // Displays form with sign out button
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // Used for check email page
    newUser: "/auth/new", // If set, new users will be directed here on first sign in
  };
};

const initNextAuth = (): AuthOptions => {
  return {
    providers,
    adapter: HasuraAdapter({
      endpoint: process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT!,
      adminSecret: process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET!,
    }),
    secret: process.env.SECRET,
    jwt: jwtConfig(),
    pages: authPagesConfig(),
    session: {
      strategy: "jwt",
    },
    callbacks: {
      async session({ session, token }) {
        if (session?.user) {
          session.user.id = token.sub!;
        }
        return session;
      },
      async jwt({ token }) {
        return {
          ...token,
          "https://hasura.io/jwt/claims": {
            "x-hasura-allowed-roles": ["user"],
            "x-hasura-default-role": "user",
            "x-hasura-role": "user",
            "x-hasura-user-id": token.sub!,
          },
        };
      },
      // @ts-ignore
      async signIn({ user, account, profile, email, credentials }) {
        return true;
      },
    },

    // Events are useful for logging
    // https://next-auth.js.org/configuration/events
    events: {},

    // Enable debug messages in the console if you are having problems
    debug: true,
  };
};

export default initNextAuth;
