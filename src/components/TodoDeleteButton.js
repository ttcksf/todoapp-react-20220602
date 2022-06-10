import React from "react";

export const TodoDeleteButton = ({ onClickDeleteTask }) => {
  return (
    <i
      style
      ={style.deleteButton}
      onClick={onClickDeleteTask}
      className="fa-solid fa-trash-can"
    ></i>
  );
};

const style = {
  deleteButton: {
    border: "none",
  },
};
