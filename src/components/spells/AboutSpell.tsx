"use client";
import { SpellAbout } from "@/generated/client";
import { Section, SubHeader } from "./SpellsFormatting";

export function AboutDisplay({ aboutData }: { aboutData: SpellAbout }) {
  return (
    <>
      {/* Intro/Mage */}
      <div className="flex w-full flex-row gap-8">
        {/* Intro */}
        <div className="h-full min-h-32 w-full">
          <SubHeader>Introduction</SubHeader>
          <p>{aboutData.introduction}</p>
        </div>
        {/* Divider */}
        <div className="divider divider-horizontal" />
        {/* Wizard */}
        <div className="h-full min-h-32 w-full">
          <SubHeader>Mage</SubHeader>
          <p>{aboutData.mageInfo}</p>
        </div>
      </div>

      {/* Augments Upgrades */}
      <Section>
        <SubHeader>Augments & Upgrades</SubHeader>
        <div className="grid grid-cols-2 gap-28">
          <ul className="list-inside list-disc">
            <h2 className="text-xl font-bold">Augments</h2>
            {aboutData.augments.map((li, index) => {
              return <li key={index}>{li}</li>;
            })}
          </ul>
          <ul className="list-inside list-disc">
            <h2 className="text-xl font-bold">Upgrades</h2>
            {aboutData.upgrades.map((li, index) => {
              return <li key={index}>{li}</li>;
            })}
          </ul>
        </div>
      </Section>
      {/* Overview / Element Options */}
      <Section>
        <div className="flex flex-row gap-8">
          {/* Overview */}
          <Section>
            <SubHeader>Overview</SubHeader>
            <p>{aboutData.overview}</p>
          </Section>
          {/* Divider */}
          <div className="divider divider-horizontal" />
        </div>
      </Section>
    </>
  );
}

export function AboutDisplaySkeleton() {
  return (
    <>
      {/* Intro/Mage */}
      <div className="flex w-full flex-row gap-8">
        {/* Intro */}
        <div className="h-full min-h-32 w-full">
          <SubHeader>Introduction</SubHeader>
          <p className="skeleton h-32 w-full"></p>
        </div>
        {/* Divider */}
        <div className="divider divider-horizontal" />
        {/* Wizard */}
        <div className="h-full min-h-32 w-full">
          <SubHeader>Mage</SubHeader>
          <p className="skeleton h-32 w-full"></p>
        </div>
      </div>

      {/* Augments Upgrades */}
      <Section>
        <SubHeader>Augments & Upgrades</SubHeader>
        <div className="grid grid-cols-2 gap-28">
          <ul className="list-inside list-disc">
            <h2 className="text-xl font-bold">Augments</h2>
            <p className="skeleton h-32 max-w-64" />
          </ul>
          <ul className="list-inside list-disc">
            <h2 className="text-xl font-bold">Upgrades</h2>
            <p className="skeleton h-32 max-w-64" />
          </ul>
        </div>
      </Section>
      {/* Overview / Element Options */}
      <Section>
        <div className="flex flex-row gap-8">
          {/* Overview */}
          <Section>
            <SubHeader>Overview</SubHeader>
            <p className="skeleton h-32 w-full"></p>
          </Section>
          {/* Divider */}
          <div className="divider divider-horizontal" />
        </div>
      </Section>
    </>
  );
}
