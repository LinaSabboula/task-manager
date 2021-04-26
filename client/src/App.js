import './App.css';
import React, {useEffect, useState} from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";


function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        let isActive = true;
        fetch("/api")
            .then((res) => res.json())
            .then((tasks) => {
                if (isActive) {
                    setTasks(tasks.message)
                }
            })
            .catch((error) => console.log(error.message));
        return () => {
            isActive = false;
        };
    }, [tasks]);


    function addNewTask(newTask){
        setTasks([newTask, ...tasks]);
    }
    return (
        <div className="App">
            <h1>Task Manager</h1>
            <input type={"text"} placeholder={"Search"}/>
            <TaskForm addNewTask={addNewTask}/>
            <TaskList tasks={tasks} editTask={editTask}/>
        </div>
    );
}

export default App;
