// import type { DefaultUser, DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    // A JWT which can be used as Authorization header with supabase-js for RLS.
    supabaseAccessToken?: string;
    user: {
      // The user's role
      role: string;
      // The user's id
      id: string;
    } & DefaultSession["user"];
  }
  interface User {
    id: string;
    role: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    uid: string;
    role: string;
  }
}
