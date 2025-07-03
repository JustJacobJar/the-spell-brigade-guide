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
      <div className={"w-32 border-2 content-center text-4xl font-bold text-center " + tier.tierClassname}>
        {tier.tierName}
      </div>

      <Droppable droppableId={tier.tierId} direction="horizontal">
        {(provided) => (
          <div
            className="flex flex-wrap items-center border-2 w-5xl pl-4 select-none p-2 gap-2"
            
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
