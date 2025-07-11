"use server";
import { Suspense } from "react";
import SpellViewPage from "./pageClient";
import { getSpellAbout } from "@/server/fetchActions";

export default async function SpellInfoPage({
  params,
}: {
  params: Promise<{ spellName: string }>;
}) {
  const { spellName } = await params;

  const aboutData = await getSpellAbout(spellName);

  return (
    <Suspense>
      <SpellViewPage spellName={spellName} aboutData={aboutData} />
    </Suspense>
  );
}
