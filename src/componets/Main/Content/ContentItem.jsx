import React from 'react';


function ContentItem (props){
    const date = new Date(props.event.data);
    const options = { weekday: 'long',  month: 'long', day: 'numeric' };

    return (
        <div className="content-item">
           
            <div className="content-item-image">
                <img src="" alt="img"/>
            </div>
            
            <div className="content-item-initials">
                <span className="content-item-name">
                    {props.event.name}
                </span>
                <span className="content-item-surname">
                    {props.event.surname}
                </span>
            </div>
            
            <div className="content-item-label">
                {props.event.label}
            </div>
            
            <div className="content-item-options">
                {date.toLocaleDateString('ru-RU', options)}
            </div>
            <div className="content-item-textarea">
                {props.event.textarea}
            </div>
        </div>
    )
}

export default ContentItem;