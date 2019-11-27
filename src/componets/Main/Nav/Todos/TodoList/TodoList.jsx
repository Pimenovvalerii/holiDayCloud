import React from 'react';

import TodoListItem from '../TodoListItem/TodoListItem';

import './TodoList.css';

const TodoList = ({ items, onDelete }) => {

  const elements = items.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          { ...itemProps }
          onDelete={ () => onDelete(id) } />
      </li>
    );
  });

  return (
    
      <div className="todo-list-test">
        <ul className="todo-list">
          { elements }
        </ul>
      </div>
    );
};

export default TodoList;
