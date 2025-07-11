"use client";
import ImageUnop from "@/components/ImageUnop";
import {
  AboutDisplay,
  AboutDisplaySkeleton,
} from "@/components/spells/AboutSpell";
import { BuildDisplay } from "@/components/spells/BuildSpell";
import {
  Section,
  SpellHeader,
  SubHeader,
} from "@/components/spells/SpellsFormatting";
import { SpellAbout } from "@/generated/client";
import { useSpellAboutQuery } from "@/lib/Queries";
import { GITSPRITEURL, SpellAboutInput } from "@/lib/types";
import { Suspense, useState } from "react";

/**
 * Quick overview
 * Recommended builds
 * Augment Prio 1 - 2 - 3
 * Upgrade Prio 1 - 2 - 3
 * Element Prio 1 - 2 - 3
 * Synergy Spells
 */

interface SpellViewProps {
  spellName: string;
  aboutData: SpellAbout;
}

export default function SpellViewPage({
  spellName,
  aboutData,
}: SpellViewProps) {
  //fetch data
  // const [aboutData] = useSpellAboutQuery(spellName);

  const [view, setView] = useState(0);

  return (
    <div className="flex h-full w-full flex-col gap-8 p-2 px-16 outline">
      <SpellHeader spellName={spellName} />
      {/* Update Tracker */}
      <UpdateTracker />
      {/* Modal Buttons */}
      <div className="grid h-32 grid-cols-3 gap-8 py-8">
        <button
          onClick={() => setView(0)}
          className="btn btn-xl btn-neutral h-full"
        >
          About
        </button>
        <button
          onClick={() => setView(1)}
          className="btn btn-xl btn-neutral h-full"
        >
          Builds
        </button>
        <button
          onClick={() => setView(2)}
          className="btn btn-xl btn-neutral h-full"
        >
          Review
        </button>
      </div>
      {view == 0 && (
        <Suspense fallback={<AboutDisplaySkeleton />}>
          <AboutDisplay aboutData={aboutData} />
        </Suspense>
      )}
      {/* {view == 0 && <AboutDisplay aboutData={aboutData} />} */}
      {view == 1 && <BuildDisplay />}
    </div>
  );
}

//Reccomeneded role
//dps, secondary dps, sup/debuf
//

//This pulls in data
export function UpdateTracker() {
  return (
    <Section>
      <SubHeader>Update Tracker</SubHeader>
      <div className="flex flex-row gap-8">
        {/* Review Date */}
        <div className="card bg-base-300 w-full overflow-clip text-center text-lg font-bold">
          <h2 className="bg-secondary text-secondary-content h-fit w-full py-1">
            Last About Update
          </h2>
          <p className="py-1">Date/Patch</p>
        </div>
        <div className="card bg-base-300 w-full overflow-clip text-center text-lg font-bold">
          <h2 className="bg-secondary text-secondary-content h-fit w-full py-1">
            Last Build Update
          </h2>
          <p className="py-1">Date/Patch</p>
        </div>
        <div className="card bg-base-300 w-full overflow-clip text-center text-lg font-bold">
          <h2 className="bg-secondary text-secondary-content h-fit w-full py-1">
            Last Review Update
          </h2>
          <p className="py-1">Date/Patch</p>
        </div>
      </div>
    </Section>
  );
}
