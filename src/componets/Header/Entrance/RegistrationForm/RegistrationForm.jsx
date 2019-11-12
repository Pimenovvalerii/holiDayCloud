import React from 'react';

import './RegistrationForm.css';

export default class RegistrationForm extends React.Component {


    constructor(){
        super()
        this.state = {
            name : null,
            surname : null,
            phone : null,
            password : null,
            data : null,
            login : true,
            array:[ ],
        }
    }

    onChangeName = (event) => {
            this.setState({
                name : event.target.value
           })
    }

    onChangeSurname = (event) => {
        this.setState({
            surname : event.target.value
       })
    }

    onChangePhone = (event) => {
        const value = event.target.value
        // const valueStr = JSON.stringify(value)

        // const num = localStorage;
        // console.log( num);
        
        // for(let key in num){
        //     console.log(key)
            
        // }
            
        
        
        // if(localStorage.valueStr === undefined ){
        //     console.log(false)
        // } else {
        //     console.log(true)
        // }
        this.setState({
            phone : value
       })
    }

    onChangePassword = (event) => {
        
        this.setState({
            password : event.target.value
       })
    }

    onChangeData = (event) => {
        this.setState({
            data : event.target.value
       })
    }

    onSubmitFn() {
        const localStorId = this.state.phone;
        localStorage.setItem(`${localStorId}`, JSON.stringify(this.state));
        
        this.props.login(this.state);
        this.props.reset();
        // if(localStorage.localStorId !== undefined){
            
        // }else {
        //     console.log('такой user уже есть')
        // }  
        // localStorage.removeItem(localStorId);
        
        
    }

    render(){

        return(
            <div  className="registration-form ">
                <div className="input_name input">
                    <input onChange={this.onChangeName} 
                            placeholder="Имя"/>
                </div>
                <div className='input_name input'>
                    <input  onChange={this.onChangeSurname} 
                            placeholder="Фамилия"/>
                </div>
                <div className='input_name input'>
                    <input onChange={this.onChangePhone} 
                            placeholder="Телефон"/>
                </div>
                <div className='input_name input'>
                    <input onChange={this.onChangePassword} 
                            placeholder="пароль"/>
                </div>
                <div className='input_name input'>
                    <input onChange={this.onChangeData} type="date" />
                </div>
                <button onClick={this.onSubmitFn.bind(this)}>
                    Зарегистрироваться
                </button>
            </ div>
        )
    }
}