"use server";
import SpellLink from "@/components/SpellLink";
import { getAllSpells } from "@/server/fetchActions";

export default async function SpellsPage() {
  const spells = await getAllSpells();

  if (spells.length <= 0) return <p>Spell Button List</p>;

  const spellButtons = () => {
    return spells.map((spell, index) => {
      return <SpellLink key={index} spellName={spell.name} />;
    });
  };

  return (
    <div className="flex max-w-7xl flex-wrap gap-4 p-4">{spellButtons()}</div>
  );
}
