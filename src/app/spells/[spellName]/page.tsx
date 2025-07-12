"use server";
import { Suspense } from "react";
import SpellViewPage from "./pageClient";
import { prisma } from "@/lib/prisma";
import { getAllSpells } from "@/server/fetchActions";

export default async function SpellInfoPage({
  params,
}: {
  params: Promise<{ spellName: string }>;
}) {
  const { spellName } = await params;

  const spellList = (await getAllSpells()).map((li) => li.name);
  if (!spellList.includes(spellName)) {
    return <p>That spell does not exist</p>;
  }

  const aboutData = await prisma.spellAbout.findUnique({
    where: { spellName: spellName },
  });
  const buildData = await prisma.spellBuild.findUnique({
    where: { spellName: spellName },
  });

  return (
    <Suspense>
      <SpellViewPage
        spellName={spellName}
        aboutData={aboutData ?? undefined}
        buildData={buildData ?? undefined}
      />
    </Suspense>
  );
}
