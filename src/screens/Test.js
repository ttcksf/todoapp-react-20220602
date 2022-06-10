import React from "react";
import { TodoTitle } from "../components/TodoTitle";

export const Test = () => {
  return (
    <div style={style.body}>
      <div style={style.container}>
        <TodoTitle />
        <h1 style={style.h1}>Test</h1>
      </div>
    </div>
  );
};

const style = {
  body: {
    fontFamily: "Roboto Condensed",
    width: "100vw",
    maxWidth: "100%",
    backgroundColor: "black",
    padding: "30px",
  },
  container: {
    width: "80%",
    margin: "0 auto",
    height: "100vh",
    backgroundColor: "white",
    borderRadius: "10px",
  },
  h1: {
    color: "red",
    fontSize: "32px",
    textAlign: "center",
  },
};
