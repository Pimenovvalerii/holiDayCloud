import React from 'react';
import './RegistrationForm.css';
import ReturnButton from '../../../ReturnButton';
import {updateBin , readBin } from '../../../../apiJSONBin';
import NumberFormat from 'react-number-format';


export default class RegistrationForm extends React.Component {


    constructor(props){
        super(props)
        this.state = {
            name : null,
            surname : null,
            phone : null,
            password : null,
            data : null,
            array:[],
            image: null,
            error : null,
        }

        // this.readBin = this.readBin.bind(this);
        this.addLocalStorUser = this.addLocalStorUser.bind(this)
    }

    _id = '5dcd5e7a2eea4763ad9ad3ba';

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
        this.setState({
            phone : value
       })
    }

    onChangePassword = (event) => {
        
        this.setState({
            password : event.target.value
       })
    }

    checkboxMan = () =>{
        const num = Math.floor(Math.random() * (7 - 0)) + 0 ;
        this.setState({
            image : num
       })
    }

    checkboxWoman = (event) => {
        const num = Math.floor(Math.random() * (14 - 7)) + 7 ;
        this.setState({
            image : num
       })
    }

    onChangeData = (event) => {
        this.setState({
            data : event.target.value
       })
    }

    addLocalStorUser(){
        const localStorId = this.state.phone;
        localStorage.setItem(`${localStorId}`, JSON.stringify(this.state));
        localStorage.setItem(`users`, JSON.stringify({ user: this.state.phone }));
        this.props.exit()
        this.props.closeRegistrationForm();
    }

    onSubmitFn(){
        const {phone} = this.state;
        const {name,surname,password,data,image} = this.state;
        
        if(name !== null && surname !== null && password !== null && data !== null && image !== null && phone !== null){
            readBin(this._id)
            .then( result => {

                const arr = result.users.filter( el => {
                    return el.phone === phone
                })

                if(arr.length === 0){
                    
                    result.users.push(this.state)

                    updateBin(this._id,result)
                        .then( res => {
                            if(res.ok){
                                this.addLocalStorUser();
                            }else {
                                this.setState({error :'Ошибка сервера попробуйте еще раз'})
                            }
                        })                                               
                        .catch( err => {this.setState({error : err})})
                } else {
                    this.setState({error :'Tакой пользователь уже зарегистрирован'})                           
                }
            })
        } else{
            this.setState({error :'Заполните все поля'})
        }
    }
    
    

    render(){
        return(
            <div  className="registration_form ">
                
                
                    <div className="registration_form-wrapper">
                        <div className="close__registration_for">
                            <ReturnButton returnButton={this.props.closeRegistrationForm}/>
                        </div>

                        <div className="regist__input blink1">
                            <input onChange={this.onChangeName} 
                                    placeholder="Имя"
                                    required/>
                        </div>

                        <div className="regist__input blink2">
                            <input  onChange={this.onChangeSurname} 
                                    placeholder="Фамилия"
                                    required/>
                        </div>
                        <div className="regist__error">
                            {this.state.error }
                        </div>
                        
                        <div className="wrapper_npm_phone regist__input blink3">
                            <div>+380</div>
                            <NumberFormat format=" (##) ###-##-##" mask="_" 
                                            onChange={this.onChangePhone} 
                                            placeholder="Телефон"/>
                        </div>

                        <div className="regist__input blink4">
                            <input onChange={this.onChangePassword} 
                                    placeholder="Пароль"
                                    required/>
                        </div>

                        <div className="regist__checkbox"
                            required>
                            <div>
                                <label>Мужчина</label>
                                <input onChange={this.checkboxMan}
                                        type="radio"
                                        name="pol"
                                        required/> 
                            </div>
                            <div>
                                <label>Женщина</label>
                                <input onChange={this.checkboxWoman}
                                        type="radio"
                                        name="pol"
                                        required/>
                            </div>                      
                        </div>

                        <div className="regist__input blink5">
                            <input onChange={this.onChangeData} 
                                    type="date" 
                                    required/>
                        </div>

                        <div >
                            <button className="regist__button"
                                    onClick={this.onSubmitFn.bind(this)}>
                                Зарегистрироваться
                            </button>
                        </div>
                    </div>
                
                
            </ div>
        )
    }
}