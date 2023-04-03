import React from "react";
import styled from "styled-components";

const TodoListContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  background-color: #f7f7f7;
  border-radius: 8px;
`;

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const TodoTitle = styled.span<{ completed: boolean }>`
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  font-size: 1rem;
  color: #333;
`;

const TodoCheckbox = styled.input.attrs({ type: "checkbox" })`
  margin-left: 1rem;
`;

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onToggleCompleted: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggleCompleted }) => {
  return (
    <TodoListContainer>
      {todos.map((todo) => (
        <TodoItem key={todo.id}>
          <TodoTitle completed={todo.completed}>{todo.title}</TodoTitle>
          <TodoCheckbox checked={todo.completed} onChange={() => onToggleCompleted(todo.id)} />
        </TodoItem>
      ))}
    </TodoListContainer>
  );
};

export default TodoList;
