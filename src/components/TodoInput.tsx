import React, { useState, KeyboardEvent } from "react";
import styled from "styled-components";

interface TodoInputProps {
  onAddTodo: (title: string) => void;
}

const InputContainer = styled.div`
  width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

const StyledInput = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const StyledButton = styled.button`
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const TodoInput: React.FC<TodoInputProps> = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputValue.trim()) {
      onAddTodo(inputValue.trim());
      setInputValue("");
    }
  };

  const handleButtonClick = () => {
    if (inputValue.trim()) {
      onAddTodo(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <InputContainer>
      <StyledInput type="text" placeholder="할 일을 입력 해주세요." value={inputValue} onChange={handleInputChange} onKeyPress={handleInputKeyPress} />
      <StyledButton onClick={handleButtonClick}>Add</StyledButton>
    </InputContainer>
  );
};

export default TodoInput;
