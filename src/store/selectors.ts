import { RootState, TodoStage } from "../types";
import { createSelector } from "reselect";
import { curryRight } from "lodash";

export const getTodos = (state: RootState, filter: TodoStage) =>
  state.todos.filter(todo => todo.stage === filter);

export const createGetVisibleTodos = curryRight(getTodos);
