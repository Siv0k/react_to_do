import React from 'react'
import '../styles/Form.css'
import TaskInput from './UI/TaskInput/TaskInput';
import AddTaskButton from './UI/AddTaskButton/AddTaskButton';


const Form = () => {
  return (
    <form>
        <TaskInput/>
        <AddTaskButton/>
    </form>
  )
}

export default Form;