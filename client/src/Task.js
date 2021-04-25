import React from 'react'

function Task({task}) {
  return (
    <div className={"task-container"}>
        <p>{task.title}</p>
        <p>{task.description}</p>
        <button>Edit</button>
        <button>Delete</button>
    </div>
  )
}
export default Task;