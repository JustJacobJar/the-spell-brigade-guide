"use client";
import { useEffect } from "react";
// import DisableBodyScroll from "./DisableBodyScroll";

export default function Modal({
  open,
  cancelFn,
  titleContent,
  content,
  buttons,
}: {
  open: boolean;
  cancelFn: () => void;
  titleContent?: React.ReactNode;
  content?: React.ReactNode;
  buttons: React.ReactNode;
}) {
  // simple useEffect to capture ESC key to close the modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        if (cancelFn) {
          cancelFn();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, cancelFn]);

  if (!open) return null;

  return (
    <>
      <div
        className="fixed top-0 right-0 bottom-0 left-0 z-40 flex bg-black/20"
        onClick={cancelFn}
      />
      {/* <DisableBodyScroll /> */}
      <div className="bg-card fixed top-1/2 left-1/2 z-50 flex w-fit -translate-1/2 flex-col overflow-clip rounded-2xl border-2 p-4 shadow-md">
        <div className="flex flex-row place-content-between">
          <div className="text-lg font-bold">{titleContent}</div>
          <button
            className="stroke-foreground hover:stroke-destructive hover:bg-destructive/20 aspect-square h-fit rounded-lg p-1"
            onClick={cancelFn}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
        <div className="py-2">{content}</div>
        <div className="flex place-content-end gap-4">{buttons}</div>
      </div>
    </>
  );
}
