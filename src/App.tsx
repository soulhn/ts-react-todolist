import React from "react";
import { Routes, Route } from "react-router-dom";
import TodayDateAndTime from "./components/TodayDateAndTime";
import Weather from "./components/Weather";
import Nav from "./components/Nav";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

import Test1 from "./pages/Test1";
import Test2 from "./pages/Test2";
import Test3 from "./pages/Test3";

import "./App.css";
import { useTodos } from "./hooks/useTodos";

function App() {
  const { todos, handleAddTodo, handleToggleCompleted, handleEdit, handleDelete } = useTodos();

  return (
    <div className="App">
      <Nav></Nav>
      <header className="App-header">
        <TodayDateAndTime></TodayDateAndTime>
        <Weather></Weather>
        <TodoInput onAddTodo={handleAddTodo}></TodoInput>
        <TodoList todos={todos} onToggleCompleted={handleToggleCompleted} onEdit={handleEdit} onDelete={handleDelete} />
        <Routes>
          <Route path="/" element={<Test1 />} />
          <Route path="/test2" element={<Test2 />} />
          <Route path="/test3" element={<Test3 />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
