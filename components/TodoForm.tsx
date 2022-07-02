import React from "react";
import { Todo } from "../pages/api/list";

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
  todo: Todo;
  disabled: boolean;
}

export const TodoForm: React.FC<Props> = ({
  onChange,
  onAdd,
  todo,
  disabled
}) => (
  <form onSubmit={onAdd}>
    <input onChange={onChange} value={todo.name} />
    <button disabled={disabled} type="submit">
      Add a task
    </button>
  </form>
);
