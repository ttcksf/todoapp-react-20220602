import { createSlice } from "@reduxjs/toolkit";

//スライス（state,Reducer,ActionCreator）を作成
export const todoSlice = createSlice({
  //スライスの名前
  name: "todo",
  //ステートの初期状態
  initialState: {
    taskList: [],
  },
  //Reducer
  reducers: {
    addTask: (state, action) => {
      state.taskList.push(action.payload);
    },
    removeTask: (state, action) => {
      //taskListのオブジェクトIDがpayloadに入る想定 taskId === index
      const taskId = action.payload;
      state.taskList.splice(taskId, 1);
    },
  },
});

//Actionをエクスポート
export const { addTask, removeTask } = todoSlice.actions;

//Reducerをエクスポート
export default todoSlice.reducer;
