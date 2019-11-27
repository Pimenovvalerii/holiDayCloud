import React, { Component } from 'react';

import './ItemAddForm.css';

export default class ItemAddForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      label: '',
      name : '',
      surname : '',
      data: '',
      textarea: '',
      image : 'default',
      checked :null,
    };
  }
  
  onLabelChange = (e) => { this.setState( {label: e.target.value} ) };
  onNameChange = (e) => { this.setState( {name: e.target.value} ) };
  onSurnameChange = (e) => { this.setState( {surname: e.target.value} ) };
  onDataChange = (e) => { this.setState( {data: e.target.value} ) };
  onTextareaChange = (e) => { this.setState( {textarea: e.target.value} ) };

  onChangeMan = (e) => {this.setState( {image : 'boy'} )};
  onChangeWoman = (e) => {this.setState( {image : 'girl'} )};

  onSubmit = (e) => {
    
    e.preventDefault();
    const { label, name, surname, data, textarea, image} = this.state;
    this.setState({ label: '',name : '',surname : '',data: '',textarea: '',image : 'default', });
    const cb = this.props.onItemAdded || (() => {});
    cb(label,name, surname, data, textarea,image);
    this.props.onClickEvent();
    // this.setState( {checked: null});
  };

  callBack(){
    this.props.onClickEvent();
  }

  render() {
    return (
      <div className="itemAddForm">

        <div onClick={this.callBack.bind(this)}>
          Вернуться назад
        </div>

        <form onSubmit={this.onSubmit}>

          <div className="itemAddForm__input">
            <input type="text"
                    placeholder="Имя"
                    value={this.state.name}
                    onChange={this.onNameChange}/>
          </div>
          
          <div className="itemAddForm__input">
            <input  type="text"
                    placeholder="Фамилия"
                    value={this.state.surname}
                    onChange={this.onSurnameChange}/>
          </div>
          
          <div className="itemAddForm__input">
            <input type="date"
                    value={this.state.data}
                    onChange={this.onDataChange}
                    required/>
          </div>
          
          <div className="itemAddForm__input">
            <input type="text"
                  className="form-control new-todo-label"
                  value={this.state.label}
                  onChange={this.onLabelChange}
                  placeholder="Какое событие" 
                  required/>
          </div>
          
          <div className="male-female">
            <div>Выберите пол если День Рождения</div>
            <div className="male-female-box">
              <div>
                <span>Женский</span>
                <input checked={this.state.checked}
                        onChange={this.onChangeWoman}
                        type="radio"
                        name="pol"/>
              </div>

              <div>
                <span>Мужской</span>
                <input checked={this.state.checked}
                        onChange={this.onChangeMan}
                        type="radio"
                        name="pol"/>
              </div>                              
             </div>
              
            
          </div>
          
          <div>
              <div>Заметка для подарка</div>
              <textarea 
                      value={this.state.textarea}
                      onChange={this.onTextareaChange}/>
          </div>
          
          <div >
            <button className="itemAddForm-button"
                    type="submit">
              Добавить
            </button>
          </div>
          
        </form>
      </div>
    );
  }
}
