import React from "react";

export default function TodoList(props) {
  console.log(props);
  return (
    <div>
      <ul>
        {props.todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
