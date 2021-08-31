import React from "react";

export default function TodoList(props) {
  const handleDeleteTodo = (e) => {
    const id = parseInt(e.target.id);
    props.deleteTodo(id);
  };

  return (
    <div>
      <ul>
        {props.todos.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <button
              id={index}
              onClick={(e) => {
                handleDeleteTodo(e);
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
