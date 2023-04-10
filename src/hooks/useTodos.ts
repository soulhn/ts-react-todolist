import { useState, useEffect } from "react";
import { fetchTodos, addTodo, updateTodo, deleteTodo } from "../api";
import { Todo } from "../interfaces/todo";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchAllTodos = async () => {
      const data = await fetchTodos();
      setTodos(data);
    };

    fetchAllTodos();
  }, []);

  const handleAddTodo = async (title: string) => {
    const newTodo: Omit<Todo, "id"> = {
      title: title,
      completed: false,
    };

    const addedTodo = await addTodo(newTodo);
    setTodos([...todos, addedTodo]);
  };

  const handleToggleCompleted = async (id: number) => {
    const todoToToggle = todos.find((todo) => todo.id === id);
    if (!todoToToggle) return;

    const updatedTodoData = { ...todoToToggle, completed: !todoToToggle.completed };
    const updatedTodo = await updateTodo(id, updatedTodoData);
    const updatedTodos = todos.map((todo) => (todo.id === id ? updatedTodo : todo));
    setTodos(updatedTodos);
  };

  const handleEdit = async (id: number) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    if (!todoToEdit) return;

    const newTitle = prompt("Enter new title:", todoToEdit.title);
    if (!newTitle) return;

    const updatedTodoData = { ...todoToEdit, title: newTitle };
    const updatedTodo = await updateTodo(id, updatedTodoData);
    const updatedTodos = todos.map((todo) => (todo.id === id ? updatedTodo : todo));
    setTodos(updatedTodos);
  };

  const handleDelete = async (id: number) => {
    await deleteTodo(id);
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return {
    todos,
    handleAddTodo,
    handleToggleCompleted,
    handleEdit,
    handleDelete,
  };
};
