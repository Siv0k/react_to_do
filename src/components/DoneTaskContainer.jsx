import React from 'react'
import "../styles/TaskContainer.css";
import IsComplitedTaskButton from "./UI/IsComplitedTaskButton/IsComplitedTaskButton";
import DeleteTaskButton from "./UI/DeleteTaskButton/DeleteTaskButton";

const DoneTaskContainer = (props) => {
  return (
    <div className="taskContainer">
        <div className="taskContent">{props.task.title}</div>
        <IsComplitedTaskButton/>
        <DeleteTaskButton onClick={() => props.remove(props.task.id)} />
    </div>
  )
}

export default DoneTaskContainer;
