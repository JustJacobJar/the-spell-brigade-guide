import { DefaultSession } from "next-auth";
import { Role } from "../../generated/prisma";

export type Tier = {
  tierId: string;
  tierName: string;
  tierClassname: string;
  tierItems: Spell[];
};
export type Spell = { spellName: string }; //Spell name should match api for images and such
export const GITSPRITEURL = (spellName: string) =>
  `https://raw.githubusercontent.com/JustJacobJar/the-spell-brigade-sprites/master/sprites/spells/${spellName}.png`;

declare module "next-auth" {
  /**
   * The shape of the user object returned in the OAuth providers' `profile` callback,
   * or the second parameter of the `session` callback, when using a database.
   */
  interface User {
    role: Role;
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
    user: {
      role: string;
    } & DefaultSession["user"];
  }
}
