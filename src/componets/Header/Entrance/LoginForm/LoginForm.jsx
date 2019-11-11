import React from 'react';

import './LoginForm.css';

export default class LoginForm extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            phoneLogin : null,
            phone: null,
            password: null,
        }
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

    

    toComeIn(){
        // const {clickExit} = this.props
        // const {phoneLogin ,phone, password} = this.state;
        // const user = JSON.parse(localStorage.getItem(phoneLogin));

        // user.login = true;
        
        // if (phone && password) {
        //     localStorage.setItem(phoneLogin,JSON.stringify(user));
        //     // clickExit();
        //     this.props.login()
        //     this.props.reset()
        //   } else {
        //     console.log('обработка ошибки входа ')
        // }        

        const {phoneLogin ,passwordLogin} = this.state;
        const user = JSON.parse(localStorage.getItem(phoneLogin));
        const password = user? user.password : null

        if (passwordLogin === password) {
            this.props.login(user)
            this.props.reset()
          } else {
            console.log('обработка ошибки входа ')
        } 

        
    }

    render(){
        
        return(
            <div className="login-form">
                
                <div>
                    {/* {ошибка телефона} */}
                    <input onChange={this.onChengPhone.bind(this)} placeholder="Телефон"/>
                </div>
                <div>
                    {/* {ошибка пароля} */}
                    <input onChange={this.onChengPassword.bind(this)} placeholder="пароль"/>
                </div>
               
                <button onClick={this.toComeIn.bind(this)}>Войти</button>
            </div>
        )
    }
};