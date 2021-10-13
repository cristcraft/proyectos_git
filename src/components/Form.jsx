import { useEffect, useState } from "react"

function Form(props){
    const [enable, setEnable] = useState(false)
    const [task, setTask] = useState('')
    const handleChanche = (e)=>{
        const newTask = e.target.value
        setTask(newTask)
    }

    useEffect(() => {
        if(task.length > 0 && task.length >= 3 && task){
            setEnable(true)
        }else{
            setEnable(false)
        }
    }, [task])

    const handleSubmit = (e) =>{
        e.preventDefault()
        props.onAdd(task)
    }
    return(
        <div className="card-body row">
        <div className="col-12">
            <form className="d-flex" method="post">
                <input type="text" className="form-control" id="form-input" placeholder="Describcion de la tarea..." onChange={handleChanche} value={task} />

                <button className="btn btn-primary" type="submit" disabled={!enable}  onClick={handleSubmit}>Agregar</button>
            </form>
        </div>
    </div>
    )
}

export default Form;