import { prisma } from "@/lib/prisma";
import SpellsForm from "./spellsForm";

export default async function EditSpellsPage({
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
  //fetch data for that spell
  //prepopulate data

  return (
    <SpellsForm
      spellName={spellName.charAt(0).toUpperCase() + spellName.slice(1)}
      aboutData={aboutData ?? undefined}
      buildData={buildData ?? undefined}
    />
  );
}
