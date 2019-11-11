import React from 'react';
import './Main.css';

import Nav from './Nav';
import Content from './Content';

export default class Main extends React.Component {
    

    

    render(){

        return (
            <div className="main">
                <Nav {...this.props}/>
                <Content {...this.props} />
            </div>
        )
    }
}