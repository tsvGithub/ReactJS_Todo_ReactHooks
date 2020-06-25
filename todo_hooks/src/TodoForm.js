import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

//3
//форма должна отслеживать значение, вводимое пользователем
//и вызывать метод saveTodo() при отправке формы.
//useState поможет с этим.
const TodoForm = ({ saveTodo }) => {
  //6
  //useState => hook функция, которая принимает начальное
  //состояние React-компонента и возвращает массив.
  //Под первым индексом массива находится текущее значение
  //состояния компонента, а во второй ячейке находится обновляющая
  //функция.
  //Они названы value и setValue, следуя ES6 destructuring assignment.
  const [value, setValue] = useState("");

  //4
  return (
    <form
      //7
      onSubmit={(event) => {
        event.preventDefault();
        saveTodo(value);
        //16
        //как только todo будет сохранён, состояние формы
        //преобразуется в пустую строку
        setValue("");
      }}
    >
      {/*5 */}
      <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        //8
        onChange={(event) => {
          setValue(event.target.value);
        }}
        value={value}
      />
    </form>
  );
};
export default TodoForm;
