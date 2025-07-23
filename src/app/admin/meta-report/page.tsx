import MetaReportForm from "./MetaReportForm";
import { baseTlConstructor, checkAuthAdmin } from "@/server/serverUtils";

export default async function MetaReportCreatePage() {
  await checkAuthAdmin();
  const tiers = await baseTlConstructor();
  return (
    <div className="w-full max-w-5xl">
      <MetaReportForm tierData={tiers} />
    </div>
  );
}
