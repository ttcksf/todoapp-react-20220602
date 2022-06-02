import React from "react";

export const TodoTitle = () => {
  return (
    <div>
      <header style={style.header}>
        <h1>Todo</h1>
      </header>
    </div>
  );
};

const style = {
  header: {
    textAlign: "center",
    margin: "2rem auto",
    padding: "2rem",
  },
};
