import React from 'react';
import {babyGirl,childGirl,girl,womanB,grandma} from '../../../../../userImages';
import {babyBoy,boy,childBoy,manB,grandfather} from '../../../../../userImages';
import './TodoListItem.css';

const TodoListItem = ({ label,name, surname, data,image,onDelete }) => {

    // console.log( data)

  const ogj = {babyGirl,childGirl,girl,womanB,grandma};
  const objBoy = {babyBoy,boy,childBoy,manB,grandfather};
  // const arrImages = {
  //   girl:{babyGirl,childGirl,girl,womanB,grandma},
  //   boy:{babyBoy,boy,childBoy,manB,grandfather},
  // }
  
  // const arrImage = [babyGirl,childGirl,girl,womanB,grandma];
  const thisYear = new Date().getFullYear();
  const userAge = thisYear - new Date(data).getFullYear();
  // console.log(userAge + ' возвраст')

  console.log(image)
  console.log(data)
  let arrImageNum;
  switch(true){
    case (userAge >= 0 && userAge < 5)  :
        console.log('малиш');
        // arrImageNum = objBoy.boy;
        console.log(image)
        if(image === 'boy'){
          arrImageNum = objBoy.boy;
        } else if (image === 'girl'){
          arrImageNum = ogj.girl
        } else if (image === 'default'){
          arrImageNum = ogj.grandma
        }
        break;
    case (userAge > 4 && userAge < 12) :
        console.log('ребенок');
        arrImageNum = ogj.childGirl;
        break;
    case (userAge > 11 && userAge < 18) :
        console.log('подросток');
        arrImageNum = ogj.girl;
         break;
    case (userAge > 17 && userAge < 65) :
      console.log('взрослый');
      arrImageNum = ogj.womanB;
        break;
    case (userAge > 64 && userAge < 999) :
        console.log('подросток');
        arrImageNum = ogj.grandma;
          break;
    default:
      console.log('другое');

  }

  // console.log(arrImageNum)
  

  return (
    <span className='todo-list-item'>
  
      <div className='todo-list-item'>

        <div className="item-img">
            <img src={arrImageNum} alt="img"/>
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
