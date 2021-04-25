import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

function TaskForm({addNewTask}) {
    const [task, setTask] = useState({
        id: "",
        title: "",
        description: "",
    });

    function handleTaskChange(e){
        const value = e.target.value;
        setTask({...task, [e.target.name]: value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        const newTask = {
            id: uuidv4(),
            title: task.title,
            description: task.description
        }
        addNewTask({...task, id:uuidv4()});
        setTask({...task, task: ""});
        fetch('/api/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(newTask)
        }).then(() =>
            console.log("new task added"))
    }
  return (
    <div className={"center"}>
        <form id={"new-task-form"} onSubmit={handleSubmit}>
            <input
                    type={"text"}
                    name={"title"}
                    onChange={handleTaskChange}
                    value={task.title}
                    placeholder={"Task Title"} required/>

            <input name={"description"}
                   type={"text"}
                   value={task.description}
                   onChange={handleTaskChange}
                   placeholder={"Task Description"}/>
            <button type={"submit"}>Add</button>
        </form>
    </div>
  )
}

export default TaskForm
