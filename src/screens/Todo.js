import React, { useState } from "react";
import { TodoCardTemplate } from "../components/TodoCardTemplate";
import { TodoInputButton } from "../components/TodoInputButton";
import { TodoInputForm } from "../components/TodoInputForm";
import { TodoTitle } from "../components/TodoTitle";
import { useSelector, useDispatch } from "react-redux";
import { addTask, removeTask } from "../features/TodoReducer";

export const Todo = () => {
  const taskList = useSelector((state) => state.todo.taskList);
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");
  const changeInputText = (e) => setInputText(e.target.value);
  const submitInputText = () => {
    ///空欄時には走らない
    if (taskList === "") return;
    ///taskListに入力フォームのものを追加する
    dispatch(
      addTask({
        taskList: inputText,
      })
    );
    setInputText("");
  };

  const deleteTask = (index) => {
    dispatch(removeTask(index));
    // const newTaskList = [...taskList];
    // newTaskList.splice(index, 1);
    // // setTaskList(newTaskList);
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
                  todo={todo.taskList}
                  onClickDeleteTask={() => deleteTask(index)}
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
