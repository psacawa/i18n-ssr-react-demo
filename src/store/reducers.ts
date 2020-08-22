import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { TodoState, TodoStage } from "../types";
import { addTodo, startTodo, finishTodo, removeTodo } from "./actions";

export const todoReducer = createReducer<TodoState>([], builder =>
  builder
    .addCase(addTodo, (state, action) => {
      state.push({ text: action.payload, stage: TodoStage.Todo });
    })
    .addCase(startTodo, (state, action) => {
      state[action.payload].stage = TodoStage.Doing;
    })
    .addCase(finishTodo, (state, action) => {
      state[action.payload].stage = TodoStage.Done;
    })
    .addCase(removeTodo, (state, action) => {
      return state.filter((todo, idx) => idx !== action.payload);
    })
);

export default combineReducers ({
  todos: todoReducer,
})
