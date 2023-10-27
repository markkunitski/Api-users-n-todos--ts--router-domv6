import * as React from "react";
import { ITodo } from "../types/types";

interface ITodoItemProps {
  todo: ITodo;
}

const TodoItem: React.FunctionComponent<ITodoItemProps> = ({ todo }) => {
  return (
    <div>
      <input
        type="checkbox"
      />
      {todo.id} - {todo.title}
    </div>
  );
};

export default TodoItem;
