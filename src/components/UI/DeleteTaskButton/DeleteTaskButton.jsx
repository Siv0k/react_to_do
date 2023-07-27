import React from 'react'
import classes from './DeleteTaskButton.module.css'

const DeleteTaskButton = ({onClick}) => {
    return (
        <button className={classes.deleteTaskButton} onClick={onClick}>&#10006;</button>
    )
}

export default DeleteTaskButton;