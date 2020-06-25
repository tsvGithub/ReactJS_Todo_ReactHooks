import React, { useState } from "react";
import ReactDOM from "react-dom";
import Typography from "@material-ui/core/Typography";
import "./styles.css";
import { Divider } from "@material-ui/core";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

//1.
const App = () => {
  //10
  //Начальное состояние компонента должно быть пустым массивом.
  const [todos, setTodos] = useState([]);
  //2.
  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>
      {/* 9 
      введённое значение логируется при подтверждении 
      (нажатии на Enter) 
      <TodoForm saveTodo={console.warn} /> */}
      {/*15 
      Проще всего объединить уже существующие задачи с новой. 
      Дополнительные пробелы будут вырезаны.
      */}
      <TodoForm
        saveTodo={(todoText) => {
          const trimmedText = todoText.trim();
          if (trimmedText.length > 0) {
            setTodos([...todos, trimmedText]);
          }
        }}
      />
      {/*14 
      todos — массив всех задач*/}
      <TodoList
        todos={todos}
        //17
        deleteTodo={(todoIndex) => {
          const newTodos = todos
            //Если задача с соответствующим index не найдена,
            //остальные задачи останутся в состоянии формы
            //благодаря использованию setTodos().
            .filter((_, index) => index !== todoIndex);
          setTodos(newTodos);
        }}
      />
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
