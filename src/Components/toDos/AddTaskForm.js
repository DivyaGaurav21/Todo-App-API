import React from 'react'

// --------AddTask Component-------------------//

const AddTaskForm = (props) => {
    // here we got props object as newTask , add Task , 
    return (
    //------------   Add a new Task --------------//
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
                    {/* --------Add Task Button----------- */}
                  <button
                      onClick={props.addTask}
                      className='btn btn-lg btn-success'>Add Task</button>
              </div>
          </div>
      </>
  )
}
// finally Export this Module 
export default AddTaskForm