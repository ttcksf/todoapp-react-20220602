import React from "react";

export const TodoInputButton = ({ onClickSubmitInputText }) => {
  return (
    <button style={style.inputButton} onClick={onClickSubmitInputText}>
      <i className="fa-solid fa-circle-plus"></i>
    </button>
  );
};

const style = {
  inputButton: {
    padding: "0.3rem 0.5rem",
    border: "none",
  },
};
