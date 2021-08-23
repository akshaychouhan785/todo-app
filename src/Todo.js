import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Button,
  Modal
} from "@material-ui/core";
import "./Todo.css";
import db from "./firebase";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';
import "bootstrap/dist/css/bootstrap.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "relative",
    left: 400,
    // position: "center",
    width: 600,
    backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

  button: {
    width: 150,
    // border: '2px solid #000',
    margin: "10px",
  },
}));

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();

  const updateTodo = () => {
    // update the todo with the new input
    db.collection("todos").doc(props.todo.id).set(
      { todo: input },
      { merge: true }
    );
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <h3>Update the Task</h3>
          <input
            placeholder={props.todo.todo}
            value={input}
            onChange={(Event) => setInput(Event.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={updateTodo}
            className={classes.button}
          >
            Update ✔
          </Button>
        </div>
      </Modal>
      <List className="Container">
        <ListItem className="list-item">
          <ListItemText primary={props.todo.todo} secondary=""    />
        </ListItem>
        <div className="btn">
        <Button
          onClick={(Event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }
          
          startIcon={<DeleteIcon />}
        >
        </Button>

        <Button 
          onClick={(e) => setOpen(true)}
          endIcon={<EditIcon>send</EditIcon>}
        >
        </Button>
        </div>
        {/* <Button className="edit__btn" onClick={e => setOpen(true)}>Edit</Button> */}
        {/* <DeleteForeverIcon onClick={Event =>db.collection('todos').doc(props.todo.id).delete()}>❌Delete</DeleteForeverIcon> */}
      </List>
    </>
  );
}

export default Todo;
