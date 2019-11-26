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
    };
  }
  
  onLabelChange = (e) => { this.setState( {label: e.target.value} ) };
  onNameChange = (e) => { this.setState( {name: e.target.value} ) };
  onSurnameChange = (e) => { this.setState( {surname: e.target.value} ) };
  onDataChange = (e) => { this.setState( {data: e.target.value} ) };
  onTextareaChange = (e) => { this.setState( {textarea: e.target.value} ) };

  onChangeMan = (e) => {this.setState( {image : 'boy'} )}
  onChangeWoman = (e) => {this.setState( {image : 'girl'} )}

  onSubmit = (e) => {
    e.preventDefault();
    const { label, name, surname, data, textarea, image} = this.state;
    this.setState({ label: '',name : '',surname : '',data: '',textarea: '', });
    const cb = this.props.onItemAdded || (() => {});
    cb(label,name, surname, data, textarea,image);
    this.props.onClickEvent();
  };

  render() {
    return (
      <div >
        <form
          
          onSubmit={this.onSubmit}>

          <input type="text"
                  placeholder="Имя"
                  value={this.state.name}
                  onChange={this.onNameChange}/>

          <input  type="text"
                  placeholder="Фамилия"
                  value={this.state.surname}
                  onChange={this.onSurnameChange}/>

          <input type="date"
                  value={this.state.data}
                  onChange={this.onDataChange}
                  required/>
          
          <input type="text"
                className="form-control new-todo-label"
                value={this.state.label}
                onChange={this.onLabelChange}
                placeholder="Какое событие" />
          <div>
            <div>Выберите пол если День Кождения</div>
            <div>
              <span>Женский</span>
              <input onChange={this.onChangeWoman}
                      type="checkbox"/>
            </div>
            <div>
              <span>Мужской</span>
              <input onChange={this.onChangeMan}
                      type="checkbox"/>
            </div>
          </div>
          
          <div>
              <div>Заметка для подарка</div>
              <textarea 
                      value={this.state.textarea}
                      onChange={this.onTextareaChange}/>
          </div>
          

          <button type="submit"
                  className="btn btn-outline-secondary">Добавить</button>
        </form>
      </div>
    );
  }
}
