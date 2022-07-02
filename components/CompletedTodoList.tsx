import React from "react";

import { Todo } from "../pages/api/list";
import { CompletedTodoListItem } from "./CompletedTodoListItem";

interface ICompletedTodoList {
  todos: Todo[];
  onDelete: (task: Todo) => void;
}

export const CompletedTodoList: React.FC<ICompletedTodoList> = ({
  todos,
  onDelete
}) => (
  <>
    <div>
      <h3>Done</h3>
      {todos.length == 0 ? "-" : null}
      <ul>
        {todos.map((todo, _i) => (
          <CompletedTodoListItem key={_i} todo={todo} onDelete={onDelete} />
        ))}
      </ul>
    </div>
    <style>{`
      div {
        min-width: 12em;
      }
    `}</style>
  </>
);
