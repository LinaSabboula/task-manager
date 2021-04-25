import React, {useState} from 'react'

function TaskForm() {
    const [tasks, setTasks] = useState({
        id: "",
        title: "",
        description: "",
    });
    function handleAddNewTask(e){

    }
  return (
    <div>
        <form id={"new-task-form"} onSubmit={handleAddNewTask}>
            <input type={"text"} placeholder={"Task Title"}/>
            <input type={"text"} placeholder={"Task Description"}/>
            <button type={"submit"}>Add</button>
        </form>
    </div>
  )
}

export default TaskForm
