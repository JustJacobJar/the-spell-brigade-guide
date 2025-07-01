import { DefaultSession, NextAuthConfig } from "next-auth";
import { Provider } from "next-auth/providers";
import GitHub from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma";
import { Role } from "../../generated/prisma";

declare module "next-auth" {
    /**
   * The shape of the user object returned in the OAuth providers' `profile` callback,
   * or the second parameter of the `session` callback, when using a database.
   */
  interface User {
    role: Role
  }
  /**
   * The shape of the account object returned in the OAuth providers' `account` callback,
   * Usually contains information about the provider being used, like OAuth tokens (`access_token`, etc).
   */
  // interface Account {}
 
  /**
   * Returned by `useSession`, `auth`, contains information about the active session.
   */
  interface Session {
    user:{
      role:string
    } & DefaultSession["user"]
  } 
}

const providers: Provider[] = [
  GitHub({
    clientId: process.env.AUTH_GITHUB_ID,
    clientSecret: process.env.AUTH_GITHUB_SECRET,
    allowDangerousEmailAccountLinking: true,
  }),
];

export const providerMap = providers
  .map((provider) => {
    if (typeof provider === "function") {
      const providerData = provider();
      return { id: providerData.id, name: providerData.name };
    } else {
      return { id: provider.id, name: provider.name };
    }
  })
  .filter((provider) => provider.id !== "credentials");

  
export default {
    adapter: PrismaAdapter(prisma),
  
  // pages: { signIn: "/signin" },
  providers: providers,
  session: {strategy:"database"},
  callbacks: {
    // Callback to manage the session object
    // session: async ({ session, token }) => {
    //   if (token) {
    //     session.user.id = token.id as string;
    //   }
    //   return session;
    // },

    
    session({ session,user }) {
      session.user.role = user.role;
      return session;
    },

    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth;
    },
  },
} satisfies NextAuthConfig;
