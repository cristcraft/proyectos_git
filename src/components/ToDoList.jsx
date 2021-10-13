import { useState } from "react"


function ToDoList(props){
    return(
        <div className="row row d-flex justify-content-center">
            <div className="col-6">
                <table className="table lista-tareas">
                    <tbody>
                        {props.tasks.map((task, i)=>{
                            return(
                            <tr key={i}>
                            <td>
                                <input type="checkbox" className="form-check-input" defaultChecked={()=>{props.checkValue()}} onClick={()=>{props.check(i)}} />
                            </td>
                            <td>
                                <h4 className="text-primary mb-0">{task.description}</h4>
                                <span className="text-muted">{task.status}</span>
                            </td>
                            <td className="text-end">
                                <button className="btn btn-link" title="Eliminar">
                                    <span className="material-icons text-danger" onClick={()=>{props.onDelete(i)}}>delete</span>
                                </button>
                            </td>
                        </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ToDoList;
