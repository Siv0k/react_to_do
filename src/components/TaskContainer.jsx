import React from "react";
import "../styles/TaskContainer.css";
import IsComplitedTaskButton from "./UI/IsComplitedTaskButton/IsComplitedTaskButton";
import DeleteTaskButton from "./UI/DeleteTaskButton/DeleteTaskButton";

const TaskContainer = (props) => {
  const { task, remove, done } = props;
  const handleRemove = () => {
    remove(task.id);
  };

  return (
    <div className="taskContainer">
      <div className="taskContent"> { task.title } </div>
      <IsComplitedTaskButton 
      done = { task.done }
      onClick = { done } 
      />
      <DeleteTaskButton onClick = { handleRemove} />
    </div>
  );
};

export default TaskContainer;
