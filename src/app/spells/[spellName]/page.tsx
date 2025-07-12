"use server";
import { Suspense } from "react";
import SpellViewPage from "./pageClient";
import { prisma } from "@/lib/prisma";

export default async function SpellInfoPage({
  params,
}: {
  params: Promise<{ spellName: string }>;
}) {
  const { spellName } = await params;

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
