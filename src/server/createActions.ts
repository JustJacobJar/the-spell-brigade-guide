"use server";

import * as z from "zod/v4";
import { auth } from "@/lib/auth";
import { Tier } from "@/lib/types";
import { prisma } from "@/lib/prisma";

export async function createTierlist(
  tierList: Tier[],
  title: string,
  description: string,
) {
  //Auth user
  const session = await auth();

  if (!session) {
    //Not auth to make a list
    throw "401: Not Authorized";
  }

  //Validate
  const validatedTL = await ZtierList.safeParseAsync(tierList);
  const validatedTitle = await z.safeParseAsync(z.string().default(""), title);
  const validatedDesc = await z.safeParseAsync(
    z.string().default(""),
    description,
  );
  if (validatedTL.error) throw "There was an error parsing tierList data";
  if (validatedTitle.error) throw "There was an error parsing title data";
  if (validatedDesc.error) throw "There was an error parsing description data";

  //Upload to db
  await prisma.tierlist.create({
    data: {
      authorId: session.user.id!,
      name: validatedTitle.data,
      descripton: validatedDesc.data,
      tiers: {
        create: [
          ...validatedTL.data.map((tl) => {
            return {
              name: tl.tierName,
              tierId: tl.tierId,
              spells: [...tl.tierItems.map((data) => data.spellName)],
            };
          }),
        ],
      },
    },
  });

  return "We be gaming";
}

const spell = z.object({
  spellName: z.string(),
});

const ZtierList = z.array(
  z.object({
    tierId: z.string(),
    tierName: z.string(),
    tierClassname: z.string(),
    get tierItems() {
      return z.array(spell);
    },
  }),
);
