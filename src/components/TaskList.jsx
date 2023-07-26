import React from 'react'
import TaskContainer from './TaskContainer'

const TaskList = ({tasks, remove, done}) => {
  return (
    <div>
        {tasks.map((task) => 
            <TaskContainer 
            key = {task.id} 
            remove={() => remove(task.id)} 
            done = {() => done(task.id)}
            task = {task}
            />
        )}
    </div>
  )
}

export default TaskList;