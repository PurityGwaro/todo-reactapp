import React from "react";

export default function Todo(props) {
  const remove = () => {
    props.removeTodo(props.id);
  };
  return (
    <div>
      <li>{props.item}</li>
      <button>edit</button>
      <button onClick={remove}>X</button>

    </div>
  );
}
