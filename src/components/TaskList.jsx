import React from 'react'
import TaskContainer from './TaskContainer'

const TaskList = (props) => {
    const {tasks, remove, done} = props;
    return (
        <div>
            {tasks.map((task) =>
                <TaskContainer
                    key={task.id}
                    remove={() => remove(task.id)}
                    done={() => done(task.id)}
                    task={task}
                />
            )}

        </div>
    )
}

export default TaskList;