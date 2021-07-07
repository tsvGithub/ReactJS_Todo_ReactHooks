import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
//----------------
import useTodoState from "./useTodoState";

const App = () => {
  const { todos, addTodo, deleteTodo } = useTodoState([]);

  const saveTodo = (todoText) => {
    //The trim() method removes whitespace characters
    //(space, tab, no-break space, etc.) and all the
    //line terminator characters (LF, CR, etc.)
    //from both ends of a string.
    const tirmmedText = todoText.trim();
    if (tirmmedText.length > 0) {
      addTodo(tirmmedText);
    }
  };

  return (
    <div className="App">
      <h1>Todos</h1>
      {/*Comppnents:*/}
      <TodoForm saveTodo={saveTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
