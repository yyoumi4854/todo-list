import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { TodoItmeList } from "../type";
import TodoItem from "./TodoItem";
import { db } from "../firebaseConfig";

const TodoItemList = () => {
  const [todoItmeList, setTodoItmeList] = useState<TodoItmeList[]>([]);
  useEffect(() => {
    const getTodoItem = async () => {
      const queryTodoItem = await getDocs(collection(db, "todoItem"));

      const newTodoList = queryTodoItem.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as TodoItmeList[];

      setTodoItmeList(newTodoList);
    };
    getTodoItem();
  }, [todoItmeList]);

  return (
    <ul>
      {todoItmeList.map((todoItem) => (
        <TodoItem key={todoItem.id} todoItem={todoItem} />
      ))}
    </ul>
  );
};

export default TodoItemList;
