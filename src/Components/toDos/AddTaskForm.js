import React from 'react'
const AddTaskForm = ({ onAddTask, newTask, setNewTask }) => {

    return (
        <>
            <div className="row mb-3">
                <div className="col">
                    <input
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        className='form-control form-control-lg'
                        type="text" />
                </div>
                <div className="col-auto">
                    <button
                        onClick={onAddTask}
                        className='btn btn-lg btn-success'>Add Task</button>
                </div>
            </div>
        </>
    )
}

export default AddTaskForm