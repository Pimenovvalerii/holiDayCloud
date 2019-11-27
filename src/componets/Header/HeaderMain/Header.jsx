import React from 'react';

import Exit from '../Exit';
import Entrance from '../Entrance'

import './Header.css';


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.toggleRef = React.createRef();
        this.menuRef = React.createRef();
        this.toggle = this.toggle.bind(this);
        this.clickOnWindow = this.clickOnWindow.bind(this)
        
      }
    componentDidMount(){
        window.addEventListener('click',this.clickOnWindow)
    }
    componentWillUnmount(){
        window.removeEventListener('click',this.clickOnWindow)
    }
    clickOnWindow(e){

        // console.log(e.target !== this.toggleRef.current || e.target !== this.i1Ref.current || e.target !== this.i2Ref.current || e.target !== this.i3Ref.current)
     if(e.target !== this.toggleRef.current ){
        this.menuRef.current.classList.remove('active')
     }
    }

    toggle(e){
        e.stopPropagation()
       
        this.menuRef.current.classList.toggle('active')
    }

    render(){
        let condition = this.props.objUser ? true : false

        return(
            <div className="header"> 
                <div 
                    className="header-titlle text"
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