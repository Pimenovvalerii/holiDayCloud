import React from 'react';
import './RegistrationForm.css';
import ReturnButton from '../../../ReturnButton';
import {updateBin , readBin } from '../../../../apiJSONBin';


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



        readBin(this._id)
            .then( result => {

                const arr = result.users.filter( el => {
                    return el.phone === phone
                })

                if(arr.length === 0){
                    console.log('можно создать акаунт ')
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
                    console.log('такой пользователь уже есть')
                }
            })
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
                                placeholder="Имя"/>
                    </div>

                    <div className="regist__input blink2">
                        <input  onChange={this.onChangeSurname} 
                                placeholder="Фамилия"/>
                    </div>
                    <div className="regist__error">
                        {this.state.error }
                    </div>
                    <div className="regist__input blink3">
                        
                        <input onChange={this.onChangePhone} 
                                placeholder="Телефон"/>
                    </div>

                    <div className="regist__input blink4">
                        <input onChange={this.onChangePassword} 
                                placeholder="Пароль"/>
                    </div>

                    <div className="regist__checkbox">
                        <div>
                            <label>Мужчина</label>
                            <input onChange={this.checkboxMan}
                                    type="checkbox"/> 
                        </div>
                        <div>
                            <label>Женщина</label>
                            <input onChange={this.checkboxWoman}
                                    type="checkbox"/>
                        </div>                      
                    </div>

                    <div className="regist__input blink5">
                        <input onChange={this.onChangeData} type="date" />
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