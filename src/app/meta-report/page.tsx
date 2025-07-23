import { tlConstructor } from "@/server/serverUtils";
import { prisma } from "@/lib/prisma";
import TierRow from "@/components/TierRow";
import { MyMDXViewer } from "@/components/markup/ForwardRefEditor";

export const dynamic = "force-dynamic";

export default async function MetaReportPage() {
  //Fetch the latest meta report
  const metaReport = await prisma.metaReport.findFirst({
    orderBy: { id: "desc" },
  });

  if (!metaReport) return <p>There are no meta reports as of now</p>;

  const tl = await prisma.tierlist.findUnique({
    where: { id: metaReport.tierlistId },
  });

  if (!tl) return <p>The meta report is empty!</p>;

  const author = await prisma.user.findUnique({ where: { id: tl.authorId } });
  const tiers = await tlConstructor(tl.id);

  return (
    <div className="p-2">
      <div className="rounded-box border-base-200 bg-base-300 flex flex-col gap-2 border-2 p-2">
        <div className="pl-1">
          <h1 className="text-2xl">{metaReport.title}</h1>
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
        <div>
          <MyMDXViewer markdown={metaReport.content} />
        </div>
      </div>
    </div>
  );
}
