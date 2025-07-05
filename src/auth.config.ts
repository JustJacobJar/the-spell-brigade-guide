import { PrismaAdapter } from "@auth/prisma-adapter";
import { PoolConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { NextAuthConfig } from "next-auth";
import { Provider } from "next-auth/providers";
import GitHub from "next-auth/providers/github";
import { PrismaClient } from "../generated/prisma";

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

const neon: PoolConfig = {
  connectionString: process.env.AUTH_POSTGRES_PRISMA_URL,
};
const adapter = new PrismaNeon(neon);
const prisma = new PrismaClient({ adapter });

export default {
  adapter: PrismaAdapter(prisma),
  providers: providers,
} satisfies NextAuthConfig;
