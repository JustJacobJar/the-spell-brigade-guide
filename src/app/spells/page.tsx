import SpellLink from "@/components/SpellLink";
import { getAllSpells } from "@/server/fetchActions";
import { Suspense } from "react";

export const dynamic = 'force-dynamic'

export default async function SpellsPage() {
  const spells = await getAllSpells();

  const spellButtons = () => {
    return spells.map((spell, index) => {
      return <SpellLink key={index} spellName={spell.name} />;
    });
  };

  return (
    <Suspense fallback={<p>LOADING...</p>}>
      <div className="flex max-w-7xl flex-wrap gap-4 p-4 place-content-center">{spellButtons()}</div>
    </Suspense>
  );
}
