import React, { useState } from 'react';
import './TodoContainer.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { fontAwsomeIcon } from '@fortawesome/react-fontawesome';
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

    }

    //--------------Delete Task -----------------//
    const delteTask = (id) => {

    }

    //-------New Task as Done and Complete--------//
    const markDone = (id) => {

    }
    //--------Cancel update---------------------//
    const cancelUpdate = () => {

    }

    //--------Change task for update --------//
    const changeTask = (e) => {

    }

    //---------Update Task -----------------//
    const UpdateTask = () => {
         
    }
    return (
        <div className="container App">
            <h2> To Do List App</h2>
            <br /><br />
            {
                toDo.map((task, index) => {
                    return (
                        <React.Fragment key={task.id}>

                            <div className="col taskBg">
                                <div className={task.completed ? 'done' : ''}>
                                    <span className="taskNumber">{task.id}</span>
                                    <span className="taskText">{task.title}</span>
                                </div>
                                <div className="iconWrap">
                                    
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
