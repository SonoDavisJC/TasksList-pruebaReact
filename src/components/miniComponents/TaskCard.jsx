import { useContext } from "react";
import { taskContext } from "../../context/TaskContext";

const TaskCard = ({item : {id, name, description}}) => {

    const {x, tareas, eliminarTarea} = useContext(taskContext);


    return (
            <div className={`bg-zinc-800 p-5 m-5 rounded-xl shadow-lg`}>
                <h3 className="text-xl font-bold text-white mb-5 pb-5 border-b-2">{name}</h3>
                <p>{description}</p>
                <button className="bg-red-500 px-2 p-1 mt-5 float-right rounded-md" onClick={() => eliminarTarea(id) }>Eliminar</button>
            </div>
        )
}
export default TaskCard;