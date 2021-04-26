import React, { useState} from 'react'

function Task({task, editTask}) {
    const [edit, setEdit] = useState({
        id: null,
        title: "",
        description: ""});

    function handleDelete(taskID) {
        console.log("handler ", taskID)
            const requestOptions = {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({id: taskID})
            };
            fetch("/api/delete/", requestOptions).then((res) => {
                return res.json();
            }).then((res) => {
                console.log(res)
            });
        }

    function handleTaskChange(e){
        const value = e.target.value;
        setEdit({...edit, [e.target.name]: value});
    }
    function handleEditSubmit(e){
        e.preventDefault();
        const editedTask = {
            id: task.id,
            title: edit.title,
            description: edit.description
        }

        editTask(editedTask)
        setEdit('');
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: editedTask.id,
                title: editedTask.title,
                description: editedTask.description})
        };
        fetch('/api/edit', requestOptions)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                console.log(res)})
    }
    return (
    <div className={"task-container"}>
        <form onSubmit={handleEditSubmit}>
            <input type="text" defaultValue={task.title}  name={"title"} onChange={handleTaskChange}/>
            <br/>
            <input type="text"  defaultValue={task.description} name={"description"} onChange={handleTaskChange}/>
            <button hidden={true} type={"submit"}>Save</button>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
        </form>
    </div>
  )
}
export default Task;