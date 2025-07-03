import { Icon } from "@/components/dnd/DataCard";
import { prisma } from "@/lib/prisma";
import { Spell, Tier } from "@/lib/types";
import { cn, tierClassNameLookup } from "@/lib/utils";
import { Tierlist } from "../../../../generated/prisma";
import { tlConstructor } from "@/server/serverUtils";
import TierRow from "@/components/TierRow";

export default async function ViewTierListPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  //get tl id
  const tl = await prisma.tierlist.findUnique({ where: { id: id } });

  if (!tl) return <p>Not found</p>;

  const author = await prisma.user.findUnique({ where: { id: tl.authorId } });

  const theData = await tlConstructor(tl);

  return !tl ? (
    <p>No data???</p>
  ) : (
    <div className="place-items-center">
      <div className="flex flex-col gap-2 rounded-md border-2 bg-neutral-900 p-2">
        <div className="pl-1">
          <h1 className="text-2xl">{tl.name}</h1>
          <h2 className="text-lg">
            Author: {author ? author.name : "Unknown"}
          </h2>
        </div>
        {/* Table */}
        <div>
          {theData.map((tier, index) => {
            return <TierRow tier={tier} key={index} />;
          })}
        </div>
        <p className="p-1">
          {tl.descripton ? tl.descripton : "No description..."}
        </p>
      </div>
    </div>
  );
}
