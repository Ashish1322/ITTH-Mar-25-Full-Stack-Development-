import React, { useEffect, useState } from "react";
import TodoContext from "../TodoContext";
export default function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const base_url = "http://localhost:8000/api/v1/todos";

  const getAllTodos = () => {
    fetch(`${base_url}`)
      .then((data) => data.json())
      .then((data) => {
        setTodos(data["todos"]);
      })
      .catch((err) => console.log(err));
  };

  const insertTodo = (title, desc) => {
    fetch(`${base_url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: desc,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        getAllTodos();
      })
      .catch((err) => console.log(err));
  };

  const deleteTodo = (id) => {
    fetch(`${base_url}/${id}/remove`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        getAllTodos();
      })
      .catch((err) => console.log(err));
  };

  const markAsCompleted = (id) => {
    fetch(`${base_url}/${id}/complete`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        getAllTodos();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  return (
    <TodoContext.Provider
      value={{ deleteTodo, insertTodo, markAsCompleted, todos }}
    >
      {children}
    </TodoContext.Provider>
  );
}
