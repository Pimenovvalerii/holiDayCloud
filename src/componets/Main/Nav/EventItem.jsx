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
        this.clickListener = this.clickListener.bind(this);
    }
    componentDidMount(){
        window.addEventListener('click',this.clickListener)
    }
    componentWillUnmount(){
        window.removeEventListener('click',this.clickListener)
    }

    eventSwitch(){
        this.setState( (state)=>{
            return { eventSwitch : !state.eventSwitch,  settingsSwitch : false}
        })
    }
    settingsSwitch(){
        this.setState( (state)=>{
            return { eventSwitch : false, settingsSwitch : !state.settingsSwitch}
        })
    }
    clickListener(e){
        if(e.target){
            this.setState({ eventSwitch : false, settingsSwitch : false})
        }
    }
    render(){ 
        return(       
            <div className="event__item">
               
                <div
                    className="nav_btn_wrap"
                > 
                    <div  
                        onClick={this.eventSwitch}
                        className="nav_btn"    
                    >                           
                        События
                    </div>

                      
                    <Todos 
                            {...this.props}
                            eventSwitch={this.eventSwitch}
                            hidden={!this.state.eventSwitch}
                    />
                                                                      
                </div>
                <div 
                    className="nav_btn_wrap"
                >
                    <div
                        onClick={this.settingsSwitch}
                        className="nav_btn"    
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