import {useState} from "react";

export const useTasks = () => {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    const [doneTasks, setDoneTasks] = useState(() => {
        const savedDoneTasks = localStorage.getItem("doneTasks");
        return savedDoneTasks ? JSON.parse(savedDoneTasks) : [];
    });

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

    const taskNotDone = (taskId) => {
        const notDoneTask = doneTasks.find((task) => task.id === taskId);
        removeDoneTask(taskId);
        setTasks([...tasks, {...notDoneTask, done: false}]);
    };

    const checkEmptyTask = (task) => {
        if (!task.title || task.title.trim() === '') {
            alert('Введите название задачи');
            return true;
        }
        return false;
    };

    return {
        tasks,
        doneTasks,
        createTask,
        removeTask,
        doneTask,
        removeDoneTask,
        taskNotDone,
        checkEmptyTask,
    };
};
