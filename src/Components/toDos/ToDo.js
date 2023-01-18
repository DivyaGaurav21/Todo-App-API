import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const ToDo = (props) => {
  return (
      <>
          {
           props.toDo.map((task, index) => {
                  return (
                      <React.Fragment key={task.id}>

                          <div className="col taskBg">
                              <div className={task.completed ? 'done' : ''}>
                                  <span className="taskNumber"><faCircleCheck/></span>
                                  <span className="taskText">{task.title}</span>
                              </div>
                              <div className="iconsWrap">
                                  <span title='Completed / Not Completed'
                                      onClick={(e) => props.markDone(task.id)}
                                  >
                                      <FontAwesomeIcon icon={faCircleCheck} />
                                  </span>
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