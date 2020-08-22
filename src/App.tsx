import React from "react";
import TodoList from "./components/TodoList";
import { TodoStage } from "types";

function App() {
  return (
    <>
      <h2>Todos</h2>
      <TodoList filter={TodoStage.Todo} />
      <TodoList filter={TodoStage.Doing} />
      <TodoList filter={TodoStage.Done} />
    </>
  );
}

export default App;
