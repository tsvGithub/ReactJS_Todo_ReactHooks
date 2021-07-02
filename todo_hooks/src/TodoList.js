import React from "react";

const TodoList = ({ todos, deleteTodo }) => (
  <ul>
    {todos.map((todo, index) => (
      <li
        key={index.toString()}
        onClick={() => {
          deleteTodo(index);
        }}
      >
        {todo}
      </li>
    ))}
  </ul>
);

export default TodoList;
