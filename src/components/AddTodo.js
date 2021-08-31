import React, { useState } from "react";

export default function AddTodo(props) {
  const [todo, setTodo] = useState("");

  const handleAddTodo = (e) => {
    const name = e.target.value;
    setTodo(name);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    props.addTodo(todo);
    e.currentTarget.value = "";
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="todo" value={todo} onChange={handleAddTodo} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
