"use client";
import ImageUnop from "@/components/ImageUnop";
import { GITSPRITEURL } from "@/lib/types";
import { ReactNode, useState } from "react";

export default function SpellsForm() {
  const [view, setView] = useState(0);

  function handleAboutSubmit() {}

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

  const about = (
    <form action={handleAboutSubmit}>
      {/* Intro/Mage */}
      <div className="flex w-full flex-row gap-8">
        {/* Intro */}
        <div className="flex h-full min-h-32 w-full flex-col gap-4">
          <SubHeader>Introduction</SubHeader>
          <textarea
            className="input min-h-24 w-full"
            placeholder="Some Intro Text"
          />
        </div>
        {/* Divider */}
        <div className="divider divider-horizontal" />
        {/* Wizard */}
        <div className="flex h-full min-h-32 w-full flex-col gap-4">
          <SubHeader>Mage</SubHeader>
          <textarea
            className="input min-h-24 w-full"
            placeholder="Some Intro Text"
          />
        </div>
      </div>

      {/* Augments Upgrades */}
      <Section>
        <SubHeader>Augments & Upgrades</SubHeader>
        <div className="grid grid-cols-2 gap-28">
          <ul className="list-inside list-disc">
            <h2 className="text-xl font-bold">Augments</h2>
            <li>Data</li>
            <li>To</li>
            <li>Be</li>
          </ul>
          <ul className="list-inside list-disc">
            <h2 className="text-xl font-bold">Upgrades</h2>
            <li>Mapped</li>
            <li>Upgrades</li>
            <li>Too</li>
          </ul>
        </div>
      </Section>
      {/* Overview / Element Options */}
      <Section>
        {/* Overview */}
        <Section>
          <SubHeader>Overview</SubHeader>
          <textarea
            className="input min-h-24 w-full"
            placeholder="Some Intro Text"
          />
        </Section>
      </Section>
    </form>
  );

  return (
    <div className="flex h-full w-full flex-col gap-8 p-2 px-16 outline">
      <SpellHeader />
      {/* Update Tracker */}
      <Section>
        <SubHeader>Update Tracker</SubHeader>
        <div className="flex flex-row gap-8">
          {/* Review Date */}
          <div className="card bg-base-300 w-full overflow-clip text-center text-lg font-bold">
            <h2 className="bg-secondary text-secondary-content h-fit w-full py-1">
              Last About Update
            </h2>
            <input
              className="input place-self-center"
              placeholder="Date/Patch"
            />
          </div>
          <div className="card bg-base-300 w-full overflow-clip text-center text-lg font-bold">
            <h2 className="bg-secondary text-secondary-content h-fit w-full py-1">
              Last Build Update
            </h2>
            <input
              className="input place-self-center"
              placeholder="Date/Patch"
            />
          </div>
          <div className="card bg-base-300 w-full overflow-clip text-center text-lg font-bold">
            <h2 className="bg-secondary text-secondary-content h-fit w-full py-1">
              Last Review Update
            </h2>
            <input
              className="input place-self-center"
              placeholder="Date/Patch"
            />
          </div>
        </div>
      </Section>
      {/* Modal Buttons */}
      <div className="grid h-32 grid-flow-col gap-4 py-8">
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

function SpellHeader() {
  return (
    <Section>
      <div className="bg-primary flex h-32 flex-row place-content-between place-items-center px-16">
        {/* Title Content */}
        <div>
          <h3 className="text-md">The spell brigade</h3>
          <h1 className="text-2xl font-bold">Spell_Name</h1>
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
