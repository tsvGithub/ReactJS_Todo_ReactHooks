import React from "react";

const TodoList = ({ todos, deleteTodo }) => (
  <ul>
    {todos.map((todo, index) => (
      <li
        key={index.toString()}
        onClick={() => {
          deleteTodo(index);
          // let deletedIndex = index.toString();
          // console.log("hi!", index, deletedIndex);
        }}
        className={index !== index ? "" : "fadeOut"}
      >
        {todo}
        <i class="fa fa-trash" aria-hidden="true"></i>
      </li>
    ))}
  </ul>
);

export default TodoList;
