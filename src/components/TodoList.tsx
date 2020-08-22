import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TodoStage } from "../types";
import { getTodos, createGetVisibleTodos } from "../store/selectors";
import { ActionCreator, PayloadAction, ActionCreatorWithPayload } from "@reduxjs/toolkit";
import {
  List,
  ListItem,
  Typography,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";

interface Props {
  filter: TodoStage;
  action: ActionCreatorWithPayload<number, any>;
  // icon: React.ReactNode;
  icon: (...args: any[]) => JSX.Element;
  title: string;
}

export default ({ filter, title, icon: ActionIcon, action }: Props) => {
  const todos = useSelector(createGetVisibleTodos(filter));
  const dispatch = useDispatch();
  return (
    <>
      <Typography variant="h6">{title}</Typography>
      <List>
        {todos.map((todo, idx) => (
          <ListItem key={idx}>
            <Typography>{todo.text}</Typography>
            <ListItemSecondaryAction>
              <IconButton
                onClick={() => {
                  dispatch(action(idx));
                }}
              >
                <ActionIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </>
  );
};
