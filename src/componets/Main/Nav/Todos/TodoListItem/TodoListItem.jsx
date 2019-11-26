import React from 'react';
import {baby,kidGirl,childGirl,girl,womanB,bigWoman,grandmother,
        kidBoy,childBoy,boy,manB,bigMan,grandfather,defaulIcon} from '../../../../../userImages';
import './TodoListItem.css';

const TodoListItem = ({ label,name, surname, data, image,onDelete }) => {

  const thisYear = new Date().getFullYear();
  const userAge = thisYear - new Date(data).getFullYear();
  let eventIcon = defaulIcon;
  
  if(image === 'girl' || image === 'boy'){
    switch(true){
      case (userAge >=0 && userAge < 2) : eventIcon = baby;
        break;
      case (userAge > 1 && userAge < 7)  :  
        if(image === 'boy'){
          eventIcon = kidBoy;
        } else if (image === 'girl'){
          eventIcon = kidGirl;
        } 
        break;
      case (userAge > 6 && userAge < 13) :
        if(image === 'boy'){
          eventIcon = childBoy;
        } else if (image === 'girl'){
          eventIcon = childGirl;
        } 
        break;
      case (userAge > 12 && userAge < 18) :
        if(image === 'boy'){
          eventIcon = boy;
        } else if (image === 'girl'){
          eventIcon = girl;
        } 
        break;
      case (userAge > 17 && userAge < 40) :
        if(image === 'boy'){
          eventIcon = manB;
        } else if (image === 'girl'){
          eventIcon = womanB;
        } 
        break;
      case (userAge > 39 && userAge < 70) :
        if(image === 'boy'){
          eventIcon = bigMan;
        } else if (image === 'girl'){
          eventIcon = bigWoman;
        } 
        break;
      case (userAge > 69 && userAge < 999) :
        if(image === 'boy'){
          eventIcon = grandfather;
        } else if (image === 'girl'){
          eventIcon = grandmother;
        } 
        break;
      default: eventIcon = defaulIcon;
  
    }
  }
  
  return (
    <span className='todo-list-item'>
  
      <div className='todo-list-item'>

        <div className="item-img">
            <img src={eventIcon} alt="img"/>
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
        <i className="fa fa-trash-o">x</i>
      </button>
    </span>
  );
};

export default TodoListItem;





// const TodoListItem = ({ label,name, surname, data,onDelete }) => {

//   console.log(data)

// return (
//   <span className='todo-list-item'>

//     <div className='todo-list-item'>

//       <div className="item-img">
//           <img src={man1} alt="img"/>
//       </div>

//       <span className="todo-list-item-label">

//         <div>
//           {name} {surname}
//         </div>
        
//         <div>
//           Собитие : {label}
//         </div>
       
//       </span>

//     </div>

    

//     <button type="button"
//             className="btn btn-outline-danger btn-sm float-right"
//             onClick={onDelete}>
//       <i className="fa fa-trash-o">x</i>
//     </button>
//   </span>
// );
// };

// export default TodoListItem;
