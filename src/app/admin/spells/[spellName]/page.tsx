import SpellsForm from "./spellsForm";

export default async function EditSpellsPage({
  params,
}: {
  params: Promise<{ spellName: string }>;
}) {
  const { spellName } = await params;

  //fetch data for that spell

  return (
    <SpellsForm
      spellName={spellName.charAt(0).toUpperCase() + spellName.slice(1)}
    />
  );
}
