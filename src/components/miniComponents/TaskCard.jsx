import { useContext } from "react";
import { taskContext } from "../../context/TaskContext";

const TaskCard = ({item : {id, name, description}}) => {

    const {x, tareas, eliminarTarea} = useContext(taskContext);


    return (
            <div className={`bg-stone-900 p-5 m-5 rounded-xl shadow-xl`}>
                <h3 className="text-xl font-bold text-white mb-5 pb-5 border-b-2 italic">{name}</h3>
                <p className="font-normal">{description}</p>
                <button className="text-red-600 px-4 p-1 mt-5 float-right border border-red-700 ransition-all duration-500 ease-in-out rounded-md hover:bg-red-600 hover:text-white" onClick={() => eliminarTarea(id) }>Eliminar</button>
            </div>
        )
}
export default TaskCard;