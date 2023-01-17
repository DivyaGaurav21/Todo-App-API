import React, { useState } from 'react';
import './TodoContainer.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon, fontAwsomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';

function TodoContainer() {

    // Task Todo List State 
    const [toDo, setToDo] = useState([
        { id: 1, title: 'Task first', completed: false },
        { id: 2, title: 'Task Second', completed: true }
    ])

    // Temp State 
    const [newTask, setNewTask] = useState('');
    const [updateData, setUpdateData] = useState('');


    //------------ Add task -------------------//
    const addTask = () => {
        if (newTask) {
            let newEntry = {
                id: Date.now(),
                title: newTask,
                completed:false
            }
            setToDo([newEntry, ...toDo])
            setNewTask('');
        }
    }

    //--------------Delete Task -----------------//
    const deleteTask = (id) => {
        let newTasks = toDo.filter(task => task.id !== id);
        setToDo(newTasks)
    }

    //-------New Task as Done and Complete--------//
    const markDone = (id) => {
        let completeTask = toDo.map(task => {
            if (task.id === id) {
                return ({ ...task, completed: !task.completed });
            }
            return task;
        })
        setToDo(completeTask)
    }
    //--------Cancel update---------------------//
    const cancelUpdate = () => {
        setUpdateData('');
    }

    //--------Change task for update --------//
    const changeTask = (e) => {
        let newEntry = {
            id: updateData.id,
            title:e.target.value,
            completed: updateData.completed ? true : false
        }
        setUpdateData(newEntry);
    }

    //---------Update Task -----------------//
    const updateTask = () => {
        let filterRecord = [...toDo].filter(task => task.id !== updateData.id)
        let UpdatedObject = [updateData, ...filterRecord];
        setToDo(UpdatedObject);
        setUpdateData('')
    }

    return (
        <div className="container App">
            <h2 style={{color:'red'}}> To Do List App</h2>
            <br /><br />

            {/* updating Task  && for Adding a New Task  */}
            {
                updateData && updateData ? (
                    < div className="row mb-2">
              <div className="col">
                <input type="text"
                    value={updateData && updateData.title}
                    onChange={changeTask}
                    className='form-control form-control-sm'
                />
              </div>
              <div className="col-auto">
                <button
                    onClick={updateTask}
                    className="btn btn-sm btn-success mr-20">
                    Update
                </button>
                 <button className="btn btn-sm btn-warning"
                    onClick={cancelUpdate}
                     >
                    Cancel
                </button>
              </div>
           </div>
                ) : (
                 <div className="row mb-2">
                    <div className="col">
                           <input
                             value={newTask}
                             onChange={(e) => setNewTask(e.target.value)}
                             className='form-control form-control-lg'
                            type="text" />
                            </div>
                        <div className="col-auto">
                             <button
                              onClick={addTask}
                              className='btn btn-lg btn-success'>Add Task</button>
                         </div>
                </div>
            )
           }

       

           {/* Display ToDos  */}
            {
                toDo.map((task, index) => {
                    return (
                        <React.Fragment key={task.id}>

                            <div className="col taskBg">
                                <div className={task.completed ? 'done' : ''}>
                                    <span className="taskNumber">{task.id}</span>
                                    <span className="taskText">{task.title}</span>
                                </div>
                                <div className="iconsWrap">
                                    <span title='Completed / Not Completed'
                                        onClick={(e) => markDone(task.id)}
                                    >
                                        <FontAwesomeIcon icon={faCircleCheck} />
                                    </span>
                                    {
                                        task.completed ? null : (
                                            <span title='Edit'
                                                onClick={() => setUpdateData({
                                                    id: task.id,
                                                    title: task.title,
                                                    completed: task.completed ? true : false
                                                })}
                                            >
                                        <FontAwesomeIcon icon={faPen} />
                                            </span>)
                                    }
                                    <span title='Delete'
                                    onClick={() => deleteTask(task.id)}
                                    >
                                        <FontAwesomeIcon icon={faTrashCan} />
                                    </span>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })
            }
        </div>
    );
}

export default TodoContainer;
