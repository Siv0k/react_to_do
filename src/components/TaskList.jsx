import React from 'react'
import TaskContainer from './TaskContainer'

const TaskList = ({tasks}) => {
  return (
    <div>
        {tasks.map((task) => 
            <TaskContainer task = {task}/>
        )}
    </div>
  )
}

export default TaskList;