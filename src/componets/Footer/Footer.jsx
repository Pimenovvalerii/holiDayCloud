import React from 'react';

import './Footer.css';

export default class Footer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            user : this.props.user
        }

    }
    render(){

        return (
            <div className="footer">
                Footer {this.props.user}
            </div>
        )
    }
}