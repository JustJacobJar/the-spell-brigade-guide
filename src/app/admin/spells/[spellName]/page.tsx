import { prisma } from "@/lib/prisma";
import SpellsForm from "./spellsForm";
import { getAllSpells } from "@/server/fetchActions";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

export default async function EditSpellsPage({
  params,
}: {
  params: Promise<{ spellName: string }>;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/");
  if (session.user.role !== "ADMIN") redirect("/"); //Change this to unauth page or signin

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
