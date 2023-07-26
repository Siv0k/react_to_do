import React, { useState } from 'react'
import '../styles/Form.css'
import TaskInput from './UI/TaskInput/TaskInput';
import AddTaskButton from './UI/AddTaskButton/AddTaskButton';

const Form = ({create}) => {
    const [task, setTask] = useState([{title: ''}]) 

    const addNewTask = (e) => {
      e.preventDefault();
      const newTask = {
        ...task,
      }
      create(newTask);
      setTask({title: ''})
  }

  return (
    <form>
        <TaskInput 
        value = {task.title} 
        onChange = {e => setTask({...task, title: e.target.value})}
        />
        <AddTaskButton onClick = {addNewTask}/>
    </form>
  )
}

export default Form;