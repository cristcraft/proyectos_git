import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Header from './layout/Header';
import Title from './components/Title';
import Form from './components/Form';
import Button from './components/Button';
import MoviesList from './components/MoviesList';
import ToDoList from './components/ToDoList';
import Filters from './components/Filters';
import { useState } from 'react';

const myTitle = 'Tinto Tarea'

let initialTasks = [
  { description: 'lavar', status: 'completed' }, //task 1
  { description: 'comprar comida', status: 'completed' }, //task 2
  { description: 'hacer la tarea', status: 'pending' }, //task 3
  { description: 'hacer lo del banco', status: 'pending' }
]

function App() {
  const [tasks, setTask] = useState(JSON.parse(localStorage.getItem('tasksTintoCode')))

  //eliminar tareas
  const deleteTask = (oldTask) => {
    const updateTasks = [...tasks]
    updateTasks.splice(oldTask, 1)


    //Actualizamos el task con el valor del clon
    localStorage.setItem('tasksTintoCode', JSON.stringify(updateTasks))
    //actualizar el task con el nuevo valor
    setTask(updateTasks)
  }

  //agregar una nueva tarea al todo list
  const addTask = (newTask) => {
    const updateTasks = [...tasks]
    updateTasks.push({
      description: newTask,
      status: 'pending'
    })

     //Actualizamos el task con el valor del clon
    localStorage.setItem('tasksTintoCode', JSON.stringify(updateTasks))
    setTask(updateTasks)
  }


  const showPendingTask = (status) => {
    const allTasks = JSON.parse(localStorage.getItem('tasksTintoCode'))
    setTask(allTasks) //Actualizamos las tareas por medio del escuchador.

    const updateTasks = [...allTasks] //Clonamos el arreglo para trabajar con él.
    const filterTask = updateTasks.filter(task => task.status === status)
    setTask(filterTask)
  }

  const showCompletedTask = (status) => {
    const allTasks = JSON.parse(localStorage.getItem('tasksTintoCode'))
    setTask(allTasks) //Actualizamos las tareas por medio del escuchador.

    const updateTasks = [...allTasks] //Clonamos el arreglo para trabajar con él.
    const filterTask = updateTasks.filter(task => task.status === status)
    setTask(filterTask)
  }

  const showAllTask = () => {
    const allTasks = JSON.parse(localStorage.getItem('tasksTintoCode'))
    setTask(allTasks) //Actualizamos las tareas por medio del escuchador.

    const updateTasks = [...allTasks] //Clonamos el arreglo para trabajar con él.
    const filterTask = updateTasks.filter(task => task.status === 'completed' || task.status === 'pending')
    setTask(filterTask)
  }

  const checked = (id) =>{
    const allTasks = JSON.parse(localStorage.getItem('tasksTintoCode'))
    setTask(allTasks) //Actualizamos las tareas por medio del escuchador.

    const updateTasks = [...allTasks] //Clonamos el arreglo para trabajar con él.
    if(updateTasks[id].status !== 'completed'){
      updateTasks[id].status= 'completed'
      checkBoxValue(true)
    }else{
      updateTasks[id].status= 'pending'
      checkBoxValue(false)
    }

    setTask(updateTasks)
    localStorage.setItem('tasksTintoCode', JSON.stringify(updateTasks))
  }

  const checkBoxValue = (value) =>{
    return value
  }

  return (
    <div className="container-fluid text-center p-0 m-0">

      <Header />
      <div className="contenedor-principal w-100 h-100 d-flex justify-content-center align-items-center">
        <div className="card card-shadow w-50 h-50">
          <Title title={myTitle} />
          <Form onAdd={addTask} />
          <ToDoList tasks={tasks} onDelete={deleteTask} check={checked} checkValue={checkBoxValue}/>
          <Filters pending={showPendingTask} completed={showCompletedTask} allTasks={showAllTask} />
        </div>
      </div>

    </div>
  );
}

export default App;
