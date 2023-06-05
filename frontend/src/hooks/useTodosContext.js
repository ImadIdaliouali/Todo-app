import { useContext } from "react";

import { TodosContext } from "../context/TodoContext";

export const useTodosContext = () => {
  const context = useContext(TodosContext);

  if (!context) {
    throw Error("useTodosContext must be used inside an TodosContextProvider");
  }

  return context;
};
