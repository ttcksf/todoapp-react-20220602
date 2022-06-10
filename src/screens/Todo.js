import React, { useState } from "react";
import { TodoCardTemplate } from "../components/TodoCardTemplate";
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
          <hr style={style.hr}></hr>
          <div className="todos">
            {taskList.map((todo, index) => {
              return (
                <TodoCardTemplate
                  key={index}
                  todo={todo}
                  onClickDeleteTask={() => deleteTask()}
                />
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
  hr: {
    margin: "10px 0",
  },
};
