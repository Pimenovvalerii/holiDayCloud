import React from 'react';
import Todos from './Todos';

export default class EventItem extends React.Component {

    constructor(props){
        super(props);

        this.state ={
            eventSwitch : false,
        }

        this.eventSwitch = this.eventSwitch.bind(this);
        
    }

    eventSwitch(){
        this.setState( (state)=>{
            return { eventSwitch : !state.eventSwitch}
        })
    }
  
    render(){ 
        return(       
            <div className="event__item">
               
                <div> 
                    <div  onClick={this.eventSwitch}>                           
                        События
                    </div>
                        
                    <Todos hidden={!this.state.eventSwitch}
                            user={this.props.user}
                            login={this.props.login}
                            objUser={this.props.objUser}
                            eventSwitch={this.eventSwitch}
                    />
                                                                      
                </div>
                <div>
                    <div>
                        Настройки
                    </div>
                </div>
            </div>
        )
    }
};