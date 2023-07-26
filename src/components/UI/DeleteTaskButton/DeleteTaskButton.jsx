import React from 'react'
import classes from './DeleteTaskButton.module.css'

const DeleteTaskButton = () => {
  return (
    <button className = {classes.deleteTaskButton}>&#10006;</button>
  )
}

export default DeleteTaskButton;