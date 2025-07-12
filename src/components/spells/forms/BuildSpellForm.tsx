import {
  buildAugmentInfo,
  SpellBuildInput,
  SpellElement,
  SpellElementList,
} from "@/lib/types";
import { ArrowDivide, Section, SubHeader, Toast } from "../SpellsFormatting";
import { ReactNode, useEffect, useState } from "react";
import { useUpdateSpellBuildMutate } from "@/lib/Queries";
import { SpellBuild } from "@/generated/client";

export default function BuildSpellForm({
  spellName,
  currentData,
  setToastOpen,
  setToast,
}: {
  spellName: string;
  currentData?: SpellBuild;
  setToastOpen: (value: boolean) => void;
  setToast: (node: ReactNode) => void;
}) {
  const [augmentListDPS, setAugmentListDPS] = useState<buildAugmentInfo[]>(
    currentData
      ? [
          {
            name: currentData?.augmentNameDps[0],
            description: currentData?.augmentDescriptionDps[0],
          },
          {
            name: currentData?.augmentNameDps[1],
            description: currentData?.augmentDescriptionDps[1],
          },
          {
            name: currentData?.augmentNameDps[2],
            description: currentData?.augmentDescriptionDps[2],
          },
        ]
      : [
          { name: "Augment Name", description: "Agument Description" },
          { name: "Augment Name", description: "Agument Description" },
          { name: "Augment Name", description: "Agument Description" },
        ],
  );
  const [augmentListSub, setAugmentListSub] = useState<buildAugmentInfo[]>(
    currentData
      ? [
          {
            name: currentData?.augmentNameSub[0],
            description: currentData?.augmentDescriptionSub[0],
          },
          {
            name: currentData?.augmentNameSub[1],
            description: currentData?.augmentDescriptionSub[1],
          },
          {
            name: currentData?.augmentNameSub[2],
            description: currentData?.augmentDescriptionSub[2],
          },
        ]
      : [
          { name: "Augment Name", description: "Agument Description" },
          { name: "Augment Name", description: "Agument Description" },
          { name: "Augment Name", description: "Agument Description" },
        ],
  );
  const [augmentListSup, setAugmentListSup] = useState<buildAugmentInfo[]>(
    currentData
      ? [
          {
            name: currentData?.augmentNameSup[0],
            description: currentData?.augmentDescriptionSup[0],
          },
          {
            name: currentData?.augmentNameSup[1],
            description: currentData?.augmentDescriptionSup[1],
          },
          {
            name: currentData?.augmentNameSup[2],
            description: currentData?.augmentDescriptionSup[2],
          },
        ]
      : [
          { name: "Augment Name", description: "Agument Description" },
          { name: "Augment Name", description: "Agument Description" },
          { name: "Augment Name", description: "Agument Description" },
        ],
  );

  const [upgradeListDPS, setUpgradeListDPS] = useState<string[]>(
    currentData?.upgradesDps ?? [
      "Upgrade Name",
      "Upgrade Name1",
      "Upgrade Name2",
    ],
  );
  const [upgradeListSub, setUpgradeListSub] = useState<string[]>(
    currentData?.upgradesSub ?? [
      "Upgrade Name",
      "Upgrade Name1",
      "Upgrade Name2",
    ],
  );
  const [upgradeListSup, setUpgradeListSup] = useState<string[]>(
    currentData?.upgradesSup ?? [
      "Upgrade Name",
      "Upgrade Name1",
      "Upgrade Name2",
    ],
  );

  const [elementsDPS, setElementsDPS] = useState<SpellElement[]>(
    (currentData?.elementsDps as SpellElement[]) ?? ["DEFAULT", "DEFAULT"],
  );
  const [elementsSub, setElementsSub] = useState<SpellElement[]>(
    (currentData?.elementsSub as SpellElement[]) ?? ["DEFAULT", "DEFAULT"],
  );
  const [elementsSup, setElementsSup] = useState<SpellElement[]>(
    (currentData?.elementsSup as SpellElement[]) ?? ["DEFAULT", "DEFAULT"],
  );

  const [mutateBuild] = useUpdateSpellBuildMutate();

  // Handle Toast
  useEffect(() => {
    if (mutateBuild.isError) {
      setToast(
        <Toast
          state="Error"
          message={`Not saved! ${mutateBuild.error.message}`}
          closeFn={() => setToastOpen(false)}
        />,
      );
      setToastOpen(true);
    }
    if (mutateBuild.isSuccess) {
      setToast(
        <Toast
          state="Success"
          message="Succesfully Updated About"
          closeFn={() => setToastOpen(false)}
        />,
      );
      setToastOpen(true);
    }
  }, [mutateBuild.status]);

  function handleBuildSubmit() {
    const data: SpellBuildInput = {
      augmentsDps: augmentListDPS,
      augmentsSub: augmentListSub,
      augmentsSup: augmentListSup,

      upgradeDps: upgradeListDPS,
      upgradeSub: upgradeListSup,
      upgradeSup: upgradeListSup,

      elementsDps: elementsDPS,
      elementsSub: elementsSub,
      elementsSup: elementsSup,
    };
    mutateBuild.mutate({ spellname: spellName, buildData: data });
  }

  return (
    <form className="flex flex-col gap-8">
      {/* Quick Recommendations */}
      {/* Augments */}
      <Section>
        <SubHeader>Augments</SubHeader>
        <div className="grid grid-cols-3 gap-4">
          {/* DPS */}
          <div className="join join-vertical rounded-field overflow-clip">
            <h2 className="bg-primary py-2 text-center text-2xl font-bold">
              Main DPS
            </h2>
            {/* Input Augment Item */}
            {augmentListDPS.map((li, index) => (
              <BuildAugmentInput
                key={index}
                index={index}
                list={augmentListDPS}
                setList={setAugmentListDPS}
              />
            ))}
          </div>
          {/* 2nd DPS */}
          <div className="join join-vertical rounded-field overflow-clip">
            <h2 className="bg-secondary py-2 text-center text-2xl font-bold">
              Secondary DPS
            </h2>
            {/* Input Augment Item */}
            {augmentListSub.map((li, index) => (
              <BuildAugmentInput
                key={index}
                index={index}
                list={augmentListSub}
                setList={setAugmentListSub}
              />
            ))}
          </div>
          {/* Sup/Debuff */}
          <div className="join join-vertical rounded-field overflow-clip">
            <h2 className="bg-accent py-2 text-center text-2xl font-bold">
              Sup / Debuff
            </h2>
            {/* Input Augment Item */}
            {augmentListSup.map((li, index) => (
              <BuildAugmentInput
                key={index}
                index={index}
                list={augmentListSup}
                setList={setAugmentListSup}
              />
            ))}
          </div>
        </div>
      </Section>
      {/* Upgrades */}
      <Section>
        <SubHeader>Upgrades</SubHeader>
        <div className="grid grid-cols-3 gap-4">
          {/* DPS */}
          <div className="card bg-base-100 flex flex-col gap-4 overflow-clip pb-4">
            <h2 className="bg-primary py-2 text-center text-2xl font-bold">
              Main DPS
            </h2>
            <BuildUpgradeInput
              list={upgradeListDPS}
              setList={setUpgradeListDPS}
            />
          </div>
          {/* 2nd DPS */}
          <div className="card bg-base-100 flex flex-col gap-4 overflow-clip pb-4">
            <h2 className="bg-secondary py-2 text-center text-2xl font-bold">
              Secondary DPS
            </h2>
            <BuildUpgradeInput
              list={upgradeListSub}
              setList={setUpgradeListSub}
            />
          </div>
          {/* Sup/Debuff */}
          <div className="card bg-base-100 flex flex-col gap-4 overflow-clip pb-4">
            <h2 className="bg-accent py-2 text-center text-2xl font-bold">
              Sup / Debuff
            </h2>
            <BuildUpgradeInput
              list={upgradeListSup}
              setList={setUpgradeListSup}
            />
          </div>
        </div>
      </Section>
      {/* Elements */}
      <Section>
        <SubHeader>Elements</SubHeader>
        <div className="grid grid-cols-3 gap-4">
          {/* DPS */}
          <div className="card bg-base-300 gap-4 overflow-clip pb-4">
            <h2 className="bg-primary py-2 text-center text-2xl font-bold">
              Main DPS
            </h2>
            {elementsDPS.map((li, index) => (
              <BuildElementSelector
                key={index}
                list={elementsDPS}
                setList={setElementsDPS}
              />
            ))}
          </div>
          {/* 2nd DPS */}
          <div className="card bg-base-300 gap-4 overflow-clip pb-4">
            <h2 className="bg-secondary py-2 text-center text-2xl font-bold">
              Secondary DPS
            </h2>
            {elementsSub.map((li, index) => (
              <BuildElementSelector
                key={index}
                list={elementsSub}
                setList={setElementsSub}
              />
            ))}
          </div>
          {/* Sup/Debuff */}
          <div className="card bg-base-300 gap-4 overflow-clip pb-4">
            <h2 className="bg-accent py-2 text-center text-2xl font-bold">
              Sup / Debuff
            </h2>
            {elementsSub.map((li, index) => (
              <BuildElementSelector
                key={index}
                list={elementsSup}
                setList={setElementsSup}
              />
            ))}
          </div>
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
      <div className="flex place-content-end py-4">
        <button
          type="button"
          onClick={handleBuildSubmit}
          disabled={mutateBuild.isPending}
          className="btn btn-success btn-wide"
        >
          Save
        </button>
      </div>
    </form>
  );
}

function BuildUpgradeInput({
  list,
  setList,
}: {
  list: string[];
  setList: (data: string[]) => void;
}) {
  return (
    <div className="px-4">
      <div className="bg-base-300 rounded-field card-body grid w-full place-items-center place-self-center text-lg font-bold">
        <input
          className="input grow"
          value={list[0]}
          onChange={(e) => {
            const modList = [...list];
            modList[0] = e.currentTarget.value;
            setList(modList);
          }}
          placeholder="Augment name"
        />
      </div>
      <ArrowDivide />
      <div className="bg-base-300 rounded-field card-body grid w-full place-items-center place-self-center text-lg font-bold">
        <input
          className="input grow"
          value={list[1]}
          onChange={(e) => {
            const modList = [...list];
            modList[1] = e.currentTarget.value;
            setList(modList);
          }}
          placeholder="Augment name"
        />
      </div>
      <ArrowDivide />
      <div className="bg-base-300 rounded-field card-body grid w-full place-items-center place-self-center text-lg font-bold">
        <input
          className="input grow"
          value={list[2]}
          onChange={(e) => {
            const modList = [...list];
            modList[2] = e.currentTarget.value;
            setList(modList);
          }}
          placeholder="Augment name"
        />
      </div>
    </div>
  );
}

function BuildAugmentInput({
  index,
  list,
  setList,
}: {
  index: number;
  list: buildAugmentInfo[];
  setList: (data: buildAugmentInfo[]) => void;
}) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="bg-neutral rounded-selector grid aspect-square h-full place-content-center">
          {index + 1}
        </div>
        <input
          className="input grow"
          value={list[index].name}
          onChange={(e) => {
            const modList = [...list];
            const item = modList[index];
            if (!item) return;
            item.name = e.currentTarget.value;
            setList(modList);
          }}
          placeholder="Augment name"
        />
      </div>
      <textarea
        className="input min-h-16 w-full"
        value={list[index].description}
        onChange={(e) => {
          const modList = [...list];
          const item = modList[index];
          if (!item) return;
          item!.description = e.currentTarget.value;
          setList(modList);
        }}
        placeholder="Augment description"
      />
    </div>
  );
}

function BuildElementSelector({
  list,
  setList,
}: {
  list: SpellElement[];
  setList: (data: SpellElement[]) => void;
}) {
  return (
    <select defaultValue={"DEFAULT"} className="select place-self-center">
      <option disabled value={"DEFAULT"}>
        Pick an element
      </option>
      {SpellElementList.map((option, index) => (
        <option
          key={index}
          value={option}
          onChange={(e) => {
            const modList = [...list];
            modList[index] = e.currentTarget.value as SpellElement;
            setList(modList);
          }}
        >
          {option}
        </option>
      ))}
    </select>
  );
}
