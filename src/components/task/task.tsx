import React, { FC } from 'react';
import { TaskType } from "@/types/task.types";
import styles from './task.styles.module.scss'
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface TaskProps {
  removeTaskFunc: (id: TaskType['id']) => void;
}

const Task: FC<TaskProps & TaskType> = ({ id, title, removeTaskFunc }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  }

  return (
    <div ref={setNodeRef} {...attributes} style={style} className={styles.task_container}>
      <div className={styles.task_content}>
        <div {...listeners}>||</div>
        <input type="checkbox" className={styles.task_checkbox}/>
        {title}
      </div>
      <button onClick={() => removeTaskFunc(id)}>Remove</button>
    </div>
  );
};

export default Task;