import React, {useState} from 'react'
import './styles/App.css';
import Form from './components/Form'
import TaskList from './components/TaskList';



function App() {

  const [tasks, setTasks] = useState([
    {title: ''},
  ])

  const createTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <div className="header">TODO LIST</div>  
      <Form create = {createTask} />
      <TaskList tasks = {tasks}/>
    </div>
  );
}

export default App;
