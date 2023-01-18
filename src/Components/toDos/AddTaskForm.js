import React from 'react'

const AddTaskForm = (props) => {
    return (
    //   Add a new Task 
      <>
          <div className="row mb-3">
              <div className="col">
                  <input
                      value={props.newTask}
                      onChange={(e) => props.setNewTask(e.target.value)}
                      className='form-control form-control-lg'
                      type="text" />
              </div>
              <div className="col-auto">
                  <button
                      onClick={props.addTask}
                      className='btn btn-lg btn-success'>Add Task</button>
              </div>
          </div>
      </>
  )
}

export default AddTaskForm