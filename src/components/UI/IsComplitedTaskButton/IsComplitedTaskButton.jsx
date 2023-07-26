import React from 'react'
import classes from './IsComplitedTaskButton.module.css'

const IsComplitedTaskButton = ({onClick}) => {
  return (
    <button className = {classes.isComplitedTaskButton} onClick={onClick}>  </button>
  )
}

export default IsComplitedTaskButton;
