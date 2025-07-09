"use client";

import {
  CheckboxParent,
  ElementContent,
  Section,
  SubHeader,
  UpgradeContent,
} from "./SpellsFormatting";

//Take in build data when made
export function BuildDisplay() {
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
