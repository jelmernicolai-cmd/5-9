import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth-options";

export const runtime = "nodejs";        // Ensure Node runtime (required by NextAuth)
export const dynamic = "force-dynamic"; // Avoid caching

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
