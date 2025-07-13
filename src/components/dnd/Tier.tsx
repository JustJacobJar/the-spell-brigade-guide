"use client";

import { Droppable } from "@hello-pangea/dnd";
import DataCard from "./DataCard";
import { Tier } from "@/lib/types";

interface TierProps {
  tier: Tier;
  // data: { spellName: string }[]    //List of card data
}

export default function TierRow({ tier }: TierProps) {
  return (
    <div className="flex min-h-32">
      <div
        className={
          "grid w-32 content-center border-2 text-center text-4xl font-bold " +
          tier.tierClassname
        }
      >
        {tier.tierName}
      </div>

      <Droppable droppableId={tier.tierId} direction="horizontal">
        {(provided) => (
          <div
            className="flex w-full max-w-5xl flex-wrap items-center gap-2 border-2 p-2 pl-4 select-none"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tier.tierItems.map((item, index) => (
              <DataCard
                key={item.spellName}
                id={item.spellName}
                index={index}
                spell={item}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
