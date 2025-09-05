import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { stripe } from "@/lib/stripe";

export const authOptions: NextAuthOptions = {
  providers: [
    ...(process.env.GOOGLE_ID && process.env.GOOGLE_SECRET
      ? [GoogleProvider({ clientId: process.env.GOOGLE_ID!, clientSecret: process.env.GOOGLE_SECRET! })]
      : []),
    ...(process.env.GITHUB_ID && process.env.GITHUB_SECRET
      ? [GithubProvider({ clientId: process.env.GITHUB_ID!, clientSecret: process.env.GITHUB_SECRET! })]
      : []),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Voorbeeld: Stripe klant koppelen op eerste login
      if (user && !token.stripeCustomerId) {
        try {
          const customer = await stripe.customers.create({
            email: user.email || undefined,
            name: user.name || undefined
          });
          (token as any).stripeCustomerId = customer.id;
        } catch {
          // non-fatal
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).stripeCustomerId = (token as any).stripeCustomerId;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  }
};
