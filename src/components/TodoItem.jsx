import React from "react";
import styled from "styled-components";

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  font-size: 18px;
  font-family: "Roboto", sans-serif;
`;

const Button = styled.button`
  background: ${(props) => (props.primary ? "#4CAF50" : "#f44336")};
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;

  &:hover {
    opacity: 0.8;
  }
`;

const TodoItem = ({ todo, toggleComplete, index, removeTodo }) => {
  return (
    <Item style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      {todo.text}
      <div>
        <Button onClick={() => toggleComplete(index)}>
          {todo.completed ? "Undo" : "Complete"}
        </Button>
        <Button onClick={() => removeTodo(index)}>Remove</Button>
      </div>
    </Item>
  );
};

export default TodoItem;
