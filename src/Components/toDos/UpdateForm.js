import React from 'react'
const UpdateForm = ({ updateData, onUpdateTask, OnChangeTask, onCancelUpdate }) => {
    return (
        <>
            {/* Update Task  */}
            < div className="row mb-3">
                <div className="col">
                    <input type="text"
                        value={updateData && updateData.title}
                        onChange={OnChangeTask}
                        className='form-control form-control-sm'
                    />
                </div>
                <div className="col-auto">
                    {/* update btn  */}
                    <button
                        onClick={onUpdateTask}
                        className="btn btn-sm btn-success mr-20">
                        Update
                    </button>
                    {/* cancel btn  */}
                    <button className="btn btn-sm btn-warning"
                        onClick={onCancelUpdate}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </>
    )
}

export default UpdateForm