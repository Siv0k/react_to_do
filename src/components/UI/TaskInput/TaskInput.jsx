import React from 'react'
import classes from './TaskInput.module.css'

const TaskInput = (props) => {
    return (
        <input {...props} className={classes.taskInput} type="text" placeholder='Какие планы?...'/>
    )
}

export default TaskInput;
