"use client"

import React, { FC, useId, useState } from 'react';
import {
  closestCorners,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import Column from "@/components/column/column";
import styles from './page.styles.module.scss'
import { TaskType } from "@/types/task.types";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import AddTask from "@/components/task/add-task/add-task";
import { v4 as uuid } from "uuid";

interface PageProps {
}

const Page: FC<PageProps> = ({}) => {
  const dndId = useId();
  const [tasks, setTasks] = useState<Array<TaskType>>([
    { id: uuid(), title: 'Task 1' },
    { id: uuid(), title: 'Task 2' },
    { id: uuid(), title: 'Task 3' },
    { id: uuid(), title: 'Task 4' },
    { id: uuid(), title: 'Task 5' },
  ]);

  const addTaskFunc = (title: TaskType['title']) => {
    setTasks(newTasks => [...newTasks, { id: uuid(), title }]);
  }

  const removeTaskFunc = (id: TaskType['id']) => {
    setTasks(newTasks => {
      return newTasks.filter((task) => task.id !== id)
    });
  }

  const getTaskPos = (id: TaskType['id']) => tasks.findIndex(task => task.id === id);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id === over.id) return;
    setTasks(tasks => {
      const originPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      return arrayMove(tasks, originPos, newPos);
    });
  };

  // To works this, in css touch-action have to be none => touch-action: none;
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  return (
    <div className={styles.page_container}>
      <div className={styles.title_page}>My tasks</div>
      <div className={styles.content_tasks_container}>
        <AddTask addTaskFunc={addTaskFunc}/>
        <DndContext id={dndId} sensors={sensors} collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
          <Column tasks={tasks} removeTaskFunc={removeTaskFunc}/>
        </DndContext>
      </div>
    </div>
  );
};

export default Page;