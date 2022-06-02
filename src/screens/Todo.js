import React, { useState } from "react";
import { TodoDeleteButton } from "../components/TodoDeleteButton";
import { TodoInputButton } from "../components/TodoInputButton";
import { TodoInputForm } from "../components/TodoInputForm";
import { TodoTitle } from "../components/TodoTitle";

export const Todo = () => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  const changeInputText = (e) => setInputText(e.target.value);
  const submitInputText = () => {
    ///空欄時には走らない
    if (taskList === "") return;
    ///taskListに入力フォームのものを追加する
    const newTaskList = [...taskList, inputText];
    setTaskList(newTaskList);
    setInputText("");
  };
  const deleteTask = (index) => {
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
  };
  return (
    <div style={style.body}>
      <div style={style.container}>
        <TodoTitle />
        <div style={style.inputForm}>
          <TodoInputForm
            valueInputText={inputText}
            onChangeInputText={changeInputText}
          />
          <TodoInputButton onClickSubmitInputText={() => submitInputText()} />
        </div>
        <div style={style.todoList}>
          <hr></hr>
          <div className="todos">
            {taskList.map((todo, index) => {
              return (
                <div style={style.todo} key={todo}>
                  <div style={style.todoTextWrapper}>
                    <div style={style.todoText}>
                      <span>{todo}</span>
                    </div>
                    <TodoDeleteButton
                      onClickDeleteTask={() => deleteTask(index)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const style = {
  body: {
    fontFamily: "Roboto Condensed",
    fontFamily: "sans-serif",
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
  inputForm: {
    maxWidth: "100%",
    margin: "0 auto",
    textAlign: "center",
    position: "relative",
  },
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
