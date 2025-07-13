"use server";
import { Tierlist } from "@/generated/client";
import { prisma } from "@/lib/prisma";
import { Spell, Tier } from "@/lib/types";
import { tierClassNameLookup } from "@/lib/utils";
import { getAllSpells } from "./fetchActions";

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

const fallbackBaseSpells: Spell[] = [
  { spellName: "Aether_beam" },
  { spellName: "Arcane_broadsword" },
  { spellName: "Astral_orbs" },
  { spellName: "Aurora_wings" },
  { spellName: "Chthonic_charge" },
  { spellName: "Falling_stars" },
  { spellName: "Hex_bomb" },
  { spellName: "Magic_missile" },
  { spellName: "Moonerang" },
  { spellName: "Necro_whirl" },
  { spellName: "Phantom_blades" },
  { spellName: "Rocky_road" },
  { spellName: "Rune_burst" },
  { spellName: "Scepter_mesh" },
  { spellName: "Vengeful_sprout" },
  { spellName: "Talon_slash" },
  { spellName: "Impish_havoc" },
  { spellName: "Solar_pulse" },
];

/**
 * @returns A populated Tier[] using either latest list in db or latest list as of build
 */
export const baseTlConstructor = async () => {
  //get spells
  const spells = await getAllSpells();

  //Check if we found all know spells as of build
  const spellsFormatted = () => {
    if (spells.length < fallbackBaseSpells.length) {
      return fallbackBaseSpells;
    }
    return spells.map((spell) => {
      return { spellName: spell.name } as Spell;
    });
  };

  const tiers: Tier[] = [
    {
      tierId: "0",
      tierName: "S",
      tierClassname: "bg-red-400",
      tierItems: [],
    },
    {
      tierId: "1",
      tierName: "A",
      tierClassname: "bg-orange-400",
      tierItems: [],
    },
    {
      tierId: "2",
      tierName: "B",
      tierClassname: "bg-amber-400",
      tierItems: [],
    },
    {
      tierId: "3",
      tierName: "C",
      tierClassname: "bg-yellow-400",
      tierItems: [],
    },
    {
      tierId: "4",
      tierName: "D",
      tierClassname: "bg-lime-400",
      tierItems: [],
    },
    {
      tierId: "5",
      tierName: "F",
      tierClassname: "bg-green-400",
      tierItems: [],
    },
    {
      tierId: "6",
      tierName: "?",
      tierClassname: "bg-gray-400",
      tierItems: [...spellsFormatted()],
    },
  ]; //hand made tier list data confirmed working
  return tiers;
};
