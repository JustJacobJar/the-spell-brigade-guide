"use client";
import { UpdateTracker } from "@/app/spells/[spellName]/pageClient";
import AboutSpellForm from "@/components/spells/forms/AboutSpellForm";
import BuildSpellForm from "@/components/spells/forms/BuildSpellForm";
import { SpellHeader } from "@/components/spells/SpellsFormatting";
import { ReactNode, useState } from "react";

export default function SpellsForm({ spellName }: { spellName: string }) {
  //pull in spell name from parent path
  const [view, setView] = useState(0);

  //Toast feedback
  const [toast, setToast] = useState<ReactNode>();
  const [toastOpen, setToastOpen] = useState(false);

  //manage user feedback for success loading error on mutate

  return (
    <div className="flex h-full w-full flex-col gap-8 p-2 px-16 outline">
      {toastOpen && toast}
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
        <AboutSpellForm
          spellName={spellName}
          setToast={setToast}
          setToastOpen={setToastOpen}
        />
      )}
      {view == 1 && (
        <BuildSpellForm
          spellName={spellName}
          setToast={setToast}
          setToastOpen={setToastOpen}
        />
      )}
    </div>
  );
}

//Custom colour these to the recommended element?

// function BulletPoint() {
//   return (
//     <div className="bg-secondary h-4 w-4 place-self-center rounded-sm"></div>
//   );
// }

// function SubHeader({ children }: { children?: ReactNode }) {
//   return (
//     <div className="border-secondary flex h-fit w-full flex-row gap-2 border-b-2 font-bold">
//       <BulletPoint />
//       <h1 className="py-1 text-2xl">{children}</h1>
//     </div>
//   );
// }

// function Section({ children }: { children?: ReactNode }) {
//   return <div className="flex w-full flex-col gap-4">{children}</div>;
// }
