import { useState } from "react";
import Todo from "./components/Todo";
import useTodos from "./context/hooks/useTodo";
function App() {
  const { todos, insertTodo } = useTodos();
  const [title, setTitle] = useState("");
  const [des, setDesc] = useState("");
  return (
    <div>
      <h1>Todos</h1>
      <input
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
        type="text"
      />
      <input
        value={des}
        onChange={(e) => setDesc(e.currentTarget.value)}
        type="text"
      />
      <button
        onClick={() => {
          insertTodo(title, des);
          setTitle("");
          setDesc("");
        }}
      >
        Add Todo
      </button>
      <hr />
      {todos.map((item, index) => (
        <Todo
          key={index}
          title={item.title}
          description={item.description}
          completed={item.completed}
          id={item._id}
        />
      ))}
    </div>
  );
}

export default App;
