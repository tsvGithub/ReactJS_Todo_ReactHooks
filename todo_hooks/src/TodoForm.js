import React from "react";
//-------------
import useInputState from "./useInputState";

const TodoForm = ({ saveTodo }) => {
  const { value, reset, onChange } = useInputState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        saveTodo(value);
        reset();
      }}
    >
      <input
        placeholder="Add todo"
        //
        onChange={onChange}
        value={value}
      />
    </form>
  );
};
export default TodoForm;
