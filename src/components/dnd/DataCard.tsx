"use client";
import { GITSPRITEURL, Spell } from "@/lib/types";
import { Draggable } from "@hello-pangea/dnd";
import ImageUnop from "../ImageUnop";

interface DataCardProps {
  id: string; // this is a unique identifier -- so we know what's getting dragged!
  index: number; // this is the item's position within the tier
  spell: Spell; // this is the image!
}

export default function DataCard({ id, index, spell }: DataCardProps) {
  console.log("Card id:" + id + 
    " index:" + index + 
    " spell:" + spell.spellName);

  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <Icon url={spell.spellName} />
        </div>
      )}
    </Draggable>
  );
}

function Icon({ url }: { url: string }) {
  return (
    <div className="aspect-square w-32">
      <ImageUnop alt="Spell Sprite" src={GITSPRITEURL(url)} />
    </div>
  );
}
