import React from 'react'
import classes from './IsComplitedTaskButton.module.css'

const IsComplitedTaskButton = ({done, onClick}) => {
    return (
        <button className={classes.isComplitedTaskButton}
                onClick={onClick}
                dangerouslySetInnerHTML={{__html: done ? '&#10004' : ''}}
        >
        </button>
    )
}

export default IsComplitedTaskButton;
