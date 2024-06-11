import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const TodoList = ({ todos, toggleComplete, removeTodo }) => {
  return (
    <List>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      ))}
    </List>
  );
};

export default TodoList;
