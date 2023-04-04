import React from "react";
import styled from "styled-components";
import { FaEdit, FaTrashAlt } from "react-icons/fa"; // 수정 및 삭제 아이콘을 위해 라이브러리 추가

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

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const IconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  padding: 0;
  margin-left: 0.5rem;
`;

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onToggleCompleted: (id: number) => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggleCompleted, onEdit, onDelete }) => {
  return (
    <TodoListContainer>
      {todos.map((todo) => (
        <TodoItem key={todo.id}>
          <TodoTitle completed={todo.completed}>{todo.title}</TodoTitle>
          <ButtonsContainer>
            <TodoCheckbox checked={todo.completed} onChange={() => onToggleCompleted(todo.id)} />
            <IconButton onClick={() => onEdit(todo.id)}>
              <FaEdit />
            </IconButton>
            <IconButton onClick={() => onDelete(todo.id)}>
              <FaTrashAlt />
            </IconButton>
          </ButtonsContainer>
        </TodoItem>
      ))}
    </TodoListContainer>
  );
};

export default TodoList;
