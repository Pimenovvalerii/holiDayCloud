/* eslint-disable default-case */
import { createStore, applyMiddleware } from 'redux';
// import reducer from './reducers';
// import { loggerMiddleware, checkboxMiddleware } from './middlewares';

function appReducer(state, action){
    switch(action.type) {
        case 'LOGIN' :            
        return {
            ...state,
            user: action.value
        }
    }

    if (state) {
        return state;
    }

    return{
        isOnline: false
    }
}


// const switcherMiddleware = (store) => (next) => {
//     // const user = JSON.parse(localStorage.getItem('user'));
//     // console.log(user)
//     // next({ type: 'SWITCH_STATE', value : user.login , array: user.array })
    
//     return (action) =>{
//         if(action.type === 'SWITCH_STATE'){
//             const user = JSON.parse(localStorage.getItem('user'));
//             next({ type: 'SWITCH_STATE', value : user.login , array: user.array })
//         } else {
//             next(action);
//         }
        
//     }
// }


export const store = createStore(
  appReducer,
//   applyMiddleware(
//     switcherMiddleware,
//     // loggerMiddleware,
//   ),
);
