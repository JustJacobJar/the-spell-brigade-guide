"use client";
import TierRow from "@/components/dnd/Tier";
import { useCreateTierListSWR } from "@/lib/SwrHooks";
import { reorderTiers } from "@/lib/tierHelpers";
import { Tier } from "@/lib/types";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { useState } from "react";

//Pass initial tier data to the form (if no data it gets passed blank tier list data)

interface TierFormProps {
  tierData: Tier[];
  edit?: boolean;
  tlId?: string;
}

export default function TierForm({
  tierData,
  edit = false,
  tlId,
}: TierFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tiers, setTiers] = useState<Tier[]>(tierData);
  const {
    data,
    error,
    trigger: create,
    isMutating,
  } = useCreateTierListSWR(tiers, title, description);

  function onSubmitData() {
    if (edit) {
      //Mutate
    } else {
      //Create
      create();
    }
    return;
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
      className="m-2 flex flex-col gap-2 rounded-2xl bg-neutral-50/10 p-2"
      action={() => onSubmitData()}
    >
      <input
        className="w-96 rounded-xl bg-neutral-700 p-2"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
        placeholder={"TierListName"}
      />

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="">
          {tiers.map((tier, index) => (
            <TierRow key={index} tier={tier} />
          ))}
        </div>
      </DragDropContext>
      <textarea
        className="min-h-32 rounded-xl bg-neutral-700 p-2"
        value={description}
        onChange={(e) => setDescription(e.currentTarget.value)}
        placeholder={"Describe this tierlist..."}
      />
      <button
        className="w-fit place-self-end rounded-md bg-orange-400 p-2 px-4"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
