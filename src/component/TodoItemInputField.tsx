import { Dispatch, SetStateAction, useState } from "react";
import { TextField, Button } from "@mui/material";
import { TodoItmeList } from "../type";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

// interface Props {
//   todoItemId: number;
//   todoItemList: TodoItmeList[];
//   setTodoItemList: Dispatch<SetStateAction<TodoItmeList[]>>;
// }

const TodoItemInputField = () => {
  const [input, setInput] = useState("");

  const onSubmit = async () => {
    try {
      await addDoc(collection(db, "todoItem"), {
        todoItemContent: input,
        isFinished: false,
        createdAt: Date.now(),
      });
    } catch (err) {
      console.log("error:", err);
    }
  };

  return (
    <div>
      <TextField
        id="todo-item-input"
        label="Todo Item"
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button variant="outlined" onClick={onSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default TodoItemInputField;
