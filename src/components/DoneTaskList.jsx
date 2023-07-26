import React from 'react'
import DoneTaskContainer from './DoneTaskContainer'

const DoneTaskList = ({tasks, remove}) => {
  return (
    <div>
        {tasks.map((task) =>
        <DoneTaskContainer
        key = {task.id}
        remove = {() => remove(task.id)}
        task = {task}
        />
        )}
    </div>
  )
}

export default DoneTaskList;
