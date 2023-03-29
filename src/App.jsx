import TaskList from "./components/Task"
import TaskForm from "./components/TaskForm"


function App() {

  return (
    <div className="App text-neutral-200" >
      <h1 className="text-center p-2 mt-3 mb-5 text-3xl font-bold italic"> Lista de Tareas </h1>
      <TaskForm />
      <br />
      <TaskList />
    </div>
  )
}

export default App
