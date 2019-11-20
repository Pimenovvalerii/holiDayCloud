import React from 'react';
import './Settings.css';


export default class Settings extends React.Component {
  constructor(props){
    super(props);

    this.user = this.props.objUser;

    this.state = {
      hidden: this.props.hidden
    }
  }

  onChangeName(e){
    this.user.name = e.target.value
  }
  onChangeSurname(e){
    this.user.surname = e.target.value
  }
  onChangePassword(e){
    this.user.password = e.target.value
  }
  onChangeDate(e){
    this.user.data = e.target.value
  }
  saveChanges(){
    this.props.login(this.user)
    localStorage.setItem(this.user.phone,JSON.stringify(this.user));
    this.close()

  }
  close(){
    this.props.settingsSwitch()
  }

    render(){
        
        return (
            <div 
              className="settings"
              hidden={this.props.hidden}
            >
                <div 
                className="settings-close"
                onClick={this.close.bind(this)}
                >
                  x
                </div>
                <input 
                  onChange={this.onChangeName.bind(this)} 
                  placeholder={this.props.objUser ? this.props.objUser.name : "Имя"}
                /> 
                <input 
                  onChange={this.onChangeSurname.bind(this)} 
                  placeholder={this.props.objUser ? this.props.objUser.surname : "Фамилия"}
                /> 
                <input 
                  onChange={this.onChangePassword.bind(this)} 
                  placeholder="Пароль"
                /> 
                <input 
                  onChange={this.onChangeDate.bind(this)} 
                  type="date"
                /> 
                <button
                  onClick={this.saveChanges.bind(this)}                
                >
                  Сохранить
                </button>
            </div>
        )
    }
}