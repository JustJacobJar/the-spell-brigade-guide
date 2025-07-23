"use server";
import { Tierlist } from "@/generated/client";
import { prisma } from "@/lib/prisma";
import { Spell, Tier } from "@/lib/types";
import { tierClassNameLookup } from "@/lib/utils";
import { getAllSpells } from "./fetchActions";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

/**
 *
 * @param array to check for duplicates
 * @returns true if there are duplicates
 */
function checkForDuplicates(array: any[]) {
  const mySet = new Set(array);
  if (mySet.size !== array.length) return true;
  return false;
}

/**
 *
 * @param tierListId The id of the tierlist to fetch related tiers from the db.
 * @returns Tier[] using input tierlist id to find all related rows
 */
export const tlConstructor = async (tierListId: string) => {
  const tlTiers = await prisma.tier.findMany({
    where: { listId: tierListId },
  });

  //get all spells in the current tierlist
  const allSpells: string[] = [];
  tlTiers.forEach((row) => {
    row.spells.forEach((spell) => allSpells.push(spell));
  });

  //check for duplicate spells
  //In the case that there are duplicates, return a new base tierlist
  if (checkForDuplicates(allSpells)) return await baseTlConstructor();

  //Missing spells in this tier list
  const missingSpells = fallbackBaseSpells.filter(
    (item) => allSpells.indexOf(item.spellName) < 0,
  );

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
      //add missing spells to the "?" tier
      if (tierRow.tierName === "?") tierRow.tierItems.push(...missingSpells);
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

export async function checkAuthAdmin() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/");
  if (session.user.role !== "ADMIN") redirect("/"); //Change this to unauth page or signin
}
