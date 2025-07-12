import { Section, SubHeader } from "./SpellsFormatting";

export function UpdateTracker({
  aboutUpdate,
  buildUpdate,
  reviewUpdate,
}: {
  aboutUpdate?: Date;
  buildUpdate?: Date;
  reviewUpdate?: Date;
}) {
  const rn = new Date(Date.now());

  const msBetween = (date?: Date) => (date ? rn.getTime() - date.getTime() : 0);
  const msToDays = (ms: number) => Math.floor(ms / 86400000);

  const aboutDays = msToDays(msBetween(aboutUpdate));
  const buildDays = msToDays(msBetween(buildUpdate));
  const reviewDays = msToDays(msBetween(reviewUpdate));

  return (
    <Section>
      <SubHeader>Update Tracker</SubHeader>
      <div className="flex flex-col gap-8 md:flex-row">
        {/* Review Date */}
        <div className="card bg-base-300 w-full overflow-clip text-center text-lg font-bold">
          <h2 className="bg-secondary text-secondary-content h-fit w-full py-1">
            Last About Update
          </h2>
          <div className="flex flex-row place-content-center gap-2 py-1">
            <p>{aboutUpdate?.toLocaleDateString() ?? "Date"}</p>
            <p>{aboutDays > 0 ? `(${aboutDays}) Days ago` : ""}</p>
          </div>
        </div>
        <div className="card bg-base-300 w-full overflow-clip text-center text-lg font-bold">
          <h2 className="bg-secondary text-secondary-content h-fit w-full py-1">
            Last Build Update
          </h2>
          <div className="flex flex-row place-content-center gap-2 py-1">
            <p>{buildUpdate?.toLocaleDateString() ?? "Date"}</p>
            <p>{buildDays > 0 ? `(${buildDays}) Days ago` : ""}</p>
          </div>
        </div>
        <div className="card bg-base-300 w-full overflow-clip text-center text-lg font-bold">
          <h2 className="bg-secondary text-secondary-content h-fit w-full py-1">
            Last Review Update
          </h2>
          <div className="flex flex-row place-content-center gap-2 py-1">
            <p>{reviewUpdate?.toLocaleDateString() ?? "Date"}</p>
            <p>{reviewDays > 0 ? `(${reviewDays}) Days ago` : ""}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
