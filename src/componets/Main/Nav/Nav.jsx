import React from 'react';
import './Nav.css';

import UserItem from './UserItem';
import EventItem from './EventItem';
import {man,man1,man2,man3,man4,man5,man6} from '../../../userImages';
import {woman,woman1,woman2,woman3,woman4,woman5,woman6} from '../../../userImages';


export default class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.toggleRef = React.createRef();
        this.navRef = React.createRef();
        this.toggle = this.toggle.bind(this);

        this.windowOnBeforeinstallprompt = (event) => {
            console.log('👍', 'beforeinstallprompt', event);
            // Stash the event so it can be triggered later.
            window.deferredPrompt = event;
            // Remove the 'hidden' class from the install button container
            this.divInstall.hidden= false;
            this.divInstall.classList.add("divInstall");
        }

        this.butInstallOnClick = () => {
            console.log('👍', 'butInstall-clicked');
            const promptEvent = window.deferredPrompt
            if (!promptEvent) {
                // The deferred prompt isn't available.
                return;
            }
            // Show the install prompt.
            promptEvent.prompt();
            // Log the result
            promptEvent.userChoice.then((result) => {
                console.log('👍', 'userChoice', result);
                // Reset the deferred prompt variable, since 
                // prompt() can only be called once.
                window.deferredPrompt = null;
                // Hide the install button.
                this.divInstall.hidden = true;
            });
        }
      }

    componentDidMount(){      
        this.divInstall = document.getElementById('divInstall');
        this.butInstall = document.getElementById('butInstall');


        window.addEventListener('beforeinstallprompt', this.windowOnBeforeinstallprompt );
        this.butInstall.addEventListener('click', this.butInstallOnClick);
    }

    componentWillUnmount(){
        window.removeEventListener('beforeinstallprompt', this.windowOnBeforeinstallprompt );
        this.butInstall.removeEventListener('click', this.butInstallOnClick);
    }
    
    toggle(){
        this.navRef.current.classList.toggle('active')
    }
    render(){
        const num = this.props.objUser ? this.props.objUser.image : 1 ;
        const arr = [man,man1,man2,man3,man4,man5,man6,woman,woman1,
                    woman2,woman3,woman4,woman5,woman6];

        return (
            <div 
                className="nav"
                ref={this.navRef}

            >
                
                <div 
                    className="user__item"
                >
                    
                    <div 
                        className="user__item-image"
                        hidden = {!this.props.objUser}
                        onClick={this.toggle}
                        ref={this.toggleRef}
                    >
                        <img src={arr[num]}  alt="img"/>
                    </div>
                    
                    <span>{this.props.objUser ? this.props.objUser.name : 'Name'}</span>
                    <span>{this.props.objUser ? this.props.objUser.surname: 'Surname'}</span>
                    
                </div>               
                <EventItem {...this.props}/>
                <div className="today">
                    Сегодня {(new Date()).toLocaleString('ru-RU', { weekday: 'long',  month: 'long', day: 'numeric' })}
                </div>
                <div

                    id="divInstall"
                    
                    hidden
                >
                    <button id="butInstall" type="button" >
                        Install
                    </button>
                </div>
            </div>
        )
    }
}