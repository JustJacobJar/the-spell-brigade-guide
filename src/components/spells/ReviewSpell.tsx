import { SpellReview } from "@/generated/client";
import { InitializedMDXViewer } from "../markup/InitializedMDXEditor";
import { Section, SubHeader } from "./SpellsFormatting";

export default function ReviewDisplay({
  reviewData,
}: {
  reviewData?: SpellReview;
}) {
  if (!reviewData) {
    reviewData = {
      pros: ["No", "Data"],
      cons: ["No", "Data"],
      review: "# No Data",
      spellName: "No data",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  return (
    <div className="flex flex-col gap-4">
      <Section>
        <SubHeader>Pros / Cons</SubHeader>
        {/* Pro/Con */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Pros */}
          <div className="card bg-base-100 border-base-300 text-success w-full border-2 shadow-sm">
            <div className="p-4">
              <h2 className="card-title text-2xl">Pros</h2>
              <div className="divider divider-vertical"></div>
              <ul className="list list-inside list-disc pl-4 text-lg">
                {reviewData.pros.map((li, index) => (
                  <li key={index}>{li}</li>
                ))}
              </ul>
            </div>
          </div>
          {/* Cons */}
          <div className="card bg-base-100 border-base-300 text-error w-full border-2 shadow-sm">
            <div className="p-4">
              <h2 className="card-title text-2xl">Cons</h2>
              <div className="divider divider-vertical"></div>
              <ul className="list list-inside list-disc pl-4 text-lg">
                {reviewData.cons.map((li, index) => (
                  <li key={index}>{li}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <SubHeader>Review (By JustExisting)</SubHeader>
        <div className="flex h-full w-full max-w-full">
          <InitializedMDXViewer markdown={reviewData.review} />
        </div>
      </Section>
    </div>
  );
}
