import { createContext } from "react";
import { useState, useEffect } from "react";
import { tareas as data} from "../data/Tareas";


export const taskContext = createContext();



let cantidad = data.length;

export const TaskContextProvider = (props) => {
    let x = 20;
    const [tareas, setTarea] = useState([]);


    useEffect(() => {
        setTarea(data);
    }, []);

    function createTask(Task) {
        setTarea([...tareas,  {
          id: `${cantidad += 1}`,
          name: Task.name,
          description: Task.description
        }]);
    }

    function eliminarTarea(taskid) {
        let arrMod = tareas.filter(item => {
          return item.id != taskid;  
        })
        setTarea(arrMod);
    }

    return (
        <taskContext.Provider value={{
            x, 
            tareas,
            createTask,
            eliminarTarea
        }}>
            {props.children}
        </taskContext.Provider>
    )
}
