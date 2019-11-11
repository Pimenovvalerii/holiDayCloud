import React from 'react';

function UserItem(props){
    return (
        <div className="user__item">
            
            <div className="user__item-image">
                <img src=""  alt="img"/>
            </div>
                
        
            <span>{props.user ? props.user.name : 'Name'}</span>
            <span>{props.user ? props.user.surname: 'Surname'}</span>
            
        </div>
    )
};

export default UserItem;