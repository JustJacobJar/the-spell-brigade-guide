import { Droppable } from "@hello-pangea/dnd";

export default function TierListContainer() {
  return (
    <Droppable droppableId="list-container" direction="horizontal">
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {/* Lists will be rendered here */}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
