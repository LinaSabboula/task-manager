import React from 'react'
import Task from "./Task";

function TaskList ({tasks, editTask}){
  return (
    <div>
        {tasks.map(task =>(
            <Task key={task.id} task={task} editTask={editTask}/>
        ))}
    </div>
  )
}
export default TaskList;