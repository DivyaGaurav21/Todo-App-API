import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'

const ToDo = ({ todos, onDeleteTask, onMarkDone, setUpdateData }) => {
    return (
        <React.Fragment>
            {
                todos.map((task, index) => {
                    return (
                        <div key={task.id}>
                            <div className="col taskBg">
                                {/* setting class name on Complete Condition  */}
                                <div className={task.completed ? 'done' : ''}>
                                    <span className="taskNumber">{index + 1}</span>
                                    <span className="taskText">{task.title}</span>
                                </div>
                                <div className="iconsWrap">
                                    <span title='Completed / Not Completed'
                                        onClick={() => onMarkDone(task.id)}
                                    >
                                        <FontAwesomeIcon icon={faCircleCheck} />
                                    </span>
                                    {/* checking Task Is Compleated Or Not  */}
                                    {
                                        task.completed ? null : (
                                            <span title='Edit'
                                                onClick={() => setUpdateData({
                                                    id: task.id,
                                                    title: task.title,
                                                    completed: task.completed ? true : false
                                                })}
                                            ><FontAwesomeIcon icon={faPen} />
                                            </span>)
                                    }
                                    <span title='Delete' onClick={() => onDeleteTask(task.id)} >
                                        <FontAwesomeIcon icon={faTrashCan} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </React.Fragment>
    )
}

export default ToDo