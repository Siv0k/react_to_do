import React, { useState } from "react";
import "../styles/TaskContainer.css";
import IsComplitedTaskButton from "./UI/IsComplitedTaskButton/IsComplitedTaskButton";
import DeleteTaskButton from "./UI/DeleteTaskButton/DeleteTaskButton";

const TaskContainer = (props) => {
  return (
    <div className="taskContainer">
      <div className="taskContent"> { props.task.title } </div>
      <IsComplitedTaskButton />
      <DeleteTaskButton />
    </div>
  );
};

export default TaskContainer;
