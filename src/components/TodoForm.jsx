import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: "Roboto", sans-serif;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  margin-left: 10px;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: "Roboto", sans-serif;

  &:hover {
    opacity: 0.8;
  }
`;

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder="Add a new Task"
      />
      <Button type="submit">Add</Button>
    </Form>
  );
};

export default TodoForm;
