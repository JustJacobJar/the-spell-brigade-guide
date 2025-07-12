import SpellLink from "@/components/SpellLink";
import { auth } from "@/lib/auth";
import { getAllSpells } from "@/server/fetchActions";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function SpellsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/");
  if (session.user.role !== "ADMIN") redirect("/"); //Change this to unauth page or signin

  const spells = await getAllSpells();

  if (spells.length <= 0) return <p>Spell Button List</p>;

  const spellButtons = () => {
    return spells.map((spell, index) => {
      return <SpellLink admin key={index} spellName={spell.name} />;
    });
  };

  return (
    <div className="flex max-w-7xl flex-wrap gap-4 p-4">{spellButtons()}</div>
  );
}
