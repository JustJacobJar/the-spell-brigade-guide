import { tlConstructor } from "@/server/serverUtils";
import { prisma } from "@/lib/prisma";
import TierRow from "@/components/TierRow";

export default async function MetaReportPage() {
  //get tl id
  const tl = await prisma.tierlist.findUnique({
    where: { id: "cmcmmil5j0001hopk1ia9vppb" },
  });

  if (!tl) return <p>Not found</p>;

  const author = await prisma.user.findUnique({ where: { id: tl.authorId } });
  const tiers = await tlConstructor(tl);

  return !tl ? (
    <p>No data???</p>
  ) : (
    <div className="p-2">
      <div className="rounded-box border-base-200 bg-base-300 flex flex-col gap-2 border-2 p-2">
        <div className="pl-1">
          <h1 className="text-2xl">{tl.name}</h1>
          <h2 className="text-lg">
            Author: {author ? author.name : "Unknown"}
          </h2>
        </div>
        {/* Table */}
        <div className="join join-vertical">
          {tiers.map((tier, index) => {
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
