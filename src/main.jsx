import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import { TaskContextProvider, taskContext } from "./context/TaskContext";

const ElementoRoot = document.getElementById('root');
const Root = ReactDOM.createRoot(ElementoRoot);

Root.render(
  <React.StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </React.StrictMode>
)