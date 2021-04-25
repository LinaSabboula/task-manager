import './App.css';
import React, {useEffect, useState} from "react";
import TaskForm from "./TaskForm";

function App() {
    const [tasks, setTasks] = useState(null);
    useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((tasks) => setTasks(tasks.message));
    }, []);

    return (
        <div className="App">
            <h1>Task Manager</h1>

            <input type={"text"} placeholder={"Search"}/>
            <div>
                {!tasks? "loading data.. " : tasks.map((item) =>
                    <p className={"task-list"} key={item.id}>
                        {item.title} <br/>{item.description}
                    </p>)}
            </div>
            <TaskForm/>
        </div>
    );
}

export default App;
