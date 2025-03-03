"use client"

// import { DndContext } from '@dnd-kit/core';
// import { Draggable, Droppable } from '@/components';
// import { useState } from "react";

import Link from "next/link";

export default function Home() {
  // const [isDropped, setIsDropped] = useState(false);
  // const draggableMarkup = (
  //   <Draggable>Drag me</Draggable>
  // );

  // function handleDragEnd(event: any) {
  //   console.log(event)
  //   if (event.over && event.over.id === 'droppable') {
  //     setIsDropped(true);
  //   }
  // }

  return (
    <>
      <Link href='/totorial-my-tasks'>Tutorial my tasks</Link>
    </>
    // <DndContext onDragEnd={handleDragEnd}>
    //   {!isDropped ? draggableMarkup : null}
    //   <Droppable>
    //     {isDropped ? draggableMarkup : 'Drop here'}
    //   </Droppable>
    // </DndContext>
  );
}
