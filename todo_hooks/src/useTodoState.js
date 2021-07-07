import { useState } from "react";

export default (initialValue) => {
  const [todos, setTodos] = useState(initialValue);
  // const className = "";

  const addTodo = (todoText) => {
    setTodos([...todos, todoText]);
  };
  const deleteTodo = (todoIndex) => {
    const newTodos = todos.filter((_, index) => index !== todoIndex);
    setTodos(newTodos);
    // className = "fadeOut";
  };
  return {
    todos,
    addTodo,
    deleteTodo,
  };
};
