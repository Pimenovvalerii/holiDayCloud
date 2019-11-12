import React from 'react';
import RegistrationForm from './RegistrationForm'
import LoginForm from './LoginForm';

import './Entrance.css';


export default class Entrance extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            login:!this.props.isOnline,
            registration:!this.props.isOnline,
        }
    }
    reset(){
        this.setState({
            login:!this.props.isOnline,
            registration:!this.props.isOnline,
        })
    }
   
    render(){
        
        return(
            <div 
                className="entrance"
                hidden={this.props.hidden}
            > 
                <div hidden={!this.state.login}>
                    {this.state.registration 
                    ? <button className="register_button"
                                onClick={()=>this.setState({
                                    registration:!this.state.registration,
                                })}
                    >
                        Регистрация
                    </button>
                    
                    : <RegistrationForm 
                        login={this.props.login}
                        reset={this.reset.bind(this)}
                    /> }
               </div>
               <div hidden={!this.state.registration}>
                    {this.state.login 
                    ? <button className="login_button"
                                onClick={()=>this.setState({
                                    login:!this.state.login
                                })}
                    > 
                        Войти 
                    </button> 
                    : <LoginForm
                        login={this.props.login}
                        reset={this.reset.bind(this)}
                    />}
               </div>
                                
            </div>
        )
    }
}