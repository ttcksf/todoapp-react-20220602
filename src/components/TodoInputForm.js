import React from "react";

export const TodoInputForm = ({ valueInputText, onChangeInputText }) => {
  return (
    <input
      style={style.inputFormBox}
      placeholder="テキストを入力"
      value={valueInputText}
      onChange={onChangeInputText}
    />
  );
};

const style = {
  inputFormBox: {
    width: "15rem",
    height: "1.7rem",
    padding: "0.5rem",
    borderBottom: "1px solid gray",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    marginRight: "10px",
  },
};
