import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  // Providers are included only if their env vars exist.
  providers: [
    ...(process.env.GOOGLE_ID && process.env.GOOGLE_SECRET
      ? [GoogleProvider({ clientId: process.env.GOOGLE_ID!, clientSecret: process.env.GOOGLE_SECRET! })]
      : []),
    ...(process.env.GITHUB_ID && process.env.GITHUB_SECRET
      ? [GithubProvider({ clientId: process.env.GITHUB_ID!, clientSecret: process.env.GITHUB_SECRET! })]
      : []),
  ],
  callbacks: {
    async session({ session }) {
      // Keep session minimal; no external SDKs here to ensure Edge/Node compatibility
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: "/login" },
};
