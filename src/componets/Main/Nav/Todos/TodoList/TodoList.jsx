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

  return (<ul className="todo-list list-group">{ elements }</ul>);
};

export default TodoList;
