import MetaReportForm from "./MetaReportForm";
import { baseTlConstructor, checkAuthAdmin } from "@/server/serverUtils";

export default async function MetaReportCreatePage() {
  await checkAuthAdmin();
  const tiers = await baseTlConstructor();
  return (
    <div>
      <MetaReportForm tierData={tiers} />
    </div>
  );
}
