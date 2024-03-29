import React, { Component } from 'react';

import TodoList from './TodoList';
import SearchPanel from './SearchPanel';
import ItemAddForm from './ItemAddForm';
import ReturnButton from '../../../ReturnButton';



import './Todos.css';

import holidays from '../../Content/holidays';


export default class Todos extends Component {

  maxId = 100;

  constructor(props){
    super(props);
    this.state = {
      // [items] should not be stored in  this.state
      // items : this.props.objUser? this.props.objUser.array: [],
      search: '',
      event : false,
      switchEvent : false,
    };

    this.onClickEvent = this.onClickEvent.bind(this)

  }

  
  

  onItemAdded = (label, name, surname, data, textarea,image) => {

    const {phone} = this.props.objUser
    const item = this.createItem(label, name, surname, data, textarea,image);
    item.id = Math.floor(Math.random()*1000000);
    const local = JSON.parse(localStorage.getItem(phone));
    local.array.push(item)
    localStorage.setItem(phone, JSON.stringify(local)) 


    //action
    // this.props.login(local)
    this.props.exit()
    this.props.save(local)


    // this.setState((state) => {
    //   return { items: [...state.items, item] };
    // })
};

createItem(label, name, surname, data, textarea,image) {
  return {
    label,
    name, 
    surname, 
    data, 
    textarea, 
    image,     
  };
}


onDelete = (id) => {
  const {phone} = this.props.objUser
  const local = JSON.parse(localStorage.getItem(phone));
  local.array.forEach( (el,ind) => {
    if(el.id === id){
      local.array.splice(ind,1)
    }
  })
  localStorage.setItem(phone, JSON.stringify(local))

  //action
  // this.props.login(local)
  this.props.exit()
  this.props.save(local)
  // [items] should not be stored in  this.state


  // this.setState((state) => {
  //   const idx = state.items.findIndex((item) => item.id === id);
  //   const items = [
  //     ...state.items.slice(0, idx),
  //     ...state.items.slice(idx + 1)
  //   ];
  //   return { items };
  // });
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
    const { search , event } = this.state;

    // [items] should not be stored in  this.state
    const items = this.props.objUser? this.props.objUser.array: [];
    const visibleItems = this.searchItems(items, search);
    const elements = holidays.map((item) => {
       return (
        <li key={item.data} className="list-group-item">
            {`${new Date(item.data).toLocaleDateString('ru-RU', { weekday: 'long',  month: 'long', day: 'numeric' })} ${item.label} ${item.textarea}`}
        </li>
      );
    });

    // console.log(this.state.items)

    return (
      <div className="todos"
            hidden={this.props.hidden}
        >
        
        <div className="close__todos">
            <ReturnButton returnButton={this.props.eventSwitch}/>
        </div> 

        <div className="todos-wrapper">
          <div className="todos-header">

            <div className="todos-header-item"
                  onClick={this.switchEventMy.bind(this)}
                  // style={ {borderBottom : this.state.switchEvent ? "1px solid red" :"hidden" }}
                  style={ {boxShadow : this.state.switchEvent ? 
                                      " 0px 0px 30px 5px rgba(103,152,116,1)" :
                                      "0px 0px 20px 10px rgba(103,152,116,1)" }}
                             
                  hidden={!this.props.objUser}
                  >
                    
              Мои события 
            </div>
            <div className="todos-header-item"
                onClick={this.switchEventAll.bind(this)}
                // style={ {borderBottom : this.state.switchEvent ? "hidden": "1px solid red"  }}
                style={ {boxShadow : this.state.switchEvent ? 
                                  "0px 0px 20px 10px rgba(103,152,116,1)" : 
                                  " 0px 0px 30px 5px rgba(103,152,116,1)"}}
                           
                >
                  
              Все события
            </div>
          </div>
          {/* ----------------- */}
          
          <div className="my__event"
              hidden={this.state.switchEvent || !this.props.objUser}>

            <div className="my__event_form" 
                hidden={!event}>
                <ItemAddForm
                  onClickEvent={this.onClickEvent}
                  onItemAdded={this.onItemAdded} /> 
            </div>

            <div className="add_event"
                  hidden={event}>

              <div className="add_event_button"
                    onClick={this.onClickEvent}>
                <div className="add_event_icon">
                  +
                </div>
                <div className="add_event_text">
                  Добавить событие
                </div>             
              </div>

              <div className="todos__search_panel">
                <SearchPanel
                  onSearchChange={this.onSearchChange}/>
              </div>

              <TodoList
                items={ visibleItems }             
                onDelete={this.onDelete} />
            </div>
          </div>
          
          <div className="all-event"
              hidden={this.props.objUser? !this.state.switchEvent: this.props.objUser}>
            <ul className="todo-list">
            {elements}
            </ul>
          </div>
        
        </div>

      </div>
    );
  };
}




