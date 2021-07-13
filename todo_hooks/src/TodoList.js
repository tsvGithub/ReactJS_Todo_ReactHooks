import React from "react";

const style = {
  span: { color: "red" },
};
// const classes = [];

// if (todo.completed) {
//   classes.push("done");
// }
// return (
//   <li style={styles.li}>
//     <span className={classes.join(" ")}>

const TodoList = ({ todos, deleteTodo, deletedTodo }) => {
  let className = "task";

  return (
    <ul>
      {todos.map((todo, index) => (
        <li
          key={index.toString()}
          className={className}
          // className={!deleteTodo ? "task " : "task done"}
          //
          // onClick={() => deletedTodo(index)}
          // className={deletedTodo ? "task done " : "task "}
          onClick={() => {
            setTimeout(
              () => {
                deleteTodo(index);
              },
              5000,
              // { className={className=`task done`} },
              // classes.join(" "),
              // classes.push("done"),
              (className = "task done"),
              // (className = { className }),
              console.log(className)
            );
            // //
            // classes.push("done");
          }}
        >
          <span className={className}>
            {todo}
            {console.log(className)}
          </span>
          <span
          // onClick={() => {
          //   setTimeout(
          //     () => {
          //       deleteTodo(index);
          //     },
          //     5000,
          //     // { className={className=`task done`} },
          //     classes.push("done"),
          //     console.log("Hello")
          //   );
          //   // //
          //   // classes.push("done");
          // }}
          >
            <i class="fa fa-trash" aria-hidden="true"></i>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
