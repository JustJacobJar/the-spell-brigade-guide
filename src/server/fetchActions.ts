"use server";

import { prisma } from "@/lib/prisma";

export async function getAllSpells() {
  const spells = await prisma.spellsView.findMany();
  return spells;
}
