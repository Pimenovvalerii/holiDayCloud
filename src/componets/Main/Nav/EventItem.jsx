import React from 'react';
import Todos from './Todos';
import Settings from './Settings';

export default class EventItem extends React.Component {

    constructor(props){
        super(props);

        this.state ={
            eventSwitch : false,
            settingsSwitch : false,

        }

        this.eventSwitch = this.eventSwitch.bind(this);
        this.settingsSwitch = this.settingsSwitch.bind(this);
    }

    eventSwitch(){
        this.setState( (state)=>{
            return { eventSwitch : !state.eventSwitch}
        })
    }
    settingsSwitch(){
        this.setState( (state)=>{
            return { settingsSwitch : !state.settingsSwitch}
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
                            // user={this.props.user}
                            login={this.props.login}
                            objUser={this.props.objUser}
                            eventSwitch={this.eventSwitch}
                    />
                                                                      
                </div>
                <div>
                    <div
                    onClick={this.settingsSwitch}
                    >
                        Настройки
                    </div>
                    <Settings
                        {...this.props}
                        hidden={!this.state.settingsSwitch}
                        settingsSwitch={this.settingsSwitch}
                    />
                </div>
            </div>
        )
    }
};