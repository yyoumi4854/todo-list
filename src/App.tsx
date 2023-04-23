import { useState } from "react";

import TodoItemInputField from "./component/TodoItemInputField";
import TodoItemList from "./component/TodoItemList";
import { TodoItmeList } from "./type";

import "./App.css";

function App() {
  return (
    <div className="App">
      <TodoItemInputField />
      <TodoItemList />
    </div>
  );
}

export default App;
