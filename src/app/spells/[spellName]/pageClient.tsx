"use client";
import { AboutDisplay } from "@/components/spells/AboutSpell";
import { BuildDisplay } from "@/components/spells/BuildSpell";
import {
  Section,
  SpellHeader,
  SubHeader,
} from "@/components/spells/SpellsFormatting";
import { UpdateTracker } from "@/components/spells/UpdateTracker";
import { SpellAbout, SpellBuild } from "@/generated/client";
import { useState } from "react";

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
  aboutData?: SpellAbout;
  buildData?: SpellBuild;
}

export default function SpellViewPage({
  spellName,
  aboutData,
  buildData,
}: SpellViewProps) {
  //fetch data
  // const [aboutData] = useSpellAboutQuery(spellName);

  const [view, setView] = useState(0);

  return (
    <div className="flex h-full w-full flex-col gap-8 self-center p-2 px-4">
      <SpellHeader spellName={spellName} />
      {/* Update Tracker */}
      <UpdateTracker
        aboutUpdate={aboutData?.updatedAt}
        buildUpdate={buildData?.updatedAt}
      />
      {/* Modal Buttons */}
      <div className="grid h-64 grid-cols-1 gap-4 py-8 md:h-32 md:grid-cols-3 md:gap-8">
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
        // <Suspense fallback={<AboutDisplaySkeleton />}>
        <AboutDisplay aboutData={aboutData} />
        // </Suspense>
      )}
      {/* {view == 0 && <AboutDisplay aboutData={aboutData} />} */}
      {view == 1 && <BuildDisplay buildData={buildData} />}
    </div>
  );
}

//Reccomeneded role
//dps, secondary dps, sup/debuf
//

//This pulls in data
