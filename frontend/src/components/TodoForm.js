import React, { useState } from "react";

import { useTodosContext } from "../hooks/useTodosContext";

const TodoForm = () => {
  const { dispatch } = useTodosContext();
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const todo = { content };
    const response = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (response.ok) {
      setContent("");
      setError(null);
      console.log("new todo added", json);
      dispatch({ type: "CREATE_TODO", payload: json });
    } else {
      setError(json.error);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Todo</h3>
      <input
        type="text"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
      <button>Add Todo</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default TodoForm;
