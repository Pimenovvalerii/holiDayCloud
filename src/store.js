/* eslint-disable default-case */
import { createStore ,applyMiddleware } from 'redux';

import {save} from './apiJSONBin'

function appReducer(state, action){
    switch(action.type) {
        case 'SWITCH_USERS' :
            return{
                objUser : action.value
        }
        case 'SAVE' :
            save(action.value,'5dcd5e7a2eea4763ad9ad3ba')
    }

    if (state) {
        return state;
    }

    return{
        isOnline: false
    }
}



const switcherMiddleware = (store) => (next) => {
    const users = JSON.parse(localStorage.getItem('users'));
    if(users){
        const user = JSON.parse(localStorage.getItem(`${users.user}`));
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
  ),
);
