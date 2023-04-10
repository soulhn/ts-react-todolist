import { Todo } from "../interfaces/todo";

const API_URL = "http://localhost:3001/todos";

export const fetchTodos = async () => {
  try {
    const response = await fetch(API_URL);
    return await response.json();
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
};

export const addTodo = async (newTodo: Omit<Todo, "id">) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });

    if (!response.ok) {
      throw new Error("Failed to add new todo");
    }

    return await response.json();
  } catch (error) {
    console.error("Error adding todo:", error);
  }
};

export const updateTodo = async (id: number, updatedTodoData: Todo) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTodoData),
    });

    if (!response.ok) {
      throw new Error("Failed to update todo");
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating todo:", error);
  }
};

export const deleteTodo = async (id: number) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete todo");
    }
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
};
