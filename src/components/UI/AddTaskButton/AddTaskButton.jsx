import React from 'react'
import classes from './AddTaskButton.module.css'

const AddTaskButton = (props) => {
    return (
        <button {...props} className={classes.addTaskButton}>+</button>
    )
}

export default AddTaskButton;