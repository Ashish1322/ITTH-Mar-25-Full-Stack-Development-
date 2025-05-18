import React from "react";
import useTodos from "../context/hooks/useTodo";
export default function Todo({ title, description, id, completed }) {
  const { deleteTodo, markAsCompleted } = useTodos();
  return (
    <div>
      {completed ? (
        <h3>
          <s>{title}</s>
        </h3>
      ) : (
        <h3>{title}</h3>
      )}

      <p>{description}</p>
      {completed ? (
        <p>
          <b>Completed</b>
        </p>
      ) : (
        <p>
          <b>Pending</b>
        </p>
      )}
      <button onClick={() => deleteTodo(id)}>Delete</button>
      {completed == false ? (
        <button onClick={() => markAsCompleted(id)}>Mark As Completed</button>
      ) : null}

      <hr />
    </div>
  );
}
