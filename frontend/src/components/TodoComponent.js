import React, { useState } from "react";
import moment from "moment";
import {
  MdDeleteOutline,
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
} from "react-icons/md";

import { useTodosContext } from "../hooks/useTodosContext";

const TodoComponent = (props) => {
  const { dispatch } = useTodosContext();
  const { todo } = props;

  const [completed, setCompleted] = useState(todo.completed);

  const handleCompleted = async () => {
    const newCompletedValue = !completed;
    const response = await fetch(`/api/todos/${todo._id}`, {
      method: "PATCH",
      body: JSON.stringify({ completed: newCompletedValue }),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (response.ok) {
      setCompleted(newCompletedValue);
    }
  };

  const handleDelete = async () => {
    const response = await fetch(`/api/todos/${todo._id}`, {
      method: "DELETE",
    });
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_TODO", payload: json });
    }
  };

  return (
    <div className="todo">
      <div>
        <h4>{todo.content}</h4>
        <p>{moment(todo.createdAt).fromNow()}</p>
      </div>
      <div>
        {completed ? (
          <MdOutlineCheckBox
            size={24}
            className="icon"
            onClick={handleCompleted}
          />
        ) : (
          <MdOutlineCheckBoxOutlineBlank
            size={24}
            className="icon"
            onClick={handleCompleted}
          />
        )}
        <MdDeleteOutline size={24} className="icon" onClick={handleDelete} />
      </div>
    </div>
  );
};

export default TodoComponent;
