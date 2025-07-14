"use server";
import { prisma } from "@/lib/prisma";
import SpellsForm from "./spellsForm";
import { getAllSpells } from "@/server/fetchActions";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { CapFirstLetter } from "@/lib/utils";

export default async function EditSpellsPage({
  params,
}: {
  params: Promise<{ spellName: string }>;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/");
  if (session.user.role !== "ADMIN") redirect("/"); //Change this to unauth page or signin

  const { spellName } = await params;
  const spell = CapFirstLetter(spellName);

  const spellList = (await getAllSpells()).map((li) => li.name);
  if (!spellList.includes(spell)) {
    return <p>That spell does not exist</p>;
  }

  const aboutData = await prisma.spellAbout.findUnique({
    where: { spellName: spell },
  });
  const buildData = await prisma.spellBuild.findUnique({
    where: { spellName: spell },
  });
  const reviewData = await prisma.spellReview.findUnique({
    where: { spellName: spell },
  });

  //fetch data for that spell
  //prepopulate data

  return (
    <SpellsForm
      spellName={spell}
      aboutData={aboutData ?? undefined}
      buildData={buildData ?? undefined}
      reviewData={reviewData ?? undefined}
    />
  );
}
