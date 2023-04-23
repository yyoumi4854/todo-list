import { Dispatch, SetStateAction } from "react";
import { db } from "../firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import { Button } from "@mui/material";
import { TodoItmeList } from "../type";

interface Props {
  setUpdate: Dispatch<SetStateAction<boolean>>;
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
  todoItem: TodoItmeList;
}

const TodoItmeUpdate = ({
  setUpdate,
  content,
  setContent,
  todoItem,
}: Props) => {
  const onClickContent = async () => {
    const toDoItemDoc = doc(db, "todoItem", todoItem.id);
    await updateDoc(toDoItemDoc, {
      todoItemContent: content,
    });

    setUpdate(false);
  };

  return (
    <>
      <input
        type="text"
        value={content}
        onChange={(e) => {
          const { value } = e.target;
          setContent(value);
        }}
      />
      <Button variant="outlined" onClick={onClickContent}>
        확인
      </Button>
      <Button variant="outlined" onClick={() => setUpdate(false)}>
        닫기
      </Button>
    </>
  );
};

export default TodoItmeUpdate;
