import React from 'react';
import {baby,kidGirl,childGirl,girl,womanB,bigWoman,grandmother,
    kidBoy,childBoy,boy,manB,bigMan,grandfather,defaulIcon} from '../../../userImages';


function ContentItem (props){
    const { label,name, surname, data, textarea, image} = props.event;
    const date = new Date(data);
    const options = { weekday: 'long',  month: 'long', day: 'numeric' };
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
        <div className="content-item">
           
            <div className="content-item-image">
                <img src={eventIcon} alt="img"/>
            </div>
            
            <div className="content-item-initials">
                <span className="content-item-name">
                    {name}
                </span>
                <span className="content-item-surname">
                    {surname}
                </span>
            </div>
            
            <div className="content-item-label">
                {label}
            </div>
            
            <div className="content-item-options">
                {date.toLocaleDateString('ru-RU', options)}
            </div>
            <div className="content-item-textarea">
                {textarea}
            </div>
        </div>
    )
}

export default ContentItem;