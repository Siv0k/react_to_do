import { useState } from "react";

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  const createTask = (newTask) => {
    newTask.id = Date.now();
    setTasks([...tasks, newTask]);
  };

  const removeTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const doneTask = (taskId) => {
    const doneTask = tasks.find((task) => task.id === taskId);
    removeTask(taskId);
    setDoneTasks([...doneTasks, doneTask]);
  };

  const removeDoneTask = (taskId) => {
    setDoneTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return {
    tasks,
    doneTasks,
    createTask,
    removeTask,
    doneTask,
    removeDoneTask,
  };
};