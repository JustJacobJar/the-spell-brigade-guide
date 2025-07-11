"use server";
import { Tierlist } from "@/generated/client";
import { prisma } from "@/lib/prisma";
import { Spell, Tier } from "@/lib/types";
import { tierClassNameLookup } from "@/lib/utils";

export const tlConstructor = async (tlData: Tierlist) => {
  const tlTiers = await prisma.tier.findMany({
    where: { listId: tlData.id },
  });

  const tiersFormatted = [
    ...tlTiers.map((tier) => {
      const tierRow: Tier = {
        tierId: tier.tierId,
        tierName: tier.name,
        tierClassname: tierClassNameLookup(tier.name),
        tierItems: [
          ...tier.spells.map((spell) => {
            return { spellName: spell } as Spell;
          }),
        ],
      };
      return tierRow;
    }),
  ];
  return tiersFormatted.sort((a, b) => Number(a.tierId) - Number(b.tierId));
};
