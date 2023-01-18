import React from 'react'
//--------importing some module for icons -------//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'

// -----------ToDo Component--------------------//
const ToDo = (props) => {
    return (
    //   ---Here We Got props object as toDo , mrakDone deleteTask---------//
      <>
          {
              props.toDo.map((task, index) => {
                  return (
                      <React.Fragment key={task.id}>

                          <div className="col taskBg">
                              {/* setting class name on Complete Condition  */}
                              <div className={task.completed ? 'done' : ''}>
                                  <span className="taskNumber">{index+1}</span>
                                  <span className="taskText">{task.title}</span>
                              </div>
                              <div className="iconsWrap">
                                  {/* on Clicking markDone Functin is Called in Parent Component by task.id Arguments  */}
                                  <span title='Completed / Not Completed'
                                      onClick={(e) => props.markDone(task.id)}
                                  >
                                      <FontAwesomeIcon icon={faCircleCheck} />
                                  </span>
                                  {/* checking Task Is Compleated Or Not  */}
                                  {
                                      task.completed ? null : (
                                          <span title='Edit'
                                              onClick={() => props.setUpdateData({
                                                  id: task.id,
                                                  title: task.title,
                                                  completed: task.completed ? true : false
                                              })}
                                          >
                                              <FontAwesomeIcon icon={faPen} />
                                          </span>)
                                  }
                                  <span title='Delete'
                                      onClick={() => props.deleteTask(task.id)}
                                  >
                                      {/* trash Icon for Deleting Single todo  */}
                                      <FontAwesomeIcon icon={faTrashCan} />
                                  </span>
                              </div>
                          </div>
                      </React.Fragment>
                  )
              })
          }
      </>
  )
}

export default ToDo