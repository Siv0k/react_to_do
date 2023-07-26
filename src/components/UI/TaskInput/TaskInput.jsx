import React from 'react'
import classes from './TaskInput.module.css'

const TaskInput = () => {
  return (
    <input className = {classes.taskInput} type="text" placeholder='Какие планы?...' />
  )
}

export default TaskInput;
