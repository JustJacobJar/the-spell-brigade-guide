"use client";
import TierRowDnd from "@/components/dnd/Tier";
import { MyMDXEditor } from "@/components/markup/ForwardRefEditor";
import {
  useCreateMetaReportMutate,
  useEditMetaReportMutate,
} from "@/lib/Queries";
import { reorderTiers } from "@/lib/tierHelpers";
import { Tier } from "@/lib/types";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { useRef, useState } from "react";

//Pass initial tier data to the form (if no data it gets passed blank tier list data)

/**
 * Create or update form
 * use upsert?
 * create -> no id provided
 *  no id = no data
 *  set mode to create
 *  on submit, create new post
 * edit -> id provided
 *  edit mode true
 *  pass data from id post
 *  on submit, edit post with ID
 *
 *
 */

/**
 * TODO
 * add confirmation alert when submitting data
 * Show tier list -> make it so that each spell can be clicked on/hovered to show more details
 */

interface TierFormProps {
  tierData: Tier[];
  metaId?: number;
  metaTitle?: string;
  metaContent?: string;
  edit?: boolean;
}

export default function MetaReportForm({
  tierData,
  metaId,
  metaTitle,
  metaContent,
  edit = false,
}: TierFormProps) {
  const [title, setTitle] = useState(metaTitle ?? "");
  const [description, setDescription] = useState(
    metaContent ?? "# Some Description Text",
  );
  const [tiers, setTiers] = useState<Tier[]>(tierData);
  const [mutateCreate] = useCreateMetaReportMutate();
  const [mutateEdit] = useEditMetaReportMutate();

  function onSubmitData() {
    if (edit) {
      if (metaId === undefined)
        throw "No id was provided to edit the meta report";
      mutateEdit.mutate({
        id: metaId,
        title: title,
        content: description,
        tierlist: tiers,
      });
    } else {
      mutateCreate.mutate({
        title: title,
        content: description,
        tierlist: tiers,
      });
    }
  }

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    // Check if the destination is valid
    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    setTiers(reorderTiers(tiers, source, destination));
  };

  return (
    <form
      className="flex flex-col gap-2 rounded-2xl bg-neutral-50/10 p-2 w-full"
      action={() => onSubmitData()}
    >
      <input
        className="w-96 rounded-xl bg-neutral-700 p-2"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
        placeholder={"TierListName"}
      />

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="outline">
          {tiers.map((tier, index) => (
            <TierRowDnd key={index} tier={tier} />
          ))}
        </div>
      </DragDropContext>
      <div>
        <MyMDXEditor
          className="dark-theme dark-editor border-base-300 rounded-field min-h-48 grow border-2"
          // editorRef={editor}
          markdown={description}
          onChange={(e) => setDescription(e)}
        />
      </div>
      <button
        className="w-fit place-self-end rounded-md bg-orange-400 p-2 px-4"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
