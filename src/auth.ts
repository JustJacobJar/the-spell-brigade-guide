import NextAuth from "next-auth";
import authConfig from "./auth.config";

export const {
  handlers,
  auth,
  signIn,
  signOut,
  unstable_update: update,
} = NextAuth({
  ...authConfig,
  // pages: { signIn: "/signin" },
  session: { strategy: "database" },
  callbacks: {
    session({ session, user }) {
      session.user.role = user.role;
      return session;
    },

    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth;
    },
  },
});
