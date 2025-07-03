"use client";
import TierRow from "@/components/dnd/Tier";
import { reorderTiers } from "@/lib/tierHelpers";
import { Tier } from "@/lib/types";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { useState } from "react";

//Pass initial tier data to the form (if no data it gets passed blank tier list data)

interface TierFormProps {
  tierData: Tier[];
  edit?: boolean;
}

export default function TierFormNoSub({ tierData }: TierFormProps) {
  const [tiers, setTiers] = useState<Tier[]>(tierData);

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
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="">
        {tiers.map((tier, index) => (
          <TierRow key={index} tier={tier} />
        ))}
      </div>
    </DragDropContext>
  );
}
