import React from "react";

export const TodoInputButton = ({ onClickSubmitInputText }) => {
  return (
    <i
      style={style.inputButton}
      onClick={onClickSubmitInputText}
      className="fa-solid fa-circle-plus"
    ></i>
  );
};

const style = {
  inputButton: {
    border: "none",
  },
};
