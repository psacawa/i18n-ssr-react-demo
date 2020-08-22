import React from "react";
import TodoView from "components/TodoView";
import { Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "80%",
    margin: "auto",
    textAlign: "center",
    padding: "10px",
    backgroundColor: "#ccc",
    borderWidth: "200px",
    borderColor: 'blue',
  }
});

function App() {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.root}>
        <TodoView />
      </Paper>
    </>
  );
}

export default App;
