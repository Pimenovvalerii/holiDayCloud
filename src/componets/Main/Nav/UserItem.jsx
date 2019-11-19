import React from 'react';

function UserItem(props){
    console.log('render with',props )
    return (
        <div className="user__item">
            
            <div className="user__item-image">
                <img src=""  alt="img"/>
            </div>
            
            <span>{props.objUser ? props.objUser.name : 'Name'}</span>
            <span>{props.objUser ? props.objUser.surname: 'Surname'}</span>
            
        </div>
    )
};

export default UserItem;