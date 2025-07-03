import { tlConstructor } from "@/server/serverUtils";
import { prisma } from "@/lib/prisma";
import TierRow from "@/components/TierRow";
import { Suspense } from "react";

export default async function MetaReportPage() {
  //get tl id
  const tl = await prisma.tierlist.findUnique({
    where: { id: "cmcmmil5j0001hopk1ia9vppb" },
  });

  if (!tl) return <p>Not found</p>;

  const author = await prisma.user.findUnique({ where: { id: tl.authorId } });
  const theData = await tlConstructor(tl);

  return !tl ? (
    <p>No data???</p>
  ) : (
    <div className="place-items-center p-2">
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
            if (tier.tierName === "?") return;
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
