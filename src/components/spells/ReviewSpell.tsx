import { InitializedMDXViewer } from "../markup/InitializedMDXEditor";
import { Section, SubHeader } from "./SpellsFormatting";

export default function ReviewDisplay() {
  return (
    <div className="flex flex-col gap-4">
      <Section>
        <SubHeader>Pros / Cons</SubHeader>
        {/* Pro/Con */}
        <div className="grid grid-cols-2 gap-4">
          {/* Pros */}
          <div className="card bg-base-100 border-base-300 w-full border-2 text-success shadow-sm">
            <div className="p-4">
              <h2 className="card-title text-2xl">Pros</h2>
              <div className="divider divider-vertical"></div>
              <ul className="list list-inside list-disc pl-4 text-lg">
                <li>Item</li>
                <li>Item1</li>
                <li>Item2</li>
              </ul>
            </div>
          </div>
          {/* Cons */}
          <div className="card bg-base-100 border-base-300 w-full border-2 text-error shadow-sm">
            <div className="p-4">
              <h2 className="card-title text-2xl">Cons</h2>
              <div className="divider divider-vertical"></div>
              <ul className="list list-inside list-disc pl-4 text-lg">
                <li>Item</li>
                <li>Item1</li>
                <li>Item2</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <SubHeader>Review (By JustExisting)</SubHeader>
        <div className="flex h-full w-full max-w-full">
          <InitializedMDXViewer markdown={"# Some Markdown Content"} />
        </div>
      </Section>
    </div>
  );
}
