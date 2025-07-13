"use server";
import { Suspense } from "react";
import SpellViewPage from "./pageClient";
import { prisma } from "@/lib/prisma";
import { getAllSpells } from "@/server/fetchActions";
import { CapFirstLetter } from "@/lib/utils";

export default async function SpellInfoPage({
  params,
}: {
  params: Promise<{ spellName: string }>;
}) {
  const { spellName } = await params;
  const spell = CapFirstLetter(spellName)

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

  return (
    <Suspense>
      <SpellViewPage
        spellName={spell}
        aboutData={aboutData ?? undefined}
        buildData={buildData ?? undefined}
        reviewData={reviewData ?? undefined}
      />
    </Suspense>
  );
}
