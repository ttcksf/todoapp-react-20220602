import React from "react";
import { TodoDeleteButton } from "../components/TodoDeleteButton";

export const TodoCardTemplate = ({ onClickDeleteTask, todo }) => {
  return (
    <div style={style.todo}>
      <div style={style.todoTextWrapper}>
        <div style={style.todoText}>
          <span>{todo}</span>
        </div>
        <TodoDeleteButton onClickDeleteTask={onClickDeleteTask} />
      </div>
    </div>
  );
};

const style = {
  todo: {
    margin: "0.4rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  todoList: {
    marginTop: "10px",
  },
  todoTextWrapper: {
    border: "1px solid gray",
    display: "flex",
    padding: "0.5rem 1rem",
    borderRadius: "10px",
    boxShadow: "0 3px 6px rgb(51 51 51 / 16%)",
  },
  todoText: {
    minWidth: "15rem",
    maxHeight: "1.8rem",
    background: "white",
    fontWeight: "bold",
  },
};
