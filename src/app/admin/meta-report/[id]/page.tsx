import {
  baseTlConstructor,
  checkAuthAdmin,
  tlConstructor,
} from "@/server/serverUtils";
import MetaReportForm from "../MetaReportForm";
import { prisma } from "@/lib/prisma";

export default async function MetaReportEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  await checkAuthAdmin();

  if (Number.isNaN(Number(id))) {
    throw "meta-report/[id] url id is not a number";
  }

  //Fetch the meta report
  const metaReport = await prisma.metaReport.findUnique({
    where: { id: Number(id) },
  });

  if (metaReport === null) throw `meta report [${id}] does not exist`;
  /**
   * fetch tl by id
   * in the case it fails, populate tl with base.
   */
  const tiers = await tlConstructor(metaReport.tierlistId);

  return (
    <div>
      <MetaReportForm
        tierData={tiers}
        metaId={metaReport.id}
        metaTitle={metaReport.title}
        metaContent={metaReport.content}
        edit
      />
    </div>
  );
}
