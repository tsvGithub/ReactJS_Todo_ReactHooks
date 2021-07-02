import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
//----------------
import useTodoState from "./useTodoState";

const App = () => {
  const { todos, addTodo, deleteTodo } = useTodoState([]);

  return (
    <div className="App">
      <h1>Todos</h1>

      <TodoForm
        saveTodo={(todoText) => {
          const tirmmedText = todoText.trim();
          if (tirmmedText.length > 0) {
            addTodo(tirmmedText);
          }
        }}
      />

      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
