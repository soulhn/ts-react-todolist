import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import TodayDateAndTime from "./components/Today";
// json-server --watch db.json --port 3001

// components
import Weather from "./components/Weather";
import Nav from "./components/Nav";
// import { Counter } from "./features/counter/Counter";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

//pages
import Test1 from "./pages/Test1";
import Test2 from "./pages/Test2";
import Test3 from "./pages/Test3";

//other
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

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("http://localhost:3001/todos");
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  // fetch 사용 전 테스트
  // const addTodo = (title: string) => {
  //   const newTodo: Todo = {
  //     id: todos.length + 1, // 실제로는 고유한 ID를 생성하는 방법을 사용해야 합니다.
  //     title: title,
  //     completed: false,
  //   };
  //   setTodos([...todos, newTodo]);
  // };

  // App.tsx
  const addTodo = async (title: string) => {
    const newTodo: Omit<Todo, "id"> = {
      title: title,
      completed: false,
    };

    try {
      const response = await fetch("http://localhost:3001/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });

      if (!response.ok) {
        throw new Error("Failed to add new todo");
      }

      const addedTodo: Todo = await response.json();
      setTodos([...todos, addedTodo]);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const toggleCompleted = async (id: number) => {
    const todoToToggle = todos.find((todo) => todo.id === id);
    if (!todoToToggle) return;

    const updatedTodoData = { ...todoToToggle, completed: !todoToToggle.completed };

    try {
      const response = await fetch(`http://localhost:3001/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTodoData),
      });

      if (response.ok) {
        const updatedTodo = await response.json();
        const updatedTodos = todos.map((todo) => (todo.id === id ? updatedTodo : todo));
        setTodos(updatedTodos);
      } else {
        console.error("Error updating todo's completion status:", response.status);
      }
    } catch (error) {
      console.error("Error updating todo's completion status:", error);
    }
  };

  const handleEdit = async (id: number) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    if (!todoToEdit) return;

    const newTitle = prompt("Enter new title:", todoToEdit.title);
    if (!newTitle) return;

    try {
      const response = await fetch(`http://localhost:3001/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...todoToEdit, title: newTitle }),
      });

      if (response.ok) {
        const updatedTodo = await response.json();
        const updatedTodos = todos.map((todo) => (todo.id === id ? updatedTodo : todo));
        setTodos(updatedTodos);
      } else {
        console.error("Error editing todo:", response.status);
      }
    } catch (error) {
      console.error("Error editing todo:", error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3001/todos/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
      } else {
        console.error("Error deleting todo:", response.status);
      }
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div className="App">
      <Nav></Nav>
      <header className="App-header">
        <TodayDateAndTime></TodayDateAndTime>
        <Weather></Weather>
        <TodoInput onAddTodo={addTodo}></TodoInput>
        {/* <Counter></Counter> */}
        <TodoList todos={todos} onToggleCompleted={toggleCompleted} onEdit={handleEdit} onDelete={handleDelete} />
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
