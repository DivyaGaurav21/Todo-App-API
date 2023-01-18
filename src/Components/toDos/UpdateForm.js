import React from 'react'

// -----------UpdateForm Component------------// 
const UpdateForm = (props) => {
    // ------props object we got updateData , cancelUpdate , updateTask ---------//
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
                  {/* update btn  */}
                  <button
                      onClick={props.updateTask}
                      className="btn btn-sm btn-success mr-20">
                      Update
                  </button>
                  {/* cancel btn  */}
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


// finally exprts this module 
export default UpdateForm