"use client";
import { LiElement, Section, SubHeader, Toast } from "../SpellsFormatting";
import { ReactNode, useEffect, useState } from "react";
import { handleLiChange } from "./AboutSpellForm";
import { SpellReview } from "@/generated/client";
import { useUpdateSpellReviewMutate } from "@/lib/Queries";
import { SpellReviewInput } from "@/lib/types";
import { MyMDXEditor } from "@/components/markup/ForwardRefEditor";

export default function ReviewSpellForm({
  spellName,
  currentData,
  setToastOpen,
  setToast,
}: {
  spellName: string;
  currentData?: SpellReview;
  setToastOpen: (value: boolean) => void;
  setToast: (node: ReactNode) => void;
}) {
  const [pros, setPros] = useState(currentData?.pros ?? [""]);
  const [cons, setCons] = useState(currentData?.cons ?? [""]);
  const [content, setContent] = useState(
    currentData?.review ?? "# Some Markdown Content",
  );
  const [author, setAuthor] = useState(currentData?.author ?? "");
  const [mutateReview] = useUpdateSpellReviewMutate();

  useEffect(() => {
    if (mutateReview.isError) {
      setToast(
        <Toast
          state="Error"
          message={`Not saved Review! ${mutateReview.error.message}`}
          closeFn={() => setToastOpen(false)}
        />,
      );
      setToastOpen(true);
    }
    if (mutateReview.isSuccess) {
      setToast(
        <Toast
          state="Success"
          message="Succesfully Updated Review"
          closeFn={() => setToastOpen(false)}
        />,
      );
      setToastOpen(true);
    }
  }, [mutateReview.status]);

  function handleSubmitReview() {
    const data: SpellReviewInput = {
      pros: pros,
      cons: cons,
      review: content,
      author: author,
    };
    mutateReview.mutate({ spellname: spellName, reviewData: data });
  }

  return (
    <div className="flex flex-col gap-4">
      <Section>
        <SubHeader>Pros / Cons</SubHeader>
        {/* Pro/Con */}
        <div className="grid grid-cols-2 gap-4">
          {/* Pros */}
          <div className="card bg-base-100 border-base-300 text-success w-full border-2 shadow-sm">
            <div className="p-4">
              <h2 className="card-title text-2xl">Pros</h2>
              <div className="divider divider-vertical"></div>
              <ul className="list list-inside list-disc gap-2 pl-4 text-lg">
                {pros.map((li, index) => {
                  return (
                    <LiElement
                      classname="w-full"
                      key={index}
                      value={li}
                      index={index}
                      parentList={pros}
                      parentListFn={setPros}
                      fn={handleLiChange}
                    />
                  );
                })}
                <div className="flex flex-row gap-2 p-2">
                  <button
                    className="btn btn-neutral btn-wide"
                    type="button"
                    onClick={() => setPros([...pros, ""])}
                  >
                    Add Item
                  </button>
                  <button
                    className="btn btn-error btn-wide"
                    type="button"
                    onClick={() => {
                      const arr = [...pros];
                      arr.pop();
                      setPros(arr);
                    }}
                  >
                    Remove Item
                  </button>
                </div>
              </ul>
            </div>
          </div>
          {/* Cons */}
          <div className="card bg-base-100 border-base-300 text-error w-full border-2 shadow-sm">
            <div className="p-4">
              <h2 className="card-title text-2xl">Cons</h2>
              <div className="divider divider-vertical"></div>
              <ul className="list list-inside list-disc gap-2 pl-4 text-lg">
                {cons.map((li, index) => {
                  return (
                    <LiElement
                      classname="w-full"
                      key={index}
                      value={li}
                      index={index}
                      parentList={cons}
                      parentListFn={setCons}
                      fn={handleLiChange}
                    />
                  );
                })}
                <div className="flex flex-row gap-2 p-2">
                  <button
                    className="btn btn-neutral btn-wide"
                    type="button"
                    onClick={() => setCons([...cons, ""])}
                  >
                    Add Item
                  </button>
                  <button
                    className="btn btn-error btn-wide"
                    type="button"
                    onClick={() => {
                      const arr = [...cons];
                      arr.pop();
                      setCons(arr);
                    }}
                  >
                    Remove Item
                  </button>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <SubHeader>
          Review by:
          <input
            className="input"
            value={author}
            onChange={(e) => setAuthor(e.currentTarget.value)}
          />
        </SubHeader>
        <div className="flex h-full w-full max-w-full">
          <MyMDXEditor
            className="dark-theme dark-editor border-base-300 grow border-2"
            markdown={content}
            onChange={(e) => setContent(e)}
          />
        </div>
      </Section>
      <div className="flex place-content-end py-4">
        <button
          type="button"
          onClick={handleSubmitReview}
          disabled={mutateReview.isPending}
          className="btn btn-success btn-wide"
        >
          Save
        </button>
      </div>
    </div>
  );
}
