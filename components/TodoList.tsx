import React from "react";
import { Todo } from "../pages/api/list";

import { TaskListItem } from "./TaskListItem";

interface Props {
  todos: Todo[];
  onDelete: (task: Todo) => void;
}

export const TodoList: React.FC<Props> = ({ todos, onDelete }) => (
  <>
    <div>
      <h3>Tasks</h3>
      {todos.length == 0 ? "-" : null}
      <ul>
        {todos.map((todo, _i) => (
          <TaskListItem key={_i} task={todo} onDelete={onDelete} />
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
