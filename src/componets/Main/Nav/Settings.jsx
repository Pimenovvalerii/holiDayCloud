import React from 'react';
import './Settings.css';


export default class Settings extends React.Component {
  // constructor(props){
  //   super(props);

  //   this.user = this.props.objUser;

  //   this.state = {
  //     hidden: this.props.hidden
  //   }
  // }

  constructor(props){
    super(props)
    this.state = {
      user : this.props.objUser,
      name:'',
      surname:'',
      password:'',
      data:'',
    }
  }

  onChangeName(e){
    this.setState({ name:e.target.value, user:{...this.state.user, name : e.target.value}})
  }
  onChangeSurname(e){
    this.setState({ surname:e.target.value, user:{...this.state.user, surname : e.target.value}})

  }
  onChangePassword(e){
    this.setState({ password:e.target.value, user:{...this.state.user, password : e.target.value}})

  }
  onChangeDate(e){
    this.setState({ data:e.target.value, user:{...this.state.user, data : e.target.value}})

  }
  saveChanges(){
    const savedUser = {...this.props.objUser, ...this.state.user}
    this.setState({
      user:'',
      name:'',
      surname:'',
      password:'',
      data:'',
    })
    this.props.login(savedUser)//need?
    localStorage.setItem(savedUser.phone,JSON.stringify(savedUser));
    this.props.exit()
    this.props.save(savedUser)
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

                <div>
                  Изменить
                </div>

                <div className="settings__input">
                  <input 
                    onChange={this.onChangeName.bind(this)} 
                    value={this.state.name}
                    placeholder="Имя"
                  /> 
                </div>
                
                <div className="settings__input">
                  <input 
                    onChange={this.onChangeSurname.bind(this)} 
                    value={this.state.surname}
                    placeholder="Фамилия"
                  /> 
                </div>
                

                <div className="settings__input">
                  <input 
                    onChange={this.onChangePassword.bind(this)} 
                    placeholder="Пароль"
                    value={this.state.password}
                  /> 
                </div>
                

                <div className="settings__input ">
                  <input 
                    onChange={this.onChangeDate.bind(this)} 
                    type="date"
                    value={this.state.data}
                  /> 
                </div >
                

                <div >
                  <button className="settings__button"
                           onClick={this.saveChanges.bind(this)}>
                    Сохранить
                  </button> 
                </div>
                
            </div>
        )
    }
}