import React from 'react'
import './styles/App.css';
import Form from './components/Form'
import TaskList from './components/TaskList';
import DoneTaskList from './components/DoneTaskList';
import {useTasks} from './hooks/taskFunctions';

function App() {
  const {
    tasks,
    doneTasks,
    createTask,
    removeTask,
    doneTask,
    removeDoneTask,
  } = useTasks();

  return (
    <div className="App">
      <div className="header">TODO LIST</div>  
      <Form create = {createTask} />
      {tasks.length === 0 
      ? <div className="MessegeNoTasks">Задач нет</div> 
      : <TaskList done = {doneTask} remove = {removeTask} tasks = {tasks}/>
      }
      <hr />
      {doneTasks.length === 0
      ? <div className="MessegeNoTasks">Завершенных задач нет</div>  
      : <DoneTaskList  remove = {removeDoneTask} tasks = {doneTasks}/>
      }   
    </div>
  );
}

export default App;
