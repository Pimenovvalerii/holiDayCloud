import React from 'react';

import Exit from '../Exit';
import Entrance from '../Entrance'

import './Header.css';


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        // создадим реф в поле `textInput` для хранения DOM-элемента
        this.toggleRef = React.createRef();
        this.menuRef = React.createRef();
        this.toggle = this.toggle.bind(this);
      }

    toggle(){
        // this.toggleRef.current.hidden = true
        this.menuRef.current.classList.toggle('active')
    }

    render(){
        let condition = this.props.objUser ? true : false

        return(
            <div className="header"> 
                <div 
                    className="header-titlle"
                >
                   Запомнить все
                </div>
                
                <div 
                    className="menu"
                    ref={this.menuRef}
                >
                    <span 
                        className="toggle"
                        onClick={this.toggle}
                        ref={this.toggleRef}
                    >
                        <i></i>
                        <i></i>
                        <i></i>
                    </span>
                    <div className="menuContent">
                        <div className="today">
                            Сегодня {(new Date()).toLocaleString('ru-RU', { weekday: 'long',  month: 'long', day: 'numeric' })}
                        </div>
                        <Entrance 
                            hidden={condition}  
                            exit={this.props.exit} 
                        />
                        <Exit 
                            hidden={!condition}
                            {...this.props}
                        />
                    </div>                
                </div> 
            
            </div>
        )
    }
}