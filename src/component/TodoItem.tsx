import { useState } from "react";
import { db } from "../firebaseConfig";
import { TodoItmeList } from "../type";
import { Button } from "@mui/material";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import TodoItmeUpdate from "./TodoItmeUpdate";

interface Props {
  todoItem: TodoItmeList;
}

const TodoItem = ({ todoItem }: Props) => {
  const style = todoItem.isFinished ? { textDecoration: "line-through" } : {};

  const [update, setUpdate] = useState(false);
  const [content, setContent] = useState(todoItem.todoItemContent);

  const onClickFinished = async () => {
    const toDoItemDoc = doc(db, "todoItem", todoItem.id);
    await updateDoc(toDoItemDoc, {
      isFinished: !todoItem.isFinished,
    });
  };

  const onClickDelete = async () => {
    const toDoItemDoc = doc(db, "todoItem", todoItem.id);
    await deleteDoc(toDoItemDoc);
  };

  return (
    <li>
      {update ? (
        <TodoItmeUpdate
          setUpdate={setUpdate}
          content={content}
          setContent={setContent}
          todoItem={todoItem}
        />
      ) : (
        <>
          <span style={style} onClick={onClickFinished}>
            {content}
          </span>
          <Button variant="outlined" onClick={() => setUpdate(true)}>
            TextUpdate
          </Button>
        </>
      )}
      <Button variant="outlined" onClick={onClickDelete}>
        Remove
      </Button>
    </li>
  );
};

export default TodoItem;
