import React, { FC, useState } from 'react';
import styles from './add-task.styles.module.scss'

interface AddTaskProps {
  addTaskFunc: (title: string) => void;
}

const AddTask: FC<AddTaskProps> = ({ addTaskFunc }) => {
  const [input, setInput] = useState({
    value: "",
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(newInput => ({ ...newInput, value: e.target.value }));
  }

  return (
    <div className={styles.add_task_container}>
      <input type="text" placeholder='Title' value={input.value} onChange={handleChange}/>
      <button onClick={() => addTaskFunc(input.value)}>Add task</button>
    </div>
  );
};

export default AddTask;