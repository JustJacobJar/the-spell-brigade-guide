"use client";
import { UpdateTracker } from "@/app/spells/[spellName]/pageClient";
import ImageUnop from "@/components/ImageUnop";
import { useUpdateSpellAboutMutate } from "@/lib/Queries";
import { GITSPRITEURL, SpellAbout } from "@/lib/types";
import { cn } from "@/lib/utils";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

export default function SpellsForm({ spellName }: { spellName: string }) {
  //pull in spell name from parent path
  const [view, setView] = useState(0);

  const [intro, setIntro] = useState("");
  const [mage, setMage] = useState("");
  const [augmentList, setAugmentList] = useState([""]);
  const [upgradeList, setUpgradeList] = useState([""]);
  const [overview, setOverview] = useState("");
  const [mutateAbout] = useUpdateSpellAboutMutate();

  //Toast feedback
  const [toast, setToast] = useState<ReactNode>();
  const [toastOpen, setToastOpen] = useState(false);

  const builds = (
    <>
      {/* Quick Recommendations */}
      <Section>
        <SubHeader>Augments</SubHeader>
        <div className="join join-vertical bg-base-100 rounded-field overflow-clip">
          {/* Element to map */}
          <div className="collapse-arrow join-item border-base-300 collapse border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title flex flex-row place-items-center gap-4 font-semibold">
              <div className="bg-primary rounded-selector grid aspect-square h-full place-content-center">
                1
              </div>
              <div>
                <svg
                  className="h-8 w-8 fill-[#8e8e8e]"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z"></path>
                </svg>
              </div>
              <h2>Element</h2>
            </div>
            <div className="collapse-content text-sm">
              Details about why this element
            </div>
          </div>
          {/* End */}
          <div className="collapse-arrow join-item border-base-300 collapse border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title flex flex-row place-items-center gap-4 font-semibold">
              <div className="bg-primary rounded-selector grid aspect-square h-full place-content-center">
                2
              </div>
              <div>
                <svg
                  className="h-8 w-8 fill-[#8e8e8e]"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z"></path>
                </svg>
              </div>
              <h2>Element</h2>
            </div>
            <div className="collapse-content text-sm">
              Details about why this element
            </div>
          </div>
        </div>
      </Section>
      {/* Upgrades */}
      <Section>
        <SubHeader>Augments</SubHeader>
        <div className="join join-vertical bg-base-100 rounded-field overflow-clip">
          {/* Element to map */}
          <div className="collapse-arrow join-item border-base-300 collapse border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title flex flex-row place-items-center gap-4 font-semibold">
              <div className="bg-primary rounded-selector grid aspect-square h-full place-content-center">
                1
              </div>
              <div>
                <svg
                  className="h-8 w-8 fill-[#8e8e8e]"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z"></path>
                </svg>
              </div>
              <h2>Element</h2>
            </div>
            <div className="collapse-content text-sm">
              Details about why this element
            </div>
          </div>
          {/* End */}
          <div className="collapse-arrow join-item border-base-300 collapse border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title flex flex-row place-items-center gap-4 font-semibold">
              <div className="bg-primary rounded-selector grid aspect-square h-full place-content-center">
                2
              </div>
              <div>
                <svg
                  className="h-8 w-8 fill-[#8e8e8e]"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z"></path>
                </svg>
              </div>
              <h2>Element</h2>
            </div>
            <div className="collapse-content text-sm">
              Details about why this element
            </div>
          </div>
        </div>
      </Section>
      {/* Elements */}
      <Section>
        <SubHeader>Augments</SubHeader>
        <div className="join join-vertical bg-base-100 rounded-field overflow-clip">
          {/* Element to map */}
          <div className="collapse-arrow join-item border-base-300 collapse border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title flex flex-row place-items-center gap-4 font-semibold">
              <div className="bg-primary rounded-selector grid aspect-square h-full place-content-center">
                1
              </div>
              <div>
                <svg
                  className="h-8 w-8 fill-[#8e8e8e]"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z"></path>
                </svg>
              </div>
              <h2>Element</h2>
            </div>
            <div className="collapse-content text-sm">
              Details about why this element
            </div>
          </div>
          {/* End */}
          <div className="collapse-arrow join-item border-base-300 collapse border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title flex flex-row place-items-center gap-4 font-semibold">
              <div className="bg-primary rounded-selector grid aspect-square h-full place-content-center">
                2
              </div>
              <div>
                <svg
                  className="h-8 w-8 fill-[#8e8e8e]"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z"></path>
                </svg>
              </div>
              <h2>Element</h2>
            </div>
            <div className="collapse-content text-sm">
              Details about why this element
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <SubHeader>Synergy</SubHeader>
        <div className="grid grid-cols-2 gap-8">
          <div className="card bg-base-300 grid min-h-16 place-content-center">
            Some build showing 4 spells
          </div>
          <div className="card bg-base-300 grid min-h-16 place-content-center">
            Each Spell will show element
          </div>
          <div className="card bg-base-300 grid min-h-16 place-content-center">
            Some build showing 4 spells
          </div>
          <div className="card bg-base-300 grid min-h-16 place-content-center">
            Each Spell will show element
          </div>
          <div className="card bg-base-300 grid min-h-16 place-content-center">
            Some build showing 4 spells
          </div>
          <div className="card bg-base-300 grid min-h-16 place-content-center">
            Each Spell will show element
          </div>
        </div>
      </Section>
    </>
  );

  function handleLiChange(
    list: string[],
    listFn: Dispatch<SetStateAction<string[]>>,
    value: string,
    index: number,
  ) {
    const arr = [...list];
    arr[index] = value;
    listFn(arr);
  }

  function handleAboutSubmit() {
    const data: SpellAbout = {
      intro: intro,
      mageInfo: mage,
      augments: augmentList,
      upgrades: upgradeList,
      overview: overview,
    };
    mutateAbout.mutate({ spellname: spellName, aboutData: data });
  }

  useEffect(() => {
    if (mutateAbout.isError) {
      setToast(
        <Toast
          state="Error"
          message={`Not saved! ${mutateAbout.error.message}`}
          closeFn={() => setToastOpen(false)}
        />,
      );
      setToastOpen(true);
    }
    if (mutateAbout.isSuccess) {
      setToast(
        <Toast
          state="Success"
          message="Succesfully Updated About"
          closeFn={() => setToastOpen(false)}
        />,
      );
      setToastOpen(true);
    }
  }, [mutateAbout.status]);
  //manage user feedback for success loading error on mutate

  const about = (
    <form action={handleAboutSubmit}>
      {/* Intro/Mage */}
      <div className="flex w-full flex-row gap-8">
        {/* Intro */}
        <div className="flex h-full min-h-32 w-full flex-col gap-4">
          <SubHeader>Introduction</SubHeader>
          <textarea
            className="input min-h-24 w-full"
            placeholder="Spell introduction..."
            value={intro}
            onChange={(e) => setIntro(e.currentTarget.value)}
          />
        </div>
        {/* Divider */}
        <div className="divider divider-horizontal" />
        {/* Wizard */}
        <div className="flex h-full min-h-32 w-full flex-col gap-4">
          <SubHeader>Mage</SubHeader>
          <textarea
            className="input min-h-24 w-full"
            placeholder="Mage info..."
            value={mage}
            onChange={(e) => setMage(e.currentTarget.value)}
          />
        </div>
      </div>
      {/* Augments Upgrades */}
      <Section>
        <SubHeader>Augments & Upgrades</SubHeader>
        <div className="grid grid-cols-2 gap-28">
          {/* Augment Input List */}
          <ul className="list-inside list-disc">
            <h2 className="text-xl font-bold">Augments</h2>
            {augmentList.map((li, index) => {
              return (
                <LiElement
                  key={index}
                  value={augmentList[index]}
                  index={index}
                  parentList={augmentList}
                  parentListFn={setAugmentList}
                  fn={handleLiChange}
                />
              );
            })}
            <button
              className="btn btn-neutral"
              type="button"
              onClick={() => setAugmentList([...augmentList, ""])}
            >
              Add Item
            </button>
            <button
              className="btn btn-error"
              type="button"
              onClick={() => {
                const arr = [...augmentList];
                arr.pop();
                setAugmentList(arr);
              }}
            >
              Remove Item
            </button>
          </ul>
          {/* Upgrade Input Li */}
          <ul className="list-inside list-disc">
            <h2 className="text-xl font-bold">Upgrades</h2>
            {upgradeList.map((li, index) => {
              return (
                <LiElement
                  key={index}
                  value={upgradeList[index]}
                  index={index}
                  parentList={upgradeList}
                  parentListFn={setUpgradeList}
                  fn={handleLiChange}
                />
              );
            })}
            <button
              className="btn btn-neutral"
              type="button"
              onClick={() => setUpgradeList([...upgradeList, ""])}
            >
              Add Item
            </button>
            <button
              className="btn btn-error"
              type="button"
              onClick={() => {
                const arr = [...upgradeList];
                arr.pop();
                setUpgradeList(arr);
              }}
            >
              Remove Item
            </button>
          </ul>
        </div>
      </Section>
      {/* Overview */}
      <Section>
        {/* Overview */}
        <Section>
          <SubHeader>Overview</SubHeader>
          <textarea
            className="input min-h-24 w-full"
            placeholder="Overview description..."
            value={overview}
            onChange={(e) => setOverview(e.currentTarget.value)}
          />
        </Section>
      </Section>
      <div className="flex place-content-end py-4">
        <button
          disabled={mutateAbout.isPending}
          className="btn btn-success btn-wide"
        >
          Save
        </button>
      </div>
    </form>
  );

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
      {view == 0 && about}
      {view == 1 && builds}
    </div>
  );
}

function LiElement({
  value,
  index,
  parentList,
  parentListFn,
  fn,
}: {
  value: string;
  index: number;
  parentList: string[];
  parentListFn: Dispatch<SetStateAction<string[]>>;
  fn: (
    list: string[],
    listFn: Dispatch<SetStateAction<string[]>>,
    value: string,
    index: number,
  ) => void;
}) {
  return (
    <li>
      <input
        className="input"
        type="text"
        value={value}
        onChange={(e) =>
          fn(parentList, parentListFn, e.currentTarget.value, index)
        }
        placeholder="Element name"
      />
    </li>
  );
}

function SpellHeader({ spellName }: { spellName: string }) {
  return (
    <Section>
      <div className="bg-primary flex h-32 flex-row place-content-between place-items-center px-16">
        {/* Title Content */}
        <div>
          <h3 className="text-md">The spell brigade</h3>
          <h1 className="text-2xl font-bold">{spellName}</h1>
          <h3 className="text-xl">Info, Builds and Guides</h3>
        </div>
        {/* Spell Image */}
        <div className="h-full">
          <ImageUnop alt="Spell Image" src={GITSPRITEURL("Astral_orbs")} />
        </div>
      </div>
    </Section>
  );
}

//Custom colour these to the recommended element?

function BulletPoint() {
  return (
    <div className="bg-secondary h-4 w-4 place-self-center rounded-sm"></div>
  );
}

function SubHeader({ children }: { children?: ReactNode }) {
  return (
    <div className="border-secondary flex h-fit w-full flex-row gap-2 border-b-2 font-bold">
      <BulletPoint />
      <h1 className="py-1 text-2xl">{children}</h1>
    </div>
  );
}

function Section({ children }: { children?: ReactNode }) {
  return <div className="flex w-full flex-col gap-4">{children}</div>;
}

function Toast({
  state,
  message,
  closeFn,
}: {
  state: "Success" | "Error";
  message: string;
  closeFn: () => void;
}) {
  return (
    <div className="toast toast-top toast-center z-50">
      <div
        className={cn(
          "alert",
          state === "Success" ? "alert-success" : "alert-error",
        )}
      >
        <span>{message}</span>
        <button
          type="button"
          className="btn btn-ghost btn-error h-fit w-fit p-1"
          onClick={closeFn}
        >
          <svg
            className="fill-neutral h-4 w-4"
            viewBox="0 0 384 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
