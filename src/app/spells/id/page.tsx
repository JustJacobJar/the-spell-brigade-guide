"use client";
import ImageUnop from "@/components/ImageUnop";
import { GITSPRITEURL } from "@/lib/types";
import { ReactNode, useState } from "react";

/**
 * Quick overview
 * Recommended builds
 * Augment Prio 1 - 2 - 3
 * Upgrade Prio 1 - 2 - 3
 * Element Prio 1 - 2 - 3
 * Synergy Spells
 */
export default function SpellViewPage() {
  const [view, setView] = useState(0);

  const builds = (
    <>
      {/* Quick Recommendations */}
      {/* Augments */}
      <Section>
        <SubHeader>Augments</SubHeader>
        <div className="grid grid-cols-3 gap-4">
          {/* DPS */}
          <CheckboxParent
            items={[
              { index: 1, title: "Augment Name", content: "Some content info" },
              { index: 2, title: "Augment Name", content: "Some content info" },
              { index: 3, title: "Augment Name", content: "Some content info" },
            ]}
          >
            <h2 className="bg-primary py-2 text-center text-2xl font-bold">
              Main DPS
            </h2>
          </CheckboxParent>
          {/* 2nd DPS */}
          <CheckboxParent
            items={[
              { index: 1, title: "Augment Name", content: "Some content info" },
              { index: 2, title: "Augment Name", content: "Some content info" },
              { index: 3, title: "Augment Name", content: "Some content info" },
            ]}
          >
            <h2 className="bg-secondary py-2 text-center text-2xl font-bold">
              Secondary DPS
            </h2>
          </CheckboxParent>
          {/* Sup/Debuff */}
          <CheckboxParent
            items={[
              { index: 1, title: "Augment Name", content: "Some content info" },
              { index: 2, title: "Augment Name", content: "Some content info" },
              { index: 3, title: "Augment Name", content: "Some content info" },
            ]}
          >
            <h2 className="bg-accent py-2 text-center text-2xl font-bold">
              Sup / Debuff
            </h2>
          </CheckboxParent>
        </div>
      </Section>
      {/* Upgrades */}
      <Section>
        <SubHeader>Upgrades</SubHeader>
        <div className="grid grid-cols-3 gap-4">
          {/* DPS */}
          <UpgradeContent upgrades={["Cast Speed", "Damage", "Size"]}>
            <h2 className="bg-primary py-2 text-center text-2xl font-bold">
              Main DPS
            </h2>
          </UpgradeContent>
          {/* 2nd DPS */}
          <UpgradeContent upgrades={["Cast Speed", "Damage", "Size"]}>
            <h2 className="bg-secondary py-2 text-center text-2xl font-bold">
              Secondary DPS
            </h2>
          </UpgradeContent>
          {/* Sup/Debuff */}
          <UpgradeContent upgrades={["Cast Speed", "Damage", "Size"]}>
            <h2 className="bg-accent py-2 text-center text-2xl font-bold">
              Sup / Debuff
            </h2>
          </UpgradeContent>
        </div>
      </Section>
      {/* Elements */}
      <Section>
        <SubHeader>Elements</SubHeader>
        <div className="grid grid-cols-3 gap-4">
          {/* DPS */}
          <ElementContent elements={["Plasma", "Thunder"]}>
            <h2 className="bg-primary py-2 text-center text-2xl font-bold">
              Main DPS
            </h2>
          </ElementContent>
          {/* 2nd DPS */}
          <ElementContent elements={["Plasma", "Thunder"]}>
            <h2 className="bg-secondary py-2 text-center text-2xl font-bold">
              Secondary DPS
            </h2>
          </ElementContent>
          {/* Sup/Debuff */}
          <ElementContent elements={["Plasma", "Thunder"]}>
            <h2 className="bg-accent py-2 text-center text-2xl font-bold">
              Sup / Debuff
            </h2>
          </ElementContent>
        </div>
      </Section>
      {/* Synergy Builds */}
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
    <>
      {/* Intro/Mage */}
      <div className="flex w-full flex-row gap-8">
        {/* Intro */}
        <div className="h-full min-h-32 w-full">
          <SubHeader>Introduction</SubHeader>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
            Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
            hendrerit semper vel class aptent taciti sociosqu. Ad litora
          </p>
        </div>
        {/* Divider */}
        <div className="divider divider-horizontal" />
        {/* Wizard */}
        <div className="h-full min-h-32 w-full">
          <SubHeader>Mage</SubHeader>
          <p>About the mage who owns this spell if any</p>
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
        <div className="flex flex-row gap-8">
          {/* Overview */}
          <Section>
            <SubHeader>Overview</SubHeader>
            <p>
              How the spell works... Lorem ipsum dolor sit amet consectetur
              adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem
              placerat. In id cursus mi pretium tellus duis convallis. Tempus
              leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla
              lacus nec metus bibendum egestas. Iaculis massa nisl malesuada
              lacinia integer nunc posuere. Ut hendrerit semper vel class aptent
              taciti sociosqu. Ad litora torquent per conubia nostra inceptos
              himenaeos. Lorem ipsum dolor sit amet consectetur adipiscing elit.
              Quisque faucibus ex sapien vitae pellentesque sem placerat. In id
              cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed
              diam urna tempor. Pulvinar vivamus fringilla lacus nec metus
              bibendum egestas. Iaculis massa nisl malesuada lacinia integer
              nunc posuere. Ut hendrerit semper vel class aptent taciti
              sociosqu. Ad litora torquent per conubia nostra inceptos
              himenaeos.
            </p>
          </Section>
          {/* Divider */}
          <div className="divider divider-horizontal" />
        </div>
      </Section>
    </>
  );

  return (
    <div className="flex h-full w-full flex-col gap-8 p-2 px-16 outline">
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
      {/* Update Tracker */}
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

//Reccomeneded role
//dps, secondary dps, sup/debuf
//

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

function ArrowDivide() {
  return (
    <div className="divider divider-vertical">
      <svg
        className="fill-neutral w-16 rotate-90"
        viewBox="0 0 320 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
      </svg>
    </div>
  );
}

function ArrowDivideHorizontal() {
  return (
    <div className="divider divider-horizontal">
      <svg
        className="fill-neutral w-16"
        viewBox="0 0 320 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
      </svg>
    </div>
  );
}

interface CheckboxContentProps {
  index: number;
  title: string;
  content: string;
}

function CheckboxContent({ index, title, content }: CheckboxContentProps) {
  return (
    <div className="collapse-arrow join-item bg-base-100 border-base-300 collapse border">
      <input type="checkbox" />
      <div className="collapse-title flex flex-row place-items-center gap-4 font-semibold">
        <div className="bg-primary rounded-selector grid aspect-square h-full place-content-center">
          {index}
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
        <h2>{title}</h2>
      </div>
      <div className="collapse-content text-sm">{content}</div>
    </div>
  );
}

interface CheckboxParentProps {
  children?: ReactNode;
  items: CheckboxContentProps[];
}

function CheckboxParent({ children, items }: CheckboxParentProps) {
  return (
    <div className="join join-vertical rounded-field overflow-clip">
      {children}
      {items.map((item) => {
        return (
          <CheckboxContent
            key={item.index}
            index={item.index}
            title={item.title}
            content={item.content}
          />
        );
      })}
    </div>
  );
}

interface UpgradeContentProps {
  children: ReactNode;
  upgrades: string[];
}

function UpgradeContent({ children, upgrades }: UpgradeContentProps) {
  return (
    <div className="card bg-base-100 flex flex-col gap-4 overflow-clip pb-4">
      {children}
      <div className="px-4">
        <div className="bg-base-300 rounded-field card-body grid w-full place-items-center place-self-center text-lg font-bold">
          {upgrades[0]}
        </div>
        <ArrowDivide />
        <div className="bg-base-300 rounded-field card-body grid w-full place-items-center place-self-center text-lg font-bold">
          {upgrades[1]}
        </div>
        <ArrowDivide />
        <div className="bg-base-300 rounded-field card-body grid w-full place-items-center place-self-center text-lg font-bold">
          {upgrades[2]}
        </div>
      </div>
    </div>
  );
}

interface ElementContentProps {
  children: ReactNode;
  elements: string[];
}

function ElementContent({ children, elements }: ElementContentProps) {
  return (
    <div className="card bg-base-300 overflow-clip">
      {children}
      <div className="flex flex-row p-4">
        <div className="flex size-fit flex-col">
          <ImageUnop alt="Spell Image" src={GITSPRITEURL("Astral_orbs")} />
          <label className="place-self-center">{elements[0]}</label>
        </div>
        <ArrowDivideHorizontal />
        <div className="flex size-fit flex-col">
          <ImageUnop alt="Spell Image" src={GITSPRITEURL("Astral_orbs")} />
          <label className="place-self-center">{elements[1]}</label>
        </div>
      </div>
    </div>
  );
}
