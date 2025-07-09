"use server"
import { Suspense } from "react";
import SpellViewPage from "./pageClient";

export default async function SpellInfoPage({
  params,
}: {
  params: Promise<{ spellName: string }>;
}) {
  const { spellName } = await params;

  return (
    <Suspense>
      <SpellViewPage spellName={spellName} />
    </Suspense>
  );
}
