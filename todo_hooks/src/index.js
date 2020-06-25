//19
// import React, { useState } from "react";
import React from "react";
import ReactDOM from "react-dom";
import Typography from "@material-ui/core/Typography";
import "./styles.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
//20
import useTodoState from "./useTodoState";

//1.
const App = () => {
  //21
  // //10 (nr.11 in TodoList.js)
  // // Объявление переменной состояния todos
  // //Начальное состояние компонента должно быть пустым массивом.
  // const [todos, setTodos] = useState([]);
  const { todos, addTodo, deleteTodo } = useTodoState([]);

  //2 (nr.3 in TodoForm.js)
  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>
      {/* 9 
      введённое значение логируется при подтверждении 
      (нажатии на Enter) 
      <TodoForm saveTodo={console.warn} /> */}
      {/*15 (nr.16 in TodoForm.js)
      Проще всего объединить уже существующие задачи с новой. 
      Дополнительные пробелы будут вырезаны.
      */}
      {/*22 
      <TodoForm
        saveTodo={(todoText) => {
          const trimmedText = todoText.trim();
          if (trimmedText.length > 0) {
            setTodos([...todos, trimmedText]);
          }
        }}
      /> */}
      {/*  23  */}
      <TodoForm
        saveTodo={(todoText) => {
          const tirmmedText = todoText.trim();
          if (tirmmedText.length > 0) {
            addTodo(tirmmedText);
          }
        }}
      />
      {/*  24  */}
      {/*14 
      todos — массив всех задач
      <TodoList
        todos={todos}
        //17 (nr.18 in useTodoState.js)
        deleteTodo={(todoIndex) => {
          const newTodos = todos
            //Если задача с соответствующим index не найдена,
            //остальные задачи останутся в состоянии формы
            //благодаря использованию setTodos().
            .filter((_, index) => index !== todoIndex);
          setTodos(newTodos);
        }}
      />*/}
      {/*  25  nr.26 in useInputState.js */}
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
