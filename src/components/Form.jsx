import React, { useState } from "react";
import "../styles/Form.css";
import TaskInput from "./UI/TaskInput/TaskInput";
import AddTaskButton from "./UI/AddTaskButton/AddTaskButton";

const Form = (props) => {
  const { create, checkEmptyTask, doneTasks, tasks } = props;
  const [task, setTask] = useState([{ title: "" }]);

  const addNewTask = (e) => {
    e.preventDefault();
    if (checkEmptyTask(task)) return;

    const checkIfTaskRepited =
      doneTasks.find((item) => item.title === task.title) ||
      tasks.find((item) => item.title === task.title);

    if (checkIfTaskRepited) {
      alert("Такая задача уже есть");
      return;
    }

    const newTask = {
      ...task,
    };

    create(newTask);
    setTask({ title: "" });
  };

  return (
    <form>
      <TaskInput
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value.trim() })}
      />
      <AddTaskButton onClick={addNewTask} />
    </form>
  );
};

export default Form;
