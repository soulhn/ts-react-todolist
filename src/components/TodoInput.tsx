// components/TodoInput.tsx
import React, { useState, KeyboardEvent } from "react";

interface TodoInputProps {
  onAddTodo: (title: string) => void;
}

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
    <div>
      <input type="text" placeholder="New todo..." value={inputValue} onChange={handleInputChange} onKeyPress={handleInputKeyPress} />
      <button onClick={handleButtonClick}>Add</button>
    </div>
  );
};

export default TodoInput;
