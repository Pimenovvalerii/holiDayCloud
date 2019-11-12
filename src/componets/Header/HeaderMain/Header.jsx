import React from 'react';

import Exit from '../Exit';
import Entrance from '../Entrance'

import './Header.css';


export default class Header extends React.Component {

    render(){
        const condition = this.props.user ? true : false

        // console.log( 'header renret with '+JSON.stringify(this.props), condition )
        return(
            <div className="header"> 
               
               <div>
                   Запомнить все
                   {/* this.props.isOnline: {`${this.props.isOnline}`} <br/> */}
                   {/* this.props.user: {this.props.user ? 'true' : 'false'} */}
                </div>
                
               <div>

                    <Entrance 
                        login={this.props.login}
                        log={this.props.log}

                        hidden={condition}
                    />


                    <Exit 
                        login={this.props.login}
                        hidden={!condition}
                    />
                                   

                </div> 
                
            </div>
        )
    }
}