import React from 'react'
import DoneTaskContainer from './DoneTaskContainer'

const DoneTaskList = (props) => {
    const {tasks, remove, taskNotDone} = props;
    return (
        <div>
            {tasks.map((task) =>
                <DoneTaskContainer
                    key={task.id}
                    remove={() => remove(task.id)}
                    taskNotDone={() => taskNotDone(task.id)}
                    task={task}
                />
            )}
        </div>
    )
}

export default DoneTaskList;
