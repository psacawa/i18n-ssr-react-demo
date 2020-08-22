import { createAction } from "@reduxjs/toolkit";
import { TodoStage } from "../types";

export const addTodo = createAction<string>("ADD_TODO");
export const finishTodo = createAction<number>("FINISH_TODO");
export const startTodo = createAction<number>("START_TODO");
export const removeTodo = createAction<number>("REMOVE_TODO");
export const changeVisibilityFilter = createAction<TodoStage>("CHANGE_VISIBILITY_FILTER");
