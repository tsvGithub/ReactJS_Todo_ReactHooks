//27
import React from "react";
// import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
//28
import useInputState from "./useInputState";

//3
//форма должна отслеживать значение, вводимое пользователем
//и вызывать метод saveTodo() при отправке формы.
//useState поможет с этим.
const TodoForm = ({ saveTodo }) => {
  //29
  //   //6
  //   //useState => hook функция, которая принимает начальное
  //   //состояние React-компонента и возвращает массив.
  //   //Под первым индексом массива находится текущее значение
  //   //состояния компонента, а во второй ячейке находится обновляющая
  //   //функция.
  //   //Они названы value и setValue, следуя ES6 destructuring assignment.
  //   // Объявление переменной состояния
  //   const [value, setValue] = useState("");
  //30
  const { value, reset, onChange } = useInputState("");

  //4
  return (
    <form
      //7
      onSubmit={(event) => {
        event.preventDefault();
        saveTodo(value);
        //31
        // //16 (nr.17 in index.js)
        // //как только todo будет сохранён, состояние формы
        // //преобразуется в пустую строку
        // setValue("");
        reset();
      }}
    >
      {/*5 */}
      <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        //32
        // //8 (nr.9 in index.js)
        // onChange={(event) => {
        //   setValue(event.target.value);
        // }}
        // value={value}
        //33
        onChange={onChange}
        value={value}
      />
    </form>
  );
};
export default TodoForm;
