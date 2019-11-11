import React from 'react';
import './Nav.css';

import UserItem from './UserItem';
import EventItem from './EventItem';

export default class Nav extends React.Component {

    render(){

        return (
            <div className="nav">
                
                <UserItem {...this.props}/>
                <EventItem {...this.props}/>
            </div>
        )
    }
}