import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
    }),
  ],
  secret: process.env.SECRET,
  jwt: {
    // A secret to use for key generation (you should set this explicitly)
    secret: process.env.SECRET,
  },
  pages: {
    signIn: "/auth/signin", // Displays signin buttons
    signOut: "/auth/signout", // Displays form with sign out button
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // Used for check email page
    newUser: "/auth/new", // If set, new users will be directed here on first sign in
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
  },

  // Events are useful for logging
  // https://next-auth.js.org/configuration/events
  events: {},

  // Enable debug messages in the console if you are having problems
  debug: true,
})