import { useUpdateSpellAboutMutate } from "@/lib/Queries";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { LiElement, Section, SubHeader, Toast } from "../SpellsFormatting";
import { SpellAboutInput } from "@/lib/types";

export default function AboutSpellForm({
  spellName,
  setToastOpen,
  setToast,
}: {
  spellName: string;
  setToastOpen: (value: boolean) => void;
  setToast: (node: ReactNode) => void;
}) {
  const [intro, setIntro] = useState("");
  const [mage, setMage] = useState("");
  const [augmentList, setAugmentList] = useState([""]);
  const [upgradeList, setUpgradeList] = useState([""]);
  const [overview, setOverview] = useState("");
  const [mutateAbout] = useUpdateSpellAboutMutate();

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
    const data: SpellAboutInput = {
      intro: intro,
      mageInfo: mage,
      augments: augmentList,
      upgrades: upgradeList,
      overview: overview,
    };
    mutateAbout.mutate({ spellname: spellName, aboutData: data });
  }

  return (
    <form>
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
          type="button"
          onClick={handleAboutSubmit}
          disabled={mutateAbout.isPending}
          className="btn btn-success btn-wide"
        >
          Save
        </button>
      </div>
    </form>
  );
}
