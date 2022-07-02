import type { NextPage } from 'next'
import { useState } from 'react'
import { CompletedTodoList } from '../components/CompletedTodoList'
import { TodoForm } from '../components/TodoForm'
import { TodoList } from '../components/TodoList'
import { Todo } from './api/list'
import { v4 as uuid } from 'uuid';
import { ShowCompletedTodos } from '../components/ShowCompletedTodos'

const Home: NextPage = () => {
  const [isCompletedListActive, setCompletedListActive] = useState(false);
  const [newTodo, setNewTodo] = useState({
    id: uuid(),
    name: "",
    isDone: false
  });

  const [todos, setTodos] = useState(new Array<Todo>());
  const [completedTodos, setCompletedTodos] = useState(new Array<Todo>());

  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setNewTodo({
      id: uuid(),
      name: "",
      isDone: false
    });
    setTodos([...todos, newTodo]);
  };

  const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo({
      ...newTodo,
      name: event.target.value
    });
  };

  const deleteTask = (todoToDelete: Todo) => {
    setTodos([...todos.filter(task => task.id !== todoToDelete.id)]);
    setCompletedTodos([...completedTodos, todoToDelete]);
  };

  const undoTodo = (todoToUndo: Todo) => {
    setCompletedTodos([
      ...completedTodos.filter(todo => todo.id !== todoToUndo.id)
    ]);
    setTodos([...todos, todoToUndo]);
  };

  return (
    <div>
      <h2>TS next Todos ✔</h2>
      <TodoForm
        disabled={newTodo.name.length == 0}
        todo={newTodo}
        onAdd={addTask}
        onChange={handleTaskChange}
      />
      <ShowCompletedTodos isCompletedListActive={isCompletedListActive} setCompletedListActive={setCompletedListActive}></ShowCompletedTodos>
      <div className="lists">
        <TodoList todos={todos} onDelete={deleteTask} />
        {isCompletedListActive ? (
          <CompletedTodoList todos={completedTodos} onDelete={undoTodo} />
        ) : null}
      </div>
      <style>{`
        .lists {
          display: flex;
          justify-content: space-around;
        }
      `}</style>
    </div>
  );
}

export default Home
