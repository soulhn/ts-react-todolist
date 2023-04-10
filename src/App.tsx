import React from "react";
import { Routes, Route } from "react-router-dom";
import TodayDateAndTime from "./components/TodayDateAndTime";
import Weather from "./components/Weather";
import Nav from "./components/Nav";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import styled from "styled-components";
import bgImg from "./img/bgImg.jpeg";

import Test1 from "./pages/Test1";
import Test2 from "./pages/Test2";
import Test3 from "./pages/Test3";

import { useTodos } from "./hooks/useTodos";

function App() {
  const { todos, handleAddTodo, handleToggleCompleted, handleEdit, handleDelete } = useTodos();

  return (
    <AppWrapper>
      <Nav></Nav>
      <AppHeader>
        <TodayDateAndTime></TodayDateAndTime>
        <Weather></Weather>
        <TodoInput onAddTodo={handleAddTodo}></TodoInput>
        <TodoList todos={todos} onToggleCompleted={handleToggleCompleted} onEdit={handleEdit} onDelete={handleDelete} />
        <Routes>
          <Route path="/" element={<Test1 />} />
          <Route path="/test2" element={<Test2 />} />
          <Route path="/test3" element={<Test3 />} />
        </Routes>
      </AppHeader>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-image: url(${bgImg});
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;

  & > * {
    margin: 10px; /* 원하는 마진 값으로 변경하세요 */
  }
`;
