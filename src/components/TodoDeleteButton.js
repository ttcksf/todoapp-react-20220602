import React from "react";

export const TodoDeleteButton = ({ onClickDeleteTask }) => {
  return (
    <button style={style.deleteButton} onClick={onClickDeleteTask}>
      <i class="fa-solid fa-trash-can"></i>
    </button>
  );
};

const style = {
  deleteButton: {
    padding: "0.3rem 0.5rem",
    border: "none",
  },
};
