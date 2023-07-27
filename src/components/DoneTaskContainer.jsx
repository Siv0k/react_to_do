import React from "react";
import "../styles/TaskContainer.css";
import IsComplitedTaskButton from "./UI/IsComplitedTaskButton/IsComplitedTaskButton";
import DeleteTaskButton from "./UI/DeleteTaskButton/DeleteTaskButton";

const DoneTaskContainer = (props) => {
    const {task, remove, taskNotDone} = props;

    return (
        <div className="taskContainer">
            <div className="taskContent">{task.title}</div>
            <IsComplitedTaskButton done={true} onClick={taskNotDone}/>
            <DeleteTaskButton onClick={() => remove(task.id)}/>
        </div>
    );
};

export default DoneTaskContainer;
