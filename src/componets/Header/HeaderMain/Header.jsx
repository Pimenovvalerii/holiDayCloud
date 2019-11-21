import React from 'react';

import Exit from '../Exit';
import Entrance from '../Entrance'

import './Header.css';


export default class Header extends React.Component {

    render(){
        // const condition = this.props.user ? true : false
        let condition = this.props.objUser ? true : false
        // console.log(condition)

        // console.log( 'header renret with '+JSON.stringify(this.props), condition )
        return(
            <div className="header"> 
            <div className="today">
                Сегодня {(new Date()).toLocaleString('ru-RU', { weekday: 'long',  month: 'long', day: 'numeric' })}
            </div>
               
               <div>
                   Запомнить все
                   this.props.isOnline: {`${this.props.isOnline}`} <br/>
                   this.props.user: {this.props.user ? 'true' : 'false'} <br />
                   this.props.objUser: {this.props.objUser ? 'true' : 'false'} <br />
                   name {this.props.objUser ? this.props.objUser.name : 'false'}
                </div>
                
               <div>

                    <div >
                        <Entrance 
                                 hidden={condition}  
                                 exit={this.props.exit} 
                            // login={this.props.login}
                            // log={this.props.log}                                                                                                                                                   
                        />
                    </div>
                    
                    <Exit 
                        {...this.props}
                        // exit={this.props.exit}
                        // save={this.props.save}
                        hidden={!condition}
                    />
                                   
                </div> 
           
            </div>
        )
    }
}