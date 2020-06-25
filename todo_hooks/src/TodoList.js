import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

//11
//todos — массив всех задач.
//deleteTodo() — функция вызывается при нажатии на IconButton и передает индекс, который однозначно идентифицирует пункт списка.
const TodoList = ({ todos, deleteTodo }) => (
  <List>
    {/*12
    todos map() сопоставляет каждую из задач и создаёт 
элемент списка; */}
    {todos.map((todo, index) => (
      <ListItem key={index.toString()} dense button>
        <Checkbox tabIndex={-1} disableFocusRipple />
        <ListItemText primary={todo} />
        <ListItemSecondaryAction>
          {/*13 (nr.14 in index.js)
          Так как TodoList содержит индексы всех задач, 
          можно без проблем найти нужный элемент для удаления.
          функция deleteTodo() вызывается при нажатии на 
            IconButton и передает index===key, который однозначно 
            идентифицирует пункт списка. */}
          <IconButton
            aria-label="Delete"
            onClick={() => {
              deleteTodo(index);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
);

export default TodoList;
