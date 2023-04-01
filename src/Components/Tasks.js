import { useState } from "react";
import './Tasks.css';

const Tasks = () => {
    //var taskLists = ["Comprar", "Vender", "Cargar"];
    const [taskLists, setTaskLists] = useState(
        [
            {
                nombre: "Get Python black belt",
                terminada: false
            }
            
        ]
    );

    const [nombre, setNombre] = useState("");

    const agregar = (e) => {
        // taskLists = inmutable (no se puede editar)
        // listTemp = mutable (si se puede editar)
        e.preventDefault();
        var listTemp = [...taskLists];

        var taskObj = {
            nombre: nombre,
            terminada: false
        }

        listTemp.push(taskObj);
        
        setTaskLists(listTemp);
        setNombre("");
    }

    const escribiendo = (e) => {
        setNombre(e.target.value);
    }

    const eliminar = (index) => {
        var listTemp = [...taskLists];
        listTemp.splice(index, 1);
        setTaskLists(listTemp);
    }

    const darCheck = (index) => {
        var listTemp = [...taskLists];
        var newValue = (listTemp[index].terminada == true) ? false : true;
        listTemp[index].terminada = newValue
        setTaskLists(listTemp);
    }

    return (
        <div>
            <form onSubmit={agregar}>
                <input type="text" name="nombre" id="nombre" required={true} placeholder="Ingresar Tarea" value={nombre} onChange={(e) => escribiendo(e)}/>
                <button type="submit">Agregar</button>
            </form>
            <hr />
            <div>
                {
                    taskLists.map((task, index) => {
                        return <div key={index}>
                            <input type="checkbox" name="" id="" checked={task.terminada} onClick={() => darCheck(index)} />
                            <p className={(task.terminada) ? "tachado" : ""}>Hoy voy a hacer: {task.nombre}</p>
                            <button onClick={() => eliminar(index)}>Eliminar</button>
                            <hr />
                        </div>;
                    })
                }
            </div>
        </div>
    );
}

export default Tasks;