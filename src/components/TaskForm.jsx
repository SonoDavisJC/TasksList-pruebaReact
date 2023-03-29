import { useContext } from "react";
import { taskContext } from "../context/TaskContext";
import { useState } from "react";

const TaskForm = () => {

    const { createTask } = useContext(taskContext);

    const [name, setName ] = useState('');
    const [description, setDescription ] = useState('');

    const GuardarDatos = (e) => {
        if(e.target.name == 'tarea'){
            setName(e.target.value);
        }
        else {
            setDescription(e.target.value);
        }
    }

    const EnviarDatos = (e) => {
        e.preventDefault();
        createTask({
            name,
            description
        })
        setName('');
        setDescription('');
      }

    return (
        <div className="container mx-auto flex justify-center mb-5">
            <form onSubmit={EnviarDatos} className="flex flex-col gap-4 w-80 mx-2 text-stone-600 font-medium">
                <input type="text" name="tarea" placeholder="Titulo Tarea" onChange={GuardarDatos} value={name} autoFocus className="p-2" />
                <input type="text" name="description" placeholder="Descripcion de la tarea" onChange={GuardarDatos} value={description} className="p-2" />
                <input className="bg-amber-500 p-2 cursor-pointer hover:bg-amber-600 transition-all duration-500 ease-in-out text-white font-bold rounded-lg" type="submit" value="Enviar" name="Enviar" />
            </form>
        </div>
    )
}
export default TaskForm;