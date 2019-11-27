import React from 'react';
import ReturnButton from '../../../ReturnButton';
import { readBin } from '../../../../apiJSONBin';


import './LoginForm.css';

export default class LoginForm extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            phoneLogin : null,
            passwordLogin : null,
            error:null,
            // userPhone: null,

            // phone: null,
            // password: null,
        }
        this.toComeIn = this.toComeIn.bind(this)
    }

    _id = '5dcd5e7a2eea4763ad9ad3ba';

    onChengPhone(event){
        this.setState({
            phoneLogin : event.target.value,
        }) 
    }

    onChengPassword(event){
        this.setState({
            passwordLogin : event.target.value,
        })
    }

    toComeIn(){
        const {phoneLogin, passwordLogin} = this.state;

        if(phoneLogin != null && passwordLogin != null){
            if( localStorage.getItem(phoneLogin) ){
            
                const user = JSON.parse(localStorage.getItem(phoneLogin))
                const password = user.password
                if(password === passwordLogin){
                    console.log('заходите')
                    localStorage.setItem(`users`, JSON.stringify({ user: phoneLogin }));
                    this.props.exit()
                    this.props.closeLoginForm()
                }else{
                    this.setState({error :'неверный пароль или логин'})
                    console.log('пароль не верный ')
                }
                
                
            } else{
                console.log('в лк нету user')
                readBin(this._id)
                .then( result => {
    
                    const arr = result.users.filter( el => {
                        return el.phone === phoneLogin
                    })
                    // console.log(arr)
    
                    if(arr.length !== 0){
                        // console.log(arr)
                        if(arr[0].password === passwordLogin){
                            console.log(arr[0].password)
                            const localStorKey = arr[0].phone;
                            localStorage.setItem(`${localStorKey}`, JSON.stringify(arr[0]));
                            localStorage.setItem(`users`, JSON.stringify({ user: phoneLogin }));
                            this.props.exit()
                            this.props.closeLoginForm()
                        } else {
                            this.setState({error :'Неверный пароль или логин'})
                            console.log('неверный пароль')
                        }
                         
                    } else {
                        this.setState({error :'Такой пользователь не зарегистрирован'})                           
                        console.log('такой пользователь не зарегистрирован')
                    }
                })
            }
        } else {
            this.setState({error :'Заполните все поля'})
        }
        
    }

    render(){

        return(
            <div className="login-form">

                <div className="login-wrapper">
                    <div className="close__login_form">
                        <ReturnButton returnButton={this.props.closeLoginForm}/>
                    </div>
                    
                    <div className="login__input blink1">                   
                        <input onChange={this.onChengPhone.bind(this)} 
                                placeholder="Телефон"/>
                    </div>
                    <div className="login__error">
                        {this.state.error}
                    </div>
                    <div className="login__input blink2">
                        <input onChange={this.onChengPassword.bind(this)} 
                                placeholder="пароль"/>
                    </div>
                
                    <button className="login__button blink1"
                            onClick={this.toComeIn}>
                        Войти
                    </button>
                </div>
            </div>
        )
    }
};