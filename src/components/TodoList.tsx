import React, { Component } from "react";
import { useSelector } from "react-redux";
import { TodoStage } from "../types";
import { getTodos, createGetVisibleTodos } from "../store/selectors";

interface Props {
  filter: TodoStage;
}

export default ({ filter }: Props) => {
  const todos = useSelector(createGetVisibleTodos(filter));
  return (
    <ol>
      {todos.map((todo, idx) => (
        <li key={idx}>{todo.text}</li>
      ))}
    </ol>
  );
};
