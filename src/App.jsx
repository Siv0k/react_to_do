import React, {useState} from 'react'
import './styles/App.css';
import Form from './components/Form'
import TaskList from './components/TaskList';
import DoneTaskList from './components/DoneTaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]); 

  const createTask = (newTask) => {
    newTask.id = Date.now();
    setTasks([...tasks, newTask])
  };

  const removeTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }

  const doneTask = (taskId) => {
    const doneTask = tasks.find((task)=> task.id === taskId);
    removeTask(taskId);
    setDoneTasks([...doneTasks, doneTask]);
  }

  const removeDoneTask = (taskId) => {
    setDoneTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }

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
