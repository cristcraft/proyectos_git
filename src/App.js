import  '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Header from './layout/Header';
import Title from './components/Title';
import Form from './components/Form';
import Button from './components/Button';
import MoviesList  from './components/MoviesList';
import ToDoList  from './components/ToDoList';
import Filters from './components/Filters';
import { useState } from 'react';

const myTitle = 'Tinto Tarea'

let initialTasks = [
  { description: 'lavar', status: 'completed'}, //task 1
    { description: 'comprar comida', status: 'pending' }, //task 2
    { description: 'hacer la tarea', status: 'pending' }, //task 3
    {description: 'hacer lo del banco', status: 'pending' }
]

function App() {
  const [tasks, setTask] = useState(initialTasks)
  function saveTask(allTasks){
    localStorage.setItem('allTasks', JSON.stringify(allTasks))
  }
  //eliminar tareas
  const deleteTask = (oldTask) =>{
    const updateTasks = [...tasks]
    updateTasks.splice(oldTask,1)

    //actualizar el task con el nuevo valor
    setTask(updateTasks)
    saveTask(updateTasks)
  }

  //agregar una nueva tarea al todo list
  const addTask = (newTask) => {
    const updateTasks = [...tasks]
    updateTasks.push({
      description: newTask,
      status: 'pending'
    })

    //actualizar el task con el nuevo valor
    setTask(updateTasks)
    saveTask(updateTasks)
  }

  //filtrar las tareas pendientes
  const allTasks = JSON.parse(localStorage.getItem('allTasks'))
  const pendingTask = () => {
    const updateTasks = [...allTasks]
    const filteredTasks = updateTasks.filter(task => task.status === 'pending')
    console.log(filteredTasks)
    //actualizar el task con el nuevo valor
    setTask(filteredTasks)
  }

  //filtrar las tareas completadas
  const completedTask = () => {
    const updateTasks = [...tasks]
    const filteredTasks = updateTasks.filter(task => task.status === 'completed')
    console.log(filteredTasks)
    //actualizar el task con el nuevo valor
    setTask(filteredTasks)
  }
  return (
    <div className="container-fluid text-center p-0 m-0">

      <Header />
      <div className="contenedor-principal w-100 h-100 d-flex justify-content-center align-items-center">
        <div className="card card-shadow w-50 h-50">
        <Title title={myTitle}/>
        <Form onAdd={addTask}/>
        <ToDoList tasks={tasks}  onDelete={deleteTask}/>
        <Filters  pending={pendingTask} completed={completedTask}/>
        </div>
      </div>
    
    </div>
  );
}

export default App;
