import TaskList from "./components/Task"
import TaskForm from "./components/TaskForm"


function App() {

  return (
    <div className="App text-white" >
      <h1 className="text-center p-2 mt-5 text-3xl font-bold"> Lista de Tareas </h1>
      <TaskForm />
      <br />
      <TaskList />
    </div>
  )
}

export default App
