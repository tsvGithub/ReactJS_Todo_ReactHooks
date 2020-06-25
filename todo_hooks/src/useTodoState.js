import { useState } from "react";

//18
//React Hooks хорошо подходят для разделения состояния и
//логики компонента
//По сути это тот же самый код, что и в index.js, но теперь
//управление состоянием не так плотно связано с компонентом.

export default (initialValue) => {
  const [todos, setTodos] = useState(initialValue);

  return {
    todos,
    addTodo: (todoText) => {
      setTodos([...todos, todoText]);
    },
    deleteTodo: (todoIndex) => {
      const newTodos = todos.filter((_, index) => index !== todoIndex);

      setTodos(newTodos);
    },
  };
};
