import { ReactNode } from "react";
import ImageUnop from "../ImageUnop";
import { GITSPRITEURL } from "@/lib/types";

//Custom colour these to the recommended element?
export function BulletPoint() {
  return (
    <div className="bg-secondary h-4 w-4 place-self-center rounded-sm"></div>
  );
}

export function SubHeader({ children }: { children?: ReactNode }) {
  return (
    <div className="border-secondary flex h-fit w-full flex-row gap-2 border-b-2 font-bold">
      <BulletPoint />
      <h1 className="py-1 text-2xl">{children}</h1>
    </div>
  );
}

export function Section({ children }: { children?: ReactNode }) {
  return <div className="flex w-full flex-col gap-4">{children}</div>;
}

export function ArrowDivide() {
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

export function ArrowDivideHorizontal() {
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

export function CheckboxContent({
  index,
  title,
  content,
}: CheckboxContentProps) {
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

export function CheckboxParent({ children, items }: CheckboxParentProps) {
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

export function UpgradeContent({ children, upgrades }: UpgradeContentProps) {
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

export function ElementContent({ children, elements }: ElementContentProps) {
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
