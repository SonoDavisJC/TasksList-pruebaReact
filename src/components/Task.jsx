import { useContext } from "react";
import { taskContext } from "../context/TaskContext";
import TaskCard from "./miniComponents/TaskCard";

const TaskList = () => {
    const {tareas} = useContext(taskContext);

    if(tareas.length == 0) {
        return <h3 className="text-center font-bold italic text-lg text-amber-700">No hay tareas, '__'</h3>
    }
    
    return (
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            { 
            tareas.map((item => <TaskCard item={item} key={item.id} /> ))
            }
        </div>
    )
}
export default TaskList;