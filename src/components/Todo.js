import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  const addToDo = (data) => {
    setTodos([...todos, data]);
  };

  return (
    <div>
      <AddTodo addTodo={addToDo} />
      <TodoList todos={todos} />
    </div>
  );
}
