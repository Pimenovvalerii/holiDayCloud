import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Todos from './Todos'

function EventItem(props){

    function hoc(){
        if(props.user){
            return <Todos 
            user={props.user}
            />
        } else {
            const array= []
            return <Todos array={array}/>
        }
        
    }
  
    return (
        <Router >
            <div className="event__item">
                <div>   
                    <div>
                        <Link to="/addevent" className="link"> Cобытия</Link>
                    </div>
                    <div>
                        <Link to="/about" className="link">Настройки</Link>
                    </div>
                    
                    
                </div>
                
                <div>
                    <Route path="/addevent" exact component={hoc}/>
                </div>
            </div>
           
        </Router>
    )
};
export default EventItem;