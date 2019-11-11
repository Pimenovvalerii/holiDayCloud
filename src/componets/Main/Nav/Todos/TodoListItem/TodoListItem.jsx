import React from 'react';

import './TodoListItem.css';

const TodoListItem = ({ label,name, surname, onDelete }) => {

  return (
    <span className='todo-list-item'>
  
      <div className='todo-list-item'>

        <div className="item-img">
            <img src="" alt="img"/>
        </div>

        <span className="todo-list-item-label">

          <div>
            {name} {surname}
          </div>
          
          <div>
            Собитие : {label}
          </div>
         
        </span>

      </div>

      

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right"
              onClick={onDelete}>
        <i className="fa fa-trash-o"></i>
      </button>
    </span>
  );
};

export default TodoListItem;
