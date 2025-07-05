"use client";

import { useState } from "react";
import { LoadingSpinner } from "./LoadingSpinner";
import Modal from "./Modal";
import { useDeleteBlogPostSWR } from "@/lib/SwrHooks";

export default function DeleteButtonModal({
  id,
}: {
  id: string;
  redirect?: boolean;
}) {
  const [open, setOpen] = useState(false); //modal open close
  const { data, trigger: deleteGuide, isMutating } = useDeleteBlogPostSWR(id);

  async function onDelete() {
    deleteGuide();
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="bg-red-500 aspect-square place-self-center p-2"
      >
        {" "}
        <svg
        className=" stroke-red-50"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 6h18"></path>
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
          <line x1="10" x2="10" y1="11" y2="17"></line>
          <line x1="14" x2="14" y1="11" y2="17"></line>
        </svg>
      </button>
      <Modal
        open={open}
        cancelFn={() => setOpen(isMutating)}
        titleContent={<h1>Delete Team?</h1>}
        content={
          <>
            {isMutating && <LoadingSpinner />}
            <p>Are you sure you want to delete this team?</p>
          </>
        }
        buttons={
          <>
            {" "}
            <button
              disabled={isMutating}
              className="bg-background hover:bg-secondary text-secondary-foreground border"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
            <button
              disabled={isMutating}
              className="bg-destructive text-destructive-foreground"
              onClick={onDelete}
            >
              Confirm
            </button>
          </>
        }
      />
    </>
  );
}
