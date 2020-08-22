import React, { Component } from "react";
import TodoList from "./TodoList";
import { TodoStage } from "../types";
import { Grid, Typography } from "@material-ui/core";
import { Clear, PlayArrow, Done } from "@material-ui/icons";
import { startTodo, finishTodo, removeTodo } from "store/actions";
import TodoForm from "./TodoForm";

export default () => (
  <>
    <Typography variant="h3">Manage your todos!</Typography>
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <TodoList
          filter={TodoStage.Todo}
          title="Todo"
          action={startTodo}
          icon={PlayArrow}
        />
      </Grid>
      <Grid item xs={4}>
        <TodoList
          filter={TodoStage.Doing}
          title="Doing"
          action={finishTodo}
          icon={Done}
        />
      </Grid>
      <Grid item xs={4}>
        <TodoList filter={TodoStage.Done} title="Done" action={removeTodo} icon={Clear} />
      </Grid>
    </Grid>
    <TodoForm />
  </>
);
