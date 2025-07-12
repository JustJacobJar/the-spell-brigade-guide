"use client";

import { SpellBuild } from "@/generated/client";
import {
  CheckboxParent,
  ElementContent,
  Section,
  SubHeader,
  UpgradeContent,
} from "./SpellsFormatting";
import { ReactNode } from "react";

//Take in build data when made
export function BuildDisplay({ buildData }: { buildData?: SpellBuild }) {
  if (!buildData) {
    buildData = {
      augmentNameDps: ["No Data", "No Data", "No Data"],
      augmentDescriptionDps: ["No Data", "No Data", "No Data"],
      augmentNameSub: ["No Data", "No Data", "No Data"],
      augmentDescriptionSub: ["No Data", "No Data", "No Data"],
      augmentNameSup: ["No Data", "No Data", "No Data"],
      augmentDescriptionSup: ["No Data", "No Data", "No Data"],
      upgradesDps: ["No Data", "No Data", "No Data"],
      upgradesSub: ["No Data", "No Data", "No Data"],
      upgradesSup: ["No Data", "No Data", "No Data"],
      elementsDps: ["No Data", "No Data"],
      elementsSub: ["No Data", "No Data"],
      elementsSup: ["No Data", "No Data"],
      spellName: "No Data",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Quick Recommendations */}
      {/* Augments */}
      <Section>
        <SubHeader>Augments</SubHeader>
        <BuildGrid>
          {/* DPS */}
          <CheckboxParent
            items={[
              {
                index: 1,
                title: buildData.augmentNameDps[0],
                content: buildData.augmentDescriptionDps[0],
              },
              {
                index: 2,
                title: buildData.augmentNameDps[1],
                content: buildData.augmentDescriptionDps[1],
              },
              {
                index: 3,
                title: buildData.augmentNameDps[2],
                content: buildData.augmentDescriptionDps[2],
              },
            ]}
          >
            <h2 className="bg-primary py-2 text-center text-2xl font-bold">
              Main DPS
            </h2>
          </CheckboxParent>
          {/* 2nd DPS */}
          <CheckboxParent
            items={[
              {
                index: 1,
                title: buildData.augmentNameSub[0],
                content: buildData.augmentDescriptionSub[0],
              },
              {
                index: 2,
                title: buildData.augmentNameSub[1],
                content: buildData.augmentDescriptionSub[1],
              },
              {
                index: 3,
                title: buildData.augmentNameSub[2],
                content: buildData.augmentDescriptionSub[2],
              },
            ]}
          >
            <h2 className="bg-secondary py-2 text-center text-2xl font-bold">
              Secondary DPS
            </h2>
          </CheckboxParent>
          {/* Sup/Debuff */}
          <CheckboxParent
            items={[
              {
                index: 1,
                title: buildData.augmentNameSup[0],
                content: buildData.augmentDescriptionSup[0],
              },
              {
                index: 2,
                title: buildData.augmentNameSup[1],
                content: buildData.augmentDescriptionSup[1],
              },
              {
                index: 3,
                title: buildData.augmentNameSup[2],
                content: buildData.augmentDescriptionSup[2],
              },
            ]}
          >
            <h2 className="bg-accent py-2 text-center text-2xl font-bold">
              Sup / Debuff
            </h2>
          </CheckboxParent>
        </BuildGrid>
      </Section>
      {/* Upgrades */}
      <Section>
        <SubHeader>Upgrades</SubHeader>
        <BuildGrid>
          {/* DPS */}
          <UpgradeContent upgrades={buildData.upgradesDps}>
            <h2 className="bg-primary py-2 text-center text-2xl font-bold">
              Main DPS
            </h2>
          </UpgradeContent>
          {/* 2nd DPS */}
          <UpgradeContent upgrades={buildData.upgradesSub}>
            <h2 className="bg-secondary py-2 text-center text-2xl font-bold">
              Secondary DPS
            </h2>
          </UpgradeContent>
          {/* Sup/Debuff */}
          <UpgradeContent upgrades={buildData.upgradesSup}>
            <h2 className="bg-accent py-2 text-center text-2xl font-bold">
              Sup / Debuff
            </h2>
          </UpgradeContent>
        </BuildGrid>
      </Section>
      {/* Elements */}
      <Section>
        <SubHeader>Elements</SubHeader>
        <BuildGrid>
          {/* DPS */}
          <ElementContent elements={buildData.elementsDps}>
            <h2 className="bg-primary py-2 text-center text-2xl font-bold">
              Main DPS
            </h2>
          </ElementContent>
          {/* 2nd DPS */}
          <ElementContent elements={buildData.elementsSub}>
            <h2 className="bg-secondary py-2 text-center text-2xl font-bold">
              Secondary DPS
            </h2>
          </ElementContent>
          {/* Sup/Debuff */}
          <ElementContent elements={buildData.elementsSup}>
            <h2 className="bg-accent py-2 text-center text-2xl font-bold">
              Sup / Debuff
            </h2>
          </ElementContent>
        </BuildGrid>
      </Section>
      {/* Synergy Builds */}
      <Section>
        <SubHeader>Synergy</SubHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
    </div>
  );
}

export function BuildDisplaySkelton() {
  return (
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
}

function BuildGrid({ children }: { children: ReactNode }) {
  return <div className="grid grid-rows-3 grid-cols-1 md:grid-rows-1 md:grid-cols-3 gap-4">{children}</div>;
}
