import React from 'react';
import ReturnButton from '../../../ReturnButton';

import './LoginForm.css';

export default class LoginForm extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            phoneLogin : null,
            passwordLogin : null,
            userPhone: null,

            phone: null,
            password: null,
        }
        this.toComeIn = this.toComeIn.bind(this)
    }

    onChengPhone(event){
        
        // const inputPhone = event.target.value;
        // const storagePhone =  JSON.parse(localStorage.getItem(inputPhone))

        // if(storagePhone){
        //     const result = inputPhone === storagePhone.phone;
        //     console.log(  result  )
            // this.setState({
            //     phoneLogin : inputPhone,
            //     phone:result,
            // })
        // }
        this.setState({
            phoneLogin : event.target.value,
        })

        
    }

    onChengPassword(event){
        // const { phoneLogin } = this.state
        // const inputPasswor = event.target.value;
        // const storagePassword =  JSON.parse(localStorage.getItem(phoneLogin));
    
        // if(storagePassword){
        //     const result = inputPasswor === storagePassword.password;
        
        //     this.setState({
        //         password:result,
        //     })
        // }

        this.setState({
            passwordLogin : event.target.value,
        })
  
    }

    

    // toComeIn(){
    //     const {clickExit} = this.props
    //     const {phoneLogin ,phone, password} = this.state;
    //     const user = JSON.parse(localStorage.getItem(phoneLogin));

    //     user.login = true;
        
    //     if (phone && password) {
    //         localStorage.setItem(phoneLogin,JSON.stringify(user));
    //         // clickExit();
    //         this.props.login()
    //         this.props.reset()
    //       } else {
    //         console.log('обработка ошибки входа ')
    //     }        

    //     const {phoneLogin ,passwordLogin} = this.state;
    //     const user = JSON.parse(localStorage.getItem(phoneLogin));
    //     const password = user? user.password : null

    //     if (passwordLogin === password) {
    //         this.props.login(user)
    //         this.props.reset()
    //       } else {
    //         console.log('обработка ошибки входа ')
    //     } 
    // }
   

    toComeIn(){
        const {phoneLogin, passwordLogin} = this.state;
        
        if( localStorage.getItem(phoneLogin) ){
            
            const user = JSON.parse(localStorage.getItem(phoneLogin))
            const password = user.password
            if(password === passwordLogin){
                console.log('заходите')
                localStorage.setItem(`users`, JSON.stringify({ user: phoneLogin }));
                this.props.exit()
                this.props.closeLoginForm()
            }else{
                console.log('пароль не верный ')
            }
            
            
        } else{
            console.log('нет правельный телефон или нет такого акаунта')
        }
    }

    render(){

        return(
            <div className="login-form">

                
                <div className="close__login_form"
                    // onClick={this.props.closeLoginForm}
                >
                    <ReturnButton returnButton={this.props.closeLoginForm}/>
                </div>
                
                <div className="login__input blink1">
                    {/* {ошибка телефона} */}
                    <input onChange={this.onChengPhone.bind(this)} placeholder="Телефон"/>
                </div>
                <div className="login__input blink2">
                    {/* {ошибка пароля} */}
                    <input onChange={this.onChengPassword.bind(this)} placeholder="пароль"/>
                </div>
               
                <button className="login__button blink1"
                        onClick={this.toComeIn}>
                    Войти
                </button>
            </div>
        )
    }
};