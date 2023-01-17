import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  let blockStyle = {
    minHeight: "70vh",
    margin: "10px auto",
  };

  return (
    <div className="container my-3" style={blockStyle}>
      <h3 className=" my-3">Todos List</h3>
      {props.todos.length === 0
        ? "No Todos to display"
        : props.todos.map((todo) => {
            return (
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};
