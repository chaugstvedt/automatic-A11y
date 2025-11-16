import { useState } from 'react';
import type { Todo } from './types';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';
import linkedinLogo from './assets/linkedin-icon.png'

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h3>Todo TypeScript App 🦄</h3>
        <p>A simple todo app built with Vite + React + TypeScript</p>
      </header>

      <main className="app-main">
        <TodoForm onAdd={addTodo} />
        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      </main>

      <footer className="app-footer">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>This is an example app for accessibility testing. It is full of accessibility errors. Do not write apps like this!
        </p>
        <a
          className="app-link"
          href="https://www.w3.org/TR/WCAG21/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn WCAG 2.1
        </a>
        <a href="https://www.linkedin.com/in/chaugstvedt">
          <img src={linkedinLogo} className="app-linkedin-link"/>
        </a>
      </footer>
    </div>
  );
}

export default App;