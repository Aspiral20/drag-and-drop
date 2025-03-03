import React, { FC } from 'react';
import styles from './column.styles.module.scss';
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { TaskType } from "@/types/task.types";
import Task from "@/components/task/task";

interface ColumnProps {
  tasks: Array<TaskType>;
  removeTaskFunc: (id: TaskType['id']) => void;
}

const Column: FC<ColumnProps> = ({ tasks, removeTaskFunc }) => {

  return (
    <div className={styles.column}>
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task, i) => (
          <Task key={task.id} id={task.id} title={task.title} removeTaskFunc={removeTaskFunc}/>
        ))}
      </SortableContext>
    </div>
  );
};

export default Column;