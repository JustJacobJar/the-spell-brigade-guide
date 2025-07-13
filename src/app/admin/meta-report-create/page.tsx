import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import TierForm from "./TierForm";
import { baseTlConstructor, tlConstructor } from "@/server/serverUtils";
import { prisma } from "@/lib/prisma";

export default async function MetaReportCreatePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/");
  if (session.user.role !== "ADMIN") redirect("/"); //Change this to unauth page or signin

  const getTiers = async () => {
    const metaReportId = await prisma.metaReport.findFirst(); //check if there is currently a meta report

    if (!metaReportId) return;
    //Get the tier list
    const tl = await prisma.tierlist.findUnique({
      where: { id: metaReportId.id },
    });
    if (!tl) return;

    const tiers = await tlConstructor(tl);
    return tiers;
  };

  const metaTiers = await getTiers();
  //Ensure tier list is populated
  const tiers = metaTiers ? metaTiers : await baseTlConstructor();

  /**
   * Make this form for both create and delete the page
   * It should take data from vaiour elements and fill in what I think is currently meta.
   * Things I should define
   * 
   * title
   * Who last updated it and when
   * Brief description
   * Show tier list -> make it so that each spell can be clicked on/hovered to show more details
   * on edit mode I should be able to edit the tl and save. Modal pops up to confirm it went through
   * explain things about it
   * save button with same modal to confirm it saved
   * 
   */

  return (
    <div>
      <TierForm tierData={tiers} edit={true} />
    </div>
  );
}
