import React from 'react';
import {man,man1,man2,man3,man4,man5,man6} from '../../../userImages';
import {woman,woman1,woman2,woman3,woman4,woman5,woman6} from '../../../userImages';

export default class UserItem extends React.Component{
    // console.log('render with',props )
    
    render(){

        

        const num = this.props.objUser ? this.props.objUser.image : 1 ;
        const arr = [man,man1,man2,man3,man4,man5,man6,woman,woman1,
                    woman2,woman3,woman4,woman5,woman6];
        return (
            <div className="user__item">
                
                <div 
                className="user__item-image"
                >
                    <img src={arr[num]}  alt="img"/>
                </div>
                
                <span>{this.props.objUser ? this.props.objUser.name : 'Name'}</span>
                <span>{this.props.objUser ? this.props.objUser.surname: 'Surname'}</span>
                
            </div>
        )
    }
    
};

