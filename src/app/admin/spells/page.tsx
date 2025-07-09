import SpellLink from "@/components/SpellLink";
import { getAllSpells } from "@/server/fetchActions";

export default async function SpellsPage() {
  const spells = await getAllSpells();

  const spellButtons = () => {
    return spells.map((spell, index) => {
      return <SpellLink admin key={index} spellName={spell.name} />;
    });
  };

  return (
    <div className="flex max-w-7xl flex-wrap gap-4 p-4">{spellButtons()}</div>
  );
}
