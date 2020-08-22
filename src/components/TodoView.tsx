import React, { Component } from "react";
import TodoList from "./TodoList";
import { TodoStage } from "../types";
import { Grid } from "@material-ui/core";
import { Clear, PlayArrow, Done } from "@material-ui/icons";
import { startTodo, finishTodo, removeTodo } from "store/actions";

export default () => (
  <>
    <h2>Todos</h2>
    <Grid container spacing={3}>
      <Grid item>
        <TodoList
          filter={TodoStage.Todo}
          action={startTodo}
          ActionIcon={PlayArrow}
        />
      </Grid>
      <Grid item>
        <TodoList
          filter={TodoStage.Doing}
          action={finishTodo}
          ActionIcon={Done}
        />
      </Grid>
      <Grid item>
        <TodoList
          filter={TodoStage.Done}
          action={removeTodo}
          ActionIcon={Clear}
        />
      </Grid>
    </Grid>
  </>
);
