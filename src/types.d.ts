export enum TodoStage {
  Todo = "todo",
  Doing = "doing",
  Done = "done"
}

export interface Todo {
  text: string;
  stage: TodoStage;
}

export type TodoState = Todo[];
export type RootState = ReturnType<typeof import("./store/reducers").default>;
