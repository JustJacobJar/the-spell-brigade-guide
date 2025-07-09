"use client";

import { GITSPRITEURL } from "@/lib/types";
import { getSpellAbout } from "@/server/fetchActions";
import { useQueryClient } from "@tanstack/react-query";
import ImageUnop from "./ImageUnop";
import Link from "next/link";

export default function SpellLink({
  spellName,
  admin = false,
}: {
  spellName: string;
  admin?: boolean;
}) {
  const queryClient = useQueryClient();

  const prefetchAboutSpell = () => {
    queryClient.prefetchQuery({
      queryKey: ["about", spellName],
      queryFn: () => getSpellAbout(spellName),
      // Prefetch only fires when data is older than the staleTime,
      // so in a case like this you definitely want to set one
      staleTime: 60000,
    });
  };

  const link = admin ? `/admin/spells/${spellName}` : `/spells/${spellName}`;

  return (
    <Link
      onMouseEnter={prefetchAboutSpell}
      className="btn btn-outline btn-neutral btn-square size-32 p-2"
      href={link}
    >
      <ImageUnop alt="Spell Icon" src={GITSPRITEURL(spellName)} />
    </Link>
  );
}
