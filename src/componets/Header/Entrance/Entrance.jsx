import React from 'react';
import RegistrationForm from './RegistrationForm'
import LoginForm from './LoginForm';

import './Entrance.css';


export default class Entrance extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            loginSwitch: true,
            registSwitch: true,
            login:true,
            registration:true,
        }
        this.closeRegistrationForm = this.closeRegistrationForm.bind(this);
        this.closeLoginForm = this.closeLoginForm.bind(this);
        
    }
    
    closeRegistrationForm(){
        this.setState((state)=>{
            return { 
                registSwitch : !state.registSwitch,
                login : !state.login
            }
        })
    }

    closeLoginForm(){
        this.setState((state)=>{
            return {
                loginSwitch:!state.loginSwitch,
                registration :!state.registration
            }
        })
    }
   
    render(){

        return(
            <div   
                    hidden={this.props.hidden}
            > 
                <div className="entrance">
                <div hidden={!this.state.registration}>
                    {this.state.registSwitch 
                    ? <button className="register_button"
                                onClick={this.closeRegistrationForm}
                    >
                        Регистрация
                    </button>
                    
                    : <RegistrationForm                             
                                closeRegistrationForm={this.closeRegistrationForm}
                                exit={this.props.exit}
                    /> }
               </div>
               <div hidden={!this.state.login}>
                    {this.state.loginSwitch 
                    ? <button className="login_button"                               
                                onClick={this.closeLoginForm}
                    > 
                        Войти 
                    </button> 
                    : <LoginForm                       
                            closeLoginForm={this.closeLoginForm}
                            exit={this.props.exit}
                    />}
               </div>
               </div>               
            </div>
        )
    }
}