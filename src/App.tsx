import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// components
import Weather from "./components/Weather";
import Nav from "./components/Nav";
import { Counter } from "./features/counter/Counter";
import TodoList from "./components/TodoList";

//pages
import Test1 from "./pages/Test1";
import Test2 from "./pages/Test2";
import Test3 from "./pages/Test3";

//other
import logo from "./logo.svg";
import "./App.css";

//interface
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

//초기 데이터
const initialTodos: Todo[] = [
  {
    id: 1,
    title: "Buy groceries",
    completed: false,
  },
  {
    id: 2,
    title: "Clean the house",
    completed: false,
  },
  {
    id: 3,
    title: "Clean the house",
    completed: true,
  },
  {
    id: 4,
    title: "밥먹기",
    completed: true,
  },
];

function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const toggleCompleted = (id: number) => {
    const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <Nav></Nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <Weather></Weather>
        <Counter></Counter>
        <Routes>
          <Route path="/" element={<Test1 />} />
          <Route path="/test2" element={<Test2 />} />
          <Route path="/test3" element={<Test3 />} />
        </Routes>
        <TodoList todos={todos} onToggleCompleted={toggleCompleted} />
      </header>
    </div>
  );
}

export default App;
