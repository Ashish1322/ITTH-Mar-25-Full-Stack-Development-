import { useContext } from "react";
import TodoContext from "../TodoContext";

function useTodos() {
  return useContext(TodoContext);
}

export default useTodos;
