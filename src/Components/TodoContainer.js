import React, { useState } from 'react';
import './TodoContainer.css'
import AddTaskForm from './toDos/AddTaskForm'
import UpdateForm from './toDos/UpdateForm'
import ToDo from './toDos/ToDo'


import 'bootstrap/dist/css/bootstrap.min.css';


function TodoContainer(props) {

    // Task Todo List State 
    const [toDo, setToDo] = useState(props.jsonTodos);
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
            <h2 style={{color:'white'}}> To Do List App (Fetching API)</h2>
            <br />

            {/*Rendering Two Comp updating Task  && for Adding a New Task  */}
            {
                updateData && updateData ? (
                      <UpdateForm
                          updateData={updateData}
                          changeTask={changeTask}
                          updateTask={updateTask}
                          cancelUpdate={cancelUpdate}

                    />
                ) : (
                        <AddTaskForm
                            newTask={newTask}
                            setNewTask={setNewTask}
                            addTask = {addTask}
                        />
            )
            }
            
            {/* Display ToDos  */}
            <ToDo
                toDo={toDo}
                markDone={markDone}
                setUpdateData={setUpdateData}
                deleteTask = {deleteTask}
            />
           
        </div>
    );
}

export default TodoContainer;
