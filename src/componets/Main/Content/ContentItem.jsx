import React from 'react';


function ContentItem (props){
    const date = new Date(props.event.data);
    const options = { weekday: 'long',  month: 'long', day: 'numeric' };

    return (
        <div className="content-item">
            <div>{props.event.label}</div>
            <div>{props.event.name}</div>
            <div>{props.event.surname}</div>
            <div>{date.toLocaleDateString('ru-RU', options)}</div>
            <div>{props.event.textarea}</div>
        </div>
    )
}

export default ContentItem;