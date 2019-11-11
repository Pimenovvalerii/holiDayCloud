import React, { Component } from 'react';

import TodoList from './TodoList';
import SearchPanel from './SearchPanel';
import ItemAddForm from './ItemAddForm';

import { Link } from "react-router-dom";

import './Todos.css';


export default class Todos extends Component {

  maxId = 100;

  constructor(props){
    super(props);
    this.state = {
      // items: [
      //   { id: 1, label: 'День Рождения Бабушки', },
      //   // { id: 2, label: 'НГ',  },
      //   // { id: 3, label: 'Имя Фамилия', data: 2000.02.05 }
        
      // ],
      items : this.props.user? this.props.user.array: [],
      search: '',
      event : false,
      switchEvent : false,
    };

    this.onClickEvent = this.onClickEvent.bind(this)

  }

  
  

  onItemAdded = (label, name, surname, data, textarea) => {
    const item = this.createItem(label, name, surname, data, textarea);
      item.id = Math.floor(Math.random()*1000000);
    const local = this.props.user;
    local.array.push(item)
    localStorage.setItem(this.props.user.phone, JSON.stringify(local)) 

    // this.setState((state) => {
    //   return { items: [...state.items, item] };
    // })
  };

  createItem(label, name, surname, data, textarea) {
    return {
      label,
      name, 
      surname, 
      data, 
      textarea,      
    };
  }


  onDelete = (id) => {

    const local = JSON.parse(localStorage.getItem(this.props.user.phone));
    local.array.forEach( (el,ind) => {
      if(el.id === id){
        local.array.splice(ind,1)
      }
    })
    localStorage.setItem(this.props.user.phone, JSON.stringify(local))

    console.log(id)
    console.log(local.array)
    this.setState((state) => {
      const idx = state.items.findIndex((item) => item.id === id);
      const items = [
        ...state.items.slice(0, idx),
        ...state.items.slice(idx + 1)
      ];
      return { items };
    });
  };

  onSearchChange = (search) => {
    this.setState({ search });
  };

  searchItems(items, search) {
    if (search.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  }

  onClickEvent(){
    this.setState( (state)=>{
      return {
        event : !state.event
      }
    })
  }

  switchEventAll(){
    this.setState( {
      switchEvent : true,
    })
  }

  switchEventMy(){
    this.setState( {
      switchEvent : false,
    })
  }

  render() {
    const { items, search , event } = this.state;
    const visibleItems = this.searchItems(items, search);
    // console.log(this.props.props)

    return (
      <div className="todo-app ">

        <div className="add__event-close">
          <Link to="/" className="link">Close</Link>
        </div>
        
        <div className="app-header">

          <div className="app-header-item"
                onClick={this.switchEventMy.bind(this)}
                style={ {borderBottom : this.state.switchEvent ? "1px solid red" :"hidden" }}>
            Мои собития 
          </div>
          <div className="app-header-item"
              onClick={this.switchEventAll.bind(this)}
              style={ {borderBottom : this.state.switchEvent ? "hidden": "1px solid red"  }}>
            Все собития
          </div>
        </div>
        {/* ----------------- */}
        
        <div className="my-event"
            hidden={this.state.switchEvent}>

          <div className="add-form" 
              hidden={!event}>
              <ItemAddForm
                onClickEvent={this.onClickEvent}
                onItemAdded={this.onItemAdded} /> 
          </div>

          <div className="app-box"
                hidden={event}>

            <div onClick={this.onClickEvent}>
              <div>+</div>
              <div>Добавить собитие</div>             
            </div>

            <div className="search-panel d-flex">
              <SearchPanel
                onSearchChange={this.onSearchChange}/>
            </div>

            <TodoList
              items={ visibleItems }             
              onDelete={this.onDelete} />
          </div>
        </div>
        {/* ----------- */}

        <div className="all-event"
            hidden={!this.state.switchEvent}>
          <div>
            all event
          </div>
        </div>
        
        

      </div>
    );
  };
}
