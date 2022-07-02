import React from "react";
import { Todo } from "../pages/api/list";

interface ICompletedTodoListItem {
  todo: Todo;
  onDelete: (task: Todo) => void;
}

export const CompletedTodoListItem: React.FC<ICompletedTodoListItem> = ({
  todo,
  onDelete
}) => {
  const onClick = () => {
    onDelete(todo);
  };

  return (
    <>
      <li>
        <span className="strike">{todo.name}&nbsp;</span>
        <button onClick={onClick}>X</button>
      </li>
      <style>{`
        span {
          color: green;
          text-decoration: line-through;
        }
      `}</style>
    </>
  );
};
