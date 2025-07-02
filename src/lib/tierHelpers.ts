import { DraggableLocation } from "@hello-pangea/dnd";
import { Tier } from "./types";

function reorder<T>(list: T[], startIndex: number, endIndex: number) {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}

export const reorderTiers = (
  tiers: Tier[], //our tier shape
  source: DraggableLocation,
  destination: DraggableLocation,
) => {
  const current = tiers.find((x) => x.tierId === source.droppableId)!; //Find tierId we are moving from
  const next = tiers.find((x) => x.tierId === destination.droppableId)!; //Find tierId we are moving to
  const target = current.tierItems[source.index]; //the item we are moving

  //Reordering in same tier
  if (source.droppableId === destination.droppableId) {
    const reordered = reorder(
      current.tierItems,
      source.index,
      destination.index,
    );

    const result = tiers.map((x) =>
      x.tierId === current.tierId ? { ...x, tierItems: reordered } : x,
    );
    return result;
  }

  //Moving to another tier

  //remove from original
  current.tierItems.splice(source.index, 1);
  //Insert into destination
  next.tierItems.splice(destination.index, 0, target);

  //Return the modified arrays
  const result = tiers.map((x) => {
    if (current.tierId === x.tierId) {
      return {
        ...x,
        tierItems: current.tierItems,
      };
    } else if (next.tierId === x.tierId) {
      return {
        ...x,
        tierItems: next.tierItems,
      };
    }

    return x;
  });
  return result;
};