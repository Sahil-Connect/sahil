import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { generateJWT, decodeJWT } from "./generateJWT";
import { HasuraAdapter } from "next-auth-hasura-adapter";
import { AuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import { request } from "graphql-request";
import { GET_ADDITIONAL_AUTH_USER_INFO } from "@sahil/lib/graphql";
import { emailServer } from "@sahil/lib/mailer";
import { sendVerificationRequest } from "./invite";
import { GetAdditionalAuthUserInfoQuery } from "@sahil/lib/graphql/__generated__/graphql";

const HASURA_ENDPOINT = process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT!;
const X_HASURA_ADMIN_SECRET = {
  "x-hasura-admin-secret": process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET!,
};

const providers = [
  GoogleProvider({
    clientId: process.env.NEXT_PUBLIC_GOOGLE_ID!,
    clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET!,
  }),
  EmailProvider({
    server: emailServer,
    from: process.env.EMAIL_FROM,
    sendVerificationRequest,
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
    verifyRequest: "/auth/verify", // Used for check email page
    newUser: "/auth/onboarding/user_details", // If set, new users will be directed here on first sign in
  };
};

const getAdditionalAuthUserInfo = async (userId: string) => {
  const { users_by_pk } = await request<GetAdditionalAuthUserInfoQuery>(
    HASURA_ENDPOINT,
    GET_ADDITIONAL_AUTH_USER_INFO,
    {
      id: userId,
    },
    X_HASURA_ADMIN_SECRET
  );
  return users_by_pk!;
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
        const user = await getAdditionalAuthUserInfo(token.sub!);

        const { hasCompletedOnboarding, role } = user;
        const allowedRoles = role ? [role, "user"] : ["user"];

        return {
          ...token,
          hasCompletedOnboarding,
          "https://hasura.io/jwt/claims": {
            "x-hasura-allowed-roles": allowedRoles,
            "x-hasura-default-role": allowedRoles[0],
            "x-hasura-role": role ?? "user",
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
