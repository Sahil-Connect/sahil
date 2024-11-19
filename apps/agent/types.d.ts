// https://github.com/nextauthjs/next-auth/discussions/536#discussioncomment-1932922
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      address?: string;
    } & DefaultSession["user"];
  }
}
