import React, { useEffect } from "react";

import { TodoComponent, TodoForm } from "../components";
import { useTodosContext } from "../hooks/useTodosContext";

const Home = () => {
  const { todos, dispatch } = useTodosContext();

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await fetch("/api/todos");
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "SET_TODOS", payload: json });
    }
  };

  return (
    <div className="home">
      <div className="todos">
        {todos?.map((todo) => (
          <TodoComponent key={todo._id} todo={todo} />
        ))}
      </div>
      <TodoForm />
    </div>
  );
};

export default Home;
