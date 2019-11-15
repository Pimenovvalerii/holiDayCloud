/* eslint-disable default-case */
import { createStore ,applyMiddleware } from 'redux';
// import reducer from './reducers';
// import { loggerMiddleware, checkboxMiddleware } from './middlewares';

function appReducer(state, action){
    switch(action.type) {
        case 'LOGIN' :  
        console.log('Action LOGIN', action.value)          
        return {
            ...state,
            user: action.value
        }
        case 'SWITCH_USERS' :
            console.log('SWITCH_USERS', action.value)
            return{
                objUser : action.value
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

const switcherMiddleware = (store) => (next) => {
    const users = JSON.parse(localStorage.getItem('users'));
    if(users){
        console.log(users.user)
        const user = JSON.parse(localStorage.getItem(`${users.user}`));
        console.log(user)
        next({ type: 'SWITCH_USERS', value : user })
    }
    
    
    return (action) =>{
        
        if(action.type === 'SWITCH_USERS'){
            const users = JSON.parse(localStorage.getItem('users'));       
            const user = JSON.parse(localStorage.getItem(`${users.user}`));            
            next({ type: 'SWITCH_USERS', value : user })
        } else {
            next(action);
        }
        
    }
}


export const store = createStore(
  appReducer,
  applyMiddleware(
    switcherMiddleware,
    // loggerMiddleware,
  ),
);
