import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import { generateJWT, generateJWTClaim, decodeJWT } from "./generateJWT";

const providers = [
  // @ts-ignore
  CredentialsProvider({
    async authorize(credentials) {
      console.log("we here!!");
      console.log(credentials);
      const authResponse = await fetch("http://localhost:8000/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      console.log(authResponse);

      // if (!authResponse.ok) {
      //   return null
      // }

      const user = await authResponse.json();

      return user;
    },
  }),
  FacebookProvider({
    clientId: process.env.NEXT_PUBLIC_GITHUB_ID || "",
    clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET || "",
  }),
  GoogleProvider({
    clientId: process.env.NEXT_PUBLIC_GITHUB_ID || "",
    clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET || "",
  }),
];

const jwtConfig = (options: any) => {
  return {
    // A secret to use for key generation (you should set this explicitly)
    secret: process.env.SECRET,
    encode: async ({ secret, token, maxAge }: any) => {
      const claims = generateJWTClaim(token);

      const encodedToken = generateJWT(claims, {
        secret,
      });
      return encodedToken;
    },
    decode: async ({ secret, token, maxAge }: any) => {
      const decodedToken = decodeJWT(token, { secret });
      return decodedToken;
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

const initNextAuth = () => {
  return {
    providers,
    secret: process.env.SECRET,
    // jwt: jwtConfig,
    pages: authPagesConfig(),
    callbacks: {
      // @ts-ignore
      async session({ session, token }) {
        // @ts-ignore
        const encodedToken = jwt.sign(token, process.env.SECRET, {
          algorithm: "HS256",
        });
        // @ts-ignore
        session.token = encodedToken;
        // @ts-ignore
        session.id = token.id;
        return session;
      },
      // @ts-ignore
      async jwt({ token, user, profile, account, isNewUser }) {
        const isAuthenticated = user ? true : false;
        if (isAuthenticated) {
          token.id = user.id;
        }
        return Promise.resolve(token);
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
