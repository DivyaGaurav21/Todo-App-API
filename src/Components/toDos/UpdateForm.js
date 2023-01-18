import React from 'react'

const UpdateForm = (props) => {
  return (
      <>
          {/* Update Task  */}
          < div className="row mb-3">
              <div className="col">
                  <input type="text"
                      value={props.updateData && props.updateData.title}
                      onChange={props.changeTask}
                      className='form-control form-control-sm'
                  />
              </div>
              <div className="col-auto">
                  <button
                      onClick={props.updateTask}
                      className="btn btn-sm btn-success mr-20">
                      Update
                  </button>
                  <button className="btn btn-sm btn-warning"
                      onClick={props.cancelUpdate}
                  >
                      Cancel
                  </button>
              </div>
          </div>      
      </>
  )
}

export default UpdateForm